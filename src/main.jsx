import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { TooltipProvider } from "@components/ui/tooltip";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
