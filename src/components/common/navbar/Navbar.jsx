import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Separator } from "@components/ui/shadcn/separator";
import UpperRow from "./UpperRow";

const Navbar = () => {
  const isLinkActive = (isActive) => (isActive ? "text-cyan-900" : "");

  return (
    <nav className="h-16 lg:h-25 sticky top-0 bg-white z-100 border-b border-b-gray-300 w-full">
      <div className="flex flex-col items-center px-5 md:px-24 lg:px-12 w-full h-full bg-blue-50/10">
        <UpperRow />

        {/* bottom row - desktop*/}
        <div className="hidden w-full h-[45%] lg:flex justify-between items-center">
          <ul className="flex h-5 items-center gap-4 text-sm">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => isLinkActive(isActive)}
              >
                HOME
              </NavLink>
            </li>
            <Separator orientation="vertical" />
            <li>
              <NavLink
                to={"/shop"}
                className={({ isActive }) => isLinkActive(isActive)}
              >
                SHOP
              </NavLink>
            </li>
            <Separator orientation="vertical" />
            <li>
              <NavLink
                to={"/contact-us"}
                className={({ isActive }) => isLinkActive(isActive)}
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>

          {/* delivery and social icons | laptop view */}
          <div className="flex items-center h-full lg:w-[60%] xl:w-[70%]">
            {/* delivery information */}
            <div className="flex items-center justify-end pr-2 w-full h-full text-[15px] border-r border-r-gray-300">
              Delivery | Inside Dhaka - ৳40 | Outside Dhaka - ৳80
            </div>

            {/* social icons */}
            <div className="">
              <ul className="h-full flex items-center justify-end pl-2 text-lg text-gray-900/90 gap-4">
                <li className="flex items-center">
                  <FaFacebook />{" "}
                </li>
                <li>
                  {" "}
                  <FaInstagram />{" "}
                </li>
                <li>
                  <FaLinkedin />
                </li>
                <li>
                  <FaTwitter />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
