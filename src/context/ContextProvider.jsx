import { AccountContextProvider } from "./AccountContext";
import { AppContextProvider } from "./AppContext";

export default function ContextProvider({ children }) {
  return (
    <AppContextProvider>
      <AccountContextProvider>{children}</AccountContextProvider>
    </AppContextProvider>
  );
}
