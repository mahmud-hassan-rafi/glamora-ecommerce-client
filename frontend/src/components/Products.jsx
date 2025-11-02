import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="shop">
      {products?.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Products;
