import { AuthContextProvider } from "./context/authContext.jsx";
import { ThemeContextProvider } from "./context/themeContext";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <App/>
      </ThemeContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
