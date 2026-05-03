import React from "react";
import TrendingProducts from "./TrandingProducts";
import FeaturedProductsTabs from "./FeaturedProductsTab";
import NewArrivals from "./NewArrivals";
import SalesProducts from "./SalesProducts";

const tabs = {
  newArrival: "new-arrival",
  trending: "trending",
  sales: "sales",
};

const FeaturedProducts = () => {
  const [selectedTab, setSelectedTab] = React.useState("trending");

  return (
    <div>
      <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4">
        Featured Products
      </h2>

      <FeaturedProductsTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabs={tabs}
      />

      {selectedTab === tabs.newArrival && <NewArrivals />}
      {selectedTab === tabs.trending && <TrendingProducts />}
      {selectedTab === tabs.sales && <SalesProducts />}
    </div>
  );
};

export default FeaturedProducts;
