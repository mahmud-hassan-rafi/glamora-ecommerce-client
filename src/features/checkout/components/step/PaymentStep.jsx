import StripePayment from "../stripe/StripePayment";

const inputCls =
  "h-10 border border-stone-200 rounded-lg px-3 text-sm text-stone-800 bg-white placeholder:text-stone-300 focus:outline-none focus:border-stone-400 transition-colors";

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs text-stone-500 tracking-wide">{label}</label>
      {children}
    </div>
  );
}

const TABS = [
  { id: "card", label: "Card" },
  { id: "bkash", label: "bKash / Nagad" },
  { id: "cod", label: "Cash on delivery" },
];

export default function PaymentStep({
  data,
  onChange,
  onFieldChange,
  onNext,
  onBack,
  clientSecret,
}) {
  const activeMethod = data.method;

  return (
    <div className="space-y-5">
      <div className="bg-white border border-stone-100 rounded-2xl p-6 space-y-5">
        <h2 className="text-sm font-medium text-stone-800">Payment method</h2>

        {/* Tabs */}
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onChange("payment", "method", tab.id)}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium border transition-all
                ${
                  activeMethod === tab.id
                    ? "border-stone-800 bg-stone-800 text-white"
                    : "border-stone-200 text-stone-500 hover:border-stone-300"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Card */}
        {activeMethod === "card" && (
          <StripePayment clientSecret={clientSecret} />
        )}

        {/* bKash / Nagad */}
        {activeMethod === "bkash" && (
          <div className="space-y-4">
            <div className="bg-stone-50 border border-stone-100 rounded-xl p-4 text-center">
              <p className="text-xs text-stone-400 mb-1">Send payment to</p>
              <p className="text-xl font-medium text-stone-800 tracking-widest">
                01X00-000000
              </p>
              <p className="text-xs text-stone-400 mt-1">
                bKash / Nagad merchant number
              </p>
            </div>
            <Field label="Transaction ID">
              <input
                className={inputCls}
                placeholder="e.g. ABC1234567"
                value={data.bkash.transactionId}
                onChange={(e) =>
                  onFieldChange("bkash", "transactionId", e.target.value)
                }
              />
            </Field>
          </div>
        )}

        {/* Cash on delivery */}
        {activeMethod === "cod" && (
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
            <p className="text-sm text-emerald-700">
              Pay in cash when your order arrives. No prepayment needed.
            </p>
            <p className="text-xs text-emerald-500 mt-1">
              Please keep exact change ready for the delivery person.
            </p>
          </div>
        )}
      </div>

      <button
        onClick={onNext}
        className="w-full h-11 bg-stone-800 text-white text-sm font-medium rounded-xl
          hover:bg-stone-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        Place order
      </button>

      <button
        onClick={onBack}
        className="w-full flex items-center justify-center gap-1.5 text-sm text-stone-500 hover:text-stone-800 transition-colors py-1"
      >
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to shipping
      </button>
    </div>
  );
}
