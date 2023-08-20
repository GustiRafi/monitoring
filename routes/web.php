<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\sensorController;
use App\Http\Controllers\hardwareController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [AuthController::class,'index'])->name('login');
Route::post('/login', [AuthController::class,'login']);
Route::post('/logout', [AuthController::class,'logout']);

Route::group(['middleware' => 'auth'],function(){
    Route::resource('/sensor',sensorController::class);
    Route::resource('/hardware',hardwareController::class);
});
