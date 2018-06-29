<?php

Route::group(['middleware' => ['api']], function () {
    Route::apiResource('good', 'Good\API\GoodController');
});
