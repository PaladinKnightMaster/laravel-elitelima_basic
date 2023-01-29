<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGirlImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('girl_images', function (Blueprint $table) {
            $table->increments('id');
            $table->string('image');
            $table->string('en')->nullable();
            $table->string('fr')->nullable();
            $table->string('es')->nullable();
            $table->string('de')->nullable();
            $table->string('it')->nullable();
            $table->integer('girl_id')->unsigned();
            $table->foreign('girl_id')->references('id')->on('girls')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('girl_images');
    }
}
