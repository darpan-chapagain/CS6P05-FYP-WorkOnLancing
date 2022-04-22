<?php

namespace App\Http\Controllers;

use App\Models\JobRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Employee;
use App\Models\Job;

class JobRequestController extends Controller
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
     * @param  \App\Models\JobRequest  $jobRequest
     * @return \Illuminate\Http\Response
     */
    public function show(JobRequest $jobRequest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\JobRequest  $jobRequest
     * @return \Illuminate\Http\Response
     */
    public function edit(JobRequest $jobRequest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\JobRequest  $jobRequest
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, JobRequest $jobRequest)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\JobRequest  $jobRequest
     * @return \Illuminate\Http\Response
     */
    public function destroy(JobRequest $jobRequest)
    {
        //
    }

    public function jobRequests(){
        $authUser = auth()->user();
        $jobs = Job::all()->where('user_id', $authUser->id);
        $offer = [];
        foreach($jobs as $job){

            foreach($job->requestJob as $req){
                $emp = $req->reqEmployee;
                $employees = $emp->user;
                $emp->jobCategories;
                foreach ($emp->employeeSkill as $skill) {
                    $skill->allSkill;
                }
                if($job->status == 1){
                    if ($req->status == 1){
                        $message = [
                            'job_id' => $job->id,
                            'title' => $job->title,
                            'client_id' => $job->user_id,
                            'employee_user' => $employees,
                            'employee_id' => $emp->employee_id,
                            'employee' => $emp,
                            'application' => $req->status,
                            'letter' => $req->application_letter
                        ];
                        array_push($offer, $message); 
                    }
                }
            }
        }
        if($offer == null){
            return response()->json(['message' => 'No job requests']);
        }
        return response($offer);
    }

    public function jobOffer(){
        $authUser = auth()->user();
        $employee = Employee::all()->where('user_id', $authUser->id)->first();
        $jobOffers = $employee->jobRequests;
        $responseJob = [];
        foreach ($jobOffers as $jobOffer){
            $jobDetail = $jobOffer->detailJob;
            $jobDetail->jobCategory;
            foreach ($jobDetail->jobSkill as $skill) {
                $skill->allSkill;
            }
            if($jobOffer->status == 2){
                $jobDetail->user;
                array_push($responseJob, $jobDetail); 
            }
        }
        if($responseJob == null){
            return response()->json(['message' => 'No job offers']);
        }
        $response = [
            'job' => $responseJob
        ];
        return response($response);
    }

    public function getMyJobProposals(){
        $authUser = auth()->user();
        $jobs = Job::all()->where('user_id', $authUser->id);
        // dd($job->requestJob);
        // $request = $job->jobRequest;
        // $job->user;
        $offer = [];
        $detailJob = [];
        foreach($jobs as $job){
            foreach($job->requestJob as $req){
                // array_push($offer, $req->job_id);
                $emp = $req->reqEmployee;
                $employees = $emp->user;
                if($job->status == 2){
                    if ($req->status == 2){
                        array_push($offer, $employees); 
                        array_push($detailJob, $job); 
                    }
                // array_push($offer, $employees);
                }
            }
        }
        $response = [
            // 'employees' => $req->reqEmployee,
            'employees' => $offer,
            'job' => $detailJob,
        ];
        return response($response);
    }
}
