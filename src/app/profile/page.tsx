

"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      const res = await axios.get("api/users/me");
      setUser(res.data.data);
    }
    getUser();
  }, []);

  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

    const getProfileUrl = async () => {
      router.push(`/profile/${user?._id}`)
    };

    const deleteUser =async () => {
      const res = await axios.delete("api/users/delete")
      
      router.push("/signup")

    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-black text-center mb-6">Profile</h1>

        <div className="space-y-4">
          <div>
            <p className=" text-lg font-bold text-black">Username</p>
            <p className="text-lg font-semibold text-gray-400">
              {user?.username || "username"}
            </p>
          </div>

          <div>
            <p className="text-lg font-bold text-black">Email</p>
            <p className="text-lg font-semibold text-gray-400">
              {user?.email || "email"}
            </p>
          </div>

          <div>
            <p className="text-lg font-bold text-black">User ID</p>
            <p className="text-sm text-gray-400 break-all">
              {user?._id || "user id"}
            </p>
          </div>

          <div>
            <p className="text-lg font-bold text-black">Account Status</p>
            <p className="text-lg font-semibold text-gray-400">
              {user?.isVerified ? "Verified" : "Not Verified"}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded">
            Edit Profile
          </button>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded">
            Change Password
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded"
            onClick={getProfileUrl}
          >
            Get profile url
          </button>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded"
          >
            Logout
          </button>
          <button
            onClick={deleteUser}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded"
          >
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
}
