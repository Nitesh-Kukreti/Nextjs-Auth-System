"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      const res = await axios.get("api/users/me");
      setUser(res.data.data);
    }
    getUser();
  }, []);

  return (
    <div>
      <h1 className=" mt-5 w-full flex justify-center text-4xl ">
        DASHBOARD PAGE
      </h1>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h3 className="w-full flex justify-center text-2xl">
          hello{` ${user?.username || "user"}`}
        </h3>
        <div className="flex w-full align-middle justify-center">
          <Link
            href="/profile"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
