import { createSlice } from "@reduxjs/toolkit";

const discountedPrice = (product) =>
  (product.price - (product.discountPercentage * product.price) / 100).toFixed(
    2,
  );

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    ADD_TO_CART: (state, action) => {
      const isProductExists = state.some(
        (product) => product.id === action.payload.id,
      );

      if (isProductExists) {
        return state.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            title: action.payload?.title,
            price: Number(discountedPrice(action.payload)),
            thumbnail: action.payload?.thumbnail,
            brand: action.payload?.brand,
            quantity: 1,
          },
        ];
      }
    },
    INCREASE_QUANTITY: (state, action) => {
      console.log(action.payload);

      return state.map((product) => {
        return product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      });
    },
    DECREASE_QUANTITY: (state, action) => {
      return state.map((product) => {
        return product.id === action.payload.id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });
    },
    REMOVE_FROM_CART: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} = cartSlice.actions;

export default cartSlice.reducer;
