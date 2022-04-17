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
use App\Models\UserRoles;
use App\Models\Employee_Skill;
use App\Models\Payment;
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
        $users = User::all();

        foreach ($users as $user) {
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
            }
        }

        return response()->json($users);
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $user = User::find($id);
        $role = UserRoles::all()->where('user_id', $user->id)->first();
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->phone_no = $request->phone_no;
        $user->password = bcrypt($request->password);
        $user->Address = $request->Address;
        $user->City = $request->city;
        $user->Province = $request->province;
        $user->gender = $request->gender;
        $user->about = $request->about;
        $user->save();
        if ($role->role_id == 3) {

            $employee = Employee::all()->where('user_id', $user->id)->first();





            if ($request->project_rate != 'null') {
                $pr = $request->project_rate;
            }
            $categories = JobCategory::all()->where('category_name', $request->category)->first();
            dd($request->first_name);

            $employee->title = $request->title;
            $employee->qualification = $request->qualification;
            $employee->experience = $request->experience;
            $employee->project_rate = $pr;
            $employee->employee_type = $request->employee_type;
            $employee->Job_Category_ID = $categories->job_category_id;
            $employee->education = $request->education;

            if ($request->file('profile')) {
                $file = $request->file('profile');
                $profile_name = date('YmdHi') . $file->getClientOriginalName();
                $file->move(public_path('images'), $profile_name);
                $profile_path = 'images/' . $profile_name;

                $employee->profile = $profile_name;
                $employee->profile_path = $profile_path;
            }

            $employee->save();
            // $empID = $user->employee->employee_id;


            if ($request->skill) {
                $delete = Employee_Skill::where('employee_id', $employee->employee_id)->delete();

                foreach ($request->skill as $sk) {
                    $skills = Skill::all()->where('skill', $sk)->first();
                    $employeeSkill = Employee_Skill::create([
                        'skill_id' => $skills->id,
                        'employee_id' => $employee->employee_id,
                    ]);
                }
            }
        }

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
        }

        $response = [
            'updated_user' => $user,
            'message' => 'sucess',
        ];

        return response()->json($response);
    }

    public function updateUser(Request $request, $id)
    {
        $user = User::find($id);
        $role = UserRoles::all()->where('user_id', $user->id)->first();
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->phone_no = $request->phone_no;
        $user->password = bcrypt($request->password);
        $user->Address = $request->Address;
        $user->City = $request->city;
        $user->Province = $request->province;
        $user->gender = $request->gender;
        $user->about = $request->about;
        if ($request->file('profile')) {
            $file = $request->file('profile');
            $profile_name = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('images'), $profile_name);
            $profile_path = 'images/' . $profile_name;

            $user->profile = $profile_name;
            $user->profile_path = $profile_path;
        }
        $user->save();
        if ($role->role_id == 3) {

            $employee = Employee::all()->where('user_id', $user->id)->first();





            if ($request->project_rate != 'null') {
                $pr = $request->project_rate;
            }
            $categories = JobCategory::all()->where('category_name', $request->category)->first();
            // dd($request->first_name);

            $employee->title = $request->title;
            $employee->qualification = $request->qualification;
            $employee->experience = $request->experience;
            $employee->project_rate = $pr;
            $employee->employee_type = $request->employee_type;
            $employee->Job_Category_ID = $categories->job_category_id;
            $employee->education = $request->education;



            $employee->save();
            // $empID = $user->employee->employee_id;


            if ($request->skill) {
                $delete = Employee_Skill::where('employee_id', $employee->employee_id)->delete();

                foreach ($request->skill as $sk) {
                    $skills = Skill::all()->where('skill', $sk)->first();
                    $employeeSkill = Employee_Skill::create([
                        'skill_id' => $skills->id,
                        'employee_id' => $employee->employee_id,
                    ]);
                }
            }
        }

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
        }

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
        // dd($request->idx);
        $employee = Employee::all()->where('user_id', $id)->first();
        // dd($employee->employee_id);
        $jobRequest = JobRequest::all()
            ->where('employee_id', $employee->employee_id)
            ->where('job_id', $jobId)
            ->first();
        $jobRequest->status = 4;
        $otherRequests = JobRequest::where('job_id', $jobId)
            ->where('job_employement_id', '!=', $jobRequest->job_employement_id)->get();
        // $otherRequests->update(['status' => 3]);
        $job = Job::find($jobId);
        $job->status = 4;
        // dd($request->project_rate);
        $payment = new Payment([
            'user_id' => $jobId,
            'employee_id' => $employee->employee_id,
            'total' => $request->project_rate,
            'discount' => $request->discount,
            'sub_total' => $request->sub_amount,
            'idx' => $request->idx,
            'token' => $request->token,
            'product_name' => $request->product_name,
            'job_id' =>  $request->jobId,
            'status' => 0,

        ]);
        $payment->save();
        // dd($payment);
        $jobRequest->save();
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
                if ($request->badges != null) {
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

    public function paymentVerification(Request $request)
    {

        $args = http_build_query(array(
            'token' => $request->token,
            'amount' => $request->amount,
        ));

        $url = "https://khalti.com/api/v2/payment/verify/";

        # Make the call using API.
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $args);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        $headers = ['Authorization: Key test_secret_key_2546ca1de93841e8b7efae2ca5e2c6f6'];
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        // Response
        $response = curl_exec($ch);
        $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        $response = json_decode($response, true);

        return response()->json($response);
    }

    
}
