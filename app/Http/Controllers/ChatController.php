<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChatMessage;
use App\Models\ChatRoom;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    //
    public function rooms(Request $request){
        return ChatRoom::all();
    }

    public function messages(Request $request, $roomId){
        // $room = ChatRoom::find($request->room_id);
        // $messages = $room->messages()->orderBy('created_at', 'desc')->get();
        // return $messages;
        $message = ChatMessage::where('chat_room_id', $roomId)->orderBy('created_at', 'desc')->get();
        foreach($message as $msg){
            $msg->user;
        }
        return $message;
    }

    public function newMessage(Request $request, $roomId){
        $message = new ChatMessage();
        $message->message = $request->message;
        $message->chat_room_id =  $roomId;
        $message->user_id = Auth::user()->id;
        $message->save();
        return $message;
    }
}
