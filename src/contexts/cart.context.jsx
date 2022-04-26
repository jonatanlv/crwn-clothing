import { createContext, useReducer } from "react";
import { ActionTypes } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  const foundItem = cartItems.find((item) => item.id === productToAdd.id);

  if (foundItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems
    .map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0);
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((item) => item.id !== productToClear.id);
};

export class CartActionTypes extends ActionTypes {
  static TOGGLE_CART = new CartActionTypes("Toggle cart");
  static UPDATE_CART_ITEMS = new CartActionTypes("Update cart items");
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

// Actual value
export const CartContext = createContext({
  ...INITIAL_STATE,
  toggleCart: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionTypes.TOGGLE_CART:
      return { ...state, isCartOpen: !state.isCartOpen };
    case CartActionTypes.UPDATE_CART_ITEMS:
      return { ...state, ...payload };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const toggleCart = () => {
    dispatch(CartActionTypes.TOGGLE_CART.action());
  };

  const updateCartItemsReducer = (newCartItems) => {
    const cartCount = newCartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    const cartTotal = newCartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    dispatch(
      CartActionTypes.UPDATE_CART_ITEMS.action({
        cartItems: newCartItems,
        cartCount,
        cartTotal,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    updateCartItemsReducer(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    updateCartItemsReducer(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToClear) => {
    updateCartItemsReducer(clearCartItem(cartItems, productToClear));
  };

  const value = {
    isCartOpen,
    toggleCart,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
