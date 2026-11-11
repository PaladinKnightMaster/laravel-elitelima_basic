<?php

namespace Tests\Feature;

use App\Admin;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Tests\TestCase;

/**
 * The admin account-recovery path, end to end.
 *
 * It was broken in three separate ways that only show up together: the
 * controller called str_random(), which Laravel removed in version 6; the
 * emailed link was built from config('base_url'), which has never been
 * defined, so it was relative with no host and no /admin prefix; and a failed
 * send was reported to the admin as success.
 */
class AdminPasswordResetTest extends TestCase
{
    use RefreshDatabase;

    /**
     * The admin pages read their branding straight out of the settings table
     * (layouts/admin.blade.php does `$settings['favicon']` and
     * `$settings['site_title']`, the login page `$settings['logo']`) and fail
     * on an empty one, so the reset form needs these rows to render at all.
     * Production has them.
     */
    private function seedBranding(): void
    {
        foreach (['logo', 'favicon', 'site_title'] as $name) {
            DB::table('settings')->insert(['name' => $name, 'value' => $name === 'site_title' ? 'Elite Lima' : $name.'.png']);
        }
    }

    private function admin(): Admin
    {
        $this->seedBranding();

        return Admin::create([
            'name' => 'Test Admin',
            'email' => 'admin@example.test',
            'password' => bcrypt('old-password-123'),
            'role' => 1,
        ]);
    }

    /** HTML body of every message the array mailer has captured, oldest first. */
    private function sentBodies(): array
    {
        return app('mailer')->getSymfonyTransport()->messages()
            ->map(fn ($sent) => $sent->getOriginalMessage()->getHtmlBody())
            ->all();
    }

    /** @return array{0: string, 1: string} absolute link, then the token inside it */
    private function resetLinkFrom(string $html): array
    {
        $found = preg_match('#https?://[^\s"\'<>]+/admin/password/reset/([^\s"\'<>?]+)\?[^\s"\'<>]+#', $html, $m);

        $this->assertSame(
            1,
            $found,
            'The email has no absolute /admin/password/reset/{token} link. Reset-looking text in it: '
                .(preg_match('#[^\s"\'<>]*password/reset/[^\s"\'<>]*#', $html, $loose) ? $loose[0] : '(none)')
        );

        return [html_entity_decode($m[0]), $m[1]];
    }

    public function test_the_emailed_link_is_absolute_and_actually_resets_the_password(): void
    {
        $admin = $this->admin();

        $this->post('/admin/password/email', ['email' => $admin->email])
            ->assertSessionHas('status')
            ->assertSessionHasNoErrors();

        [$link] = $this->resetLinkFrom($this->sentBodies()[0]);

        // Following the link as the browser would.
        $this->get($link)->assertOk();

        parse_str(parse_url($link, PHP_URL_QUERY), $query);
        $token = basename(parse_url($link, PHP_URL_PATH));

        $this->post('/admin/password/reset', [
            'token' => $token,
            'email' => $query['email'],
            'password' => 'new-password-456',
            'password_confirmation' => 'new-password-456',
        ])->assertRedirect('/admin/dashboard');

        $this->assertTrue(Hash::check('new-password-456', $admin->fresh()->password));
        $this->assertTrue(Auth::guard('admin')->check(), 'Resetting should log the admin in.');
    }

    public function test_a_second_request_still_yields_a_valid_token(): void
    {
        $admin = $this->admin();

        $this->post('/admin/password/email', ['email' => $admin->email]);
        $this->post('/admin/password/email', ['email' => $admin->email]);

        $bodies = $this->sentBodies();
        $this->assertCount(2, $bodies);

        // Impatient admins click "send again". The newest link must be the
        // one that works; the framework validates against the first row it
        // finds for the address, so older rows must not be left lying around.
        [, $token] = $this->resetLinkFrom($bodies[1]);

        $this->assertTrue(
            Password::broker('admins')->tokenExists($admin, $token),
            'The token in the newest email was rejected.'
        );
    }

    public function test_a_failed_send_is_reported_as_a_failure(): void
    {
        $admin = $this->admin();

        Mail::shouldReceive('send')->once()->andThrow(new \RuntimeException('smtp is down'));

        $response = $this->post('/admin/password/email', ['email' => $admin->email]);

        $response->assertSessionHasErrors('error');
        $response->assertSessionMissing('status');
    }

    public function test_an_unknown_address_is_rejected_without_creating_a_token(): void
    {
        $this->admin();

        $this->post('/admin/password/email', ['email' => 'nobody@example.test'])
            ->assertSessionHasErrors('email');

        $this->assertDatabaseCount('password_resets', 0);
    }

    public function test_the_link_ignores_a_forged_host_header(): void
    {
        $admin = $this->admin();

        // Password-reset poisoning. An attacker asks for a reset on the
        // victim's address while sending a Host header they control. If the
        // link were built from the request, the victim would be emailed a
        // genuine token wrapped in a URL that points at the attacker.
        $this->post('http://evil.example/admin/password/email', ['email' => $admin->email]);

        [$link] = $this->resetLinkFrom($this->sentBodies()[0]);

        $this->assertStringNotContainsString('evil.example', $link);
        $this->assertStringStartsWith(
            rtrim(config('app.url'), '/').'/admin/password/reset/',
            $link,
            'The reset link must be built from the configured APP_URL, not from the request.'
        );
    }
}
