import { useQueryClient } from "@tanstack/react-query";
import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const productContext = createContext();

const ProductsProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const productData = queryClient?.getQueryData(["products"]);

  const [pages, setPages] = useState(productData);

  return (
    <productContext.Provider value={{ pages, setPages }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductsProvider;
