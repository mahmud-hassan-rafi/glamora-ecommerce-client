import { useAppContext } from "@context/AppContext";
import React from "react";
import { NavLink } from "react-router-dom";

const menus = [
  {
    id: 1,
    name: "SKIN CARE",
    navigate: "shop/skin-care",
  },
  {
    id: 2,
    name: "MAKEUP",
    navigate: "shop/makeup",
  },
  {
    id: 3,
    name: "BODY CARE",
    navigate: "shop/body-care",
  },
  {
    id: 4,
    name: "HAIR CARE",
    navigate: "shop/hair-care",
  },
  {
    id: 5,
    name: "FRAGRANCE",
    navigate: "shop/fragrance",
  },
  {
    id: 6,
    name: "BABY CARE",
    navigate: "shop/baby-care",
  },
  {
    id: 7,
    name: "MAN CARE",
    navigate: "shop/man-care",
  },
  {
    id: 8,
    name: "DAILY NEEDS",
    navigate: "shop/daily-needs",
  },
];

const CategoriesNavList = () => {
  const { setIsOpenSidebar } = useAppContext();

  return (
    <div className={"w-full"}>
      {menus.map((Menu) => (
        <NavLink
          to={Menu.navigate}
          onClick={() => setIsOpenSidebar(false)}
          className={({ isActive }) =>
            ` w-full px-5 py-4 flex items-center justify-start text-sm font-semibold gap-4 border-b border-b-gray-300 hover:bg-gray-100/40 transition ${isActive ? "text-cyan-800/90" : "text-black/90"}`
          }
          key={Menu.id}
        >
          <p>{Menu.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default CategoriesNavList;
