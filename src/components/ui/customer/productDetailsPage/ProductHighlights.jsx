import {
  Boxes,
  Package,
  Ruler,
  ShieldCheck,
  Truck,
  Barcode,
} from "lucide-react";

export default function ProductHighlights() {
  const specs = [
    {
      icon: Package,
      label: "Stock",
      value: "99 Available",
    },
    {
      icon: Boxes,
      label: "Category",
      value: "Beauty",
    },
    {
      icon: ShieldCheck,
      label: "Warranty",
      value: "1 Week",
    },
    {
      icon: Truck,
      label: "Shipping",
      value: "3-5 Days",
    },
    {
      icon: Ruler,
      label: "Weight",
      value: "4g",
    },
    {
      icon: Barcode,
      label: "SKU",
      value: "BEA-ESS-001",
    },
  ];

  return (
    <section className="py-16 border-t border-neutral-200">
      {/* Section Header */}
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
          Product Information
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900">
          Specifications & Details
        </h2>
      </div>

      {/* Grid */}
      <div className="grid gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 md:grid-cols-2 xl:grid-cols-3">
        {specs.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="bg-white p-6 transition hover:bg-neutral-50"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-neutral-100 p-3">
                  <Icon size={18} />
                </div>

                <div>
                  <p className="text-sm text-neutral-500">{item.label}</p>

                  <p className="mt-1 font-semibold text-neutral-900">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
