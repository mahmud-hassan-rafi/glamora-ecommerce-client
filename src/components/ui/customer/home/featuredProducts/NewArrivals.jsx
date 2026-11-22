/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useGetProductsQuery } from "@utils/productsApi.js";
import ProductsSkeleton from "../../shop/product/ProductsSkeleton";
import { useNavigate } from "react-router-dom";
import ProductCard from "@features/account/dashboard/components/RecommendedForYou/ProductCard";

const NewArrivals = () => {
  const { data, isLoading, isFetching, isError, error } = useGetProductsQuery({
    limit: 8,
    page: 3,
  });

  const navigate = useNavigate();
  if (isLoading || isFetching || isError) {
    return <ProductsSkeleton length={8} />;
  }
  console.log(error);
  return (
    <section className="w-full">
      {isLoading || isFetching ? (
        <ProductsSkeleton length={8} />
      ) : (
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 items-center py-4">
          {data.products.map((product, i) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default NewArrivals;
