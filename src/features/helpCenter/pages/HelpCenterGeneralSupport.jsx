import { Link } from "react-router-dom";
import { LifeBuoy, MessageCircle, Search } from "lucide-react";

export default function HelpCenterGeneralSupportPage() {
  return (
    <section className="w-full px-6 sm:px-8 md:px-12 xl:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="border-b border-black/10 py-16">
          {/* Breadcrumb */}
          <div className="text-sm text-black/50">
            <Link to="/help-center" className="hover:text-black">
              Help Center
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black/80">General Support</span>
          </div>

          <h1 className="mt-4 text-5xl font-medium tracking-tight">
            General Support
          </h1>

          <p className="mt-6 max-w-2xl text-black/60">
            Can’t find what you’re looking for? We’re here to help you with any
            questions about our store, products, or services.
          </p>

          {/* Search */}
          <div className="mt-10 flex max-w-xl items-center border border-black/10 px-4">
            <Search size={18} className="text-black/50" />
            <input
              className="h-12 w-full bg-transparent px-3 text-sm outline-none"
              placeholder="Search help articles..."
            />
          </div>
        </div>

        {/* Quick Help Cards */}
        <div className="grid gap-px bg-black/10 py-16 md:grid-cols-3">
          <div className="bg-white p-8">
            <LifeBuoy size={22} />

            <h3 className="mt-4 font-medium">Browse Help Center</h3>
            <p className="mt-2 text-sm text-black/60">
              Explore all categories to find your answer quickly.
            </p>

            <Link
              to="/help-center"
              className="mt-6 inline-block text-sm text-black/70 hover:text-black"
            >
              Go to Help Center →
            </Link>
          </div>

          <div className="bg-white p-8">
            <MessageCircle size={22} />

            <h3 className="mt-4 font-medium">Contact Support</h3>
            <p className="mt-2 text-sm text-black/60">
              Still need help? Talk directly with our support team.
            </p>

            <Link
              to="/contact-us"
              className="mt-6 inline-block text-sm text-black/70 hover:text-black"
            >
              Contact Us →
            </Link>
          </div>

          <div className="bg-white p-8">
            <Search size={22} />

            <h3 className="mt-4 font-medium">Find Answers Fast</h3>
            <p className="mt-2 text-sm text-black/60">
              Use search to quickly locate what you need.
            </p>
          </div>
        </div>

        {/* Common Topics */}
        <div className="space-y-16 py-16">
          <section>
            <h2 className="text-2xl font-medium">Common Topics</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                Most users find answers in Orders, Returns, Payments, or Account
                sections.
              </p>

              <p>
                If you're unsure where to start, we recommend browsing the Help
                Center categories for faster resolution.
              </p>
            </div>
          </section>

          {/* Contact fallback */}
          <section className="border-t border-black/10 pt-16">
            <h2 className="text-2xl font-medium">Still Need Help?</h2>

            <p className="mt-4 text-black/60">
              Our support team is available to assist you with any issue.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/contact"
                className="border border-black px-6 py-3 text-sm font-medium transition-colors hover:bg-black hover:text-white"
              >
                Contact Support
              </Link>

              <Link
                to="/help-center"
                className="border border-black/10 px-6 py-3 text-sm font-medium text-black/70 hover:border-black hover:text-black"
              >
                Browse Help Center
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
