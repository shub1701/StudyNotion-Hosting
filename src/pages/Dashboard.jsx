import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../common/Spinner";
import Sidebar from "../components/core/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
// import { GoSidebarCollapse } from "react-icons/go";

const Dashboard = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);

  // const isMediumScreenOrLarger = useMediaQuery({ minWidth: 768 });

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
