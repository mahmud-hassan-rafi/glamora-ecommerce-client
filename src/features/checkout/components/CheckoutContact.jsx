import CheckoutSection from "./CheckoutSection";

export default function CheckoutContact() {
  return (
    <CheckoutSection
      title="Contact Information"
      description="We’ll use this to send order updates and delivery notifications."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            Email Address
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="
              w-full rounded-xl border
              px-4 py-3
              outline-none
              focus:ring-2 focus:ring-black/10
            "
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="+880 1XXXXXXXXX"
            className="
              w-full rounded-xl border
              px-4 py-3
              outline-none
              focus:ring-2 focus:ring-black/10
            "
          />
        </div>
      </div>

      {/* Optional login hint */}
      <div className="mt-6 rounded-xl bg-neutral-50 p-4 text-sm text-neutral-600">
        💡 Already have an account? Your order will be linked automatically
        after email match.
      </div>
    </CheckoutSection>
  );
}
