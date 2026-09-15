<?php

namespace Tests\Feature;

use Tests\TestCase;

class CacheClearRouteTest extends TestCase
{
    /**
     * The endpoint began life as a public GET /clear, so that anyone could
     * flush the caches of a cPanel install with no shell access. It must not
     * come back.
     */
    public function test_the_old_public_clear_route_is_gone(): void
    {
        $this->get('/clear')->assertNotFound();
    }

    public function test_clearing_caches_requires_an_authenticated_admin(): void
    {
        $response = $this->get('/admin/clear-cache');

        $this->assertNotSame(
            200,
            $response->getStatusCode(),
            'An unauthenticated request cleared the application caches.'
        );

        $response->assertRedirect(route('admin.login'));
    }
}
