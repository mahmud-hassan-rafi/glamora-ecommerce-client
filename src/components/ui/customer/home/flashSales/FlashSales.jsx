import { motion } from "framer-motion";
import useCountdown from "@hooks/useCountdown";
import { LuFlame, LuClock3, LuArrowRight } from "react-icons/lu";
import Title from "../common/Title";
import ProductCard from "@features/account/dashboard/components/RecommendedForYou/ProductCard";

// const products = [
//   {
//     id: 1,
//     name: "Hydra Glow Serum",
//     category: "Skincare",
//     image:
//       "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop",
//     oldPrice: 42,
//     newPrice: 26,
//     sold: 72,
//   },
//   {
//     id: 2,
//     name: "Velvet Matte Lipstick",
//     category: "Makeup",
//     image:
//       "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?q=80&w=1200&auto=format&fit=crop",
//     oldPrice: 28,
//     newPrice: 16,
//     sold: 54,
//   },
//   {
//     id: 3,
//     name: "Rose Clay Mask",
//     category: "Beauty",
//     image:
//       "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
//     oldPrice: 38,
//     newPrice: 21,
//     sold: 81,
//   },
//   {
//     id: 4,
//     name: "Soft Shine Foundation",
//     category: "Cosmetics",
//     image:
//       "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
//     oldPrice: 48,
//     newPrice: 29,
//     sold: 63,
//   },
// ];

const products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 10.48,
    rating: 2.56,
    stock: 99,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    sku: "BEA-ESS-ESS-001",
    weight: 4,
    dimensions: {
      width: 15.14,
      height: 13.08,
      depth: 22.99,
    },
    warrantyInformation: "1 week warranty",
    shippingInformation: "Ships in 3-5 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 3,
        comment: "Would not recommend!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Eleanor Collins",
        reviewerEmail: "eleanor.collins@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Lucas Gordon",
        reviewerEmail: "lucas.gordon@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Eleanor Collins",
        reviewerEmail: "eleanor.collins@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 48,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5784719087687",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },
];
export default function FlashSales() {
  const timeLeft = useCountdown("2026-08-03T21:57:00");

  return (
    <section className="relative overflow-hidden ">
      {/* Background Glow */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20  rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-400/10  rounded-full" /> */}

      <div className="relative max-w-7xl mx-auto px-4">
        <Title title="Flash Sales" />
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div>
            <p className="mt-4 text-black/60 max-w-xl text-lg">
              Luxury beauty essentials at exclusive prices. Grab your favorites
              before the timer runs out.
            </p>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 rounded-3xl bg-black/5 border border-white/10 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">{timeLeft?.days}</span>
              <span className="text-xs text-black/50">DAYS</span>
            </div>

            {/* hours */}
            <div className="w-20 h-20 rounded-3xl bg-black/5 border border-white/10 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">{timeLeft?.hours}</span>
              <span className="text-xs text-black/50">HRS</span>
            </div>

            {/* mins */}
            <div className="w-20 h-20 rounded-3xl bg-black/5 border border-white/10 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">{timeLeft?.minutes}</span>
              <span className="text-xs text-black/50">MIN</span>
            </div>
            {/* seconds */}
            <div className="w-20 h-20 rounded-3xl bg-black/5 border border-white/10 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">{timeLeft?.seconds}</span>
              <span className="text-xs text-black/50">SECONDS</span>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            // single product card
            <ProductCard
              key={product.id || Math.random}
              product={product}
              i={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
