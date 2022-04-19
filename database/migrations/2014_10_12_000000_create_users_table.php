<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('id');
            $table->string('first_name');
            $table->string('last_name')->nullable();
            $table->string('phone_no')->nullable();
            $table->string('Address')->nullable();
            $table->string('City')->nullable();
            $table->string('Province')->nullable();
            $table->string('gender')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('email')->unique()->nullable();
            $table->longText('about')->nullable();
            $table->string('profile')->nullable();
            $table->string('profile_path')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->integer('points')->default(0);
            $table->rememberToken();
            $table->boolean('status')->default(true);
            $table->float('rating', 5, 1)->default(0)->nullable();
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
        Schema::dropIfExists('users');
    }
}
