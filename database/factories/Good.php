<?php

use Faker\Generator as Faker;

use App\Models\Good;
use Faker\Provider\ru_RU\Text;


$factory->define(Good::class, function (Faker $faker) {
    $faker->addProvider(new Text($faker));

    $word = $faker->unique()->word();

    return [
        'name' => $word,
        'description' => mb_convert_encoding( $faker->realText(mt_rand(30, 60)), 'UTF-8'),
        'image' => $faker->imageUrl(330, 250)
    ];
});
