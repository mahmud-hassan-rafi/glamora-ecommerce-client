export default function ReturnsPolicyPage() {
  return (
    <section className="w-full px-6 sm:px-8 md:px-12 xl:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="border-b border-black/10 py-20">
          <span className="text-sm uppercase tracking-[0.2em] text-black/50">
            Policy
          </span>

          <h1 className="mt-4 text-5xl font-medium tracking-tight">
            Returns & Refunds
          </h1>

          <p className="mt-6 max-w-2xl text-black/60">
            We want you to be completely satisfied with your purchase. If
            something isn’t right, here’s how our return process works.
          </p>

          <p className="mt-4 text-sm text-black/40">Last updated: June 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-16 py-20">
          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-medium">Return Eligibility</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                Items can be returned within 7–14 days of delivery, depending on
                the product category.
              </p>

              <p>
                To be eligible for a return, products must be unused, unopened,
                and in their original packaging.
              </p>
            </div>
          </section>

          {/* Non-returnable */}
          <section>
            <h2 className="text-2xl font-medium">Non-returnable Items</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                Certain items cannot be returned for hygiene and safety reasons,
                including opened skincare, used cosmetics, and clearance items.
              </p>

              <p>Gift cards and promotional items are also non-returnable.</p>
            </div>
          </section>

          {/* Refund */}
          <section>
            <h2 className="text-2xl font-medium">Refund Process</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                Once we receive and inspect your return, we will notify you
                about the approval or rejection of your refund.
              </p>

              <p>
                Approved refunds will be processed to your original payment
                method within a few business days.
              </p>
            </div>
          </section>

          {/* Shipping */}
          <section>
            <h2 className="text-2xl font-medium">Return Shipping</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                Customers are responsible for return shipping costs unless the
                product is defective or incorrect.
              </p>

              <p>
                We recommend using a trackable shipping service to ensure safe
                return delivery.
              </p>
            </div>
          </section>

          {/* Exchanges */}
          <section>
            <h2 className="text-2xl font-medium">Exchanges</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                We only replace items if they are defective or damaged. If you
                need an exchange, contact our support team.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-medium">Need Help?</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                If you have any questions about returns or refunds, our support
                team is here to help.
              </p>

              <p>Email: support@example.com</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
