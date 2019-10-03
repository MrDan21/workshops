<?php

use Illuminate\Http\Request;

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
Route::get('/guests', 'API\GuestController@index');
Route::post('/guests', 'API\GuestController@store');
Route::patch('/guests/confirm/{id}', 'API\GuestController@confirmation');
