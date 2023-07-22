import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes";
import { LanguageProvider } from "./LanguageContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <LanguageProvider>
      <AppRouter />
    </LanguageProvider>
    <ToastContainer />
  </React.StrictMode>
);
