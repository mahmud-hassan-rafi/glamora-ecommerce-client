import React from "react";

const FeaturedProductsTab = ({ selectedTab, setSelectedTab, tabs }) => {
  {
    /* tab of new arrival, trending, sales */
  }
  return (
    <div className="w-full flex justify-center gap-4 sm:gap-6 mb-6">
      <button
        className={`max-sm:text-sm px-1 py-0.5 rounded box-border relative inline-block after:content-[''] after:absolute
           after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-700 after:transition-all after:duration-300 font-medium  ${
             selectedTab === tabs.newArrival
               ? "after:w-full"
               : " text-gray-700 hover:after:w-full hover:text-black"
           }`}
        onClick={() => setSelectedTab(tabs.newArrival)}
      >
        NEW ARRIVALS
      </button>
      <button
        className={`max-sm:text-sm px-1 py-0.5 rounded box-border relative inline-block after:content-[''] after:absolute
           after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-700 after:transition-all after:duration-300 font-medium  ${
             selectedTab === tabs.trending
               ? "after:w-full"
               : " text-gray-700 hover:after:w-full hover:text-black"
           }`}
        onClick={() => setSelectedTab(tabs.trending)}
      >
        TRENDING
      </button>
      <button
        className={`max-sm:text-sm px-1 py-0.5 rounded box-border relative inline-block after:content-[''] after:absolute
           after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-700 after:transition-all after:duration-300 font-medium  ${
             selectedTab === tabs.sales
               ? "after:w-full"
               : " text-gray-700 hover:after:w-full hover:text-black"
           }`}
        onClick={() => setSelectedTab(tabs.sales)}
      >
        SALES
      </button>
    </div>
  );
};

export default FeaturedProductsTab;
