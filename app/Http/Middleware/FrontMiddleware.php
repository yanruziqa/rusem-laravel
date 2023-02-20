<?php

namespace App\Http\Middleware;

use App\Models\Category;
use Inertia\Inertia;

use Closure;

class FrontMiddleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function handle($request, Closure $next)
    {
        $category = Category::all();

        Inertia::share('category', $category);
        $response = $next($request);
        return $response;
    }
}
