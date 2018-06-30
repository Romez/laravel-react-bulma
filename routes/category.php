<?php

Route::group(['middleware' => ['web']], function () {
    Route::get('cat/{slug?}', function () {
        return view('welcome');
    })->name('category.slug');
});

Route::group(['middleware' => ['api']], function () {
    Route::apiResource('category', 'Category\API\CategoryController');
});
