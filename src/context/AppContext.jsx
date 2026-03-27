/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [maxProductPrice, setMaxProductPrice] = useState(0);

  const discountedPrice = (product) =>
    (
      product.price -
      (product.discountPercentage * product.price) / 100
    ).toFixed(2);

  const subtotal = (cartItems) =>
    cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);

  const value = {
    isOpenSidebar,
    setIsOpenSidebar,
    maxProductPrice,
    setMaxProductPrice,
    discountedPrice,
    subtotal,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
