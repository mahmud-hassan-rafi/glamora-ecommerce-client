import React from "react";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { Trash2 } from "lucide-react";
import {
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "../cartSlice";
import { useAppContext } from "@context/AppContext";

const CartContents = ({ cartItems }) => {
  const dispatch = useDispatch();
  const { subtotal } = useAppContext();
  const subtotalPrice = subtotal(cartItems);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Cart Items */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow p-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-start sm:items-center justify-between border-b py-4 gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                loading="lazy"
                src={item.thumbnail}
                className="size-25 sm:size-20 rounded"
              />
              {/* desktop view */}
              <div className="max-sm:hidden">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>

            {/* desktop view */}
            <div className="hidden sm:flex items-center gap-6">
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={() => dispatch(DECREASE_QUANTITY(item))}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => dispatch(INCREASE_QUANTITY(item))}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(REMOVE_FROM_CART(item))}
                className="text-gray-700 cursor-pointer"
              >
                <Trash2 size={18} />
              </button>
            </div>

            {/* MOBILE: 4 ROW STRUCTURE */}
            <div className="flex sm:hidden flex-col flex-1 gap-2.5">
              {/* Row 1: Title + Delete */}
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-sm sm:text-base line-clamp-2">
                  {item.title}
                </h3>

                <button
                  onClick={() => dispatch(REMOVE_FROM_CART(item))}
                  className="text-gray-700 cursor-pointer"
                >
                  <RxCross2 size={18} />
                </button>
              </div>

              {/* Row 2: Price */}
              <div className="flex justify-between items-start">
                <p className="text-sm text-gray-700">Price</p>
                <p className="text-sm text-gray-700">${item.price}</p>
              </div>

              {/* Row 3: Quantity */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-700">Quantity</p>
                <div className="flex items-center border rounded-lg w-fit overflow-hidden">
                  <button
                    className="px-2 py-1 hover:bg-gray-100"
                    onClick={() => dispatch(DECREASE_QUANTITY(item))}
                  >
                    -
                  </button>

                  <span className="px-2 text-gray-700">{item.quantity}</span>

                  <button
                    className="px-2 py-1 hover:bg-gray-100"
                    onClick={() => dispatch(INCREASE_QUANTITY(item))}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Row 4: Subtotal */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-700">Subtotal</p>
                <p className="text-base font-semibold text-black/95">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white rounded-2xl shadow p-4 h-fit">
        <h2 className="text-2xl font-semibold mb-4">Cart Totals</h2>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotalPrice}</span>
        </div>

        <div className="flex justify-between mb-4">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between font-bold text-lg border-t pt-4">
          <span>Total</span>
          <span className="text-black/95">${subtotalPrice}</span>
        </div>

        <button className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-black/90 cursor-pointer">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartContents;
