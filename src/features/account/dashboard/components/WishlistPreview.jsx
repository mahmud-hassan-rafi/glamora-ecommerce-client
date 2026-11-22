import React from "react";
import { Heart, ArrowRight } from "lucide-react";

const wishlist = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: "$180",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: "$220",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
  },
  {
    id: 3,
    name: "Apple Watch Series 9",
    price: "$399",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 4,
    name: "Sony Headphones",
    price: "$199",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
];

export default function WishlistPreview() {
  return (
    <section className="space-y-5 w-full">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          ❤️ Wishlist
        </h2>

        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition">
          View All
          <ArrowRight size={14} />
        </button>
      </div>

      {/* SCROLL ROW */}
      <div className="flex gap-5 w-full overflow-x-auto pb-2 scrollbar-none">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="
              min-w-55
              shrink-0
              rounded-2xl
              border
              border-gray-200
              bg-white
              overflow-hidden
              transition
              hover:-translate-y-1
              hover:shadow-md
            "
          >
            {/* IMAGE */}
            <div className="relative h-36 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />

              <button className="absolute right-2 top-2 rounded-full bg-white p-2 shadow-sm">
                <Heart size={14} className="text-red-500" />
              </button>
            </div>

            {/* INFO */}
            <div className="p-4 space-y-1">
              <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>

              <p className="text-sm text-gray-500">{item.price}</p>

              <button className="mt-2 w-full rounded-xl bg-black py-2 text-xs font-medium text-white hover:opacity-90 transition">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
