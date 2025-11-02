import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const RootLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <>
        <Navbar />
        <div className="container">
          <Loader />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
