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
   <main className="min-h-screen flex flex-col items-center justify-center px-4">
     <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

     <h2 className="text-2xl mb-6">Hello {user?.username ?? "User"}</h2>

     <Link
       href="/profile"
       className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-2 rounded-lg"
     >
       Go to Profile
     </Link>
   </main>
 );
}

