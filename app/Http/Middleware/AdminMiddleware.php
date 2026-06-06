<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
   public function handle(Request $request, Closure $next): Response
{
    if (
        auth()->user()->role !== 'admin' &&
        auth()->user()->role !== 'superadmin'
    ) {
        return redirect('/dashboard');
    }

    return $next($request);
}
}