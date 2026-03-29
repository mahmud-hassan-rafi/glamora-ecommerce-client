import Products from "@components/ui/customer/shop/product/Products";
import ShopPageSkeleton from "@components/ui/customer/shop/ShopPageSkeleton";
import SidebarFilter from "@components/ui/customer/shop/sidebarFilter/SidebarFilter";
import SortingDropdown from "@components/ui/customer/shop/SortingDropdown";
import React, { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products?limit=24");
      if (!res.ok) {
        setProducts((prev) => [...prev]);
        return;
      }
      const data = await res.json();
      setLoading(false);
      setProducts(data.products);
    };

    getProducts();
  }, []);

  if (loading) return <ShopPageSkeleton />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Sorting */}
      <div className="flex justify-end mb-4">
        <SortingDropdown value={sort} onChange={setSort} />
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filter */}
        <div className="hidden md:flex lg:w-64 mt-4">
          <SidebarFilter />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Product Grid */}
          <div className="flex gap-2">
            {products.length > 0 ? (
              <Products products={products} />
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
    </div>
  );
};

export default Shop;
