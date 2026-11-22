import React from "react";

export default function OrderProgress({ step = 0 }) {
  const steps = ["Ordered", "Packed", "Shipped", "Delivered"];

  return (
    <div className="space-y-2">
      {/* LINE */}
      <div className="relative flex items-center justify-between">
        {/* background line */}
        <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200" />

        {/* active line */}
        <div
          className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-black transition-all"
          style={{
            width: `${(step / (steps.length - 1)) * 100}%`,
          }}
        />

        {steps.map((_, index) => {
          const isDone = index < step;
          const isCurrent = index === step;

          return (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center"
            >
              <div
                className={`
                  h-3 w-3 rounded-full border
                  transition
                  ${
                    isDone
                      ? "bg-black border-black"
                      : isCurrent
                        ? "bg-white border-black"
                        : "bg-white border-gray-300"
                  }
                `}
              />

              {/*  */}
              {isCurrent && (
                <div className="absolute bg-black/20 animate-ping size-6 rounded-full -top-1.5" />
              )}
            </div>
          );
        })}
      </div>

      {/* LABELS */}
      <div className="flex justify-between text-[11px]">
        {steps.map((label, index) => {
          const isDone = index < step;
          const isCurrent = index === step;

          return (
            <span
              key={label}
              className={`
                transition
                ${
                  isCurrent
                    ? "text-black font-medium"
                    : isDone
                      ? "text-gray-600"
                      : "text-gray-400"
                }
              `}
            >
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
