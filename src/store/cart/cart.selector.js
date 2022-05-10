import { createSelector } from "reselect";

const selectCartSlice = (state) => state.cart;

export const selectCartIsCartOpen = createSelector(
  [selectCartSlice],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartSlice],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
