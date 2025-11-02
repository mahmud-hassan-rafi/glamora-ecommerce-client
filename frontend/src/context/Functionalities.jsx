import React, { createContext, useContext, useReducer } from "react";
import { productContext } from "./ProductContext";

// eslint-disable-next-line react-refresh/only-export-components
export const FunctionalitiesContext = createContext();

const productsReducer = (products, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...products, products[0][0]];

    case "BUY_NOW":
      return;

    default:
      break;
  }
};

export const FunctionalitiesProvider = ({ children }) => {
  const { pages } = useContext(productContext);
  const [products, dispatchProducts] = useReducer(productsReducer, pages);

  return (
    <FunctionalitiesContext.Provider value={{ products, dispatchProducts }}>
      {children}
    </FunctionalitiesContext.Provider>
  );
};
