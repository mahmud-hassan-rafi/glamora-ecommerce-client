import { useAppContext } from "@context/AppContext";
import { Gift, ShoppingBag, Flashlight, Heart } from "lucide-react"; // UI পপ করানোর জন্য আইকন
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ProductCounter from "./ProductCounter";

export default function ProductInfo({ product }) {
  const navigate = useNavigate();
  const { discountedPrice } = useAppContext();

  // কাউন্টার থেকে ভ্যালু নেওয়ার জন্য হ্যান্ডলার (যদি প্রয়োজন হয়)
  const handleQuantityChange = (qty) => {
    console.log("Selected Quantity:", qty);
  };

  return (
    <div className=" bg-white rounded-2xl max-w-xl space-y-6">
      {/* 1. BREADCRUMB */}
      <div className="hidden text-[10px] font-medium tracking-widest uppercase text-neutral-400 lg:flex items-center gap-2 flex-wrap">
        <span
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-black transition-colors"
        >
          Home
        </span>
        <span className="text-neutral-200">/</span>
        <span
          onClick={() => navigate("/shop")}
          className="cursor-pointer hover:text-black transition-colors"
        >
          Shop
        </span>
        <span className="text-neutral-200">/</span>
        <span className="text-neutral-500 truncate max-w-37.5">
          {product.title}
        </span>
      </div>

      {/* 2. BRAND & TITLE */}
      <div className="space-y-2">
        {product?.brand && (
          <span className="inline-block text-[10px] font-bold tracking-widest text-[#014131] uppercase bg-[#014131]/5 px-2.5 py-1 rounded">
            {product.brand}
          </span>
        )}
        <h1 className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight leading-tight">
          {product.title}
        </h1>
      </div>

      {/* 3. PRICE & RATING ROW */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-100">
        {/* PRICE */}
        <div className="flex items-baseline gap-2.5">
          <span className="text-3xl font-normal text-neutral-950 tracking-tight">
            ${discountedPrice(product)}
          </span>
          {product?.price && (
            <span className="line-through text-sm font-light text-neutral-400">
              ${product.price}
            </span>
          )}
        </div>

        {/* RATING */}
        <div className="flex items-center gap-2 bg-neutral-50 px-3 py-1.5 rounded-full border border-neutral-100">
          <div className="flex items-center gap-1">
            <FaStar size={13} className="text-amber-500 fill-amber-500" />
            <span className="text-xs font-semibold text-neutral-800">
              {product.rating || "4.5"}
            </span>
          </div>
          <span className="text-[11px] text-neutral-400 font-normal">
            • {product.reviews?.length || 0} reviews
          </span>
        </div>
      </div>

      {/* 4. SHORT DESCRIPTION */}
      <div>
        <p className="text-sm leading-relaxed text-neutral-500 font-light line-clamp-3">
          {product?.description}
        </p>
      </div>

      {/* 5. REWARD BADGE */}
      <div className="bg-[#C29958]/5 text-neutral-800 border border-[#C29958]/10 rounded-xl p-3.5 flex items-center justify-between gap-3 group">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#C29958]/10 fill-[#C29958]/10 flex items-center justify-center text-[#C29958] shrink-0">
            <Gift
              size={16}
              className="group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">
              Loyalty Reward
            </span>
            <span className="text-sm font-medium text-neutral-800">
              Earn{" "}
              <b className="text-[#C29958] font-semibold">
                {product?.rewardPoints || 18}
              </b>{" "}
              Points
            </span>
          </div>
        </div>
        <span className="text-[9px] font-semibold bg-[#C29958]/10 text-[#C29958] px-2 py-0.5 rounded uppercase tracking-wider">
          Bonus
        </span>
      </div>

      {/* 6. INTERACTIVE ACTIONS SECTION (The Core UI Polish) */}
      <div className="pt-2 space-y-4">
        {/* আমরা কাউন্টার এবং বাটনগুলোকে একটি ক্লিন গ্রিড/ফ্লেক্স লেআউটে সাজালাম */}
        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
          {/* Counter Wrapper */}
          <div className="w-full sm:w-auto shrink-0">
            <ProductCounter
              stock={product?.stock || 10}
              onQuantityChange={handleQuantityChange}
            />
          </div>

          {/* Buttons Group */}
          <div className="flex items-center gap-3 w-full h-12 mt-auto">
            {/* Add to Cart - Clean Luxury Mono Outline */}
            <button className="flex-1 h-full border border-black bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
              <ShoppingBag size={14} />
              Add to Cart
            </button>

            {/* Buy Now - Glaroma Brand Pop Color */}
            <Link
              to={`/checkout`}
              className="flex-1 h-full bg-[#014131] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#023024] shadow-sm transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>

      {/* stock number & wishlist */}
      <div className="flex gap-6 text-gray-700 ">
        {/* wishlist */}
        <div className="flex gap-1.5 items-center cursor-pointer">
          <Heart size={18} />
          <p className="text-gray-800 hover:text-gray-600">Add to wishlist</p>
        </div>
        <p>In stock: {product?.stock || 10}</p>
      </div>
    </div>
  );
}
