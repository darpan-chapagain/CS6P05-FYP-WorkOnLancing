<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\PostSkillController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\JobRequestController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\UserRatingController;
use App\Http\Controllers\JobCategoryController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('me/data', [AuthController::class, 'me']);
    // Route::get('/', [JobsController::class, 'index']);
    // Route::post('add', [JobsController::class, 'add']);
    // Route::get('edit/{id}', [JobsController::class, 'edit']);
    // Route::post('update/{id}', [JobsController::class, 'update']);
    // Route::delete('delete/{id}', [JobsController::class, 'delete']);
});

Route::group(['middleware' => ['auth:sanctum']], function () {
    // Route::post('create', [JobController::class, 'create']);
    // Route::get('edit/{id}', [JobController::class, 'edit']);
    // Route::post('update/{id}', [JobController::class, 'update']);
    // Route::delete('delete/{id}', [JobController::class, 'delete']);
    Route::resource('/job', JobController::class);
    Route::post('update/job/{id}', [JobController::class, 'updateJob']);

    Route::get('/user/jobs/show', [JobController::class, 'myPost']);
    // Route::resource('/jobs/skill', PostSkillController::class);
    Route::get('/employee/check/{id}', [EmployeeController::class, 'checkRequest']);
    Route::post('/employee/request/{id}', [EmployeeController::class, 'requestJob']); //request jobs from posted job
    Route::post('/user/offer/{id}', [UserController::class, 'offerJob']); //offer job to an employee
    Route::get('/user/job/requests', [JobRequestController::class, 'jobRequests']); //this is to get job requests by employer
    Route::get('/user/job/offers', [JobRequestController::class, 'getMyJobProposals']); //this is to get job offer to employer
    Route::get('/employee/offers', [JobRequestController::class, 'jobOffer']); //this is to get job offer to employee
    Route::get('/job/progress/', [JobController::class, 'getInProgressJobs']); //this is to get job in progress
    Route::post('/job/complete/{id}', [JobController::class, 'completeJob']); //this is to complete a job
    Route::post('/user/choose/{userId}/{jobId}', [UserController::class, 'chooseEmployee']); //this is to choose employee
    Route::post('/user/reject/{userId}/{jobId}', [UserController::class, 'rejectEmployee']); //this is to reject employee
    Route::get('/user/job/pending', [UserController::class, 'getPendingJob']); //this is get pending job of status 4
    Route::get('/user/job/started', [UserController::class, 'startedWork']); //this is to started job of status  employee
    Route::get('/employee/job/pending', [EmployeeController::class, 'getPendingJob']);

    Route::post('/employee/accept/job/{jobId}', [EmployeeController::class, 'jobOfferStatus']);
    Route::get('/jobs/all/', [JobController::class, 'getOtherJobs']);
    Route::get('/employee/all/', [EmployeeController::class, 'getOtherEmployee']);
    Route::get('/employee/detail/{id}', [EmployeeController::class, 'getEmployee']);
    Route::post('/employee/update/status', [EmployeeController::class, 'changeStatus']);
    Route::get('/employee/get/status', [EmployeeController::class, 'getStatus']);
    Route::post('/employee/update/job/no', [EmployeeController::class, 'updateJobNo']);
    //get jobs for employees
    Route::get('/employee/get/job/completed', [EmployeeController::class, 'getCompletedJob']);
    Route::get('/employee/get/job/assigned', [EmployeeController::class, 'getAssignedJob']);
    Route::get('/employee/get/job/progress', [EmployeeController::class, 'getInProgressJob']);
    Route::get('/employee/get/job/requested', [EmployeeController::class, 'getRequestedJob']);
    //-----------------
    Route::get('/employee/get/job', [EmployeeController::class, 'getJobNo']);
    Route::get('/employee/get/job/user/{id}', [EmployeeController::class, 'getUserJobNo']);
    Route::get('/employee/get/skill', [EmployeeController::class, 'getEmployeeSkill']);
    Route::post('/employee/update/skill', [EmployeeController::class, 'updateEmployeeSkill']);
    Route::post('/employee/start/job/{id}', [EmployeeController::class, 'startJob']);
    Route::post('/employee/complete/job/{id}', [EmployeeController::class, 'completeJob']);
    Route::post('/user/rating/{id}/{jobId}', [UserController::class, 'rateUser']);
    Route::get('/user/rating/{authId}/{userId}/{jobId}', [UserRatingController::class, 'haveRated']);



    Route::resource('/blog', BlogController::class);
    Route::get('/user/my/blogs/', [BlogController::class, 'myBlog']);

    //this is to accept jos by employee
});
Route::get('/user/blogs/all/{id}', [BlogController::class, 'userBlog']);
Route::get('/blog/get/{id}', [BlogController::class, 'getBlog']);

Route::get('/user/rating/{id}', [UserRatingController::class, 'getUserRating']);

Route::resource('/jobs/category', JobCategoryController::class);
Route::resource('/employee', EmployeeController::class);
// Route::resource('/job', JobController::class);
Route::resource('/skill', SkillController::class);
Route::resource('/user', UserController::class);
Route::post('/user/update/status/{id}', [UserController::class, 'changeStatus']);
Route::get('/user/status/active', [UserController::class, 'getActiveUser']);
Route::post('/job/update/status/{id}', [JobController::class, 'postStatusChange']);
Route::get('/job/status/active', [JobController::class, 'getActivePost']);
