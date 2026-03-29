import React from "react";
import { motion } from "framer-motion";
import { useGetProductsQuery } from "@utils/productsApi.js";
import ProductCard from "../../shop/product/ProductCard";
import ProductsSkeleton from "../../shop/product/ProductsSkeleton";

const TrandingProducts = () => {
  const { data, isLoading, isFetching } = useGetProductsQuery({
    limit: 8,
    prevPage: 4,
  });

  return (
    <section className="w-full">
      <h2 className="text-2xl md:text-3xl font-semibold text-left mb-4">
        Trending Products
      </h2>

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
              className="bg-white/70 text-black rounded shadow px-4 py-2 cursor-pointer"
            >
              Load more
            </motion.button>
          </div>
        </>
      )}
    </section>
  );
};

export default TrandingProducts;
