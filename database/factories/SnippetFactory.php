<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Snippet;
use Faker\Generator as Faker;

$factory->define(Snippet::class, function (Faker $faker) {

    $txtCon = $faker->sentence(rand(3, 8), true);
    $txt = $faker->realText(rand(200, 400));

    $data = [
        'user_id' => (rand(1,5) == 5)? 1:2,
        'sticker_id' => (rand(1,10)),
        'row_content' =>$txtCon,
        'html_content'=>$txtCon,
        'row_description' =>$txt,
        'html_description'=>$txt,
    ];

    return $data;
});
