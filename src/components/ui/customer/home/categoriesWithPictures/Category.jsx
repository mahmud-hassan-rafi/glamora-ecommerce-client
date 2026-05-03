import React from "react";

export default function CategoryCard({ cat }) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className="relative">
        {!loaded && (
          <div className="size-full absolute inset-0 rounded-full bg-gray-200 animate-pulse z-1000" />
        )}

        <img
          loading="lazy"
          src={cat?.image}
          alt={cat?.name}
          onLoad={() => setLoaded(true)}
          className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 
          rounded-full object-cover border 
          transition duration-300 
          group-hover:scale-105 group-hover:border-pink-500"
        />
      </div>

      <p
        className="mt-3 text-sm md:text-base font-medium text-center 
      group-hover:text-pink-500 transition"
      >
        {cat?.name}
      </p>
    </div>
  );
}
