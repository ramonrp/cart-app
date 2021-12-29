import * as React from "react";
import { imgData } from "../data/imgData";
const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const handleChange = (e, idInput) => {
    if (cart.includes(idInput)) setCart(cart.filter((id) => id !== idInput));
    else setCart([...cart, idInput]);
  };
  const handleClick = (idClick) => {
    setCart(cart.filter((id) => id !== idClick));
  };

  const handleEmptyCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, setCart, handleChange, handleClick, handleEmptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context)
    throw new Error("useCart Hook must be used within Cart Provider component");
  return context;
};

export { CartProvider, useCart };
