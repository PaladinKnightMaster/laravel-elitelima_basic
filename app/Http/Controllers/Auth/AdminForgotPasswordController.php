<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Password;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Mail;
//use Illuminate\Auth\Passwords\PasswordBroker;

class AdminForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:admin');
    }

    protected function broker()
    {
      return Password::broker('admins');
    }

    public function showLinkRequestForm()
    {
        return view('auth.passwords.email-admin');
    }

    public function SendPasswordResetLink(Request $request)
    {
        $user = \DB::table('admins')->where('email', '=', $request->email)->first();

        //Check if the user exists
        if (!$user) {
            return redirect()->back()->withErrors(['email' => trans('User does not exists')]);
        }

        $token = Str::random(60);

        // One live token per address, which is what the framework's own token
        // repository does. Without this every request adds a row, and the
        // broker validates against the first row it finds for the address,
        // which is the oldest, so only the very first link an admin ever
        // requested would work and "send it again" could never succeed.
        \DB::table('password_resets')->where('email', $request->email)->delete();

        \DB::table('password_resets')->insert([
            'email' => $request->email,
            'token' => bcrypt($token),
            'created_at' => \Carbon\Carbon::now()
        ]);

        if ($this->sendResetEmail($request->email, $token)) {
            return redirect()->back()->with('status', trans('A reset link has been sent to your email address.'));
        } else {
            return redirect()->back()->withErrors(['error' => trans('A Network Error occurred. Please try again.')]);
        }
    }

    private function sendResetEmail($email, $token)
    {
        // The path comes from the named route, so the /admin prefix cannot
        // drift. The host comes from APP_URL and deliberately NOT from the
        // request: a link built from the request's Host header lets anyone
        // who can forge one get a genuine reset token emailed to a victim
        // inside a URL that points at the attacker (password-reset poisoning).
        //
        // This replaces config('base_url') . 'password/reset/...', a config key
        // that was never defined, completed by a template that hardcoded the
        // production hostname. Links now follow the environment they were
        // issued from instead of always pointing at www.elitelima.com.
        $path = route('admin.password.reset', ['token' => $token, 'email' => $email], false);
        $link = rtrim(config('app.url'), '/').$path;

        try {
            // No explicit from(): Laravel applies mail.from (MAIL_FROM_ADDRESS
            // and MAIL_FROM_NAME) on its own. This used to pass MAIL_USERNAME,
            // an SMTP login rather than a sender address, which was null
            // whenever the variable was unset or the literal "null" and threw a
            // TypeError that the catch below did not even see.
            Mail::send('themes.emails.password_reset', ['data' => ['link' => $link]], function ($message) use ($email) {
                $message->subject('Password Reset');
                $message->to($email);
            });

            return true;
        } catch (\Throwable $e) {
            // Was `return $e;`. An exception object is truthy, so the caller
            // told the admin a link had been sent when nothing had.
            Log::error('Admin password reset email failed: '.$e->getMessage());

            return false;
        }
    }

}
