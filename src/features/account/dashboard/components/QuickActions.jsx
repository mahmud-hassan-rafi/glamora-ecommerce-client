import React from "react";
import {
  Package,
  ShoppingBag,
  Heart,
  MapPin,
  User,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Track Orders",
    desc: "See shipping status",
    icon: Package,
  },
  {
    title: "Continue Shopping",
    desc: "Browse products",
    icon: ShoppingBag,
  },
  {
    title: "Wishlist",
    desc: "Saved items",
    icon: Heart,
  },
  {
    title: "Addresses",
    desc: "Manage delivery",
    icon: MapPin,
  },
  {
    title: "Profile",
    desc: "Edit account info",
    icon: User,
  },
  {
    title: "Payments",
    desc: "Billing & cards",
    icon: CreditCard,
  },
];

export default function QuickActions() {
  return (
    <section className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          ⚡ Quick Actions
        </h2>

        <button className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1">
          View all
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((item, idx) => {
          const Icon = item.icon;

          return (
            <button
              key={idx}
              className="
                group
                flex items-start gap-4
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
                text-left
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              {/* Icon */}
              <div className="rounded-xl bg-gray-100 p-3 transition group-hover:bg-black">
                <Icon
                  size={18}
                  className="text-gray-700 group-hover:text-white"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={16}
                className="text-gray-400 group-hover:translate-x-1 transition"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
