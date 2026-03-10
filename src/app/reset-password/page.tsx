"use client";

import { useState } from "react";

export default function ResetPassword() {
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    console.log(form);
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-80 p-6 border rounded-lg bg-white"
      >
        <h1 className="text-2xl font-bold text-center text-black">
          Reset Password
        </h1>

        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          onChange={handleChange}
          className="border p-2 rounded text-black from-neutral-600"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          className="border p-2 rounded text-black from-neutral-600"
        />

        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
          Reset Password
        </button>
      </form>
    </main>
  );
}
