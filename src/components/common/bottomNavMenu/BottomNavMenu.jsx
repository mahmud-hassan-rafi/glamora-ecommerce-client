import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const icons = [
  {
    id: 1,
    icon: IoHomeOutline,
    title: "Home",
    navigate: "/home",
  },
  {
    id: 2,
    icon: BsShop,
    title: "Shop",
    navigate: "/shop",
  },
  {
    id: 3,
    icon: FaRegHeart,
    title: "Wishlist",
    navigate: "/wishlist",
  },
  {
    id: 4,
    icon: LuUserRound,
    title: "Account",
    navigate: "/me",
  },
];

const BottomNavMenu = () => {
  return (
    <nav className="lg:hidden sticky bottom-0  h-15 w-full bg-white text-[22px] border-t border-t-gray-300 shadow-sidebar-border z-99">
      {/* mobile & tablet view */}
      <div className="size-full bg-blue-50/10 flex items-center gap-3 px-2">
        {icons.map((Icon) => {
          return (
            <NavLink
              key={Icon.id}
              to={Icon.navigate}
              className="flex flex-col justify-center items-center w-1/4"
            >
              <Icon.icon />
              <p className=" text-sm truncate w-[85%] flex justify-center">
                {Icon.title}
              </p>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavMenu;
