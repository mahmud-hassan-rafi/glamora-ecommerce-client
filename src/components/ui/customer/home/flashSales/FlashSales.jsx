import useCountdown from "@hooks/useCountdown";
import React from "react";

const FlashSales = () => {
  const timeLeft = useCountdown("2026-08-03T21:57:00");

  return (
    <div>
      <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4">
        Flash sales
      </h2>

      {/* countdown | this is now a demo countdown. I will work on it later*/}
      <div>
        <p>html countdown | css will be added soon :)</p>
        {timeLeft?.isExpired
          ? "Expired"
          : `${timeLeft?.days + " days " + timeLeft?.hours + " hours " + timeLeft?.minutes + " minutes " + timeLeft?.seconds + " seconds left"}`}
      </div>
    </div>
  );
};

export default FlashSales;
