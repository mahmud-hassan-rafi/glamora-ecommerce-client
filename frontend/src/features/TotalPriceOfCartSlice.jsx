import { createSlice } from "@reduxjs/toolkit";

export const TotalPriceOfCartSlice = createSlice({
  name: "totalPrice",
  initialState: 0,
  reducers: {
    ADDING_TO_CART_totalPrice: (state, action) => {
      const discountedPrice =
        action.payload.price -
        (action.payload.price * action.payload.discountPercentage) / 100;

      return state + Number(discountedPrice);
    },
    REMOVING_TO_CART_totalPrice: (state, action) => {
      const discountedPrice =
        action.payload.price -
        (action.payload.price * action.payload.discountPercentage) / 100;

      return state - Number(discountedPrice);
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { ADDING_TO_CART_totalPrice, REMOVING_TO_CART_totalPrice } =
  TotalPriceOfCartSlice.actions;

export default TotalPriceOfCartSlice.reducer;
