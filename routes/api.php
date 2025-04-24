<?php

use App\Events\SendMessageEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('send', function () {
    Log::debug('Config: ', config('broadcasting.connections.pusher'));
    Log::debug('Config OPTIONS: ', config('broadcasting.connections.pusher.options'));
    broadcast(new SendMessageEvent())->toOthers();
    return response()->json([
        'message' => "SUCCESS",
    ]);
});
