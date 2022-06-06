import { action } from "../../utils/reducer/reducer.utils";
import { CategoryActionTypes } from "./category.types";

export const fetchCategoriesStart = () => {
  return action(CategoryActionTypes.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (categoriesArray) => {
  return action(CategoryActionTypes.FETCH_CATEGORIES_SUCCESS, categoriesArray);
};

export const fetchCategoriesFailed = (error) => {
  return action(CategoryActionTypes.FETCH_CATEGORIES_FAILED, error);
};
