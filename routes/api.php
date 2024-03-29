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
use App\Http\Controllers\ChatController;
use App\Http\Controllers\EmployeeBadgesController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\WorkBadgesController;
use Illuminate\Support\Facades\Mail;

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
});

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::resource('/job', JobController::class);
    Route::post('update/job/{id}', [JobController::class, 'updateJob']);

    Route::get('/user/jobs/show', [JobController::class, 'myPost']);
    Route::get('/employee/check/{id}', [EmployeeController::class, 'checkRequest']);
    Route::post('/employee/request/{id}', [EmployeeController::class, 'requestJob']);
    Route::post('/user/offer/{id}', [UserController::class, 'offerJob']); 
    Route::get('/user/job/requests', [JobRequestController::class, 'jobRequests']); 
    Route::get('/user/job/offers', [JobRequestController::class, 'getMyJobProposals']); 
    Route::get('/employee/offers', [JobRequestController::class, 'jobOffer']); 
    Route::get('/job/progress/', [JobController::class, 'getInProgressJobs']); 
    Route::post('/job/complete/{id}', [JobController::class, 'completeJob']);
    Route::post('/user/choose/{userId}/{jobId}', [UserController::class, 'chooseEmployee']); 
    Route::post('/user/reject/{userId}/{jobId}', [UserController::class, 'rejectEmployee']); 
    Route::get('/user/job/pending', [UserController::class, 'getPendingJob']); 
    Route::get('/user/job/started', [UserController::class, 'startedWork']); 
    Route::get('/employee/job/pending', [EmployeeController::class, 'getPendingJob']);

    Route::post('/employee/accept/job/{jobId}', [EmployeeController::class, 'jobOfferStatus']);
    Route::get('/jobs/all/', [JobController::class, 'getOtherJobs']);
    Route::get('/employee/all/', [EmployeeController::class, 'getOtherEmployee']);
    Route::get('/employee/detail/{id}', [EmployeeController::class, 'getEmployee']);
    Route::post('/employee/update/status', [EmployeeController::class, 'changeStatus']);
    Route::get('/employee/get/status', [EmployeeController::class, 'getStatus']);
    Route::post('/employee/update/job/no', [EmployeeController::class, 'updateJobNo']);
    Route::get('/employee/get/job/completed', [EmployeeController::class, 'getCompletedJob']);
    Route::get('/employee/get/job/assigned', [EmployeeController::class, 'getAssignedJob']);
    Route::get('/employee/get/job/progress', [EmployeeController::class, 'getInProgressJob']);
    Route::get('/employee/get/job/requested', [EmployeeController::class, 'getRequestedJob']);
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


    Route::get('/chat/rooms', [ChatController::class, 'rooms']);
    Route::get('/chat/my/rooms', [ChatController::class, 'getMyRoom']);
    Route::post('/chat/start/', [ChatController::class, 'createRoom']);
    Route::get('/chat/rooms/{roomId}/messages', [ChatController::class, 'messages']);
    Route::post('/chat/rooms/{roomId}/message', [ChatController::class, 'newMessage']);



    Route::resource('/badges', WorkBadgesController::class);

    Route::get('/admin/roles', [RoleController::class, 'getUserByRoles']);
    Route::get('/admin/requests', [RoleController::class, 'getRequests']);
    Route::get('/admin/payment', [RoleController::class, 'getPayments']);
    Route::post('/admin/payment/update', [RoleController::class, 'updatePayment']);

    Route::post('/verify', [UserController::class, 'paymentVerification']);
});

Route::resource('/skill', SkillController::class);

Route::resource('/jobs/category', JobCategoryController::class);

Route::get('/user/blogs/all/{id}', [BlogController::class, 'userBlog']);
Route::get('/blog/get/{id}', [BlogController::class, 'getBlog']);

Route::get('/user/rating/{id}', [UserRatingController::class, 'getUserRating']);

Route::resource('/employee', EmployeeController::class);
Route::resource('/user', UserController::class);
Route::post('/user/update/status/{id}', [UserController::class, 'changeStatus']);
Route::post('/user/update/all/{id}', [UserController::class, 'updateUser']);
Route::get('/user/status/active', [UserController::class, 'getActiveUser']);
Route::post('/job/update/status/{id}', [JobController::class, 'postStatusChange']);
Route::get('/job/status/active', [JobController::class, 'getActivePost']);

Route::get('/category/badges/{id}', [WorkBadgesController::class, 'getBadgesByCategory']);
Route::get('/badges/employee/{id}', [EmployeeBadgesController::class, 'getBadgesByEmployee']);
