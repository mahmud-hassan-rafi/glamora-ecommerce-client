import React from "react";

const PaymentSkeleton = () => {
  return (
    <div className="w-80 md:w-100 h-min flex flex-col gap-4 p-4 bg-gray-100 rounded animate-pulse">
      <div className="w-1/2 h-8 rounded bg-gray-200 animate-pulse" />

      <div className="w-full h-12 rounded bg-gray-200 animate-pulse" />
      <div className="grid grid-cols-2 gap-4">
        <div className="w-full h-12 rounded bg-gray-200 animate-pulse" />
        <div className="w-full h-12 rounded bg-gray-200 animate-pulse" />
      </div>
      <div className="w-full h-12 rounded bg-gray-200 animate-pulse" />
    </div>
  );
};

export default PaymentSkeleton;
