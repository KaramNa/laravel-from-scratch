<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Validation\Rule;

class RegisterController extends Controller
{
    public function create()
    {
        return view("register.create");
    }

    public function store()
    {
        $att = request()->validate([
            "name" => "required|max:255",
            "username" => "required|max:255|min:3|unique:users,username",
            // "username" => ["required", "max:255", "min:3", Rule::unique("users", "username")],
            "email" => "required|max:255|email",
            "password" => "required|max:255",
        ]);
        // $att["password"] =bcrypt($att["password"]);
        User::create($att);

        return redirect("/")->with("success", "Your account has been created successfully");
    }
}
