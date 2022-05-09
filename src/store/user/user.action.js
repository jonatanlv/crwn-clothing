import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => {
  return UserActionTypes.SET_CURRENT_USER.action(user);
};
