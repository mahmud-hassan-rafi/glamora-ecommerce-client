import { useGetProductsQuery } from "@utils/productsApi";
import React from "react";
import ProductCard from "../../shop/product/ProductCard";

const TrandingProducts = () => {
  const { data, isLoading, error } = useGetProductsQuery({
    limit: 8,
    prevPage: 2,
  });

  console.log(data);
  console.log(error);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tranding products for {error.error}</p>;
  if (!data || !data.products) return <p>No data</p>;

  return (
    <div>
      <h4>Tranding Products</h4>
      <div>
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrandingProducts;
