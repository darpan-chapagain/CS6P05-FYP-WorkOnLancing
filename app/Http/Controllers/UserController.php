<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Job;
use App\Models\Employee;
use App\Models\EmployeeBadges;
use App\Models\JobRequest;
use App\Models\JobCategory;
use App\Models\Skill;
use App\Models\PostSkill;
use App\Models\UserRating;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Session;
// use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::all()->toArray();
        return array_reverse($user);
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        $user->roles;
        $emp = $user->employee;
        // $emp->employeeSkill;
        // $emp->jobCategories;
        // $user->jobs;
        if ($emp) {
            $skill = $emp->employeeSkill;
            $category = $emp->jobCategories;
            foreach ($skill as $sk) {
                $sk->allSkill;
            }
            $badges = $emp->badgeRatings;

            foreach ($badges as $bg) {
                $bg->workBadges;
            }
        } else {
            $skill = null;
            $category = null;
            $badges = null;
        }

        return response()->json($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $user = User::find($id);
        $response = [
            'user' => $user
        ];
        return response()->json($response);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $user = User::find($id)->update($request->all());
        $response = [
            'updated_user' => $user,
            'message' => 'sucess',
        ];

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();

        $response = [
            'user' => 'user',
            'message' => 'sucess',
        ];

        return response()->json($response);
    }

    public function changeStatus($id)
    {
        $user = User::find($id);
        $status = $user->status;
        if ($status == 1) {
            $update = 2;
        } else {
            $update = 1;
        }
        $user->update([
            'status' => $update
        ]);
        $response = [
            'user' => $user,
            'status' => $user->status,
        ];
        return response()->json($response);
    }

    public function getActiveUser()
    {
        // $user = User::where('status', '=', 1)->get();
        $user = User::all()->where('status', '=', 1)->first();
        $response = [
            'active_user' => $user,
        ];
        return response()->json($response);
    }

    public function offerJob(Request $request, $id)
    {
        $authUser = auth()->user();
        // $employee = User::find($id);

        $authUserId = $authUser->id;
        // $employeeUserId = $employee->user->id;
        $employee = Employee::all()->where('user_id', $id)->first();
        // dd($job->id);
        // dd($employee->employee_id);
        // dd($authUserId, $employeeUserId);
        $categories = JobCategory::all()->where('category_name', $request->category)->first();

        // dd($employee);
        if ($authUserId != $id) {
            $job = Job::create([
                'user_id' => $authUserId,
                'title' =>  $request->title,
                'description' =>  $request->description,
                'size' =>  $request->size,
                'time' =>  Carbon::parse($request->time)->toDateTimeString(),
                'experience' =>  $request->experience,
                // 'salary_offered' =>  $request->salary_offered,
                'job_category_id' => $categories->job_category_id,
                'status' => 2,

            ]);
            $job->save();
            foreach ($request->skill as $sk) {
                // dd($sk);
                $skills = Skill::all()->where('skill', $sk)->first();
                $jobSkill = PostSkill::create([
                    'skill' => $skills->id,
                    'job' => $job->id,
                ]);
            }

            $jobRequest = new JobRequest([
                'employee_id' => $employee->employee_id,
                'job_id' => $job->id,
                'status' => 2,
            ]);

            $jobRequest->save();
            $response = [
                'job' => $job,
                'job_request' => $jobRequest,
                'message' => 'success',
            ];
            $details = [
                'fname' => $employee->user->first_name,
                'lname' => $employee->user->last_name,
                'job' => $job->title,
            ];
            Mail::to($employee->user->email)->send(new \App\Mail\OfferMail($details));
    
        } else {
            $response = [
                'message' => 'Error: Unauthorized',
            ];
        }
        return response()->json($response);
    }

    public function chooseEmployee(Request $request, $id, $jobId)
    {
        $authUser = auth()->user();
        $employee = Employee::all()->where('user_id', $id)->first();
        // dd($employee->employee_id);
        $jobRequest = JobRequest::all()
            ->where('employee_id', $employee->employee_id)
            ->where('job_id', $jobId)
            ->first();
        $jobRequest->status = 4;
        $jobRequest->save();
        $otherRequests = JobRequest::where('job_id', $jobId)
            ->where('job_employement_id', '!=', $jobRequest->job_employement_id)->get();
        // $otherRequests->update(['status' => 3]);
        $job = Job::find($jobId);
        $job->status = 4;
        $job->save();
        $details = [
            'fname' => $employee->user->first_name,
            'lname' => $employee->user->last_name,
            'job' => $job->title,
        ];
        Mail::to($employee->user->email)->send(new \App\Mail\HiredMail($details));

        foreach ($otherRequests as $otherRequest) {
            $otherRequest->status = 3;
            $otherRequest->update();
            $employee = Employee::find($otherRequest->employee_id);
            // dd($employee->user->email);
            $details = [
                'fname' => $employee->user->first_name,
                'lname' => $employee->user->last_name,
                'job' => $job->title,
            ];
            Mail::to($employee->user->email)->send(new \App\Mail\NotHiredMail($details));
        }
        $jobRequest->save();

        $response = [
            'status' => 'success',
        ];

        return response()->json($response);
    }

    public function getPendingJob(Request $request)
    {
        $userID = auth()->user()->id;
        // dd($userID);
        $jobs = Job::all()->where('user_id', $userID);
        $pending_jobs = [];
        foreach ($jobs as $job) {
            $job->user;
            $job->jobCategory;
            $req = $job->requestJob;
            foreach ($job->jobSkill as $skill) {
                // dd($skill->skillJob);
                $skill->allSkill;
            }
            foreach ($req as $ob) {
                $ob->reqEmployee->user;
                if ($ob->status == 4) {
                    array_push($pending_jobs, $job);
                }
            }
        }
        return response()->json($pending_jobs);
    }

    public function startedWork(Request $request)
    {
        $userID = auth()->user()->id;
        // dd($userID);
        $jobs = Job::all()->where('user_id', $userID);
        $pending_jobs = [];
        foreach ($jobs as $job) {
            $job->user;
            $job->jobCategory;
            $req = $job->requestJob;
            foreach ($job->jobSkill as $skill) {
                // dd($skill->skillJob);
                $skill->allSkill;
            }
            foreach ($req as $ob) {
                $ob->reqEmployee->user;
                if ($ob->status == 5 or $ob->status == 6) {
                    array_push($pending_jobs, $job);
                }
            }
        }
        return response()->json($pending_jobs);
    }


    public function rejectEmployee(Request $request, $id, $jobId)
    {
        $authUser = auth()->user();
        $employee = Employee::all()->where('user_id', $id)->first();
        // dd($employee->employee_id);
        $jobRequest = JobRequest::all()
            ->where('employee_id', $employee->employee_id)
            ->where('job_id', $jobId)
            ->first();
        $jobRequest->status = 3;
        $jobRequest->save();
        $job = Job::find($jobId)->first();
        // dd($job->title);
        $details = [
            'fname' => $employee->user->first_name,
            'lname' => $employee->user->last_name,
            'job' => $job->title,
        ];
        Mail::to($employee->user->email)->send(new \App\Mail\NotHiredMail($details));
        $response = [
            'status' => 'success',
        ];

        return response()->json($response);
    }


    public function completeJob(Request $request, $id, $jobId)
    {
        $authUser = auth()->user();
        $employee = Employee::all()->where('user_id', $id)->first();
        $jobRequest = JobRequest::all()
            ->where('employee_id', $employee->employee_id)
            ->where('job_id', $jobId)
            ->first();
        $jobRequest->status = 6;
        $jobRequest->save();
        $response = [
            'status' => 'success',
        ];
        return response()->json($response);
    }

    public function jobInProgress(Request $request)
    {
        $userID = auth()->user()->id;
        // dd($userID);
        $jobs = Job::all()->where('user_id', $userID);
        $progress_jobs = [];
        foreach ($jobs as $job) {
            $job->user;
            $req = $job->requestJob;
            foreach ($req as $ob) {
                if ($ob->status == 5 or $ob->status == 6) {
                    array_push($pending_jobs, $job);
                }
            }
        }
        return response()->json($progress_jobs);
    }

    public function rateUser(Request $request)
    {

        $authUser = auth()->user();
        // dd($request->job_id);
        $job = Job::find($request->job_id);
        if ($job->status == 4) {
            if ($authUser != $request->user) {
                $userRating = new UserRating([
                    'auth_user_id' => $authUser->id,
                    'user_id' =>  $request->user,
                    'job_id' => $request->job_id,
                    'rating' => $request->rating,
                    'description' => $request->description,
                ]);
                if($request->badges != null){
                    foreach ($request->badges as $badge) {
                        $employeeBadge = new EmployeeBadges();
                        $employeeBadge->employee_id =  $request->employee_id;
                        $employeeBadge->work_badge_id = $badge;
                        $employeeBadge->save();
                    }
                }
                $user = User::find($request->user);
                $userRating->save();
                $userRatings = UserRating::where('user_id', $request->user)->get();
                // dd($userRating);
                $totalRate = 0;
                $count = 0;
                foreach ($userRatings as $rating) {
                    $totalRate += $rating->rating;
                    $count++;
                }
                $average = $totalRate / $count;
                $user->rating = $average;
                $user->update();

                $response = [
                    'message' => 'success'
                ];
            } else {
                $response = [
                    'message' => 'unauthorized'
                ];
            }
        } else {
            $response = [
                'message' => 'unauthorized'
            ];
        }


        return response()->json($userRating);
    }
}
