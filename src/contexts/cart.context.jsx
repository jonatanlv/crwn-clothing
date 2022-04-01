import { createContext, useState } from "react";

// Actual value
export const CartContext = createContext({
  isCartOpen: false,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleVisibility = () => {
    setIsCartOpen(!isCartOpen);
  };

  const value = { isCartOpen, toggleVisibility };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
