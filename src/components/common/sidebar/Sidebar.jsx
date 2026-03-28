import { useAppContext } from "@context/AppContext";
import React, { useEffect, useState } from "react";
import Searchbox from "./Searchbox";
import MenuTab from "./MenuTab";
import MenuNavList from "./MenuNavList";
import CategoriesNavList from "./CategoriesNavList";
import { motion } from "framer-motion";

const overlayVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const sidebarVariants = {
  closed: {
    x: -300,
  },
  open: {
    x: 0,
  },
};

const Sidebar = () => {
  const { isOpenSidebar, setIsOpenSidebar } = useAppContext();

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
    <motion.div
      variants={overlayVariants}
      initial="closed"
      animate={isOpenSidebar ? "open" : "closed"}
      className="absolute top-0 bg-black/15 h-screen w-full z-999"
      onClick={() => setIsOpenSidebar(false)}
    >
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={isOpenSidebar ? "open" : "closed"}
        exit={"closed"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-75 h-full bg-white py-6"
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
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
