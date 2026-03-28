import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { TooltipProvider } from "@components/ui/shadcn/tooltip";
import { Provider } from "react-redux";
import { store } from "@stores/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppContextProvider>
        <TooltipProvider>
          <App />
          {window.addEventListener("load", () => {
            const preloader = document.getElementById("preloader");

            if (preloader) {
              preloader.style.display = "none";
            }
          })}
        </TooltipProvider>
      </AppContextProvider>
    </Provider>
  </StrictMode>,
);
