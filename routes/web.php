<?php

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

//Homepage
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/services', function () {
    return Inertia::render('Services');
})->name('services');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/prices', function () {
    return Inertia::render('Prices');
})->name('prices');

Route::get('/team', function () {
    return Inertia::render('Team');
})->name('team');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/:pathMatch(.*)*', function () {
    return Inertia::render('Error');
})->name(':pathMatch(.*)*');



Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
