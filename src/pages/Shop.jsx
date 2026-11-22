import Products from "@components/ui/customer/shop/product/Products";
import ShopPageSkeleton from "@components/ui/customer/shop/ShopPageSkeleton";
import SidebarFilter from "@components/ui/customer/shop/sidebarFilter/SidebarFilter";
import SortingDropdown from "@components/ui/customer/shop/SortingDropdown";
import { useGetProductsQuery } from "@utils/productsApi";
import React, { useState } from "react";

const Shop = () => {
  const [sort, setSort] = useState("latest");
  const { data, isLoading } = useGetProductsQuery({
    page: 1,
    limit: 16,
  });

  if (isLoading) return <ShopPageSkeleton />;

  return (
    <section className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 xl:px-16 py-10 ">
      {/* Sorting */}
      <div className="flex justify-end mb-4">
        <SortingDropdown value={sort} onChange={setSort} />
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filter */}
        <div className="sticky top-25 hidden md:flex lg:w-64 h-screen overflow-hidden mt-4">
          <SidebarFilter />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Product Grid */}
          <div className="flex gap-2">
            {data?.products?.length > 0 ? (
              <Products products={data?.products} />
            ) : (
              <p>No Product Found</p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className="px-3 py-1 border rounded hover:bg-pink-500 hover:text-white transition"
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
