<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use Illuminate\Support\Facades\Hash;

class HomeController extends Controller
{
   	public function index(){
   		// $user = user::find(Auth::user()->id);
   		return view('pages/index');
   	}
   	public function account(Request $request){
   		 $validate = $request->validate([
    		 'username' => 'required',
    		 'fullnames' => 'required',
    		 'email' =>' required|email',
    		 'password' => 'required'
    	  ]);	

   		$user = user::find(Auth::user()->id);

    	if($user){
			$user->username=$request['username'];
			$user->fullnames=$request['fullnames'];
			$user->email=$request['email'];

			if($request['password']==''){
				$user->password=$user->password;

			}else{
			// check if the current password matches the one in the database
			$check=Hash::check( $request['currentpassword'], $user->password);

				if($check)
				{
		 			$user->password=bcrypt($request['password']);
    			}else{
					return redirect()->back()->with('error','Current password is incorrect');
				}	
			}
			$user->save();
			return redirect()->back()->with('success','updated successfully!');

   	}
}
}
