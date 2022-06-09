import { UserActionTypes } from "./user.types";
import { action } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
  action(UserActionTypes.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  action(UserActionTypes.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  action(UserActionTypes.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  action(UserActionTypes.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  action(UserActionTypes.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  action(UserActionTypes.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) =>
  action(UserActionTypes.SIGN_UP_START, { email, password, displayName });

export const signUpSuccess = (user, additionalDetails) =>
  action(UserActionTypes.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) =>
  action(UserActionTypes.SIGN_UP_FAILED, error);
