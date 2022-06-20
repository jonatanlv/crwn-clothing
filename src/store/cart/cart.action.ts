import {
  Action,
  action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/category.types";
import { CartActionTypes, CartItem } from "./cart.types";

type CartProcessor = (
  cartItems: CartItem[],
  product: CategoryItem
) => CartItem[];

export type UpdateCart = ActionWithPayload<
  CartActionTypes.UPDATE_CART_ITEMS,
  CartItem[]
>;
export type ToggleCart = Action<CartActionTypes.TOGGLE_CART>;

export type CartAction = UpdateCart | ToggleCart;

type ActionCreatorUpdateCart = (
  cartItems: CartItem[],
  product: CategoryItem
) => UpdateCart;

const addCartItem: CartProcessor = (cartItems, productToAdd) => {
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

const removeCartItem: CartProcessor = (cartItems, productToRemove) => {
  return cartItems
    .map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0);
};

const clearCartItem: CartProcessor = (cartItems, productToClear) => {
  return cartItems.filter((item) => item.id !== productToClear.id);
};

export const addItemToCart: ActionCreatorUpdateCart = (
  cartItems,
  productToAdd
) => {
  const cartWithItemAdded = addCartItem(cartItems, productToAdd);
  return updateCart(cartWithItemAdded);
};

export const removeItemFromCart: ActionCreatorUpdateCart = (
  cartItems,
  productToRemove
) => {
  const cartWithItemRemoved = removeCartItem(cartItems, productToRemove);
  return updateCart(cartWithItemRemoved);
};

export const clearItemFromCart: ActionCreatorUpdateCart = (
  cartItems,
  productToClear
) => {
  const cartWithItemCleared = clearCartItem(cartItems, productToClear);
  return updateCart(cartWithItemCleared);
};

export const toggleCart = withMatcher((): ToggleCart => {
  return action(CartActionTypes.TOGGLE_CART);
});

export const updateCart = withMatcher((cartItems: CartItem[]): UpdateCart => {
  return action(CartActionTypes.UPDATE_CART_ITEMS, cartItems);
});
