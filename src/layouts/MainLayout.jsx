import { useAppContext } from "@context/AppContext";
import Navbar from "@components/common/navbar/Navbar";
import React from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Sidebar from "@components/common/sidebar/Sidebar";
import BottomNavMenu from "@components/common/bottomNavMenu/BottomNavMenu";
import ScrollToTop from "@components/common/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import LoadingSpinner from "@components/common/LoadingSpinner";
import Footer from "@components/common/footer/Footer";

const MainLayout = () => {
  const { isOpenSidebar } = useAppContext();
  const navigation = useNavigation();

  return (
    <div className="relative w-full flex flex-col">
      <Navbar />
      <main
        id="main"
        className="min-h-screen h-auto w-full  bg-gray-100" // px-6 sm:px-8 md:px-12 xl:px-16
      >
        {navigation.state === "loading" ? <LoadingSpinner /> : <Outlet />}
      </main>
      <ScrollRestoration />
      <Footer />
      <BottomNavMenu />
      <ScrollToTop />
      <AnimatePresence>{isOpenSidebar && <Sidebar />}</AnimatePresence>
    </div>
  );
};

export default MainLayout;
