<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Auth;
class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $users = DB::table('users')->where('role' , '0')->get();

        // return view('pages/users')->with('users', $users)->with('i', (request()->input('page', 1) - 1) * 5);
        
        // return view('pages/users');

         $users = User::all()->where('role' , '0');
 
        return view('pages/users', compact('users'))->with('i', (request()->input('page', 1) - 1) * 5);
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
         $request->validate([
            'username' => 'required|string|max:255',
            'fullnames' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|confirmed|min:8',
        ]);
         Auth::login($user = User::create([
            'fullnames' => $request->fullnames,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]));
         // User::create($request->all());
         // return redirect(route('verify-email'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
         // $users = Users::find($id);
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
        $validate=$request->validate([
            'password' => 'min:8',
            'email' => 'required|email',
        ]);
        $user = User::find($request->input('id'));
        $user->username = $request->input('username');
        $user->fullnames = $request->input('fullnames');
        $user->email = $request->input('email');
        if($request->input('password')==''){
            $user->password=$user->password;
        }else{
            $user->password=bcrypt($request->input('password'));
        }

        $user->save();
        // var_dump($user);
        return redirect()->back()->with('info','User updated successfully');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::delete('DELETE FROM users WHERE id = ?', [$id]); 
        return redirect()->back()->with('success', 'Deleted sucessfully');
    }
}
