<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $primaryKey = 'employee_id';

    protected $fillable = ['user_id','qualification', 'rating', 'experience', 'skills', 'employee_type', 'Job_Category_ID', 'education', 'project_rate'];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function jobRequests(){
        return $this->hasMany(JobRequest::class, 'employee_id', 'employee_id');
    }

    public function jobCategories(){
        return $this->hasOne(JobCategory::class, 'job_category_id', 'Job_Category_ID');
    }

    public function employeeSkill(){
        return $this->hasMany(Employee_Skill::class, 'employee_id', 'employee_id');
    }

    public function badgeRatings(){
        return $this->hasMany(EmployeeBadges::class, 'employee_id', 'employee_id');
    }
}
