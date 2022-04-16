<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkBadges extends Model
{
    use HasFactory;

    protected $table = 'work_badges';

    protected $fillable = [
        'job_category_id',
        'badge_name',
        'badge_image',
    ];

    public function jobCategories(){
        return $this->belongsTo(JobCategory::class, 'Job_Category_Id', 'Job_Category_Id');
    }

    public function employeeBadges(){
        return $this->hasMany(EmployeeBadges::class, 'work_badge_id', 'work_badge_id');
    }
}
