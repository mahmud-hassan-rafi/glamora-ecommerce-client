import ProductCard from "@features/account/dashboard/components/RecommendedForYou/ProductCard";
import React from "react";

const Products = ({ products }) => {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-2 items-center py-4">
      {products.map((product, i) => {
        return <ProductCard key={product.id} product={product} i={i} />;
      })}
    </div>
  );
};

export default Products;
