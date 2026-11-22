import { CreditCard, ShieldCheck, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpCenterPaymentsPage() {
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
            <span className="text-black/80">Payments</span>
          </div>

          <h1 className="mt-4 text-5xl font-medium tracking-tight">Payments</h1>

          <p className="mt-6 max-w-2xl text-black/60">
            Learn about available payment methods, billing, and how we keep your
            transactions secure and simple.
          </p>
        </div>

        {/* Info Blocks */}
        <div className="grid gap-px bg-black/10 py-16 md:grid-cols-3">
          <div className="bg-white p-8">
            <CreditCard size={22} />

            <h3 className="mt-4 font-medium">Multiple Methods</h3>

            <p className="mt-2 text-sm text-black/60">
              We support cards, mobile banking, and online payment gateways.
            </p>
          </div>

          <div className="bg-white p-8">
            <ShieldCheck size={22} />

            <h3 className="mt-4 font-medium">Secure Payments</h3>

            <p className="mt-2 text-sm text-black/60">
              All transactions are encrypted and processed securely.
            </p>
          </div>

          <div className="bg-white p-8">
            <AlertCircle size={22} />

            <h3 className="mt-4 font-medium">Payment Issues</h3>

            <p className="mt-2 text-sm text-black/60">
              Failed payments? Our support team is ready to help.
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-16 py-16">
          <section>
            <h2 className="text-2xl font-medium">Accepted Payment Methods</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                We accept major credit and debit cards, mobile banking systems,
                and selected online payment providers.
              </p>

              <p>
                Available payment options may vary depending on your location.
              </p>
            </div>
          </section>

          {/* Billing */}
          <section>
            <h2 className="text-2xl font-medium">Billing Information</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                All charges are processed immediately after order confirmation.
              </p>

              <p>
                You will receive a confirmation email with payment details after
                successful checkout.
              </p>
            </div>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-medium">Payment Security</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                We use industry-standard encryption to protect your payment
                information.
              </p>

              <p>Your sensitive data is never stored in our system.</p>
            </div>
          </section>

          {/* Failed Payment */}
          <section>
            <h2 className="text-2xl font-medium">Failed or Pending Payments</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                If your payment fails, please check your bank or try another
                payment method.
              </p>

              <p>
                For pending transactions, please wait a few minutes before
                retrying.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-black/10 pt-16">
            <h2 className="text-2xl font-medium">Need Payment Support?</h2>

            <p className="mt-4 text-black/60">
              If you're facing any payment-related issues, we’re here to help.
            </p>

            <button className="mt-8 border border-black px-6 py-3 text-sm font-medium transition-colors hover:bg-black hover:text-white">
              Contact Support
            </button>
          </section>
        </div>
      </div>
    </section>
  );
}
