<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Repositories\Category\ICategoryRepository;
use App\Repositories\Category\CategoryRepository;

class CategoryServiceProvider extends ServiceProvider
{
    /**
     * Отложенная подгрузка
     * @var bool
     */
    protected $defer = true;

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ICategoryRepository::class, CategoryRepository::class);
    }

    /**
     * @return array
     */
    public function provides()
    {
        return [ICategoryRepository::class];
    }
}
