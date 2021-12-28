import * as React from "react";
import { imgData } from "../data/imgData";
const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(imgData);
  const handleChange = (id) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) return { ...item, selected: !item.selected };
        else return item;
      })
    );
  };
  return (
    <CartContext.Provider value={{ cart, setCart, handleChange }}>
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
