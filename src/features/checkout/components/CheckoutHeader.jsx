import { ChevronRight } from "lucide-react";

export default function CheckoutHeader() {
  return (
    <div>
      {/* breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-neutral-500">
        <span>Cart</span>
        <ChevronRight size={14} />
        <span className="font-medium text-black">
          Checkout
        </span>
        <ChevronRight size={14} />
        <span>Success</span>
      </div>

      {/* title */}
      <div className="mt-5">
        <h1 className="text-4xl font-bold tracking-tight">
          Checkout
        </h1>

        <p className="mt-2 text-neutral-500">
          Complete your order securely.
        </p>
      </div>
    </div>
  );
}