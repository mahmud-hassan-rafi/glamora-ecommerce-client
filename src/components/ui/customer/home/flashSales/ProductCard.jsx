import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "@context/AppContext";
import HoverMenu from "../../shop/product/HoverMenu";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "@features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { animateToCart } from "@utils/animateToCart";

const ProductCard = ({ product, i }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      viewport={{ once: true }}
      onClick={() => navigate(`/shop/${product._id}`)}
      className="group relative rounded-[32px] overflow-hidden bg-gray-600/10 border border-white/10 "
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        {!loaded && (
          <div className="size-full absolute inset-0 bg-gray-300 animate-pulse z-1000" />
        )}

        <img
          onLoad={() => setLoaded(true)}
          src={product?.thumbnail}
          alt={product?.title}
          ref={imageRef}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Discount Badge */}
        <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-pink-500 text-white text-sm font-semibold z-100">
          SAVE {Math.round(product?.discountPercentage) || 0}%
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-pink-500 mb-2">{product?.category}</p>

        <h3 className="text-xl font-bold mb-4">{product?.title}</h3>

        {/* Prices */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl font-black">
            ${discountedPrice(product)}
          </span>

          <span className="text-black/40 line-through">${product.price}</span>
        </div>

        {/* Sold Progress */}
        <div className="mb-5">
          <div className="flex justify-between text-sm text-black/60 mb-2">
            <span>Sold</span>
            <span>
              {Math.round((product.minimumOrderQuantity / product.stock) * 100)}
              %
            </span>
          </div>

          <div className="h-2 bg-black/10 rounded-full overflow-hidden">
            <div
              style={{
                width: `${(product.minimumOrderQuantity / product.stock) * 100}%`,
              }}
              className="h-full bg-linear-to-r from-cyan-700 to-cyan-900 rounded-full"
            />
          </div>
        </div>

        {/* Button */}
        <button
          className="w-full h-12 rounded-2xl text-white bg-black font-semibold flex items-center justify-center gap-2  transition hover:bg-black/95"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-linear-to-t from-pink-500/5 to-transparent" />

      <HoverMenu product={product} />
    </motion.div>
  );
};

export default ProductCard;
