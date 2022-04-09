<?php

namespace App\Http\Controllers;

use App\Models\UserRating;
use Illuminate\Http\Request;

class UserRatingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rating = UserRating::all()->toArray();
        return array_reverse($rating);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getUserRating(Request $request, $id)
    {
        $userRating = UserRating::where('user_id', $id)->get();
        // dd($userRating);
        $totalRate = 0;
        $count = 0;
        foreach ($userRating as $rating) {
            $rating->ratedBy;
            $rating->job;
            $rating->user;
            $totalRate += $rating->rating;
            $count++;
        }
        if($count == 0) {
            $count = 1;
        }
        $average = $totalRate / $count;

        $response = [
            'ratings' => $userRating,
            'average' => $average,
        ];

        return $response;
    }
    public function haveRated(Request $request, $auth_user_id, $user_id, $job_id)
    {
        $userRated = UserRating::where('auth_user_id', $auth_user_id)
            ->where('user_id', $user_id)
            ->where('job_id', $job_id)
            ->first();
        // dd($userRating != null);
        if($userRated == null) {
            $response = [
                'status' => 'Not rated',
                'message' => 'You have not rated this user',
                'data' => $userRated
            ];
        }else{
            $response = [
                'status' => 'Rated',
                'message' => 'You have rated this user',
                'data' => $userRated
            ];
        }
        return $response;
    }
}
