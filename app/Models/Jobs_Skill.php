<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jobs_Skill extends Model
{
    use HasFactory;

    protected $fillable = ['id','skill_id', 'job_id'];

    public function skillEmployee(){
        return $this->belongsTo(Job::class, 'job_id', 'id');
    }

    public function allSkill(){
        return $this->belongsTo(Skill::class, 'skill_id', 'id');
    }
}
