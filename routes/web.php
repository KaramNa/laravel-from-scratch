<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RegisterController;

Route::get('/', [PostController::class, "index"])->name('home');
Route::get('/', [PostController::class, "index"])->name('home');
Route::get('/register',[RegisterController::class, "create"]);
Route::post('/register',[RegisterController::class, "store"]);









// Route::get('category/{category:slug}', function(Category $category){
//     return view('posts', [
//         "posts" => $category->posts,
//         "currentCategory" => $category,
//         "categories" => Category::all()


//     ]);
// });

// Route::get('author/{author}', function(User $author){
//     return view('posts', [
//         "posts" => $author->posts
//     ]);  
// });