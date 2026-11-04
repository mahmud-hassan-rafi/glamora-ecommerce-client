import {
  CreditCard,
  Download,
  ShieldCheck,
  Wallet,
} from "lucide-react";

export default function PaymentsPage() {
  return (
    <section className="space-y-12 max-w-5xl">

      {/* HEADER */}
      <div className="border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Payments & Billing
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage your payment methods, invoices, and billing history.
        </p>
      </div>

      {/* PAYMENT METHODS */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Payment Methods
          </h2>

          <button className="text-sm font-medium text-black hover:underline">
            + Add Method
          </button>
        </div>

        <div className="mt-6 grid gap-4">

          {/* Card */}
          <div className="flex items-center justify-between rounded-2xl border border-gray-200 p-5 hover:border-black/20 transition">

            <div className="flex items-center gap-4">
              <CreditCard className="text-gray-600" />

              <div>
                <p className="text-sm font-medium text-gray-900">
                  Visa •••• 4242
                </p>

                <p className="text-xs text-gray-500">
                  Default payment method
                </p>
              </div>
            </div>

            <span className="text-xs rounded-full bg-black px-3 py-1 text-white">
              Default
            </span>

          </div>

          {/* bKash */}
          <div className="flex items-center justify-between rounded-2xl border border-gray-200 p-5 hover:border-black/20 transition">

            <div className="flex items-center gap-4">
              <Wallet className="text-gray-600" />

              <div>
                <p className="text-sm font-medium text-gray-900">
                  bKash
                </p>

                <p className="text-xs text-gray-500">
                  +8801XXXXXXXX
                </p>
              </div>
            </div>

            <button className="text-sm text-gray-500 hover:text-black">
              Remove
            </button>

          </div>

        </div>
      </div>

      {/* BILLING HISTORY */}
      <div>

        <h2 className="text-lg font-semibold text-gray-900">
          Billing History
        </h2>

        <div className="mt-6 space-y-3">

          {/* Row */}
          <div className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:bg-gray-50 transition">

            <div>
              <p className="text-sm font-medium text-gray-900">
                Invoice #INV-1001
              </p>

              <p className="text-xs text-gray-500">
                June 20, 2026 • Paid
              </p>
            </div>

            <div className="flex items-center gap-4">

              <p className="text-sm font-semibold text-gray-900">
                $120
              </p>

              <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-black">
                <Download size={16} />
                PDF
              </button>

            </div>

          </div>

          {/* Row */}
          <div className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:bg-gray-50 transition">

            <div>
              <p className="text-sm font-medium text-gray-900">
                Invoice #INV-1002
              </p>

              <p className="text-xs text-gray-500">
                June 18, 2026 • Paid
              </p>
            </div>

            <div className="flex items-center gap-4">

              <p className="text-sm font-semibold text-gray-900">
                $89
              </p>

              <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-black">
                <Download size={16} />
                PDF
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* SECURITY BANNER */}
      <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">

        <ShieldCheck className="text-gray-700" />

        <div>
          <p className="text-sm font-semibold text-gray-900">
            Secure Payments
          </p>

          <p className="mt-1 text-sm text-gray-600">
            All your payment information is encrypted and processed securely.
          </p>
        </div>

      </div>

    </section>
  );
}