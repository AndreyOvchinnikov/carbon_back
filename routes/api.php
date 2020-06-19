<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['namespace' => 'Api'], function () {
    Route::get('snippets', 'SnippetController@index');
    Route::delete('snippets/{id}', 'SnippetController@destroy' );
    Route::post('snippets', 'SnippetController@create' );
});

Route::group(['namespace' => 'Api'], function () {
    Route::get('stickers/{id}', 'StickerController@getChild');
    Route::get('stickers', 'StickerController@index');
    Route::delete('stickers/{id}', 'StickerController@destroy' );
    Route::post('stickers', 'StickerController@create' );
});
