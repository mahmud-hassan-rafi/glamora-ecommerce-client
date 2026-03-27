import { useAppContext } from "@context/AppContext";
import Navbar from "@components/common/navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@components/common/sidebar/Sidebar";
import BottomNavMenu from "@components/common/bottomNavMenu/BottomNavMenu";
import ScrollToTop from "@components/common/ScrollToTop";

const MainLayout = () => {
  const { isOpenSidebar } = useAppContext();

  return (
    <div className="min-h-screen max-h-screen grid grid-rows-[64px_1fr_60px] lg:grid-rows-[100px_1fr] w-full overflow-hidden">
      <Navbar />
      <main className="w-full h-[calc(100vh-120px)] lg:h-[calc(100vh-100px)] overflow-y-auto bg-gray-400/15 px-4 md:px-8 xl:px-16">
        <ScrollToTop />
        <Outlet />
      </main>
      <BottomNavMenu />
      {isOpenSidebar && <Sidebar />}
    </div>
  );
};

export default MainLayout;
