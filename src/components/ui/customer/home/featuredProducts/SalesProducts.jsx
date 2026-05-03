/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useGetProductsQuery } from "@utils/productsApi.js";
import ProductCard from "../../shop/product/ProductCard";
import ProductsSkeleton from "../../shop/product/ProductsSkeleton";
import { useNavigate } from "react-router-dom";

const SalesProducts = () => {
  const { data, isLoading, isFetching } = useGetProductsQuery({
    limit: 8,
    prevPage: 2,
  });

  const navigate = useNavigate();

  return (
    <section className="w-full">
      {isLoading || isFetching ? (
        <ProductsSkeleton length={8} />
      ) : (
        <>
          <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 items-center py-4">
            {data.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {/* load more CTA */}
          <div className="w-full flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-emerald-950/80 text-white font-medium rounded shadow px-5 py-2 mt-2 cursor-pointer"
              onClick={() => navigate("/trending-products")}
            >
              Load more
            </motion.button>
          </div>
        </>
      )}
    </section>
  );
};

export default SalesProducts;
