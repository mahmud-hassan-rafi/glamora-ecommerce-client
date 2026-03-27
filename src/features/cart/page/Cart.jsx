import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import CartContents from "../components/CartContents";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <div className="max-w-6xl mx-auto py-4 flex flex-col gap-4">
      <h2 className="text-[clamp(24px,2vw+0.8rem,36px)] text-center font-semibold">
        Shopping Cart
      </h2>
      {cartItems.length > 0 ? (
        <CartContents cartItems={cartItems} />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
