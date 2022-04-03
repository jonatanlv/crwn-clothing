import { createContext, useState } from "react";

// Actual value
export const CartContext = createContext({
  isCartOpen: false,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const value = { isCartOpen, toggleCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
