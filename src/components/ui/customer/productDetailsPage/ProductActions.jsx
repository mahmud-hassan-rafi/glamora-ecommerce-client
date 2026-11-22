import { Heart, Minus, Plus, ShoppingCart, Zap } from "lucide-react";

export default function ProductActions() {
  return (
    <div className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-6">

      {/* Quantity */}
      <div>
        <label className="mb-3 block text-sm font-medium text-neutral-700">
          Quantity
        </label>

        <div className="inline-flex items-center rounded-2xl border border-neutral-200">
          <button
            className="
              flex h-12 w-12 items-center justify-center
              transition hover:bg-neutral-100
            "
          >
            <Minus size={16} />
          </button>

          <span className="flex h-12 min-w-16 items-center justify-center border-x border-neutral-200 font-semibold">
            1
          </span>

          <button
            className="
              flex h-12 w-12 items-center justify-center
              transition hover:bg-neutral-100
            "
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Main CTA */}
      <div className="space-y-3">

        <button
          className="
            flex w-full items-center justify-center gap-2
            rounded-2xl bg-black
            px-5 py-4
            text-sm font-semibold text-white
            transition hover:opacity-90
          "
        >
          <ShoppingCart size={18} />
          Add To Cart
        </button>

        <button
          className="
            flex w-full items-center justify-center gap-2
            rounded-2xl border border-neutral-300
            bg-white
            px-5 py-4
            text-sm font-semibold text-neutral-900
            transition hover:border-black
          "
        >
          <Zap size={18} />
          Buy Now
        </button>

      </div>

      {/* Secondary Actions */}
      <div className="grid grid-cols-2 gap-3">

        <button
          className="
            flex items-center justify-center gap-2
            rounded-2xl border border-neutral-200
            px-4 py-3
            text-sm font-medium
            transition hover:bg-neutral-50
          "
        >
          <Heart size={16} />
          Wishlist
        </button>

        <button
          className="
            rounded-2xl border border-neutral-200
            px-4 py-3
            text-sm font-medium
            transition hover:bg-neutral-50
          "
        >
          Share
        </button>

      </div>

      {/* Purchase Info */}
      <div className="space-y-3 border-t border-neutral-100 pt-5">

        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500">
            Free Shipping
          </span>

          <span className="font-medium">
            Available
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500">
            Estimated Delivery
          </span>

          <span className="font-medium">
            3-5 Days
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500">
            Return Policy
          </span>

          <span className="font-medium">
            7 Days
          </span>
        </div>

      </div>

    </div>
  );
}