<?php

Route::group(['middleware' => ['api']], function () {
    Route::apiResource('category', 'Category\API\CategoryController');
});
