<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\JobRequest;
use App\Models\Job;
use Illuminate\Http\Request;
use App\Models\Skill;
use App\Models\Employee_Skill;
use Illuminate\Support\Facades\Auth;
use Session;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $skills = Employee::all()->toArray();
        return array_reverse($skills);
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

        $employee = Employee::create([
            'user_id' => $request->user_id,
            'qualification' => $request->qualification,
            'hourly_rate' => $request->hourly_rate,
            'experience' => $request->experience,
            // 'skills' => $request->skills, 
            'employee_type' => $request->employee_type,
            'Job_Category_ID' => $request->Job_Category_ID,
        ]);

        $response = [
            'employee' => $employee,
        ];
        return response()->json($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        //
        $employee = Employee::all();

        $response = [
            'all employee' => $employee
        ];
        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        //
        $emp = Employee::where('user_id', $id)->first();
        $emp->jobCategories;
        foreach ($emp->employeeSkill as $skill) {
            $skill->allSkill;
        }
        $response = [
            'employee' => $emp
        ];
        return response()->json($emp);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {
        //
        $employee = Employee::find($request->id)->update($request->all());
        $response = [
            'updated_employee' => $employee,
            'message' => 'sucess',
        ];

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $employee)
    {
        //
        $employee = Employee::find($employee->id);
        $employee->delete();

        $response = [
            'employee' => $employee,
            'message' => 'sucess',
        ];

        return response()->json($response);
    }

    public function requestJob($id)
    {
        $authEmployee = auth()->user();
        $job = Job::find($id);

        $authUserId = $authEmployee->id;
        $jobPostUserId = $job->user->id;
        $employee = Employee::all()->where('user_id', $authUserId)->first();
        // dd($job->id);
        // dd($employee->employee_id);
        // dd($authUserId, $jobPostUserId);

        $empID = $employee->employee_id;
        $employeeJob = JobRequest::all()->where('employee_id', $employee->employee_id)
            ->where('job_id', $job->id)->first();
        // dd($employeeJob);

        if ($authUserId != $jobPostUserId) {
            if ($employeeJob) {
                $response = [
                    'message' => 'Already requested',
                ];
            } else {
                $jobRequest = new JobRequest([
                    'employee_id' => $empID,
                    'job_id' => $job->id,
                ]);
                $jobRequest->save();
                $response = [
                    'job_request' => $jobRequest,
                    'message' => 'success',
                ];
            }
        } else {
            $response = [
                'message' => 'Error: Unauthorized',
            ];
        }
        return response()->json($response);
    }

    public function checkRequest($id)
    {
        $authEmployee = auth()->user();
        $job = Job::find($id);

        $authUserId = $authEmployee->id;
        $jobPostUserId = $job->user->id;
        $employee = Employee::all()->where('user_id', $authUserId)->first();

        $empID = $employee->employee_id;
        $employeeJob = JobRequest::all()->where('employee_id', $employee->employee_id)
            ->where('job_id', $job->id)->first();
        // dd($authUserId != $jobPostUserId);
        if ($authUserId != $jobPostUserId) {
            if ($employeeJob) {
                $response = [
                    'message' => 'Already requested',
                ];
            } else {
                $response = [
                    'message' => 'Not requested',
                ];
            }
        } else {
            $response = [
                'message' => 'Unauthorized',
            ];
            // dd($response);
        }
        return response()->json($response);
    }

    public function jobOfferStatus(Request $request, $jobId)
    {
        $authEmployee = auth()->user();
        // dd($authEmployee->first_name);
        $employee = Employee::all()->where('user_id', $authEmployee->id)->first();

        $jobRequest = JobRequest::all()
            ->where('employee_id', $employee->employee_id)
            ->where('job_id', $jobId)
            ->first();
        // dd($jobRequest);
        if ($request->status == "accept") {
            $jobRequest->status = 4;
        } else {
            $jobRequest->status = 3;
        }

        $jobRequest->save();

    }

    public function getOtherEmployee()
    {
        $userID = auth()->user()->id;
        $employees = Employee::all()->reverse()->except($userID);

        foreach ($employees as $employee) {
            $user = $employee->user;
            $user->ratings;
            $employee->jobCategories;
            $skills = $employee->employeeSkill;
            foreach ($skills as $sk) {
                $sk->allSkill;
            }
        }

        return response()->json($employees);
    }

    public function getEmployee($id)
    {
        $employee = Employee::find($id);
        $employee->user;
        $employee->jobCategories;
        $skills = $employee->employeeSkill;
        foreach ($skills as $sk) {
            $sk->allSkill;
        }
        return response()->json($employee);
    }

    public function getRequestedJob(Request $request)
    {
        $authUser = auth()->user();
        $employee = Employee::all()->where('user_id', $authUser->id)->first();
        // dd($employee->employee_id);
        $jobRequest = JobRequest::where('employee_id', $employee->employee_id)
            ->where('status', 1)
            ->orWhere('status', 3)->get();
        $jobs = [];
        foreach ($jobRequest as $req) {
            $job = $req->detailJob;
            $job->jobCategory;
            $job->requestJob;
            foreach ($job->jobSkill as $skill) {
                // dd($skill->skillJob);
                $skill->allSkill;
            }
            $job->user;
            array_push($jobs, $job);
        }

        return response()->json($jobs);
    }

    public function getInProgressJob(Request $request)
    {
        $authUser = auth()->user();
        $employee = Employee::all()->where('user_id', $authUser->id)->first();
        // dd($employee->employee_id);
        $jobRequest = JobRequest::where('employee_id', $employee->employee_id)
            ->where('status', 5)->get();
        $jobs = [];
        foreach ($jobRequest as $req) {
            $job = $req->detailJob;
            $job->jobCategory;
            $job->requestJob;
            foreach ($job->jobSkill as $skill) {
                // dd($skill->skillJob);
                $skill->allSkill;
            }
            $job->user;
            array_push($jobs, $job);
        }

        return response()->json($jobs);
    }

    public function getAssignedJob(Request $request)
    {
        $authUser = auth()->user();
        $employee = Employee::all()->where('user_id', $authUser->id)->first();
        // dd($employee->employee_id);
        $jobRequest = JobRequest::where('employee_id', $employee->employee_id)
            ->where('status', 4)->get();
        $jobs = [];
        foreach ($jobRequest as $req) {
            $job = $req->detailJob;
            $job->jobCategory;
            $job->requestJob;
            foreach ($job->jobSkill as $skill) {
                // dd($skill->skillJob);
                $skill->allSkill;
            }
            $job->user;
            array_push($jobs, $job);
        }

        return response()->json($jobs);
    }

    public function getCompletedJob(Request $request)
    {
        $authUser = auth()->user();
        $employee = Employee::all()->where('user_id', $authUser->id)->first();
        // dd($employee->employee_id);
        $jobRequest = JobRequest::where('employee_id', $employee->employee_id)
            ->where('status', 6)
            ->orWhere('status', 7)->get();
        $jobs = [];
        foreach ($jobRequest as $req) {
            $job = $req->detailJob;
            $job->jobCategory;
            $job->requestJob;
            foreach ($job->jobSkill as $skill) {
                // dd($skill->skillJob);
                $skill->allSkill;
            }
            $job->user;
            array_push($jobs, $job);
        }

        return response()->json($jobs);
    }

    public function startJob(Request $request, $jobId)
    {
        $authUser = auth()->user();
        $employee = Employee::all()->where('user_id', $authUser->id)->first();
        // dd($employee->employee_id);
        $jobRequest = JobRequest::all()
            ->where('employee_id', $employee->employee_id)
            ->where('job_id', $jobId)
            ->where('status', 4)
            ->first();
        $jobRequest->status = 5;
        $jobRequest->save();
        $response = [
            'status' => 'success',
        ];

        return response()->json($response);
    }

    public function completeJob(Request $request, $id)
    {
        $userID = auth()->user()->id;
        $job = Job::select('*')
            ->where('id', $id)
            ->first();
        $req = $job->requestJob[0];
        // $user = User::all()->where('id', $userID)->first();
        // dd($req->status);
        if ($req->status == 5) {
            $req->status = 6;
            // $user->points += 100;
        }
        $job->save();
        $req->save();
        $response = [
            'job' => $job,
            'status' => 'success',
        ];

        return response()->json($response);
    }

    public function changeStatus()
    {
        $user = auth()->user();

        $emp = Employee::find($user->employee->employee_id);
        $status = $emp->status;
        if ($status == 1) {
            $update = 2;
        } else {
            $update = 1;
        }
        $emp->update([
            'status' => $update
        ]);
        $response = [
            'user' => $emp,
            'status' => $emp->status,
        ];
        return response()->json($response);
    }

    public function getStatus()
    {
        $user = auth()->user();

        $emp = Employee::find($user->employee->employee_id);
        $status = $emp->status;
        // if ($status == 1) {
        //     $update = 2;
        // } else {
        //     $update = 1;
        // }
        // $user->update([
        //     'status' => $update
        // ]);
        $response = [
            'status' => $emp->status,
        ];
        return response()->json($response);
    }

    public function updateJobNo(Request $request)
    {
        $user = auth()->user();

        $emp = Employee::find($user->employee->employee_id);

        $num = $request->job;
        // dd($num);
        // dd($user);
        $emp->update([
            'assignment_no' => $num
        ]);
        $response = [
            'assignment_no' => $emp->assignment_no,
        ];
        return response()->json($response);
    }

    public function getJobNo()
    {
        $user = auth()->user();

        $emp = Employee::find($user->employee->employee_id);
        $jobs = $emp->assignment_no;
        // if ($status == 1) {
        //     $update = 2;
        // } else {
        //     $update = 1;
        // }
        // $user->update([
        //     'status' => $update
        // ]);
        $response = [
            'num' => $emp->assignment_no,
        ];
        return response()->json($response);
    }

    public function getUserJobNo($id)
    {

        $emp = Employee::find($id);
        $jobs = $emp->assignment_no;
        // if ($status == 1) {
        //     $update = 2;
        // } else {
        //     $update = 1;
        // }
        // $user->update([
        //     'status' => $update
        // ]);

        $response = [
            'num' => $emp->assignment_no,
        ];
        return response()->json($response);
    }


    public function getEmployeeSkill()
    {
        $user = auth()->user();
        $emp = Employee::where('employee_id', $user->employee->employee_id)->first();
        $skills = $emp->employeeSkill;
        foreach ($skills as $skill) {
            $skill->allSkill;
        }
        $response = [
            'skills' => $skills,
        ];
        return response()->json($skills);
    }

    public function updateEmployeeSkill(Request $request)
    {
        $user = auth()->user();
        $empID = $user->employee->employee_id;

        $delete = Employee_Skill::where('employee_id', $empID)->delete();

        foreach ($request->skill as $sk) {
            $skills = Skill::all()->where('skill', $sk)->first();
            $employeeSkill = Employee_Skill::create([
                'skill_id' => $skills->id,
                'employee_id' => $empID,
            ]);
        }

        $response = [
            'status' => 'success',
        ];

        return response()->json($response);
    }
}
