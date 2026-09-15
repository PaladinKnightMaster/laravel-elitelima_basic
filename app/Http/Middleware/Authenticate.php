<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
    /**
     * Where to send an unauthenticated request.
     *
     * The admin panel runs on its own guard with its own login form, but the
     * framework default sends every unauthenticated request to route('login'),
     * the public user form. An admin landing there cannot sign in from it.
     */
    protected function redirectTo(Request $request): ?string
    {
        if ($request->expectsJson()) {
            return null;
        }

        return $request->is('admin', 'admin/*')
            ? route('admin.login')
            : route('login');
    }
}
