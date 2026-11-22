import LoadingSpinner from "@components/common/LoadingSpinner";
import EmptyWishlist from "@components/ui/customer/wishlist/EmptyWishlist";
import { useAppContext } from "@context/AppContext";
import { useGetProductsQuery } from "@utils/productsApi";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";

// const wishlistProducts = [
//   {
//     id: 1,
//     name: "Vitamin C Brightening Serum",
//     price: "$48.00",
//     status: "In Stock",
//     image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
//   },
//   {
//     id: 2,
//     name: "Hydrating Facial Cleanser",
//     price: "$29.00",
//     status: "In Stock",
//     image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800",
//   },
//   {
//     id: 3,
//     name: "Retinol Night Repair",
//     price: "$62.00",
//     status: "Only 4 Left",
//     image: "https://images.unsplash.com/photo-1556228578-dd6c7f1c7c3d?w=800",
//   },
//   {
//     id: 4,
//     name: "Daily Moisture Cream",
//     price: "$35.00",
//     status: "In Stock",
//     image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=800",
//   },
//   {
//     id: 5,
//     name: "SPF 50 Protection Fluid",
//     price: "$38.00",
//     status: "In Stock",
//     image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=800",
//   },
//   {
//     id: 6,
//     name: "Hyaluronic Acid Serum",
//     price: "$42.00",
//     status: "In Stock",
//     image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=800",
//   },
// ];

export default function Wishlist() {
  const { data: wishlistProducts, isLoading } = useGetProductsQuery({
    limit: 6,
    page: 1,
  });

  const { discountedPrice } = useAppContext();

  if (
    (!isLoading && !wishlistProducts?.products) ||
    wishlistProducts?.products?.length === 0 ||
    0
  ) {
    return <EmptyWishlist />;
  }

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-6 sm:px-8 md:px-12 xl:px-16">
      {/* Header */}
      <div className="flex flex-col gap-6 border-b border-black/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-4xl font-medium tracking-tight">Wishlist</h1>

          <p className="mt-3 text-sm text-black/60">
            {wishlistProducts?.products?.length} saved products for later.
          </p>
        </div>

        <button className="flex h-12 items-center justify-center gap-2 border border-black px-6 text-sm font-medium transition-colors hover:bg-black hover:text-white">
          <ShoppingBag size={18} />
          Move All To Cart
        </button>
      </div>

      {/* Products */}
      {!isLoading ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {wishlistProducts?.products?.map((product) => (
            <article
              key={product._id}
              className="group overflow-hidden border border-black/10"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-neutral-100">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Remove */}
                <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-black bg-white">
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-4 p-6">
                <div>
                  <h2 className="line-clamp-2 text-lg font-medium">
                    {product.title}
                  </h2>

                  <p className="mt-2 text-sm text-black/50">
                    {product.availabilityStatus}
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <span className="text-lg font-medium text-gray-400 line-through">
                    ${product?.price}
                  </span>
                  <span className="text-lg font-medium">
                    ${discountedPrice(product)}
                  </span>

                  {/* <Heart size={18} className="fill-black text-black" /> */}
                </div>

                <button className="flex h-12 w-full items-center justify-center gap-2 border border-black text-sm font-medium transition-colors hover:bg-black hover:text-white">
                  <ShoppingBag size={18} />
                  Add To Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-10 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
    </section>
  );
}
