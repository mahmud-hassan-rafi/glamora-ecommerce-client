import React from "react";

const Banner = ({ slide }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="h-full w-full relative">
      {!loaded && (
        <div className="size-full fixed inset-0 rounded bg-white animate-pulse z-1000" />
      )}
      <img
        loading="lazy"
        onLoad={() => setLoaded(true)}
        src={slide?.image}
        className=" w-full h-auto object-cover object-center"
      />
    </div>
  );
};

export default Banner;
