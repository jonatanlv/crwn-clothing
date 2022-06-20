import { UserActionTypes } from "./user.types";
import {
  Action,
  action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { UserData, AdditionalInfo } from "../../utils/firebase/firebase.utils";

export type CheckUserSession = Action<UserActionTypes.CHECK_USER_SESSION>;
export type SetCurrentUser = ActionWithPayload<
  UserActionTypes.SET_CURRENT_USER,
  UserData
>;
export type GoogleSignInStart = Action<UserActionTypes.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = ActionWithPayload<
  UserActionTypes.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;
export type SignInSuccess = ActionWithPayload<
  UserActionTypes.SIGN_IN_SUCCESS,
  UserData
>;
export type SignInFailed = ActionWithPayload<
  UserActionTypes.SIGN_IN_FAILED,
  Error
>;
export type SignUpStart = ActionWithPayload<
  UserActionTypes.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;
export type SignUpSuccess = ActionWithPayload<
  UserActionTypes.SIGN_UP_SUCCESS,
  { user: UserData; additionalDetails: AdditionalInfo }
>;
export type SignUpFailed = ActionWithPayload<
  UserActionTypes.SIGN_UP_FAILED,
  Error
>;
export type SignOutStart = Action<UserActionTypes.SIGN_OUT_START>;
export type SignOutSuccess = Action<UserActionTypes.SIGN_OUT_SUCCESS>;
export type SignOutFailed = ActionWithPayload<
  UserActionTypes.SIGN_OUT_FAILED,
  Error
>;

export const checkUserSession = withMatcher(
  (): CheckUserSession => action(UserActionTypes.CHECK_USER_SESSION)
);

export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser =>
    action(UserActionTypes.SET_CURRENT_USER, user)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => action(UserActionTypes.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    action(UserActionTypes.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher(
  (user: UserData): SignInSuccess =>
    action(UserActionTypes.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed => action(UserActionTypes.SIGN_IN_FAILED, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    action(UserActionTypes.SIGN_UP_START, { email, password, displayName })
);

export const signUpSuccess = withMatcher(
  (user: UserData, additionalDetails: AdditionalInfo): SignUpSuccess =>
    action(UserActionTypes.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed => action(UserActionTypes.SIGN_UP_FAILED, error)
);

export const signOutStart = withMatcher(
  (): SignOutStart => action(UserActionTypes.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => action(UserActionTypes.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    action(UserActionTypes.SIGN_OUT_FAILED, error)
);
