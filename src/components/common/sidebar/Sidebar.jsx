import { useAppContext } from "@context/AppContext";
import React, { useEffect, useState } from "react";
import Searchbox from "./Searchbox";
import MenuTab from "./MenuTab";
import MenuNavList from "./MenuNavList";
import CategoriesNavList from "./CategoriesNavList";

const Sidebar = () => {
  const { setIsOpenSidebar } = useAppContext();

  const availableTab = {
    MENU: "menu",
    CATEGORIES: "categories",
  };

  const [selectedTab, setSelectedTab] = useState(availableTab.MENU);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "");
  }, []);

  return (
    <div
      className="absolute top-0 bg-black/10 h-screen w-full z-999"
      onClick={() => setIsOpenSidebar(false)}
    >
      <div
        className="w-75 h-full bg-white transition-transform py-6"
        onClick={(event) => event.stopPropagation()}
      >
        <Searchbox />
        <MenuTab
          availableTab={availableTab}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === availableTab.MENU && <MenuNavList />}
        {selectedTab === availableTab.CATEGORIES && <CategoriesNavList />}
      </div>
    </div>
  );
};

export default Sidebar;
