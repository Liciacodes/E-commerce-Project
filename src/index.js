import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./index.css";
import CartContextProvider from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);
