import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import dummyProducts from "@features/account/dashboard/constants/dummyProducts";

export default function RecommendedForYou() {
  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Picked for you</p>

          <h2 className="mt-1 text-2xl font-bold tracking-tight">
            Recommended For You
          </h2>

          <p className="mt-2 max-w-xl text-sm text-gray-500">
            Personalized recommendations based on your wishlist, purchases and
            browsing history.
          </p>
        </div>

        <button className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-black text-gray-500 transition">
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
