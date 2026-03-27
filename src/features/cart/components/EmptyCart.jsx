import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      {/* Icon */}
      <div className="bg-gray-100 p-6 rounded-full mb-6">
        <ShoppingCart size={48} className="text-gray-500" />
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">
        Your cart is currently empty
      </h2>

      {/* Description */}
      <p className="text-gray-500 max-w-md mb-6 text-sm sm:text-base">
        Looks like you haven’t added anything to your cart yet. Start shopping
        to find amazing products!
      </p>

      {/* CTA */}
      <Link
        to="/shop"
        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200"
      >
        Return to Shop
      </Link>
    </div>
  );
}
