import { Check, Truck } from "lucide-react";
import CheckoutSection from "./CheckoutSection";

export default function CheckoutDelivery() {
  const methods = [
    {
      id: "inside",
      title: "Inside City",
      description: "Delivery within city area",
      eta: "1-2 days",
      price: 60,
      active: true,
    },
    {
      id: "outside",
      title: "Outside City",
      description: "Nationwide delivery",
      eta: "2-5 days",
      price: 120,
      active: false,
    },
    {
      id: "express",
      title: "Express Delivery",
      description: "Priority shipping service",
      eta: "24 hours",
      price: 180,
      active: false,
    },
  ];

  return (
    <CheckoutSection
      title="Delivery Method"
      description="Choose your preferred shipping option."
    >
      <div className="space-y-4">
        {methods.map((method) => (
          <button
            key={method.id}
            className={`
              relative w-full rounded-2xl border
              p-5 text-left transition
              ${
                method.active
                  ? "border-black bg-neutral-50"
                  : "border-neutral-200 hover:border-neutral-400"
              }
            `}
          >
            {/* Selected */}
            {method.active && (
              <div className="absolute right-5 top-5">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                  <Check size={14} />
                </div>
              </div>
            )}

            <div className="flex gap-4">
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-100">
                <Truck size={20} />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold">{method.title}</h3>

                  <span className="font-bold">৳{method.price}</span>
                </div>

                <p className="mt-1 text-sm text-neutral-500">
                  {method.description}
                </p>

                <p className="mt-3 text-sm font-medium">
                  Estimated delivery: {method.eta}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Info */}
      <div className="mt-6 rounded-2xl bg-neutral-50 p-4">
        <p className="text-sm text-neutral-600">
          🚚 Orders placed before 5 PM are usually processed on the same day.
        </p>
      </div>
    </CheckoutSection>
  );
}
