<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::get('ads', 'AdsController@index');
Route::post('ads', 'AdsController@store');
Route::get('ads/{id}', 'AdsController@show');
//Route::put('ads/{id}', 'AdsController@update');
Route::get('home', 'AdsController@index');

Route::post('bids', 'BidsController@store');

Route::group(['middleware' => ['web']], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('logout', 'Auth\LoginController@logout');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');

});
