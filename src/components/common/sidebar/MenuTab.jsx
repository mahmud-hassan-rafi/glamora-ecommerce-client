const MenuTab = ({ selectedTab, setSelectedTab, availableTab }) => {
  const activeSelectedTabClass =
    "relative bg-gray-400/30 text-black outline-b-2 outline-b-orange-700 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-cyan-800/70";

  return (
    <div className="flex h-12.5 w-full mt-5 text-sm">
      <span
        className={`h-full w-1/2 font-bold flex items-center justify-center ${selectedTab === availableTab.MENU ? activeSelectedTabClass : " bg-gray-300/30 text-gray-900/80"}`}
        onClick={() => setSelectedTab(availableTab.MENU)}
      >
        MENU
      </span>
      <span
        className={`h-full w-1/2 font-bold bg-gray-300/30 flex items-center justify-center ${selectedTab === availableTab.CATEGORIES ? activeSelectedTabClass : " bg-gray-300/30 text-gray-900/80"}`}
        onClick={() => setSelectedTab(availableTab.CATEGORIES)}
      >
        CATEGORIES
      </span>
    </div>
  );
};

export default MenuTab;
