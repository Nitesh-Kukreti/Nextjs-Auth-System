"use client";

import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true)
      const res = await axios.post("/api/users/forgot-password", {
        email: email,
      });
      console.log("Password reset email sent", res.data);
    } catch (error: any) {
      console.log(
        "Failed to reset password",
        error.response || "something went wrong",
      );
      console.log(error.response.data)
    }finally{setLoading(false)}

  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-80 p-6 border rounded-lg bg-white"
      >
        <h1 className="text-2xl font-bold text-center text-black">
          {loading ? "Processing..." : "Forgot Password"}
        </h1>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded text-black from-neutral-600"
        />

        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Send Reset Link
        </button>
      </form>
    </main>
  );
}
