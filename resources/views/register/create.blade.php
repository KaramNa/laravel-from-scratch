<x-layout>
    <section class="px-6 py-8">

        <main class="max-w-lg mx-auto mt-10">
            <form action="/register" method="POST" class="bg-gray-100 rounded border border-gray-200 p-10 shadow-2xl">
                @csrf
                <h1 class="text-center text-lg font-bold mb-10">Register</h1>
                <div class="mb-6">
                    <label for="username" class="block mb-2 uppercase font-bold text-xs text-gray-700">
                        Username
                    </label>
                    <input type="text" name="username" class="border border-gray-400 p-2 w-full">
                    @error('username')
                        <p class="text-red-500 text-sm">{{ $message }}</p>
                    @enderror
                </div>
                <div class="mb-6">
                    <label for="name" class="block mb-2 uppercase font-bold text-xs text-gray-700">
                        Name
                    </label>
                    <input type="text" name="name" class="border border-gray-400 p-2 w-full">
                    @error('name')
                        <p class="text-red-500 text-sm">{{ $message }}</p>
                    @enderror
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 uppercase font-bold text-xs text-gray-700">
                        Email
                    </label>
                    <input type="email" name="email" class="border border-gray-400 p-2 w-full">
                    @error('email')
                        <p class="text-red-500 text-sm">{{ $message }}</p>
                    @enderror
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 uppercase font-bold text-xs text-gray-700">
                        Password
                    </label>
                    <input type="password" name="password" class="border border-gray-400 p-2 w-full">
                    @error('password')
                        <p class="text-red-500 text-sm">{{ $message }}</p>
                    @enderror
                </div>
                <div class="mb-6">
                    <button type="submit"
                        class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500">Submit</button>
                </div>

            </form>
        </main>
    </section>

</x-layout>
