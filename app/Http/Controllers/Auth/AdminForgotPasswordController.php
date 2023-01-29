<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Password;
use Illuminate\Http\Request;
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
       
        //validation login here
        $user = \DB::table('admins')->where('email', '=', $request->email)->first();
        
        
        //Check if the user exists
        if (!$user) {
            return redirect()->back()->withErrors(['email' => trans('User does not exists')]);
        }
        $token  = str_random(60);
        
        //Create Password Reset Token
        \DB::table('password_resets')->insert([
            'email' => $request->email,
            'token' => bcrypt($token),
            'created_at' => \Carbon\Carbon::now()
        ]);
        //Get the token just created above
        $tokenData = \DB::table('password_resets')
            ->where('email', $request->email)->first();
        
        if ($this->sendResetEmail($request->email, $token)) {
            return redirect()->back()->with('status', trans('A reset link has been sent to your email address.'));
        } else {
            return redirect()->back()->withErrors(['error' => trans('A Network Error occurred. Please try again.')]);
        }
     }
     
     private function sendResetEmail($email, $token)
        {
            
        //Retrieve the user from the database
        $user = \DB::table('admins')->where('email', $email)->select('name', 'email')->first();//Generate, the password reset link. The token generated is embedded in the link
        $link = config('base_url') . 'password/reset/' . $token . '?email=' . urlencode($user->email);
            try {
              $data = array('link' => $link);
              $from = env("MAIL_USERNAME","elite@elitelima.com");
              $name = "Elite Lima";
              Mail::send('themes.emails.password_reset',['data'=>$data],function ($message) use($email,$from,$name) {
                        $message->from($from, $name);
                        $message->subject('Password Reset');
                        $message->to($email);
                        
                    });
                    
            return true;
            } catch (\Exception $e) {
                return $e;
                return false;
            }
        }

}
