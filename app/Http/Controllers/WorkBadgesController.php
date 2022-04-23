<?php

namespace App\Http\Controllers;

use App\Models\WorkBadges;
use App\Models\JobCategory;
use Illuminate\Http\Request;

class WorkBadgesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $workBadges = WorkBadges::all();
        foreach($workBadges as $workBadge){
            $workBadge->jobCategories;
            // $workBadge->employeeBadges;
        }

        return $workBadges;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $categories = JobCategory::all()->where('category_name', $request->category)->first();
        $badges = WorkBadges::create([
            'job_category_id' => $categories->job_category_id,
            'badge_name' =>  $request->badge_name,
            'badge_image' => $request->badge_icon,
        ]);

        return $badges;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $categories = JobCategory::all()->where('category_name', $request->category)->first();
        $badges = WorkBadges::create([
            'job_category_id' => $categories->job_category_id,
            'badge_name' =>  $request->badge_name,
            'badge_image' => "mdi-".$request->badge_icon,
        ]);

        return $badges;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\WorkBadges  $workBadges
     * @return \Illuminate\Http\Response
     */
    public function show(WorkBadges $workBadges)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\WorkBadges  $workBadges
     * @return \Illuminate\Http\Response
     */
    public function edit(WorkBadges $workBadges)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\WorkBadges  $workBadges
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, WorkBadges $workBadges)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\WorkBadges  $workBadges
     * @return \Illuminate\Http\Response
     */
    public function destroy(WorkBadges $workBadges, $work_badge_id)
    {
        //
        $badge = WorkBadges::where('work_badge_id', $work_badge_id)->delete();

        return response()->json('The badge successfully deleted');


    }

    public function allBadges(){
        $badges = WorkBadges::all();
        return $badges;
    }

    public function getBadgesByCategory($categoryId){
        $badges = WorkBadges::where('job_category_id', $categoryId)->get();
        return $badges;
    }

    public function getBadgesByEmployee($employeeId){
        $badges = WorkBadges::where('employee_id', $employeeId)->get();
        return $badges;
    }
}
