import React from "react";
import TrendingProducts from "./TrandingProducts";
import FeaturedProductsTabs from "./FeaturedProductsTab";
import NewArrivals from "./NewArrivals";
import SalesProducts from "./SalesProducts";
import { ArrowRight, Sparkles } from "lucide-react";
import Title from "../common/Title";

const featuredTabsInfo = [
  {
    tab: "new-arrival",
    description:
      "Discover the beauty must-haves everyone’s talking about — from glow-boosting serums to viral skincare essentials.",
  },
  {
    tab: "trending",
    description:
      "Fresh from the beauty world — innovative formulas and irresistible shades to elevate your self-care routine.",
  },
  {
    tab: "sales",
    description:
      "Your favorites at irresistible prices — stock up on beauty essentials while the deals last!",
  },
];

const tabs = {
  newArrival: "new-arrival",
  trending: "trending",
  sales: "sales",
};

const FeaturedProducts = () => {
  const [selectedTab, setSelectedTab] = React.useState("trending");
  console.log(featuredTabsInfo.find((item) => item.tab === selectedTab));

  return (
    <div>
      <div className="w-full">
        <Title
          title={`${
            selectedTab.charAt(0).toLocaleUpperCase() + selectedTab.slice(1)
          } Products`}
        />
      </div>
      <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mt-4 max-w-2xl text-lg text-black/60">
            {
              featuredTabsInfo.find((item) => item.tab === selectedTab)
                .description
            }
          </p>
        </div>

        <button className="group flex h-14 items-center gap-2 rounded-2xl border border-white/10 bg-black/5 px-6  transition hover:bg-black/10 hover:text-black">
          View All Products
          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </button>
      </div>

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
