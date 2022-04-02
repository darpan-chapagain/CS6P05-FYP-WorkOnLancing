<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostSkill extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';
    
    public $timestamps = false;

    protected $fillable = ['job','skill'];

    public function jobSkill(){
        return $this->belongsTo(Skill::class, 'skill');
    }
    public function skillJob(){
        return $this->belongsTo(Job::class, 'job');
    }
}
