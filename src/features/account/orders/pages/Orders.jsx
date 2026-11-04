import React, { useState } from "react";
import { Link } from "react-router-dom";

const mockOrders = [
  {
    id: "ORD-1001",
    product: "Nike Air Max 270",
    price: "$120",
    status: "Shipped",
    date: "2026-06-20",
  },
  {
    id: "ORD-1002",
    product: "Basic Cotton T-Shirt",
    price: "$25",
    status: "Delivered",
    date: "2026-06-18",
  },
  {
    id: "ORD-1003",
    product: "Wireless Headphones",
    price: "$89",
    status: "Processing",
    date: "2026-06-22",
  },
];

const statusStyle = {
  Processing: "bg-yellow-100 text-yellow-700",
  Shipped: "bg-blue-100 text-blue-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function OrdersPage() {
  const [filter, setFilter] = useState("All");

  const filteredOrders =
    filter === "All"
      ? mockOrders
      : mockOrders.filter((o) => o.status === filter);

  return (
    <section className="max-w-6xl mx-auto">
      {/* HEADER */}
      <div className="border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          My Orders
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Track your purchases and order history
        </p>
      </div>

      {/* FILTERS */}
      <div className="mt-8 flex flex-wrap gap-3">
        {["All", "Processing", "Shipped", "Delivered", "Cancelled"].map(
          (item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`
                rounded-full px-4 py-1.5 text-sm font-medium transition
                ${
                  filter === item
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }
              `}
            >
              {item}
            </button>
          ),
        )}
      </div>

      {/* ORDERS LIST */}
      <div className="mt-10 space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="
              flex flex-col gap-4
              rounded-2xl border border-gray-200
              bg-white p-5
              transition
              hover:-translate-y-0.5 hover:shadow-sm
              md:flex-row md:items-center md:justify-between
            "
          >
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold text-gray-900">{order.id}</p>

              <p className="mt-1 text-sm text-gray-600">{order.product}</p>

              <p className="mt-1 text-xs text-gray-400">{order.date}</p>
            </div>

            {/* MIDDLE */}
            <div className="text-sm font-medium text-gray-900">
              {order.price}
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              <span
                className={`
                  rounded-full px-3 py-1 text-xs font-medium
                  ${statusStyle[order.status]}
                `}
              >
                {order.status}
              </span>

              <Link
                to={"/account/orders/" + order.id}
                className="text-sm font-medium text-black hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredOrders.length === 0 && (
        <div className="mt-16 text-center text-sm text-gray-500">
          No orders found for this filter.
        </div>
      )}
    </section>
  );
}
