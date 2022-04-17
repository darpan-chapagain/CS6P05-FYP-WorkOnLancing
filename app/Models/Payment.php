<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = ['employee_id', 'user_id', 'total', 'discount', 'sub_total', 'idx', 'token', 'product_name'];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // public function job_requests()
    // {
    //     return $this->hasMany(JobRequest::class);
    // }

    // public function jobs()
    // {
    //     return $this->belongsToMany(Job::class);
    // }
}
