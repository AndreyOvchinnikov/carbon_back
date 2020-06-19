<?php

use Illuminate\Http\Request;
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




//Route::get('/{any}', 'SpaController@index')->where('any', '.*');

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

//
//Route::get('/slim', function () {
//    return view('welcome');
//});
// А здесь не возвращается ничего: ни разметки, ни стилей пишем сразу в пустую
// страницу без подключения каких бы то ни было шаблонов
// Похоже здесь получаем данные из базы, напрямую указывая таблицу,
// а в SnippetController через модель Snippet которая хоть и называется
// Snippet но обращается к таблице во множественном числе
// поэтому при создании миграций необходимо называть таблицы во множественном числе
// если получаем данные через модель.
//Route::get('/', function () {
//    $snippetArticles = DB::table('snippets')->get();
////    $snippetArticles="dkjf";
//    return $snippetArticles;
//});
//


