import React, { useRef } from "react";
import { Heart, Star } from "lucide-react";
import { useAppContext } from "@context/AppContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { animateToCart } from "@utils/animateToCart";
import { ADD_TO_CART } from "@features/cart/cartSlice";
import { IoMdHeart } from "react-icons/io";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [wishlisted, setWishlisted] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const { discountedPrice } = useAppContext();

  const imageRef = useRef(null);
  const { cartIconRef } = useAppContext();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    animateToCart(imageRef.current, cartIconRef.current);
    setTimeout(() => {
      dispatch(ADD_TO_CART(product));
    }, 800);
  };

  return (
    <div
      onClick={() => navigate(`/shop/${product._id}`)}
      className="
        group relative
        rounded-3xl
        border border-gray-200
        bg-white
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        cursor-pointer
      "
    >
      {/* IMAGE SECTION */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-50">
        {!loaded && (
          <div className="size-full absolute inset-0 bg-gray-300 animate-pulse z-30" />
        )}

        <img
          onLoad={() => setLoaded(true)}
          src={product?.thumbnail}
          alt={product?.title}
          ref={imageRef}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* BADGE */}
        <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-[11px] font-medium text-white">
          {product?.badge || "New"}
        </span>

        {/* WISHLIST */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setWishlisted((prev) => !prev);
          }}
          className="
            absolute right-3 top-3
            rounded-full
            bg-white
            p-2
            shadow-sm
            transition
            hover:scale-105
          "
        >
          {wishlisted ? (
            <IoMdHeart className="text-red-600" />
          ) : (
            <Heart size={14} className="text-gray-600" />
          )}
        </button>
      </div>

      {/* CONTENT */}
      <div className="space-y-3 p-4">
        {/* NAME */}
        <h3 className="line-clamp-1 text-sm font-semibold text-gray-900">
          {product?.title}
        </h3>

        {/* RATING */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="font-medium text-gray-700">{product?.rating}</span>
          <span>({product?.reviews?.length || product?.reviews || 28})</span>
        </div>

        {/* PRICE */}
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-gray-900">
            ${discountedPrice(product)}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${product.price}
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={handleAddToCart}
          className="
            w-full rounded-2xl
            bg-black
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:opacity-90
            active:scale-[0.98]
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
