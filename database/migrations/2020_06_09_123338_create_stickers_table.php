<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStickersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stickers', function (Blueprint $table) {
            $table->increments('id')->unsigned();

            $table->integer('user_id')->unsigned();
            $table->integer('parent_id')->default(0);
            
            $table->string('name');
            $table->string('code')->unique();
            
            $table->timestamps();
            $table->softDeletes();

        });
        Schema::table('stickers', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
//        Schema::table('folders', function (Blueprint $table) {
//            $table->dropForeign('user_id');
//        });
        Schema::dropIfExists('stickers');

    }
}
