import React from "react";
import { ArrowRight, Package, Heart, CreditCard, Star } from "lucide-react";

export default function DashboardHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 lg:p-10">
      {/* ================= BACKGROUND DECOR ================= */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gray-100 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gray-50 blur-3xl" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-6">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
            Premium Account
          </span>

          {/* Title */}
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 lg:text-5xl">
            Good Evening!
            <br />
            Welcome back, Rafi
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-sm leading-6 text-gray-500 lg:text-base">
            Everything about your shopping, orders and account is organized in
            one clean place. Track orders, manage wishlist and continue shopping
            anytime.
          </p>

          {/* Status Pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600">
              <Package size={16} />2 Orders on the way
            </div>

            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600">
              <Heart size={16} />
              18 Wishlist Items
            </div>

            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600">
              <CreditCard size={16} />
              Lifetime Spend $1,280
            </div>

            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600">
              <Star size={16} />
              Premium Member
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90">
              Continue Shopping
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
              Track Orders
            </button>
          </div>
        </div>

        {/* ================= RIGHT PROFILE CARD ================= */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm rounded-3xl border border-gray-200 bg-gray-50 p-6">
            {/* Avatar */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white">
                R
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">Rafi</h3>

              <p className="text-sm text-gray-500">Premium Member</p>
            </div>

            {/* Divider */}
            <div className="my-5 border-t border-gray-200" />

            {/* Profile Stats */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Profile Completion</span>
                <span className="font-medium text-gray-900">87%</span>
              </div>

              <div className="h-2 w-full rounded-full bg-gray-200">
                <div className="h-2 w-[87%] rounded-full bg-black" />
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Member Since</span>
                <span className="font-medium text-gray-900">2026</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Account Status</span>
                <span className="font-medium text-green-600">Active</span>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
