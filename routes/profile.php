<?php

use App\Http\Controllers\BasicProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('auth')->group(function () {
    Route::get('/basic-profile', [BasicProfileController::class, 'show'])->name('admin.basic-profile.show');
    Route::post('/basic-profile/save', [BasicProfileController::class, 'store'])->name('admin.basic-profile.save');
});