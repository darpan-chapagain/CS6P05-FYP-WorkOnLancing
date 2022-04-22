<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = ['user_id','title', 'description', 'size', 'time', 'experience', 'project_rate', 'job_category_id', 'status'];




    public function jobSkill(){
        return $this->hasMany(PostSkill::class, 'job', 'id');
    }

    public function requestJob(){
        // dd($this->hasMany(JobRequest::class, 'job_id'));
        return $this->hasMany(JobRequest::class, 'job_id', 'id');
    }

    public function jobCategory(){
        return $this->belongsTo(JobCategory::class, 'job_category_id', 'job_category_id');
    }

    public function user(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

}
