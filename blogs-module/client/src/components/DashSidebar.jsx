import React, { useEffect, useState } from "react";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { signOutSuccess } from "../redux/user/userSlice";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to sign out");
      }
      dispatch(signOutSuccess());
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <div className="w-full md:w-56 lg:w-64 bg-gray-900 border-r border-gray-800 p-4 shadow-card">
      <div className="space-y-2">
        {/* Profile Link */}
        <Link
          to="/dashboard?tab=profile"
          className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 font-medium ${
            tab === "profile"
              ? "bg-primary/10 text-primary border-l-4 border-primary"
              : "text-gray-300 hover:bg-gray-800 hover:text-primary"
          }`}
        >
          <HiUser className="text-lg flex-shrink-0" />
          <div className="flex flex-col overflow-hidden">
            <span className="font-medium truncate">Profile</span>
            <span className="text-xs text-gray-400 truncate">
              {currentUser.isAdmin ? "Admin" : "User"}
            </span>
          </div>
        </Link>

        {/* Admin Only Links */}
        {currentUser.isAdmin && (
          <>
            {/* Posts Link */}
            <Link
              to="/dashboard?tab=posts"
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 font-medium ${
                tab === "posts"
                  ? "bg-primary/10 text-primary border-l-4 border-primary"
                  : "text-gray-300 hover:bg-gray-800 hover:text-primary"
              }`}
            >
              <BsFillFileEarmarkPostFill className="text-lg flex-shrink-0" />
              <span className="font-medium truncate">Posts</span>
            </Link>

            {/* Users Link */}
            <Link
              to="/dashboard?tab=users"
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 font-medium ${
                tab === "users"
                  ? "bg-primary/10 text-primary border-l-4 border-primary"
                  : "text-gray-300 hover:bg-gray-800 hover:text-primary"
              }`}
            >
              <FaUsers className="text-lg flex-shrink-0" />
              <span className="font-medium truncate">Users</span>
            </Link>
          </>
        )}

        {/* Sign Out Button */}
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 w-full p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-red-400 transition-all duration-200 font-medium"
        >
          <HiArrowSmRight className="text-lg flex-shrink-0" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default DashSidebar;