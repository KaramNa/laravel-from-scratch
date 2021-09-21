<x-layout>
    @include('posts._header')

    <main class="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">
        @if ($posts->count() > 0)
            <x-posts-grid :posts="$posts" />
            {{ $posts->links() }}
        @else
            <p class="text-center">There are no posts yet</p>
        @endif

        @if (session()->has('success'))
            <div x-data="{show: true}"
            x-init = "(() => show = false, 4000)"
            x-show = "show"
            class="bg-blue-500 bottom-3 fixed px-3 py-2 right-3 rounded-xl text-white">
                {{ session('success') }}
            </div>
        @endif
        <x-fsda />
    </main>
<div class="text"></div>
</x-layout>
