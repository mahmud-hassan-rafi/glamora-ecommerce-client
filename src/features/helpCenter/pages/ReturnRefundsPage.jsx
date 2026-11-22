import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ReturnsRefundsPage() {
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
            <span className="text-black/80">Returns & Refunds</span>
          </div>
          <h1 className="mt-4 text-5xl font-medium tracking-tight">
            Returns & Refunds
          </h1>

          <p className="mt-6 max-w-2xl text-black/60">
            We aim to make returns simple and transparent. If you're not
            satisfied with your purchase, here’s how our return process works.
          </p>
        </div>

        {/* Rules */}
        <div className="space-y-16 py-16">
          {/* Return Window */}
          <section>
            <h2 className="text-2xl font-medium">Return Window</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                You can request a return within 7–14 days after receiving your
                order, depending on the product type.
              </p>

              <p>
                After this period, we may not be able to accept return requests.
              </p>
            </div>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-medium">Return Eligibility</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                To be eligible for a return, items must be unused, unopened, and
                in their original packaging.
              </p>

              <p>
                Products that have been used or damaged after delivery cannot be
                returned.
              </p>
            </div>
          </section>

          {/* Non-returnable */}
          <section>
            <h2 className="text-2xl font-medium">Non-returnable Items</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                For hygiene and safety reasons, certain items cannot be
                returned, including opened skincare, cosmetics, and clearance
                products.
              </p>

              <p>Gift cards and promotional items are also non-refundable.</p>
            </div>
          </section>

          {/* Refund Process */}
          <section>
            <h2 className="text-2xl font-medium">Refund Process</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                Once we receive and inspect your returned item, we will notify
                you about the approval or rejection of your refund.
              </p>

              <p>
                Approved refunds will be processed to your original payment
                method within a few business days.
              </p>
            </div>
          </section>

          {/* Shipping Cost */}
          <section>
            <h2 className="text-2xl font-medium">Return Shipping Costs</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                Customers are responsible for return shipping costs unless the
                item is defective or incorrect.
              </p>

              <p>
                We recommend using a trackable shipping service for safe return
                delivery.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-black/10 pt-16">
            <h2 className="text-2xl font-medium">Need Help With a Return?</h2>

            <p className="mt-4 text-black/60">
              If you're unsure about anything, our support team is ready to help
              you.
            </p>

            <button className="mt-8 flex h-12 items-center gap-2 border border-black px-6 text-sm font-medium transition-colors hover:bg-black hover:text-white">
              Contact Support
              <ArrowRight size={18} />
            </button>
          </section>
        </div>
      </div>
    </section>
  );
}
