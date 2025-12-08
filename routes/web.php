<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/home', 301);

Route::get('/home', function () {
    return Inertia::render('home');
})->name('home');

