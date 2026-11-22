import React from "react";
import OrderProgress from "./OrderProgress";

export default function ActiveOrderCard({ order }) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* TOP */}
      <div className="flex items-start gap-4">
        {/* IMAGE */}
        <img
          src={order.image}
          alt={order.product}
          className="h-16 w-16 rounded-2xl object-cover"
        />

        {/* INFO */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-900">
            {order.product}
          </h3>

          <p className="text-xs text-gray-500">Order #{order.id}</p>

          <span
            className={`
              mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium
              ${
                order.status === "Processing"
                  ? "bg-yellow-100 text-yellow-700"
                  : order.status === "Shipped"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
              }
            `}
          >
            {order.status}
          </span>
        </div>

        {/* ETA */}
        <div className="text-right">
          <p className="text-xs text-gray-500">ETA</p>
          <p className="text-sm font-semibold text-gray-900">{order.eta}</p>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="mt-6">
        <OrderProgress step={order.progress} />
      </div>

      {/* ACTION */}
      <div className="mt-5 flex items-center justify-between">
        <button className="text-sm font-medium text-gray-500 hover:text-gray-900">
          View Details →
        </button>

        <button className="rounded-xl bg-black px-4 py-2 text-xs font-medium text-white hover:opacity-90 transition">
          Track Order
        </button>
      </div>
    </div>
  );
}
