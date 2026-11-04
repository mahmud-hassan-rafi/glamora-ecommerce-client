import ProductCard from "@features/account/dashboard/components/RecommendedForYou/ProductCard";

export default function RelatedProducts() {
  const products = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
      price: 9.99,
      discountPercentage: 10,
      rating: 4.8,
      reviews: 125,
      brand: "Essence",
    },
    {
      id: 2,
      title: "Red Lipstick Matte Finish",
      thumbnail: "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
      price: 14.99,
      discountPercentage: 15,
      rating: 4.7,
      reviews: 92,
      brand: "Essence",
    },
    {
      id: 3,
      title: "Long Wear Eyeliner",
      thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
      price: 11.99,
      discountPercentage: 12,
      rating: 4.9,
      reviews: 203,
      brand: "Essence",
    },
    {
      id: 4,
      title: "Beauty Glow Foundation",
      thumbnail: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
      price: 24.99,
      discountPercentage: 18,
      rating: 4.6,
      reviews: 178,
      brand: "Essence",
    },
  ];

  return (
    <section className="pt-20">
      {/* Header */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
            Discover More
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            You May Also Like
          </h2>
        </div>

        <button className="hidden md:block text-sm font-medium text-neutral-600 hover:text-black">
          View All
        </button>
      </div>

      {/* Products */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
