import React from "react";

const ProductsSkeleton = ({ length }) => {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 items-center py-4">
      {Array.from({ length }).map((_, idx) => {
        return (
          <div
            key={idx}
            className="bg-white border rounded overflow-hidden cursor-pointer group transition shadow-sm hover:shadow-lg w-full h-85 flex flex-col justify-between"
          >
            {/* IMAGE */}
            <div className="relative w-full h-50 overflow-hidden ">
              <div className="w-full h-full object-cover bg-gray-200 animate-pulse"></div>

              {/* SALE BADGE */}
              <span className="absolute top-3 left-3 bg-gray-300 flex w-15 h-4.5 rounded-full animate-pulse"></span>
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col items-center gap-3">
              {/* product title */}
              <div className="bg-gray-200 w-full h-5 animate-pulse"></div>

              {/* PRICE */}
              <div className="bg-gray-200 w-1/3 h-4 animate-pulse"></div>

              {/* BUTTON */}
              <div className=" mt-3 w-full flex h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsSkeleton;
