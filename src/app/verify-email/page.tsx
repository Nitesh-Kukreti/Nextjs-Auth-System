"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verify-email", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    } else {
      setLoading(false);
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Email Verification
        </h1>

        {/* Loading */}
        {loading && <p className="text-gray-600">Verifying your email...</p>}

        {/* Success */}
        {verified && (
          <div className="space-y-4">
            <p className="text-green-600 text-lg font-semibold">
              ✅ Your email has been verified!
            </p>

            <Link
              href="/login"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition"
            >
              Go to Login
            </Link>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="space-y-4">
            <p className="text-red-600 text-lg font-semibold">
              ❌ Email verification failed
            </p>

            <Link
              href="/signup"
              className="inline-block bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-md transition"
            >
              Try Signup Again
            </Link>
          </div>
        )}

        {/* Debug token display (optional) */}
        {token && (
          <p className="mt-6 text-xs text-gray-400 break-all">Token: {token}</p>
        )}
      </div>
    </div>
  );
}
