<?php
use App\Http\Controllers\ShopController;
use App\Http\Controllers\ProductController;
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


// //POST http://localhost:8000/api/shops
 Route::post('/shops', [ShopController::class, 'create']);

//GET http://localhost:8000/api/shops/3
Route::get('/shops/{id}', [ShopController::class, 'read']);
//GET http://localhost:8000/api/shops
Route::get('/shops', [ShopController::class, 'readAll']);


// //POST http://localhost:8000/api/products
Route::post('/products', [ProductController::class, 'create']);

//GET http://localhost:8000/api/products/3
Route::get('/products/{id}', [ProductController::class, 'read']);

//GET http://localhost:8000/api/products
Route::get('/products', [ProductController::class, 'readAll']);
