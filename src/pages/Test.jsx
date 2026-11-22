import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ShoppingBag, Heart, ArrowRight, Star } from "lucide-react";

const tabs = ["Trending", "New Arrivals", "On Sale"];

const productsData = {
  Trending: [
    {
      id: 1,
      name: "Glass Skin Serum",
      category: "Skincare",
      price: 32,
      oldPrice: 48,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Velvet Nude Kit",
      category: "Beauty",
      price: 24,
      oldPrice: 39,
      image:
        "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Glow Therapy Mask",
      category: "Luxury Care",
      price: 18,
      oldPrice: 28,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Soft Matte Finish",
      category: "Cosmetics",
      price: 42,
      oldPrice: 58,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  "New Arrivals": [
    {
      id: 5,
      name: "Hydra Repair Cream",
      category: "Skincare",
      price: 36,
      oldPrice: 49,
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Glossy Blush Touch",
      category: "Makeup",
      price: 22,
      oldPrice: 34,
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Luxury Silk Powder",
      category: "Premium",
      price: 55,
      oldPrice: 72,
      image:
        "https://images.unsplash.com/photo-1583241800698-9c1b8f0fcbf5?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Aura Glow Oil",
      category: "Organic",
      price: 27,
      oldPrice: 41,
      image:
        "https://images.unsplash.com/photo-1619451334792-150fd785ee74?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  "On Sale": [
    {
      id: 9,
      name: "Daily Skin Ritual",
      category: "Routine",
      price: 19,
      oldPrice: 35,
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 10,
      name: "Rose Lip Essence",
      category: "Beauty",
      price: 14,
      oldPrice: 26,
      image:
        "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 11,
      name: "Skin Bright Cleanser",
      category: "Clean Beauty",
      price: 21,
      oldPrice: 37,
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 12,
      name: "Luxury Night Repair",
      category: "Premium Care",
      price: 39,
      oldPrice: 64,
      image:
        "https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=1200&auto=format&fit=crop",
    },
  ],
};

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("Trending");

  return (
    <section className="relative overflow-hidden  pt-15 text-black">
      {/* Background Glow */}
      {/* <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-pink-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-3xl" /> */}

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/5 px-4 py-2 ">
              <Sparkles className="text-pink-400" size={18} />
              <span className="text-sm text-black/70">
                Premium Beauty Picks
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Featured <span className="text-pink-400">Products</span>
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-black/60">
              Discover luxury beauty essentials loved by thousands of customers.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative overflow-hidden rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "border border-white/10 bg-black/5 text-black/70  hover:bg-black/10"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-2xl bg-black"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
          >
            {productsData[activeTab].map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-black/5 "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 ">
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <span className="text-xs text-white font-medium">4.9</span>
                  </div>

                  <button className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-pink-400">
                    <Heart size={18} />
                  </button>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent opacity-70" />

                  {/* Hover CTA */}
                  <div className="absolute bottom-5 left-1/2 w-[85%] -translate-x-1/2 translate-y-20 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-black font-semibold text-white transition hover:bg-pink-400 hover:text-black">
                      <ShoppingBag size={18} />
                      Add To Cart
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="mb-2 text-sm text-pink-400">
                    {product.category}
                  </p>

                  <h3 className="mb-4 text-2xl font-black leading-tight">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black">
                        ${product.price}
                      </span>

                      <span className="text-black/40 line-through">
                        ${product.oldPrice}
                      </span>
                    </div>

                    <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/5 transition hover:bg-black hover:text-white">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-linear-to-t from-pink-500/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
