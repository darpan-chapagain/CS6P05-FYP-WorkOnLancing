<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $table = 'roles';
    
    protected $primaryKey = 'id';

    protected $fillable = ['Role'];

    public function userRoles(){
        return $this->hasMany(UserRoles::class, 'role_id', 'id');
    }

}
