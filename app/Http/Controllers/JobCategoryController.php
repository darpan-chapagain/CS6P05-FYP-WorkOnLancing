<?php

namespace App\Http\Controllers;

use App\Models\JobCategory;
use Illuminate\Http\Request;

class JobCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $jobCategory = JobCategory::all()->toArray();
        return $jobCategory;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
        // $i = 0;
        // foreach($request as $req){
        //     $jobCategory = new JobCategory([
        //         'skill' =>  $req,
        //     ]);
        //     $i+=1;
        // 
        // }
        dd('test');
        $jobCategory = new JobCategory([
            'category_name' =>  $request->category,
        ]);

        $jobCategory->save();

        $response = ['job_category' => $jobCategory];
        return response()->json($response);
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
        // dd('test');
        $jobCategory = new JobCategory([
            'category_name' =>  $request->category,
        ]);

        $jobCategory->save();

        $response = ['job_category' => $jobCategory];
        return response()->json($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\JobCategory  $jobCategory
     * @return \Illuminate\Http\Response
     */
    public function show(JobCategory $jobCategory)
    {
        $jobCategory = JobCategory::all();

        $response = [
            'job_category' => $jobCategory
        ];
        return response()->json($response);    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\JobCategory  $jobCategory
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $jobCategory = JobCategory::find($id);
        $response = [
            'job_category' => $jobCategory
        ];
        return response()->json($jobCategory);    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\JobCategory  $jobCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, JobCategory $jobCategory, $id)
    {
        $jobCategory = JobCategory::find($id)->update($request->all());
        // $job->update($request->all());

        return response()->json('The job category successfully updated');    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\JobCategory  $jobCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(JobCategory $jobCategory, $job_category_id)
    {
        $jobCategory = JobCategory::where('job_category_id', $job_category_id)->delete();

        return response()->json('The category successfully deleted');
    }
}
