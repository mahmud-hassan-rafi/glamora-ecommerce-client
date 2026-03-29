import React from "react";
import ProductsSkeleton from "./product/ProductsSkeleton";

const randomWidth = ["w-35", "w-29", "w-31", "w-25", "w-28"];

const ShopPageSkeleton = () => {
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
      <div className="w-3/4">
        <ProductsSkeleton length={10} />
      </div>
    </div>
  );
};

export default ShopPageSkeleton;
