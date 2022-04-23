<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Employee;
use App\Models\UserRoles;
use Illuminate\Http\Request;
use App\Models\JobCategory;
use App\Models\Skill;
use App\Models\Employee_JobCategory;
use App\Models\Employee_Skill;
use App\Models\UserCategory;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Session;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $fields = $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed',
            'role_id' =>  'required'
        ]);

        $profile_name = '202204201136admin.png';
        $profile_path = 'images/202204201136admin.png';

        if ($request->file('profile')) {
            $file = $request->file('profile');
            $profile_name = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('images'), $profile_name);
            $profile_path = 'images/' . $profile_name;
        }
        try {
            $user = User::create([
                'first_name' => $fields['first_name'],
                'last_name' => $fields['last_name'],
                'email' => $fields['email'],
                'password' => bcrypt($fields['password']),
                'profile' => $profile_name,
                'profile_path' => $profile_path,
                'phone_no' => $request->phone_no,
                'Address' => $request->Address,
                'City' => $request->city,
                'Province' => $request->province,
                'gender' => $request->gender,
                'about' => $request->about,
                'birth_date' => $request->dob

            ]);
            $userRole = UserRoles::create([
                'user_id' => $user->id,
                'role_id' => $fields['role_id']
            ]);

            $token = $user->createToken('myapptoken')->plainTextToken;
            $success = true;
            $message = 'User register successfully';
        } catch (\Illuminate\Database\QueryException $ex) {
            $success = false;
            $message = $ex->getMessage();
            $token = null;
        }

        try {
            if ($fields['role_id'] == 3) {
                $categories = JobCategory::all()->where('category_name', $request->category)->first();
                $employee = Employee::create([
                    'user_id' => $user->id,
                    'title' => $request->title,
                    'qualification' => $request->qualification,
                    'experience' => $request->experience,
                    'employee_type' => $request->employee_type,
                    'Job_Category_ID' => $categories->job_category_id,
                    'education' => $request->education,
                    'project_rate' => $request->project_rate,
                ]);

                foreach ($request->skill as $sk) {
                    $skills = Skill::all()->where('skill', $sk)->first();
                    $employeeSkill = Employee_Skill::create([
                        'skill_id' => $skills->id,
                        'employee_id' => $employee->employee_id,
                    ]);
                }
                $type = 'employee';
            } else {
                $type = 'user';
            }
        } catch (\Illuminate\Database\QueryException $ex) {
            $success = false;
            $message = $ex->getMessage();
            $token = null;
        }

        $response = [
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);
    }

    public function logout(Request $request)
    {

        try {
            Session::flush();
            auth()->user()->tokens()->delete();
            // Auth::logout();
            $success = true;
            $message = 'Successfully logged out';
        } catch (\Illuminate\Database\QueryException $ex) {
            $success = false;
            $message = $ex->getMessage();
        }


        $response = [
            'test' => Auth::user(),
            'success' => $success,
            'message' => $message,
        ];
        return response()->json($response);
    }

    public function login(Request $request)
    {

        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (Auth::attempt($credentials)) {
            $success = true;
            $message = 'User login successfully';
            $user = User::where('email', $fields['email'])->first();
            $token = $user->createToken('myapptoken')->plainTextToken;
        } else {
            $success = false;
            $message = 'Unauthorised';
            $token = null;
            $user = null;
        }


        $response = [
            'user' => $user,
            'token' => $token,
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);
    }
    public function me()
    {
        $data = auth()->user();
        $data->roles;
        $emp = $data->employee;
        if ($emp) {
            $emp->jobCategories;
            foreach ($emp->employeeSkill as $skill) {
                $skill->allSkill;
            }
        }

        $role = UserRoles::all()->where('user_id', $data->id)->first();
        $message = [
            'user' => $data,
            'role' => $role->role_id,
        ];
        return $message;
    }
}
