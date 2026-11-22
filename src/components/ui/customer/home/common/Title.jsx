import React from "react";

const Title = ({ title }) => {
  return (
    <div className="relative flex items-center justify-center h-20">
      {/* line */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-black/15"></div>
      </div>

      {/* title */}
      <div className="relative bg-gray-100 px-4 text-2xl sm:text-3xl font-medium text-gray-800">
        {title}
      </div>
    </div>
  );
};

export default Title;
