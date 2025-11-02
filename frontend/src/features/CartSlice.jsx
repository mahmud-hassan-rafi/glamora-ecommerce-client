import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    ADD_TO_CART: (state, action) => {
      const isProductExistInCart = state.some(
        (product) => product.id === action.payload.id
      );
      if (!isProductExistInCart) {
        return [...state, action.payload];
      }

      console.log("safe", JSON.parse(JSON.stringify(state)));
    },
    REMOVE_TO_CART: (state, action) => {
      return state.filter((product) => action.payload.id !== product.id);
    },
  },
});

export const { ADD_TO_CART, REMOVE_TO_CART } = cartSlice.actions;

export default cartSlice.reducer;
