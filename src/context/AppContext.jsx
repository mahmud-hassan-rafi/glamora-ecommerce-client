/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useRef, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [maxProductPrice, setMaxProductPrice] = useState(0);
  const cartIconRef = useRef(null);
  const imageRef = useRef(null);

  // Category state for filtering products based on selected category in CategoryTab component
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const discountedPrice = (product) =>
    (
      product.price -
      (product.discountPercentage * product.price) / 100
    ).toFixed(2);

  const subtotal = (cartItems) =>
    cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const value = {
    isOpenSidebar,
    setIsOpenSidebar,
    maxProductPrice,
    setMaxProductPrice,
    discountedPrice,
    subtotal,
    cartIconRef,
    imageRef,
    selectedCategory,
    setSelectedCategory,
    capitalize,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
