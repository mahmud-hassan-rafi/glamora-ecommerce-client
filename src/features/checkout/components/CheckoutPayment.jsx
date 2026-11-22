import {
  Banknote,
  CreditCard,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import CheckoutSection from "./CheckoutSection";

export default function CheckoutPayment() {
  const methods = [
    {
      id: "cod",
      title: "Cash on Delivery",
      description: "Pay when you receive your order",
      icon: Banknote,
      active: true,
    },
    {
      id: "bkash",
      title: "bKash",
      description: "Pay securely with bKash",
      icon: Smartphone,
      active: false,
    },
    {
      id: "nagad",
      title: "Nagad",
      description: "Pay securely with Nagad",
      icon: Smartphone,
      active: false,
    },
    {
      id: "ssl",
      title: "Card / SSLCommerz",
      description: "Visa, Mastercard & more",
      icon: CreditCard,
      active: false,
    },
  ];

  return (
    <CheckoutSection
      title="Payment Method"
      description="Choose your preferred payment option."
    >
      <div className="space-y-4">
        {methods.map((method) => {
          const Icon = method.icon;

          return (
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
              {/* Radio */}
              <div
                className={`
                  absolute right-5 top-5
                  flex h-5 w-5 items-center justify-center
                  rounded-full border-2
                  ${
                    method.active
                      ? "border-black"
                      : "border-neutral-300"
                  }
                `}
              >
                {method.active && (
                  <div className="h-2.5 w-2.5 rounded-full bg-black" />
                )}
              </div>

              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-100">
                  <Icon size={22} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold">
                    {method.title}
                  </h3>

                  <p className="mt-1 text-sm text-neutral-500">
                    {method.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Security Notice */}
      <div className="mt-6 flex gap-3 rounded-2xl bg-neutral-50 p-4">
        <ShieldCheck
          size={20}
          className="mt-0.5 shrink-0"
        />

        <div>
          <p className="font-medium">
            Secure Checkout
          </p>

          <p className="mt-1 text-sm text-neutral-500">
            Your payment information is encrypted and
            securely processed.
          </p>
        </div>
      </div>
    </CheckoutSection>
  );
}