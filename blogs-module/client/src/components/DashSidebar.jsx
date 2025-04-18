import React, { useEffect, useState } from "react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="w-full md:w-64 bg-gray-900 border-r border-gray-800 p-4 shadow-card">
      <div className="space-y-3">
        <Link 
          to="/dashboard?tab=profile"
          className={`flex items-center p-3 rounded-lg transition-all duration-200 font-medium ${
            tab === "profile" 
              ? "bg-primary/10 text-primary shadow-button" 
              : "text-muted hover:bg-gray-800 hover:text-primary"
          }`}
        >
          <HiUser className="mr-3 text-lg" />
          <span className="font-heading">Profile</span>
        </Link>
        <button className="flex items-center w-full p-3 rounded-lg text-muted hover:bg-gray-800 hover:text-primary transition-all duration-200 font-medium">
          <HiArrowSmRight className="mr-3 text-lg" />
          <span className="font-heading">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default DashSidebar;