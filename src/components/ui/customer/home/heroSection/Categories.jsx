import { useAppContext } from "@context/AppContext";
import React from "react";
import { NavLink } from "react-router-dom";

const menus = [
  {
    id: 1,
    name: "Skin Care",
    navigate: "/shop/skin-care",
  },
  {
    id: 2,
    navigate: "/shop/makeup",
    name: "Makeup",
  },
  {
    id: 3,
    navigate: "/shop/body-care",
    name: "Body Care",
  },
  {
    id: 4,
    navigate: "/shop/hair-care",
    name: "Hair Care",
  },
  {
    id: 5,
    navigate: "/shop/fragrance",
    name: "Fragrance",
  },
  {
    id: 6,
    navigate: "/shop/baby-care",
    name: "Baby Care",
  },
  {
    id: 7,
    navigate: "/shop/man-care",
    name: "Man Care",
  },
  {
    id: 8,
    navigate: "/shop/daily-needs",
    name: "Daily Needs",
  },
];

const Categories = ({ className }) => {
  const { setIsOpenSidebar } = useAppContext();

  return (
    <div className={className?.length > 0 ? className : "w-full"}>
      {menus.map((Menu) => (
        <NavLink
          to={Menu.navigate}
          onClick={() => {
            setIsOpenSidebar(false);
          }}
          className={` w-full px-5 py-3.25 flex items-center justify-start text-sm font-medium gap-4 border-b border-b-gray-300 hover:bg-gray-100/90 transition text-black/95`}
          key={Menu.id}
        >
          <p>{Menu.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
