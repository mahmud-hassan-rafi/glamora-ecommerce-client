import React from "react";
import MembershipCard from "./MembershipCard";
import MembershipBenefits from "./MembershipBenefits";

export default function RewardsMembership() {
  return (
    <section className="space-y-8">
      {/* HEADER (optional extra layer) */}
      <div>
        <p className="text-sm font-medium text-gray-500">Loyalty Program</p>

        <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
          Rewards & Membership
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-gray-500">
          Track your membership level, earned points, and exclusive benefits
          designed for loyal customers.
        </p>
      </div>

      {/* MAIN CARD */}
      <MembershipCard />

      {/* BENEFITS */}
      <MembershipBenefits />
    </section>
  );
}
