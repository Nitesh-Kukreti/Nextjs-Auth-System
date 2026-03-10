"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-6">Welcome</h1>

      <p className="text-lg text-gray-600 mb-8">
        Full authentication system built with Next.js
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-500 text-white px-9 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 hover:text-black transition"
        >
          Sign Up
        </Link>
      </div>
    </main>
  );
}
