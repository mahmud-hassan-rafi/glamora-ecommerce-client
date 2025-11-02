import { configureStore } from "@reduxjs/toolkit";
import Cart from "../features/CartSlice";
import TotalPrice from "../features/TotalPriceOfCartSlice";

export const store = configureStore({
  reducer: {
    cart: Cart,
    totalPrice: TotalPrice,
  },
});
