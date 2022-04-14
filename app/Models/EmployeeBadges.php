<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeBadges extends Model
{
    use HasFactory;

    protected $table = 'employee_badges';

    protected $fillable = [
        'work_badge_id',
        'employee_id',
    ];

    public function employees(){
        return $this->belongsTo(Employee::class, 'employee_id', 'employee_id');
    }

    public function workBadges(){
        return $this->belongsTo(WorkBadges::class, 'work_badge_id', 'work_badge_id');
    }

}
