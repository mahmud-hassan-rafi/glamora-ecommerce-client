import React from "react";

const randomWidth = ["w-35", "w-29", "w-31", "w-25", "w-28"];

const ProductSkeleton = () => {
  return (
    <div className="flex gap-4 w-full">
      {/* filter section */}
      <div className="hidden md:flex flex-col gap-2.5 p-4 w-1/4">
        <div className="w-full h-40 bg-gray-200 rounded-md p-2.5 flex flex-col gap-1">
          {/* title */}
          <div className="bg-gray-300 w-1/3 h-4 mb-1 rounded-md animate-pulse"></div>

          {/* items */}
          {randomWidth.map((width, idx) => {
            return (
              <div key={idx} className="flex gap-2.5 w-full">
                <div className="size-4 rounded bg-gray-300/80 animate-pulse" />
                <div
                  className={`bg-gray-300/80 ${width} h-4 rounded-md animate-pulse`}
                ></div>
              </div>
            );
          })}
        </div>
        {/* 2nd */}
        <div className="w-full h-18 bg-gray-200 rounded-md p-4">
          {/* title */}
          <div className="bg-gray-300 w-1/3 h-4 mb-1 rounded-md animate-pulse"></div>
          {/* elem */}
          <div
            className={`bg-gray-300 w-full h-4 rounded-md animate-pulse`}
          ></div>
        </div>

        {/* 3rd */}
        <div className="w-full h-40 bg-gray-200 rounded-md p-2.5 flex flex-col gap-1">
          {/* title */}
          <div className="bg-gray-300 w-1/3 h-4 mb-1 rounded-md animate-pulse"></div>

          {/* items */}
          {randomWidth.map((width, idx) => {
            return (
              <div key={idx} className="flex gap-2.5 w-full">
                <div className="size-4 rounded-full bg-gray-300/80 animate-pulse" />
                <div
                  className={`bg-gray-300/80 ${width} h-4 rounded-md animate-pulse`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Products section */}
      <div className="w-full md:w-3/4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 items-center py-4">
        {Array.from({ length: 10 }).map((_, idx) => {
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
    </div>
  );
};

export default ProductSkeleton;
