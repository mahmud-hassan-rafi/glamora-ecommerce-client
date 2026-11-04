import React from "react";

export default function OrderDetailsPage() {
  const order = {
    id: "#ORD-1001",
    status: "Shipped",
    date: "2026-06-20",
    total: "$120",
    payment: "Paid (Card)",
    shippingAddress: "Dharmanagar, Chattogram, Bangladesh",
    items: [
      {
        name: "Nike Air Max 270",
        qty: 1,
        price: "$120",
      },
    ],
    timeline: [
      { step: "Order Placed", done: true },
      { step: "Payment Confirmed", done: true },
      { step: "Shipped", done: true },
      { step: "Out for Delivery", done: false },
      { step: "Delivered", done: false },
    ],
  };

  return (
    <section className="max-w-6xl mx-auto space-y-10">

      {/* HEADER */}
      <div className="border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Order Details
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          {order.id} • Placed on {order.date}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">

        {/* LEFT: TIMELINE */}
        <div className="lg:col-span-2 space-y-6">

          <h2 className="text-lg font-semibold text-gray-900">
            Delivery Progress
          </h2>

          <div className="space-y-4">

            {order.timeline.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">

                {/* DOT */}
                <div
                  className={`
                    h-3 w-3 rounded-full
                    ${item.done ? "bg-black" : "bg-gray-300"}
                  `}
                />

                {/* LINE */}
                <div className="flex-1">
                  <p
                    className={`
                      text-sm font-medium
                      ${item.done ? "text-gray-900" : "text-gray-400"}
                    `}
                  >
                    {item.step}
                  </p>
                </div>

              </div>
            ))}

          </div>

          {/* ITEMS */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Items
            </h2>

            <div className="space-y-4">

              {order.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl border border-gray-200 p-4"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      Qty: {item.qty}
                    </p>
                  </div>

                  <p className="text-sm font-semibold text-gray-900">
                    {item.price}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* RIGHT: SUMMARY */}
        <div className="space-y-6">

          {/* ORDER SUMMARY */}
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Order Summary
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span className="font-medium">{order.status}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Payment</span>
                <span className="font-medium">{order.payment}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Total</span>
                <span className="font-semibold">{order.total}</span>
              </div>

            </div>
          </div>

          {/* SHIPPING */}
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Shipping Address
            </h3>

            <p className="text-sm text-gray-600 leading-6">
              {order.shippingAddress}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-3">

            <button className="rounded-xl bg-black py-2.5 text-sm font-medium text-white hover:opacity-90">
              Track Package
            </button>

            <button className="rounded-xl border border-gray-300 py-2.5 text-sm font-medium text-gray-700 hover:border-black">
              Download Invoice
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}