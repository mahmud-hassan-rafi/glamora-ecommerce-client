import React from "react";
import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";
import { accountMenus } from "../constants/accountMenus";
import { useAccountContext } from "@context/AccountContext";

const AccountSidebar = () => {
  const { setOpenAccountSidebar } = useAccountContext();

  return (
    <div className=" w-72 lg:sticky lg:top-25">
      <div className="h-screen w-full bg-white border-r border-gray-200">
        <div className="h-3/4 w-full flex flex-col justify-between">
          {/* TOP SECTION */}
          <div className="p-6">
            {/* Profile Section */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                R
              </div>

              <div>
                <h2 className="text-sm font-semibold text-gray-900">Rafi</h2>
                <p className="text-xs text-gray-500">Premium Member</p>
              </div>
            </div>

            {/* MENU */}
            <ul className="space-y-1">
              {accountMenus?.map((menu, idx) => {
                const Icon = menu.icon;
                // const active = isActive(menu.path);

                return (
                  <li onClick={() => setOpenAccountSidebar(false)} key={idx}>
                    <NavLink
                      to={menu.path}
                      end={menu.path === "/account"}
                      className={({ isActive }) =>
                        `
                    flex items-center gap-3 px-4 py-3 rounded-xl
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-black text-white shadow-sm"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `
                      }
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">{menu.title}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* BOTTOM SECTION */}
          <div className="p-6 border-t border-gray-100">
            <button
              className="
            flex items-center gap-3 w-full px-4 py-3 rounded-xl
            text-gray-700 hover:bg-red-50 hover:text-red-600
            transition-all duration-200
          "
            >
              <LogOut size={18} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
