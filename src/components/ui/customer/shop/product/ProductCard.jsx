import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HoverMenu from "./HoverMenu";
import { useAppContext } from "@context/AppContext";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "@features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [loaded, setLoaded] = React.useState(false);

  const { discountedPrice } = useAppContext();

  return (
    <div
      onClick={() => navigate(`/shop/${product.id}`)}
      className="relative bg-white border rounded overflow-hidden cursor-default group transition shadow-sm hover:shadow-lg w-full"
    >
      {/* IMAGE */}
      <div className="relative w-full h-50 overflow-hidden">
        <div>
          {!loaded && (
            <div className="size-full absolute inset-0 rounded bg-gray-200 animate-pulse z-1000" />
          )}

          <img
            onLoad={() => setLoaded(true)}
            src={product?.thumbnail}
            alt={product?.title}
            loading="lazy"
            className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* SALE BADGE */}
        <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
          SALE
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col items-center gap-2">
        <h5 className="text-gray-800 font-medium text-sm line-clamp-2">
          {product?.title}
        </h5>

        {/* PRICE */}
        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through text-sm">
            ${product?.price}
          </span>
          {/* gold color text */}
          <span className="text-lg font-semibold text-[#9e9026]">
            ${discountedPrice(product)}
          </span>
        </div>

        {/* BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(ADD_TO_CART(product));
          }}
          className=" mt-3 w-full bg-emerald-950/80 text-white py-2 rounded text-sm font-medium transition duration-200 hover:bg-emerald-950/90 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>

      <HoverMenu product={product} />
    </div>
  );
};

export default React.memo(ProductCard);
