const STEPS = ["Information", "Shipping", "Payment"];

export default function StepIndicator({ currentStep }) {
  return (
    <div className="flex items-center gap-0 mb-8">
      {STEPS.map((label, i) => {
        const stepNum = i + 1;
        const isDone = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <div key={label} className="flex items-center">
            {/* Step bubble + label */}
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium shrink-0 transition-all duration-300
                  ${isDone ? "bg-emerald-100 text-emerald-700" : ""}
                  ${isActive ? "bg-stone-800 text-white" : ""}
                  ${!isDone && !isActive ? "bg-stone-100 text-stone-400 border border-stone-200" : ""}
                `}
              >
                {isDone ? (
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span
                className={`text-sm transition-colors duration-300
                  ${isActive ? "text-stone-800 font-medium" : ""}
                  ${isDone ? "text-stone-500" : ""}
                  ${!isDone && !isActive ? "text-stone-400" : ""}
                `}
              >
                {label}
              </span>
            </div>

            {/* Divider between steps */}
            {i < STEPS.length - 1 && (
              <div
                className={`h-px mx-4 w-10 shrink-0 transition-colors duration-500
                  ${stepNum < currentStep ? "bg-emerald-300" : "bg-stone-200"}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
