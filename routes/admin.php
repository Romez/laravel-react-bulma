<?php

Route::get('/admin', 'Admin\MainController@view')->name('admin');
Route::get('/admin/category', 'Admin\MainController@view')->name('admin.category');
Route::get('/admin/goods', 'Admin\MainController@view')->name('admin.goods');
