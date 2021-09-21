<?php

namespace App\Models;

use App\Models\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;

    protected $with = [
        "category", "author"
    ];

    protected $fillable = [
        "title",
        "excerpt",
        "published_at",
        "body",
        "slug",
        "category_id",
        "user_id",
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class, "user_id");
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters["search"] ?? false, fn ($query, $search) =>
        $query->where(fn ($query) =>
        $query->where("title", "like", "%" . $search . "%")
            ->orwhere("body", "like", "%" . $search . "%")));


        $query->when($filters["category"] ?? false, fn ($query, $category) =>
        $query->whereHas("category", fn ($query) =>
        $query->where("slug", $category)));

        // $query
        //     ->whereExists((fn ($query) =>
        //         $query->from("categories")
        //         ->whereColumn("categories.id", "posts.category_id")
        //             ->where("categories.slug", $category))
        //     ));

        $query->when($filters["author"] ?? false, fn ($query, $author) =>
        $query->whereHas("author", fn ($query) =>
        $query->where("users.name", $author)));
    }
}
