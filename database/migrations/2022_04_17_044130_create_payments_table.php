<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id('payment_id');
            $table->unsignedBigInteger('employee_id');
            $table->unsignedBigInteger('user_id');
            $table->integer('total');
            $table->integer('discount')->default(0);
            $table->integer('sub_total');
            $table->integer('status')->default(0);
            $table->string('idx')->nullable();
            $table->string('token')->nullable();
            $table->string('product_name')->nullable();
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade')->nullable();
            $table->foreign('employee_id')
                ->references('employee_id')->on('employees')
                ->onDelete('cascade')->nullable();   
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
        Schema::dropIfExists('payments');
    }
}
