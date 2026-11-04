import React from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AccountSidebar from "@features/account/global/components/AccountSidebar";
import { useAccountContext } from "@context/AccountContext";

const AccountLayout = () => {
  const { openAccountSidebar, setOpenAccountSidebar } = useAccountContext();

  return (
    <div className="bg-gray-50 flex flex-col w-full">
      {/* TOP BAR (Mobile only trigger) */}
      <div className="lg:hidden flex items-center justify-between px-5 py-4 bg-white border-b">
        <h1 className="text-lg font-semibold">My Account</h1>

        <button
          onClick={() => setOpenAccountSidebar(true)}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* MAIN WRAPPER */}
      <div className="flex flex-1 h-full">
        {/* DESKTOP SIDEBAR */}
        <aside className="hidden lg:block">
          <AccountSidebar />
        </aside>

        {/* MOBILE DRAWER */}
        {openAccountSidebar && (
          <div
            className="fixed inset-0 z-50 lg:hidden bg-black/5 overflow-y-auto scrollbar-none"
            onClick={() => setOpenAccountSidebar(false)}
          >
            {/* drawer */}
            <div
              className="absolute left-0 top-0 h-full w-72 bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* close button */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="font-semibold">Menu</h2>

                <button
                  onClick={() => setOpenAccountSidebar(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              {/* sidebar reused */}
              <AccountSidebar />
            </div>
          </div>
        )}

        {/* MAIN CONTENT */}
        <main className="flex-1 p-5 h-full lg:p-10 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AccountLayout;
