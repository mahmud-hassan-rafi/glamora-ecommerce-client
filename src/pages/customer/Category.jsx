import { categories } from "@utils/categoriesData";
import { LuMenu } from "react-icons/lu";
import { LiaSlidersHSolid } from "react-icons/lia";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "@utils/productsApi";
import ProductsSkeleton from "@components/ui/customer/shop/product/ProductsSkeleton";
import ProductCard from "@features/account/dashboard/components/RecommendedForYou/ProductCard";

const Category = () => {
  const { category } = useParams();
  const { data, isLoading, isFetching, isError } = useGetProductsQuery({
    limit: 8,
    prevPage: 1,
  });

  const categoryData = categories.find((cat) => cat.slug === category);

  console.log(categoryData);

  return (
    <section className="container text-sm font-medium">
      {/* category description */}
      <h4 className="text-base text-gray-600 font-medium">
        {categoryData.description}
      </h4>

      <div>
        {/* navigation row */}
        <div className="flex items-center justify-between my-5 text-gray-600">
          <span className="">
            <Link to={"/"} className="">
              Home
            </Link>{" "}
            &nbsp; / &nbsp;{" "}
            <span className="font-medium text-black">{categoryData.name}</span>
          </span>
          <p>Showing all 2 results</p>
        </div>

        {/* divider */}
        <div className="w-full h-px bg-gray-300 mb-5" />

        {/* filter row */}
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1.5 items-center">
            <LuMenu size={20} className="stroke-1" />
            <p>Show sidebar</p>
          </div>

          <div className="flex gap-x-5 items-center">
            <span>
              Show: <button>9</button> / <button>12</button> /{" "}
              <button>18</button> / <button>24</button>
            </span>
            <span className="flex gap-x-1.5 items-center">
              <LiaSlidersHSolid size={20} className="fill-gray-800" />
              <p>Filters</p>
            </span>
          </div>
        </div>

        {/* products grid */}
        {isLoading || isFetching ? (
          <ProductsSkeleton />
        ) : isError ? (
          <p className="mt-8 text-xl text-red-500/90">
            Error fetching products.
          </p>
        ) : (
          <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 items-center py-4">
            {data?.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Category;
