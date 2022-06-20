import { CategoryItem } from "../categories/category.types";

export enum CartActionTypes {
  TOGGLE_CART = "TOGGLE_CART",
  UPDATE_CART_ITEMS = "UPDATE_CART_ITEMS",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
