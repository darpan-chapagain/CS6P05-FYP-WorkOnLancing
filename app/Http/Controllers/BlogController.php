<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blog = Blog::all()->toArray();
        return array_reverse($blog);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)

    {
        $userID = auth()->user()->id;

        $profile_name = '202203281818DSC00425.JPG';
        $profile_path = 'images/202203281818DSC00425.jpg';

        if ($request->file('profile')) {
            $file = $request->file('profile');
            $profile_name = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('images'), $profile_name);
            $profile_path = 'posts/' . $profile_name;
        }
        dd($request->description);
        $blog = new Blog([
            'user_id' => $userID,
            'title' => $request->title,
            'detail' => $request->description, 
            'img' =>  $profile_name,
            'img_path' => $profile_path,
            'type' => $request->type,
        ]);
        $blog->save();

        $response = [
            'blog' => $blog,
            'message' => 'success',
        ];
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
        $userID = auth()->user()->id;

        $profile_name = '202203281818DSC00425.JPG';
        $profile_path = 'images/202203281818DSC00425.jpg';

        if ($request->file('profile')) {
            $file = $request->file('profile');
            $profile_name = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('posts'), $profile_name);
            $profile_path = 'posts/' . $profile_name;
        }
        // dd($profile_path);
        $blog = new Blog([
            'user_id' => $userID,
            'title' => $request->title,
            // 'thumb' => $reThumbImage,
            // 'full_img' => $reThumbImage,
            'detail' => $request->description, 
            'img' =>  $profile_name,
            'img_path' => $profile_path,
            'type' => $request->type,
        ]);
        $blog->save();

        $response = [
            'blog' => $blog,
            'message' => 'success',
        ];
        return response()->json($response);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $blog = Blog::all();

        $response = [
            'all blogs' => $blog
        ];
        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $blog = Blog::find($id);
        $user = $blog->user;
        $roles = $user->roles;
        $roles->role;
        $response = [
            'blog' => $blog
        ];
        return response()->json($response);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $blog = Blog::find($id)->update($request->all());
        // $job->update($request->all());

        return response()->json('The post successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog, $id)
    {
        $blog = Blog::find($id);
        $blog->delete();

        return response()->json('The blog successfully deleted');
    }

    public function myBlog()
    {
        $userID = auth()->user()->id;
        $blog = Blog::all()->where('user_id', $userID);
        $response = [
            'blog' => $blog
        ];
        return response()->json($response);
    }

    public function getUserBlog($id){
        $user = User::all()->where('id', $id)->first();
        $blog = $user->blogs;
        $response = [
            'blog' => $blog
        ];
        return response()->json($response);
    }

    public function userBlog($id){
        // dd('test');
        $blog = Blog::where('user_id', $id)->orderBy('id', 'DESC')->get();

        $response = [
            'blog' => $blog
        ];
        return response()->json($response);
    }

    public function getBlog($id)
    {
        //
        $blog = Blog::find($id);
        $user = $blog->user;
        $roles = $user->roles;
        $roles->role;
        $response = [
            'blog' => $blog
        ];
        return response()->json($response);
    }
}
