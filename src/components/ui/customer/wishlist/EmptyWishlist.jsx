import { Heart } from "lucide-react";

export default function EmptyWishlist() {
  return (
    <section className="flex min-h-[60vh] w-full flex-col items-center justify-center border border-black/10 p-10 text-center">
      {/* Icon */}
      <div className="flex h-20 w-20 items-center justify-center border border-black/10">
        <Heart className="text-black/60" size={28} />
      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-medium tracking-tight">
        Your wishlist is empty
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-md text-sm text-black/60">
        Save products you love and come back anytime to add them to your cart.
      </p>

      {/* Button */}
      <button className="mt-8 flex h-12 items-center justify-center border border-black px-6 text-sm font-medium transition-colors hover:bg-black hover:text-white">
        Continue Shopping
      </button>
    </section>
  );
}
