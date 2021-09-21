<?php

namespace App\Models;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\File;
use Spatie\YamlFrontMatter\YamlFrontMatter;

class Post
{

    public $title;
    public $slug;
    public $excerpt;
    public $body;
    public $date;

    public function __construct($title, $slug, $excerpt, $body, $date)
    {
        $this->title = $title;
        $this->slug = $slug;
        $this->excerpt = $excerpt;
        $this->body = $body;
        $this->date = $date;
    }

    public static function find($slug)
    {
        return static::all()->firstWhere("slug", $slug);
    }

    public static function findOrFail($slug)
    {
        $post = static::find($slug);
        if(!$post)
        throw new ModelNotFoundException();
        return $post;
    }

    public static function all()
    {
        return cache()->rememberForever("post.all", function () {
            return collect(File::files(resource_path("posts/")))
                ->map(fn ($file) => $file = YamlFrontMatter::parseFile($file))
                ->map(fn ($document) => new Post(
                    $document->title,
                    $document->slug,
                    $document->excerpt,
                    $document->body(),
                    $document->date,
                ))
                ->sortByDesc("date");
        });
    }
}
