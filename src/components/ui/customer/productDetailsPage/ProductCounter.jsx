import React, { useState } from "react";

const ProductCounter = ({ stock = 10, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < stock) {
      const newQty = quantity + 1;
      setQuantity(newQty);
      if (onQuantityChange) onQuantityChange(newQty);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      if (onQuantityChange) onQuantityChange(newQty);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);

    // যদি ইনপুট ফাঁকা বা নন-নাম্বার হয়
    if (isNaN(value) || value < 1) {
      setQuantity(1);
      if (onQuantityChange) onQuantityChange(1);
      return;
    }

    // স্টক লিমিট ক্রস করলে স্টকের সমপরিমাণ সেট হবে
    if (value > stock) {
      setQuantity(stock);
      if (onQuantityChange) onQuantityChange(stock);
    } else {
      setQuantity(value);
      if (onQuantityChange) onQuantityChange(value);
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      {/* Label (Optional) */}
      <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">
        Quantity
      </span>

      <div className="flex items-center w-fit border border-black/10 bg-white">
        {/* Minus Button */}
        <button
          type="button"
          onClick={handleDecrement}
          disabled={quantity <= 1}
          className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors outline-none select-none text-xl font-light"
        >
          &minus;
        </button>

        {/* Quantity Input */}
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          className="w-14 h-12 text-center text-black font-medium text-sm focus:outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />

        {/* Plus Button */}
        <button
          type="button"
          onClick={handleIncrement}
          disabled={quantity >= stock}
          className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors outline-none select-none text-xl font-light"
        >
          &#43;
        </button>
      </div>

      {/* Stock Warning Notice (UX Improvement) */}
      {/* {quantity >= stock && (
        <span className="text-xs text-amber-600 font-medium">
          Maximum available stock reached ({stock} items)
        </span>
      )} */}
    </div>
  );
};

export default ProductCounter;
