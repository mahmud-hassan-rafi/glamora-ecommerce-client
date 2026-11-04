import React from "react";
import { Crown } from "lucide-react";

export default function MembershipCard() {
  const progress = 70;

  return (
    <section className="space-y-6">
      {/* HEADER */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Rewards & Membership
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Your membership status and progress
        </p>
      </div>

      {/* CARD WRAPPER */}
      <div className="relative group">
        {/* animated glow */}
        <div
          className="
          absolute -inset-1 rounded-3xl
          bg-gradient-to-r from-white/0 via-white/10 to-white/0
          opacity-0 group-hover:opacity-100
          blur-xl transition duration-700
        "
        />

        {/* MAIN CARD */}
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            bg-gradient-to-br from-gray-900 to-neutral-900
            p-8 text-white
            shadow-2xl
            transition-all duration-500
            group-hover:-translate-y-1
          "
        >
          {/* soft light blobs */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

          {/* TOP */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs tracking-widest text-white/50">
                MEMBERSHIP
              </p>

              <h3 className="mt-2 text-3xl font-bold tracking-tight">
                Gold Member
              </h3>

              <p className="mt-1 text-sm text-white/60">Since 2025</p>
            </div>

            <div
              className="
              rounded-2xl bg-white/10 p-3
              transition group-hover:scale-105
            "
            >
              <Crown className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* POINTS */}
          <div className="mt-8">
            <p className="text-sm text-white/60">Reward Points</p>

            <h4 className="mt-1 text-4xl font-bold tracking-tight">1,680 XP</h4>
          </div>

          {/* PROGRESS */}
          <div className="mt-6">
            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="
                  h-full bg-white
                  transition-all duration-1000 ease-out
                "
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-2 flex justify-between text-xs text-white/40">
              <span>Gold</span>
              <span>Platinum</span>
            </div>
          </div>

          {/* CTA */}
          <button
            className="
              mt-8 w-full
              rounded-2xl bg-white
              py-3 text-sm font-semibold text-black
              transition
              hover:opacity-90
              active:scale-[0.98]
            "
          >
            View Membership
          </button>
        </div>
      </div>
    </section>
  );
}
