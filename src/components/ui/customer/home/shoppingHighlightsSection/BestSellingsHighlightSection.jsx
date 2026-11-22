import { useGetProductsQuery } from "@utils/productsApi";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingHighlightsProduct from "./ShoppingHighlightsProduct";

const BestSellingHighlightSection = () => {
  const { data: products } = useGetProductsQuery({
    limit: 3,
    page: 7,
  });

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-semibold text-black/90 mb-5">
        Best Selling Products
      </h2>

      {/* products */}
      <div className="flex flex-col gap-3.5 items-start w-full">
        {products?.products?.map((product, index) => (
          <React.Fragment key={product._id}>
            <ShoppingHighlightsProduct product={product} />

            {index !== products.products.length - 1 && (
              <div className="h-px w-full bg-black/10" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BestSellingHighlightSection;
