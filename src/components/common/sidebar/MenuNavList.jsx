import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsShop, BsInfoCircle } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { PiAddressBookLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useAppContext } from "@context/AppContext";

const menus = [
  {
    id: 1,
    name: "HOME",
    icon: IoHomeOutline,
    navigate: "/home",
  },
  {
    id: 2,
    navigate: "/shop",
    name: "SHOP",
    icon: BsShop,
  },
  {
    id: 3,
    navigate: "/about-us",
    name: "ABOUT US",
    icon: BsInfoCircle,
  },
  {
    id: 4,
    navigate: "/contact-us",
    name: "CONTACT US",
    icon: PiAddressBookLight,
  },
  {
    id: 5,
    navigate: "/wishlist",
    name: "WISHLIST",
    icon: FaRegHeart,
  },
  {
    id: 6,
    navigate: "/me",
    name: "LOGIN / REGISTER",
    icon: LuUserRound,
  },
];

const MenuNavList = () => {
  const { setIsOpenSidebar } = useAppContext();

  return (
    <div className="w-full">
      {menus.map((Menu) => (
        <NavLink
          to={Menu.navigate}
          onClick={() => setIsOpenSidebar(false)}
          className={({ isActive }) =>
            ` w-full px-5 py-4 flex items-center justify-start text-sm font-semibold gap-4 border-b border-b-gray-300 ${isActive ? "text-cyan-800/90" : "text-black"}`
          }
          key={Menu.id}
        >
          <Menu.icon className="text-[19px]" />
          <p>{Menu.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default MenuNavList;
