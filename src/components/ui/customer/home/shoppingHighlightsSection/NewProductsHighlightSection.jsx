import { useGetProductsQuery } from "@utils/productsApi";
import React from "react";
import ShoppingHighlightsProduct from "./ShoppingHighlightsProduct";

const NewProductsHighlightSection = () => {
  const { data: products } = useGetProductsQuery({
    limit: 3,
    page: 2,
  });

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-semibold text-black/90 mb-5">New Products</h2>

      {/* products */}
      <div className="flex flex-col gap-3.5 items-start w-full">
        {products?.products?.map((product, index) => (
          <>
            <ShoppingHighlightsProduct product={product} key={product._id} />

            {index !== products.products.length - 1 && (
              <div className="h-px w-full bg-black/10" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default NewProductsHighlightSection;
