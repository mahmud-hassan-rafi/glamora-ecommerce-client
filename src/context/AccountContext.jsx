import { createContext, useContext, useState } from "react";

const AccountContext = createContext();

export const AccountContextProvider = ({ children }) => {
  const [openAccountSidebar, setOpenAccountSidebar] = useState(false);

  const value = { openAccountSidebar, setOpenAccountSidebar };

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

export const useAccountContext = () => useContext(AccountContext);
