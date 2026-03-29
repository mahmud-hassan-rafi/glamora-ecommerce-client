import React from "react";
import CategoriesWithPictures from "@components/ui/customer/home/categoriesWithPictures/CategoriesWithPictures";
import Hero from "@components/ui/customer/home/heroSection/Hero";
import TrustBadges from "@components/ui/customer/home/trustBadges/TrustBadges";
import TrandingProducts from "@components/ui/customer/home/trandingProducts/TrandingProducts";

const Home = () => {
  return (
    <div className="w-full h-full space-y-10">
      <Hero />
      <TrustBadges />
      <CategoriesWithPictures />
      <TrandingProducts />
      <div className="h-full w-full"></div>
    </div>
  );
};

export default Home;
