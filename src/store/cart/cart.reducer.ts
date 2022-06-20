import { AnyAction } from "redux";
import { toggleCart, updateCart } from "./cart.action";
import { CartItem } from "./cart.types";

export type CartState = {
  readonly isCartOpen: Boolean;
  readonly cartItems: CartItem[];
};

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (updateCart.match(action)) {
    return { ...state, cartItems: action.payload };
  }

  if (toggleCart.match(action)) {
    return { ...state, isCartOpen: !state.isCartOpen };
  }

  return state;
};
