import { Search, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpCenterPage() {
  const categories = [
    {
      title: "Orders & Shipping",
      description: "Track orders, delivery time, shipping info",
      href: "order-shipping",
    },
    {
      title: "Returns & Refunds",
      description: "Return process and refund policy details",
      href: "return-refund",
    },
    {
      title: "Payments",
      description: "Payment methods and billing issues",
      href: "payments",
    },
    {
      title: "Account & Security",
      description: "Login, password, and account settings",
      href: "account-security",
    },
    {
      title: "Products",
      description: "Product information and usage guide",
      href: "products",
    },
    {
      title: "General",
      description: "Other common questions and support",
      href: "general-support",
    },
  ];

  const faqs = [
    {
      q: "How long does delivery take?",
      a: "Delivery usually takes 2–5 business days depending on your location.",
    },
    {
      q: "Can I return a product after opening?",
      a: "Opened skincare items cannot be returned due to hygiene reasons.",
    },
    {
      q: "How do I track my order?",
      a: "You can track your order from the 'My Orders' section in your account.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major cards, mobile banking, and online payment systems.",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-8 md:px-12 xl:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="border-b border-black/10 py-20 text-center">
          <h1 className="text-5xl font-medium tracking-tight">Help Center</h1>

          <p className="mt-4 text-black/60">
            Find answers to common questions or contact our support team.
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 flex max-w-xl items-center border border-black/10 px-4">
            <Search size={18} className="text-black/50" />
            <input
              className="h-12 w-full bg-transparent px-3 text-sm outline-none"
              placeholder="Search for help..."
            />
          </div>
        </div>

        {/* Categories */}
        <div className="py-20">
          <h2 className="text-2xl font-medium">Browse Categories</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((cat) => (
              <Link
                to={cat?.href || "#"}
                key={cat.title}
                className="border border-black/10 p-6 hover:border-black/40 transition-colors rounded"
              >
                <h3 className="text-lg font-medium flex gap-2 items-center">
                  {cat.title} <ArrowRight />
                </h3>
                <p className="mt-2 text-sm text-black/60">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="border-t border-black/10 py-20">
          <h2 className="text-2xl font-medium">Frequently Asked Questions</h2>

          <div className="mt-10 space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="border border-black/10 p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle size={18} className="mt-1" />
                  <div>
                    <h3 className="font-medium">{item.q}</h3>
                    <p className="mt-2 text-sm text-black/60">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-black/10 py-20 text-center">
          <h2 className="text-3xl font-medium">Still need help?</h2>

          <p className="mt-3 text-black/60">
            Our support team is ready to assist you anytime.
          </p>

          <button className="mt-8 flex h-12 items-center gap-2 border border-black px-6 text-sm font-medium transition-colors hover:bg-black hover:text-white mx-auto">
            <MessageCircle size={18} />
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
