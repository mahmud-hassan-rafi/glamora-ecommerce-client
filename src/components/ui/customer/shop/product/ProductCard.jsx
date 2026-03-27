import React from "react";
import { useNavigate } from "react-router-dom";
import HoverMenu from "./HoverMenu";
import { useAppContext } from "@context/AppContext";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "@features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { discountedPrice } = useAppContext();

  return (
    <div
      onClick={() =>
        navigate(`/shop/${product.id}`, {
          state: { from: "/shop" },
        })
      }
      className="relative bg-white border rounded overflow-hidden cursor-pointer group transition shadow-sm hover:shadow-lg w-full"
    >
      {/* IMAGE */}
      <div className="relative w-full h-50 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* SALE BADGE */}
        <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
          SALE
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col items-center gap-2">
        <h5 className="text-gray-800 font-medium text-sm line-clamp-2">
          {product.title}
        </h5>

        {/* PRICE */}
        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through text-sm">
            ${product.price}
          </span>
          <span className="text-lg font-semibold text-purple-600">
            ${discountedPrice(product)}
          </span>
        </div>

        {/* BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(ADD_TO_CART(product));
          }}
          className=" mt-3 w-full bg-purple-600 text-white py-2 rounded text-sm font-medium transition hover:bg-purple-700"
        >
          Add to Cart
        </button>
      </div>

      <HoverMenu />
    </div>
  );
};

export default React.memo(ProductCard);
