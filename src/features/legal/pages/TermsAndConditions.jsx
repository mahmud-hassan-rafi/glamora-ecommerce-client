export default function TermsConditionsPage() {
  return (
    <section className="w-full px-6 sm:px-8 md:px-12 xl:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="border-b border-black/10 py-20">
          <span className="text-sm uppercase tracking-[0.2em] text-black/50">
            Legal
          </span>

          <h1 className="mt-4 text-5xl font-medium tracking-tight">
            Terms & Conditions
          </h1>

          <p className="mt-6 max-w-2xl text-black/60">
            These Terms & Conditions outline the rules and regulations for using
            our website and purchasing products from our store.
          </p>

          <p className="mt-4 text-sm text-black/40">Last updated: June 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-16 py-20">
          {/* Acceptance */}
          <section>
            <h2 className="text-2xl font-medium">Acceptance of Terms</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                By accessing this website, you agree to be bound by these Terms
                & Conditions and all applicable laws and regulations.
              </p>

              <p>
                If you do not agree with any part of these terms, you must not
                use our website or services.
              </p>
            </div>
          </section>

          {/* Use of Site */}
          <section>
            <h2 className="text-2xl font-medium">Use of Our Website</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                You agree to use this website only for lawful purposes and in a
                way that does not infringe the rights of others.
              </p>

              <p>
                Any misuse of the website, including fraudulent activity or
                unauthorized access, is strictly prohibited.
              </p>
            </div>
          </section>

          {/* Orders */}
          <section>
            <h2 className="text-2xl font-medium">Orders & Payments</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                All orders placed through our website are subject to acceptance
                and availability.
              </p>

              <p>
                We reserve the right to refuse or cancel any order if fraud or
                pricing errors are suspected.
              </p>

              <p>
                Prices and product availability are subject to change without
                prior notice.
              </p>
            </div>
          </section>

          {/* Product Info */}
          <section>
            <h2 className="text-2xl font-medium">Product Information</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                We strive to ensure that all product descriptions and images are
                accurate and up to date.
              </p>

              <p>
                However, we do not guarantee that all content is free from
                errors or omissions.
              </p>
            </div>
          </section>

          {/* Liability */}
          <section>
            <h2 className="text-2xl font-medium">Limitation of Liability</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                We are not liable for any indirect, incidental, or consequential
                damages arising from the use of our website or products.
              </p>

              <p>
                Users are responsible for ensuring products are suitable for
                their personal use.
              </p>
            </div>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-medium">Changes to Terms</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                We reserve the right to update or modify these Terms at any time
                without prior notice.
              </p>

              <p>
                Continued use of the website after changes indicates acceptance
                of the updated Terms.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-medium">Contact Information</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                If you have any questions regarding these Terms & Conditions,
                please contact our support team.
              </p>

              <p>Email: support@example.com</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
