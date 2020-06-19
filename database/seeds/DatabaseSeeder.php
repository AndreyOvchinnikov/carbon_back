<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        factory(\App\Models\Sticker::class, 1000)->create();
        factory(\App\Models\Snippet::class, 40)->create();
    }
}
