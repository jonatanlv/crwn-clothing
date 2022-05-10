import { ActionTypes } from "../../utils/reducer/reducer.utils";

export class CartActionTypes extends ActionTypes {
  static TOGGLE_CART = new CartActionTypes("Toggle cart");
  static UPDATE_CART_ITEMS = new CartActionTypes("Update cart items");
}
