<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChatMessage;
use App\Models\ChatRoom;
use App\Models\UserRoom;
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
        $message = ChatMessage::where('chat_room_id', $roomId)->orderBy('created_at')->get();
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

    public function createRoom(Request $request){
        $authUser = Auth::user();
        $room = new ChatRoom();
        $room->name = 'Room '.rand(1, 100);
        $room->save();
        
        $userRoom = new UserRoom();
        $userRoom->user_id = $authUser->id;
        $userRoom->chat_room_id = $room->id;
        $userRoom->save();

        $userRoom = new UserRoom();
        $userRoom->user_id = $request->user_id;
        $userRoom->chat_room_id = $room->id;
        $userRoom->save();

        return $room;
    }

    public function getMyRoom(Request $request){
        $authUser = Auth::user();
        $userRoom = UserRoom::where('user_id', $authUser->id)->get();
        $userRoom->user;
        return $userRoom;
    }

    public function getRoom(Request $request, $roomId){
        $room = ChatRoom::find($roomId);
        $room->users;
        return $room;
    }

    public function getUser(Request $request, $userId){
        $user = User::find($userId);
        return $user;
    }

    public function getUserRooms(Request $request, $userId){
        $userRoom = UserRoom::where('user_id', $userId)->get();
        $userRoom->chatRoom;
        return $userRoom;
    }

}
