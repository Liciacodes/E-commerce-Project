import React, { createContext } from "react";

export const CartContext = createContext();
const initialState = { cartItems: [] };

const CartContextProvider = () => {
  return <CartContextProvider value={initialState}></CartContextProvider>;
};

export default CartContextProvider;
