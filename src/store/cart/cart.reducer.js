import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionTypes.TOGGLE_CART:
      return { ...state, isCartOpen: !state.isCartOpen };
    case CartActionTypes.UPDATE_CART_ITEMS:
      return { ...state, cartItems: payload };
    default:
      return state;
  }
};
