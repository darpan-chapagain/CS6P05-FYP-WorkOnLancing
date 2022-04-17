<?php

namespace App\Http\Controllers;

use App\Models\JobRequest;
use App\Models\Payment;
use App\Models\Role;
use App\Models\UserRoles;
use Illuminate\Http\Request;

class RoleController extends Controller
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
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function edit(Role $role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        //
    }

    public function getUserByRoles(){
        $admin = UserRoles::where('role_id', 1)->count();

        $user = UserRoles::where('role_id',2)->count();

        $employee = UserRoles::where('role_id',3)->count();

        $roleArray[] = [ $admin, $user, $employee];

        return response()->json($roleArray);

    }

    public function getRequests(){
        $requested = JobRequest::where('status', 1)->count();

        $offered = JobRequest::where('status', 2)->count();

        $accepted = JobRequest::where('status', 4)->count();

        $started = JobRequest::where('status', 5)->count();

        $finishedByEmployee = JobRequest::where('status', 6)->count();

        $finishedByUser = JobRequest::where('status', 7)->count();

        $statusRoles[] = [ $requested, $offered, $accepted, $started, $finishedByEmployee, $finishedByUser];

        return response()->json($statusRoles);
    }

    public function getPayments(Request $request)
    {
        $payment = Payment::all();

        return response()->json($payment);
    }

    public function updatePayment(Request $request)
    {
        
        $payment = Payment::find($request->id);

        $payment->status = 2;
        // dd($payment);
        $payment->save();
    }
}
