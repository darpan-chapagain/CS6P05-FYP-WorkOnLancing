<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRating extends Model
{
    use HasFactory;

    protected $fillable = [
        'auth_user_id',
        'user_id',
        'job_id',
        'rating',
        'description',
    ];

    public function ratedBy()
    {
        // dd('test');
        return $this->belongsTo(User::class, 'auth_user_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function job()
    {
        return $this->belongsTo(Job::class, 'job_id', 'id');
    }

}
