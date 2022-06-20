import {
  Action,
  action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { Category, CategoryActionTypes } from "./category.types";

export type FetchCategoriesStart =
  Action<CategoryActionTypes.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CategoryActionTypes.FETCH_CATEGORIES_FAILED,
  Error
>;

export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => {
  return action(CategoryActionTypes.FETCH_CATEGORIES_START);
});

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess => {
    return action(
      CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    );
  }
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed => {
    return action(CategoryActionTypes.FETCH_CATEGORIES_FAILED, error);
  }
);
