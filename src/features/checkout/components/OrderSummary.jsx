import { ArrowRight, ShieldCheck, Truck } from "lucide-react";

export default function OrderSummary() {
  const items = [
    {
      id: 1,
      title: "Premium Compact Card Wallet For Men – K94-4",
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300",
      price: 229,
      quantity: 2,
      color: "Brown",
    },
    {
      id: 2,
      title: "Minimal Leather Card Holder",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300",
      price: 199,
      quantity: 1,
      color: "Coffee",
    },
  ];

  const subtotal = 657;
  const shipping = 60;
  const discount = 50;
  const reward = 100;
  const total = subtotal + shipping - discount;

  return (
    <div className="rounded-[28px] border border-neutral-200 bg-white p-7 shadow-sm">
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold">
          Order Summary
        </h2>

        <p className="mt-1 text-sm text-neutral-500">
          Review your items before placing the order.
        </p>
      </div>

      {/* ITEMS */}
      <div className="mt-8 space-y-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4"
          >
            {/* IMAGE */}
            <div className="h-20 w-20 overflow-hidden rounded-2xl border bg-neutral-50">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* INFO */}
            <div className="min-w-0 flex-1">
              <h3 className="line-clamp-2 text-sm font-semibold">
                {item.title}
              </h3>

              <div className="mt-2 flex items-center gap-3 text-xs text-neutral-500">
                <span>{item.color}</span>
                <span>×{item.quantity}</span>
              </div>
            </div>

            {/* PRICE */}
            <div className="text-sm font-semibold">
              ৳{item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      {/* COUPON */}
      <div className="my-8 flex gap-3">
        <input
          type="text"
          placeholder="Coupon code"
          className="
            flex-1 rounded-xl border
            px-4 py-3 outline-none
            focus:ring-2
          "
        />

        <button
          className="
            rounded-xl border
            px-5 font-medium
            hover:bg-neutral-50
          "
        >
          Apply
        </button>
      </div>

      {/* PRICE DETAILS */}
      <div className="space-y-4 border-y py-6">

        <div className="flex justify-between">
          <span className="text-neutral-500">
            Subtotal
          </span>

          <span className="font-medium">
            ৳{subtotal}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-neutral-500">
            Shipping
          </span>

          <span className="font-medium">
            ৳{shipping}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-neutral-500">
            Discount
          </span>

          <span className="font-medium text-green-600">
            -৳{discount}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-neutral-500">
            Reward Points
          </span>

          <span className="font-medium text-amber-600">
            +{reward}
          </span>
        </div>

      </div>

      {/* TOTAL */}
      <div className="flex items-center justify-between py-6">
        <span className="text-lg font-semibold">
          Total
        </span>

        <span className="text-2xl font-bold">
          ৳{total}
        </span>
      </div>

      {/* CTA */}
      <button
        className="
          flex w-full items-center
          justify-center gap-2
          rounded-2xl bg-black
          py-4 text-white
          transition hover:opacity-90
        "
      >
        Place Order
        <ArrowRight size={18} />
      </button>

      {/* TRUST */}
      <div className="mt-6 space-y-3 border-t pt-6">

        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <ShieldCheck size={16} />
          Secure checkout
        </div>

        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <Truck size={16} />
          Fast delivery available
        </div>

      </div>
    </div>
  );
}