<?php

use Faker\Generator as Faker;

use App\Models\Category;

$factory->define(Category::class, function (Faker $faker) {
    $word = $faker->unique()->word();

    return [
        'title' => $word,
        'slug' => str_slug($word)
    ];
});
