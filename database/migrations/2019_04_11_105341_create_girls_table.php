<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGirlsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('girls', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('status');
            $table->string('height')->nullable();
            $table->string('measurement')->nullable();
            $table->string('languages')->nullable();
            $table->string('rates')->nullable();
            $table->string('phone')->nullable();
            $table->string('available')->nullable();
            $table->string('type')->nullable();
            $table->string('nationality')->nullable();
            $table->string('weight')->nullable();
            $table->string('age')->nullable();
            $table->string('website')->nullable();
            $table->string('email')->nullable();
            $table->string('orientation')->nullable();
            $table->string('body_type')->nullable();
            $table->string('ethnicity')->nullable();
            $table->integer('drinking')->nullable();
            $table->integer('smoking')->nullable();
            $table->integer('kissing')->nullable();
            $table->integer('parejas')->nullable();
            $table->integer('sixty_nine')->nullable();
            $table->integer('anal')->nullable();
            $table->integer('blow_job')->nullable();
            $table->string('username')->nullable();
            $table->string('password')->nullable();
            $table->string('messenger_type')->nullable();
            $table->string('messenger_id')->nullable();
            $table->string('pal_talk')->nullable();
            $table->string('breast')->nullable();
            $table->string('s_in_home')->nullable();
            $table->string('s_in_vip')->nullable();
            $table->string('h_in_vip')->nullable();
            $table->string('s_in_agency')->nullable();
            $table->string('s_in_cc')->nullable();
            $table->string('slug')->unique();
            $table->string('meta_title')->nullable();
            $table->string('meta_title_es')->nullable();
            $table->string('meta_keyword')->nullable();
            $table->string('meta_keyword_es')->nullable();
            $table->text('meta_description')->nullable();
            $table->text('meta_description_es')->nullable();
            $table->text('profile')->nullable();
            $table->text('profile_es')->nullable();
            $table->integer('hair_color')->unsigned();
            $table->foreign('hair_color')->references('id')->on('hair_colors')->onDelete('cascade');
            $table->integer('eye_color')->unsigned();
            $table->foreign('eye_color')->references('id')->on('eye_colors')->onDelete('cascade');
            $table->integer('city_id')->unsigned();
            $table->foreign('city_id')->references('id')->on('cities')->onDelete('cascade');
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
        Schema::dropIfExists('girls');
    }
}
