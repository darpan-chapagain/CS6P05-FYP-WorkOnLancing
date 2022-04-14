<?php

namespace App\Http\Controllers;

use App\Models\EmployeeBadges;
use App\Models\Employee;
use App\Models\WorkBadges;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class EmployeeBadgesController extends Controller
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
     * @param  \App\Models\EmployeeBadges  $employeeBadges
     * @return \Illuminate\Http\Response
     */
    public function show(EmployeeBadges $employeeBadges)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EmployeeBadges  $employeeBadges
     * @return \Illuminate\Http\Response
     */
    public function edit(EmployeeBadges $employeeBadges)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EmployeeBadges  $employeeBadges
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EmployeeBadges $employeeBadges)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EmployeeBadges  $employeeBadges
     * @return \Illuminate\Http\Response
     */
    public function destroy(EmployeeBadges $employeeBadges)
    {
        //
    }

    public function storeBadge(Request $request)
    {
        $employee = Employee::where('id', $request->employee_id)->first();

        foreach ($request->badges as $badge) {

            $workBadge = WorkBadges::where('Badge_Name', $badge)->first();
            $employeeBadge = new EmployeeBadges();
            $employeeBadge->employee_id = $employee->id;
            $employeeBadge->work_badge_id = $workBadge->id;
            $employeeBadge->save();
        }

        $employeeBadge->save();
    }

    public function getBadgesByEmployee($employeeId){
        // $badges = EmployeeBadges::where('employee_id', $employeeId)->get();
        $badges = DB::select('select eb.employee_badge_id, wb.Badge_Name, wb.badge_image, COUNT(wb.work_badge_id) "count" from employee_badges eb join work_badges wb on eb.work_badge_id = wb.work_badge_id where eb.employee_id = :employee_id GROUP BY wb.work_badge_id', array('employee_id' => $employeeId));
        $response = [
            'badges' => $badges
        ];
        return $response;
    }
}
