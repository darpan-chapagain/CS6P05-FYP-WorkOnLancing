<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeeBadgesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_badges', function (Blueprint $table) {
            $table->id('employee_badge_id');
            $table->unsignedBigInteger('work_badge_id');
            $table->unsignedBigInteger('employee_id');
            $table->foreign('work_badge_id')->references('work_badge_id')->on('work_badges')->onDelete('cascade');
            $table->foreign('employee_id')->references('employee_id')->on('employees')->onDelete('cascade');
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
        Schema::dropIfExists('employee_badges');
    }
}
