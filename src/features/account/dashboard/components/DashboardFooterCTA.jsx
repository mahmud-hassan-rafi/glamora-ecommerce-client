import { ArrowRight, LifeBuoy, MessageCircleMore } from "lucide-react";

export default function DashboardFooterCTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white px-6 py-8 sm:px-8">
      {/* Background Blur */}
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gray-100 blur-3xl opacity-70" />

      <div className="relative flex flex-col gap-8 lg:justify-between">
        {/* Left */}
        <div className="max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
            <LifeBuoy size={15} />
            <span className="text-xs font-medium text-gray-600">
              We're here to help
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Need anything else?
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-500">
            Whether you have questions about an order, need help with returns,
            or want assistance with your account, our support team is always
            ready to help.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            className="
              inline-flex items-center justify-center gap-2
              rounded-2xl
              bg-black
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            <MessageCircleMore size={18} />
            Contact Support
          </button>

          <button
            className="
              inline-flex items-center justify-center gap-2
              rounded-2xl
              border
              border-gray-300
              bg-white
              px-6
              py-3
              text-sm
              font-medium
              text-gray-700
              transition-all
              duration-300
              hover:border-black
              hover:bg-gray-50
            "
          >
            Help Center
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
