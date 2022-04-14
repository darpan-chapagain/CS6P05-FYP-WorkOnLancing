<?php

namespace App\Http\Controllers;

use App\Models\WorkBadges;
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
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
    public function destroy(WorkBadges $workBadges)
    {
        //
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
