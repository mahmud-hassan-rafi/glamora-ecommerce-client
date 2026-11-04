import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useState } from "react";

export default function ProductGallery({ images }) {
  // const images = [
  //   "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  //   "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
  //   "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
  //   "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  // ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-5">
      <div className="grid gap-4 lg:grid-cols-[90px_1fr]">
        {/* Thumbnails */}
        <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
          {images.map((img) => (
            <button
              key={img}
              onClick={() => setSelectedImage(img)}
              className={`
                overflow-hidden rounded-2xl border-2 transition
                ${selectedImage === img ? "border-sky-400/70" : "border-neutral-200"}
              `}
            >
              <img src={img} alt="" className="h-20 w-20 object-cover" />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="order-1 lg:order-2">
          <div
            className="
              group relative overflow-hidden
              rounded-lg border border-black/10
              
            "
          >
            {/* Action */}
            <button
              className="
                absolute right-4 top-4 z-10
                rounded-xl bg-white/90 p-2
                shadow-sm backdrop-blur cursor-pointer
              "
            >
              <Expand size={18} />
            </button>

            <img
              src={selectedImage}
              alt="Product"
              className="
                h-112.5 w-full
                object-cover
                transition duration-500
                group-hover:scale-105
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
