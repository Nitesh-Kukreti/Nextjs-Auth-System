"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const router = useRouter();
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [token, setToken] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (form.newPassword !== form.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const res = await axios.post("/api/users/reset-password", {
        token,
        newPassword: form.newPassword,
      });

      console.log(res.data);
      router.push("/login");
    } catch (error: any) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

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
