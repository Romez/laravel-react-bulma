<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Repositories\Good\IGoodRepository;
use App\Repositories\Good\GoodRepository;

class GoodServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(IGoodRepository::class, GoodRepository::class);
    }

    /**
     * @return array
     */
    public function provides()
    {
        return [
            IGoodRepository::class
        ];
    }
}
