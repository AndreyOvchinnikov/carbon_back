<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSnippetsTable0 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('snippets', function (Blueprint $table) {

            $table->increments('id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->integer("sticker_id")->unsigned();

            $table->text("row_content");
            $table->text("html_content");
            $table->text("row_description");
            $table->text("html_description");

            $table->softDeletes('delete');
            $table->timestamps();
        });

        Schema::table('snippets', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('sticker_id')->references('id')->on('stickers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
//        Schema::table('snippets', function (Blueprint $table) {
//            $table->dropForeign('folder_id');
//            $table->dropForeign('user_id');
//        });

        Schema::dropIfExists('snippets');
    }
}
