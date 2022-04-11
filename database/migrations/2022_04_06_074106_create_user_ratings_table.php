<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserRatingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_ratings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('auth_user_id');
            $table->unsignedBigInteger('user_id');
            $table->integer('rating');
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade')->nullable();
            $table->foreign('auth_user_id')
                ->references('id')->on('users')
                ->onDelete('cascade')->nullable();
            $table->unsignedBigInteger('job_id');
            $table->foreign('job_id')
                ->references('id')->on('jobs')
                ->onDelete('cascade');
            $table->longText('description');
            $table->timestamps();
        });
        // Schema::create('chat_rooms', function (Blueprint $table) {
        //     $table->id();
        //     $table->longText('name');
        //     $table->timestamps();
        // });
        // Schema::create('chat_messages', function (Blueprint $table) {
        //     $table->id();
        //     $table->integer('chat_room_id');
        //     $table->integer('user_id');
        //     $table->longText('message');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_ratings');
    }
}
