<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_profile', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('gelar_depan');
            $table->string('gelar_belakang');
            $table->string('lulusan');
            $table->string('skill')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('social_profile');
    }
};
