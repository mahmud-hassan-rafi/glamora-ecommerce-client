import React, { useContext, useEffect } from "react";
import "../App.css";
import Products from "../components/Products";
import { useInfiniteQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import { productContext } from "../context/ProductContext";

const getProductsData = async ({ pageParam = 1, signal }) => {
  // smaller page size to reduce rendering cost per fetch
  const LIMIT = 24;
  const skip = (pageParam - 1) * LIMIT;
  const url = `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`;

  // support cancellation via the provided signal from React Query
  const res = await fetch(url, { signal });
  const data = await res.json();
  return data.products;
};

const Shop = () => {
  const { pages, setPages } = useContext(productContext);

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: getProductsData,
      initialPageParam: 1,
      staleTime: 1000 * 60 * 5,
      getNextPageParam: (lastPage, allpages) => {
        return lastPage.length === 24 ? allpages.length + 1 : undefined;
      },
    });

  useEffect(() => {
    if (!data) return;
    const same = JSON.stringify(data) === JSON.stringify(pages);
    if (!same) {
      setPages(data?.pages);
    }
  }, [data, pages, setPages]);

  // --------------------------
  useEffect(() => {
    // throttle scroll handler to run at most once every 200ms
    const throttleMs = 200;
    let last = 0;

    const handleScroll = () => {
      const now = Date.now();
      if (now - last < throttleMs) return;
      last = now;

      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120;

      if (bottom && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, fetchNextPage, isFetchingNextPage]);

  return (
    <>
      <h1 className="shopHeading">Shop</h1>

      {/* যদি data না আসে, কিন্তু cache clear হয়ে যায় */}
      {!data && <Loader />}

      {data?.pages?.length > 0
        ? data.pages.map((page, index) => (
            <Products products={page} key={index} />
          ))
        : !isLoading && <p>No products found.</p>}

      {isFetchingNextPage && <Loader />}
    </>
  );
};

export default Shop;
