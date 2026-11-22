import { MapPin, Pencil, Star } from "lucide-react";

export default function FeaturedAddressCard() {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-3xl
        border border-neutral-200
        bg-linear-to-br
        from-neutral-50
        via-white
        to-neutral-100
        p-8
      "
    >
      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white">
        <Star size={12} fill="currentColor" />
        Primary Delivery Address
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">Rafi Hasan</h2>

          <div className="mt-5 flex items-start gap-3">
            <MapPin size={18} className="mt-1 text-neutral-500" />

            <div className="space-y-1 text-neutral-600">
              <p>Dharmanagar</p>
              <p>Chattogram</p>
              <p>Bangladesh</p>
              <p className="pt-2">+8801XXXXXXXXX</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="text-sm text-neutral-500">Last Used</p>

            <p className="mt-1 font-medium">2 days ago</p>
          </div>

          <button
            className="
              inline-flex items-center gap-2
              rounded-2xl
              border border-neutral-300
              bg-white
              px-4 py-3
              text-sm font-medium
              transition
              hover:border-black
            "
          >
            <Pencil size={16} />
            Edit Address
          </button>
        </div>
      </div>
    </div>
  );
}
