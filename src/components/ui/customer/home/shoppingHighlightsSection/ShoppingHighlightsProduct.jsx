import React from "react";
import { useAppContext } from "@context/AppContext";
import { Link } from "react-router-dom";

const ShoppingHighlightsProduct = ({ product }) => {
  const { discountedPrice } = useAppContext();

  return (
    <Link
      to={"/shop/" + product._id}
      className="flex gap-x-5 w-full items-center"
      key={product._id}
    >
      <img src={product?.thumbnail} alt={product.title} className="size-18" />

      {/* product info */}
      <div className="flex flex-col gap-y-1.5">
        <h3 className="text-sm font-semibold text-black/90 line-clamp-2">
          {product.title}
        </h3>
        <span className="flex items-center gap-x-2.5 text-sm">
          <p className="font-semibold text-gray-800/50 line-through">
            ${discountedPrice(product)}
          </p>
          <p className="font-bold text-gray-800">${product.price}</p>
        </span>
      </div>
    </Link>
  );
};

export default ShoppingHighlightsProduct;
