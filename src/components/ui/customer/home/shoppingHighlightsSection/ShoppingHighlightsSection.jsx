import React from "react";
import BestSellingHighlightSection from "./BestSellingsHighlightSection";
import NewProductsHighlightSection from "./NewProductsHighlightSection";
import TrustBoxHighlightSection from "./TrustBoxHighlightSection";

const ShoppingHighlightsSection = () => {
  return (
    <div className="bg-white p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[280px_280px_1fr] gap-x-6 max-w-7xl mx-auto px-4">
      {/* best selling products */}
      <BestSellingHighlightSection />

      {/* new products */}
      <NewProductsHighlightSection />

      {/* trust box */}
      <TrustBoxHighlightSection />
    </div>
  );
};

export default ShoppingHighlightsSection;
