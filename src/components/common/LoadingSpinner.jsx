// LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = ({
  size = "w-6 h-6",
  color = "border-gray-300",
  label = "Loading...",
}) => {
  return (
    <div
      className="flex items-center justify-center gap-2 w-full h-[90%]"
      role="status"
      aria-label={label}
    >
      <div
        className={`animate-spin rounded-full border-2 border-t-blue-500 ${size} ${color}`}
      ></div>
      {label && <span className="text-sm text-gray-600">{label}</span>}
    </div>
  );
};

export default LoadingSpinner;
