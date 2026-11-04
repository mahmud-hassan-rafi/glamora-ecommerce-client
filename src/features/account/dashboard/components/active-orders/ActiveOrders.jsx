import React from "react";
import ActiveOrderCard from "./ActiveOrderCard";

const mockOrders = [
  {
    id: "GLR-20541",
    product: "Nike Air Max 270",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    status: "Processing",
    progress: 2,
    eta: "Tomorrow",
  },
  {
    id: "GLR-20532",
    product: "MacBook Air M4",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    status: "Shipped",
    progress: 3,
    eta: "25 Jun",
  },
];

export default function ActiveOrders() {
  return (
    <section className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          📦 Active Orders
        </h2>

        <button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition">
          View All →
        </button>
      </div>

      {/* GRID */}
      <div className="grid gap-6 lg:grid-cols-2">
        {mockOrders.map((order) => (
          <ActiveOrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
}
