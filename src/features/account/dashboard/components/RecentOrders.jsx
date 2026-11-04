import React from "react";
import { ArrowRight } from "lucide-react";

const orders = [
  {
    id: "GLR-10021",
    product: "MacBook Air M2",
    status: "Delivered",
    price: "$1,199",
    date: "12 Jun 2026",
  },
  {
    id: "GLR-10022",
    product: "Nike Air Jordan",
    status: "Shipped",
    price: "$240",
    date: "10 Jun 2026",
  },
  {
    id: "GLR-10023",
    product: "Sony Headphones",
    status: "Processing",
    price: "$199",
    date: "08 Jun 2026",
  },
];

export default function RecentOrders() {
  return (
    <section className="space-y-5">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          📦 Recent Orders
        </h2>

        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition">
          View All
          <ArrowRight size={14} />
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-3">
        {orders.map((order) => (
          <div
            key={order.id}
            className="
              flex items-center justify-between
              rounded-2xl
              border
              border-gray-200
              bg-white
              px-5 py-4
              transition
              hover:shadow-sm
              hover:-translate-y-0.5
            "
          >
            {/* LEFT */}
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-gray-900">
                {order.product}
              </h3>

              <p className="text-xs text-gray-500">
                Order #{order.id} • {order.date}
              </p>
            </div>

            {/* CENTER STATUS */}
            <span
              className={`
                text-xs font-medium px-3 py-1 rounded-full
                ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Shipped"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                }
              `}
            >
              {order.status}
            </span>

            {/* RIGHT */}
            <div className="text-right space-y-1">
              <p className="text-sm font-semibold text-gray-900">
                {order.price}
              </p>

              <button className="text-xs text-gray-500 hover:text-gray-900 transition">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
