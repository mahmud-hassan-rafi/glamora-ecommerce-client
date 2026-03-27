import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { useAppContext } from "@context/AppContext";
import logo from "@assets/logo.png";
import { useSelector } from "react-redux";

const UpperRow = () => {
  const navigate = useNavigate();
  const { setIsOpenSidebar, subtotal } = useAppContext();

  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="flex items-center justify-between w-full h-full sm:pt-1 lg:h-[55%]">
      {/* menu icon - mobile */}
      <span
        className="w-1/5 h-full flex items-center justify-start lg:hidden text-xl"
        onClick={() => setIsOpenSidebar(true)}
      >
        <FiMenu />
      </span>

      {/* logo */}
      <div className="w-1/2 sm:w-1/3 md:w-1/5 max-w-62.5 h-full flex justify-center items-center">
        <img
          src={logo}
          alt="logo"
          className=" h-full w-full object-cover object-center"
          onClick={() => navigate("/")}
        />
      </div>

      {/* search box - laptop */}
      <div className="w-[40%] lg:w-1/2 hidden lg:flex">
        <input
          type="search"
          name=""
          className="w-full px-5 md:px-8 py-2 outline-0 rounded-full border border-cyan-900/60"
          id="search"
          placeholder="Search for products"
        />
      </div>

      {/* wishlist | user | cart */}
      <div className="hidden w-1/5 h-full lg:flex items-center ">
        <ul className="flex items-center gap-6 w-full m-0 p-0 list-none justify-end">
          <li className="relative">
            <Link to={"/wishlist"}>
              <IoMdHeartEmpty className="text-2xl" />
            </Link>
          </li>
          <li className="relative">
            <Link to={"/login"}>
              <LuUserRound className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="flex items-center text-base">
              <span className="relative p-2">
                <FiShoppingCart className="text-2xl" />
                <span className="absolute text-[11px] text-white top-1 right-0 flex justify-center items-center size-4.5 rounded-full bg-red-500 font-semibold">
                  {cartItems?.length || 0}
                </span>
              </span>
              <span className="ml-0.5 mt-1">${subtotal(cartItems) || 0}</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* mobile cart */}
      <div
        onClick={() => navigate("/cart")}
        className="lg:hidden w-1/5 h-full flex items-center justify-end"
      >
        <span className="relative p-2">
          <FiShoppingCart className="text-2xl" />
          <span className="absolute text-[11px] text-white top-1 right-0 flex justify-center items-center size-4.5 rounded-full bg-red-500 font-medium">
            {cartItems?.length || 0}
          </span>
        </span>
      </div>
    </div>
  );
};

export default UpperRow;
