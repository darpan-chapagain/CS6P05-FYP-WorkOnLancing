<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id('employee_id');
            $table->unsignedBigInteger('user_id');
            $table->string('title')->nullable();
            $table->longText('qualification')->nullable();
            $table->integer('project_rate')->default(0)->nullable();
            $table->longText('experience')->nullable();
            $table->longText('education')->nullable();
            $table->string('employee_type')->nullable()->default('Individual');
            $table->unsignedBigInteger('Job_Category_ID')->nullable();
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade')->nullable();
            $table->foreign('Job_Category_ID')
                ->references('job_category_id')->on('job_categories')
                ->onDelete('cascade')->nullable();
            $table->timestamps();
            $table->boolean('status')->default(true);
            $table->integer('assignment_no')->default(1);
            $table->integer('total_job')->default(0);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
