<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use Faker\Generator as Faker;
use Illuminate\Support\Str;
$inc = 0;
$factory->define(\App\Models\Sticker::class, function (Faker $faker) use (&$inc) {

    $title = $faker->sentence(rand(3, 8), true);
    $name  = $faker->sentence(1, true);
    $parent = floor($inc++/5) ;

    $data = [
        'user_id'   =>  (rand(1,5) == 5)? 1:2,
        'parent_id' =>  $parent,
        'code'      =>  Str::slug($title),
        'name'      =>  $name
    ];

    return $data;
});
