import { ActionTypes } from "../../utils/reducer/reducer.utils";

export class UserActionTypes extends ActionTypes {
  static SET_CURRENT_USER = new UserActionTypes("Set current user");
}
