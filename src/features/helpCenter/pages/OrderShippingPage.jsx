import { Truck, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrdersShippingPage() {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer:
        "Standard delivery typically takes 2–5 business days depending on your location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you'll receive a tracking number via email.",
    },
    {
      question: "Can I change my shipping address?",
      answer:
        "Shipping details can be updated before the order enters processing.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "International shipping availability depends on the destination country.",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-8 md:px-12 xl:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Hero */}
        <div className="border-b border-black/10 py-20">
          {/* <span className="text-sm uppercase tracking-[0.2em] text-black/50">
            Help Center
          </span> */}
          <div className="text-sm">
            <Link to={"/help-center"} className="text-black/50 capitalize">
              help Center
            </Link>{" "}
            <span className="mx-2">/</span>
            <span className="text-black/80 capitalize cursor-default">
              Orders & Shipping
            </span>
          </div>

          <h1 className="mt-4 text-5xl font-medium tracking-tight">
            Orders & Shipping
          </h1>

          <p className="mt-6 max-w-2xl text-black/60">
            Everything you need to know about placing orders, shipping times,
            delivery updates, and order tracking.
          </p>
        </div>

        {/* Quick Info */}
        <div className="grid gap-px bg-black/10 py-20 md:grid-cols-3">
          <div className="bg-white p-8">
            <Truck size={22} />

            <h3 className="mt-4 font-medium">Fast Delivery</h3>

            <p className="mt-2 text-sm text-black/60">
              Orders are processed quickly and shipped as soon as possible.
            </p>
          </div>

          <div className="bg-white p-8">
            <Package size={22} />

            <h3 className="mt-4 font-medium">Order Tracking</h3>

            <p className="mt-2 text-sm text-black/60">
              Track your package from shipment to delivery.
            </p>
          </div>

          <div className="bg-white p-8">
            <Clock size={22} />

            <h3 className="mt-4 font-medium">Processing Time</h3>

            <p className="mt-2 text-sm text-black/60">
              Most orders are processed within 24–48 hours.
            </p>
          </div>
        </div>

        {/* Information */}
        <div className="border-t border-black/10 py-20">
          <h2 className="text-2xl font-medium">Shipping Information</h2>

          <div className="mt-8 space-y-4 text-black/70">
            <p>
              Orders are processed during business days and shipped using
              trusted delivery partners.
            </p>

            <p>
              Delivery times may vary depending on location, holidays, weather
              conditions, and courier operations.
            </p>

            <p>
              Once your order has been shipped, you'll receive tracking
              information via email.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="border-t border-black/10 py-20">
          <h2 className="text-2xl font-medium">Frequently Asked Questions</h2>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="border border-black/10 p-6">
                <h3 className="font-medium">{faq.question}</h3>

                <p className="mt-3 text-black/60">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="border-t border-black/10 py-20">
          <h2 className="text-2xl font-medium">Need Additional Help?</h2>

          <p className="mt-4 text-black/60">
            If you couldn't find the information you're looking for, our support
            team is ready to assist you.
          </p>

          <button className="mt-8 border border-black px-6 py-3 text-sm font-medium transition-colors hover:bg-black hover:text-white">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
