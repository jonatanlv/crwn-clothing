import { action } from "../../utils/reducer/reducer.utils";
import { CartActionTypes } from "./cart.types";

export const toggleCart = () => {
  return action(CartActionTypes.TOGGLE_CART);
};

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

const updateCart = (cartItems) => {
  return action(CartActionTypes.UPDATE_CART_ITEMS, cartItems);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const cartWithItemAdded = addCartItem(cartItems, productToAdd);
  return updateCart(cartWithItemAdded);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const cartWithItemRemoved = removeCartItem(cartItems, productToRemove);
  return updateCart(cartWithItemRemoved);
};

export const clearItemFromCart = (cartItems, productToClear) => {
  const cartWithItemCleared = clearCartItem(cartItems, productToClear);
  return updateCart(cartWithItemCleared);
};
