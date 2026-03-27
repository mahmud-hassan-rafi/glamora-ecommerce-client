import cartReducer from "@features/cart/cartSlice.js";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "@services/api.js";

export const store = configureStore({
  name: "GlaromaStore",
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware),
});
