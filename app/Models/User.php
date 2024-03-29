<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;




class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'phone_no',
        'Address',
        'City',
        'Province',
        'gender',
        'birth_date',
        'email',
        'password',
        'role_id',
        'status',
        'profile',
        'profile_path',
        'about'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function roles(){
        return $this->hasOne(UserRoles::class, 'user_id', 'id');
    }
    public function employee(){
        return $this->hasOne(Employee::class, 'user_id', 'id');
    }

    public function jobs(){
        return $this->hasMany(Job::class, 'user_id', 'id');
    }
    public function blogs(){
        return $this->hasMany(Blog::class, 'user_id', 'id');
    }
    public function blogComments(){
        return $this->hasMany(BlogComment::class, 'user_id', 'id');
    }

    public function ratings(){
        // dd('test');
        return $this->hasMany(UserRating::class, 'user_id', 'id');
    }

    public function chatRoom(){
        return $this->hasMany(ChatRoom::class, 'user_id', 'id');
    }
}
