import React from "react";
import { Truck, TicketPercent, Sparkles, Headphones } from "lucide-react";

const benefits = [
  {
    title: "Free Express Delivery",
    desc: "Unlimited fast shipping on eligible orders",
    icon: Truck,
  },
  {
    title: "Exclusive Discounts",
    desc: "Member-only deals and seasonal offers",
    icon: TicketPercent,
  },
  {
    title: "Early Access",
    desc: "Shop new drops before everyone else",
    icon: Sparkles,
  },
  {
    title: "Priority Support",
    desc: "Faster response from our support team",
    icon: Headphones,
  },
];

export default function MembershipBenefits() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {benefits.map((item, idx) => {
        const Icon = item.icon;

        return (
          <div
            key={idx}
            className="
              group flex items-start gap-4
              rounded-2xl border border-gray-200
              bg-white p-4
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-md
            "
          >
            <div
              className="
                rounded-xl bg-gray-100 p-3
                transition
                group-hover:bg-black group-hover:text-white
              "
            >
              <Icon className="h-4 w-4" />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                {item.title}
              </h4>

              <p className="mt-1 text-xs text-gray-500">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
