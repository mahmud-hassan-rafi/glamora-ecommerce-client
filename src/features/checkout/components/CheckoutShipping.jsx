import CheckoutSection from "./CheckoutSection";

export default function CheckoutShipping() {
  return (
    <CheckoutSection
      title="Shipping Address"
      description="Enter the address where you want your order delivered."
    >
      <div className="space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="
              w-full rounded-xl border
              px-4 py-3
              outline-none
              focus:ring-2 focus:ring-black/10
            "
          />
        </div>

        {/* Address */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            Full Address
          </label>

          <textarea
            rows="3"
            placeholder="House no, Road, Area, City"
            className="
              w-full rounded-xl border
              px-4 py-3
              outline-none
              focus:ring-2 focus:ring-black/10
            "
          />
        </div>

        {/* Row: Division + District */}
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">
              Division
            </label>

            <select
              className="
                w-full rounded-xl border
                px-4 py-3
                outline-none
                focus:ring-2 focus:ring-black/10
              "
            >
              <option>Select Division</option>
              <option>Chattogram</option>
              <option>Dhaka</option>
              <option>Rajshahi</option>
              <option>Khulna</option>
              <option>Barishal</option>
              <option>Sylhet</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">
              District
            </label>

            <input
              type="text"
              placeholder="Your district"
              className="
                w-full rounded-xl border
                px-4 py-3
                outline-none
                focus:ring-2 focus:ring-black/10
              "
            />
          </div>
        </div>

        {/* Phone hint */}
        <div className="rounded-xl bg-neutral-50 p-4 text-sm text-neutral-600">
          📦 Make sure your phone number is active for delivery confirmation.
        </div>
      </div>
    </CheckoutSection>
  );
}
