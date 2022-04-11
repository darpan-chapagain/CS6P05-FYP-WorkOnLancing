<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatRoom extends Model
{
    use HasFactory;

    public function messages(){
        return $this->hasMany(ChatMessage::class,);
    }

    public function users(){
        return $this->belongsToMany(User::class, 'chat_room_user', 'chat_room_id', 'user_id');
    }

    public function userRooms(){
        return $this->hasMany(UserRoom::class, 'chat_room_id', 'id');
    }

    
}
