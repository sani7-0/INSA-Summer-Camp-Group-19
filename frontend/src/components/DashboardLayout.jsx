// DashboardLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import SidebarLeft from "./SidebarLeft";
import RightSidebar from "./rightsidebar"; // adjust path as needed

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex">
      {/* Sidebar - hide on small screens */}
      <aside className="hidden md:block w-64 overflow-y-auto max-h-screen flex-shrink-0 ">
        <SidebarLeft />
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
      <aside className="hidden lg:block w-54 bg-white border-l border-gray-200 overflow-y-auto flex-shrink-0 ">
        <RightSidebar />
      </aside>
    </div>
  );
};

export default DashboardLayout;
