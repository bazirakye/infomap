<?php

use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('pages/index');
// });

Route::get('/', 'HomeController@index')->name('home');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';


//users registration
Route::get('/register', 'UsersController@store')->name('store'); 

// email verification


Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');



use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect('/');
})->middleware(['auth', 'signed'])->name('verification.verify');



// use Illuminate\Http\Request;

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');


// routes for verified users
Route::get('/profile', function () {
    // Only verified users may access this route...
})->middleware('verified');





Route::group(['prefix' => 'admin', 'middleware' => 'can:admin, 1'], function() {
    
    Route::get('/', 'AdminController@admin')->name('admin');

    Route::resource('users', 'UsersController');
    Route::get('/users', 'UsersController@index')->name('users');

    // Route::get('/{id}/delete','UsersController@destroy')->name('delete');
    Route::get('{id}/delete','UsersController@destroy')->name('delete');

    Route::post('{id}/update','UsersController@update')->name('update');

});

// user update account
    Route::post('/userupdate','HomeController@account')->name('userupdate');
