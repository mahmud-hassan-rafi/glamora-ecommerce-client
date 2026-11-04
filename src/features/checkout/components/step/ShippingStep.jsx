export default function ShippingStep({
  data,
  shippingMethods,
  onChange,
  onNext,
  onBack,
}) {
  return (
    <div className="space-y-5">
      <div className="bg-white border border-stone-100 rounded-2xl p-6 space-y-3">
        <h2 className="text-sm font-medium text-stone-800">Shipping method</h2>

        {shippingMethods.map((method) => {
          const isSelected = data.methodId === method.id;
          return (
            <button
              key={method.id}
              onClick={() => onChange("shipping", "methodId", method.id)}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all
                ${
                  isSelected
                    ? "border-stone-800 bg-stone-50"
                    : "border-stone-200 hover:border-stone-300 bg-white"
                }`}
            >
              {/* Radio dot */}
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                ${isSelected ? "border-stone-800" : "border-stone-300"}`}
              >
                {isSelected && (
                  <div className="w-2 h-2 rounded-full bg-stone-800" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-stone-800">
                  {method.label}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">{method.days}</p>
              </div>

              <span
                className={`text-sm font-medium flex-shrink-0 ${isSelected ? "text-stone-800" : "text-stone-500"}`}
              >
                {method.cost === 0 ? (
                  <span className="text-emerald-600">Free</span>
                ) : (
                  `৳${method.cost}`
                )}
              </span>
            </button>
          );
        })}
      </div>

      <button
        onClick={onNext}
        className="w-full h-11 bg-stone-800 text-white text-sm font-medium rounded-xl
          hover:bg-stone-700 active:scale-[0.98] transition-all"
      >
        Continue to payment
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
        Back to information
      </button>
    </div>
  );
}
