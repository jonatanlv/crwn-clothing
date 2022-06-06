import { CategoryActionTypes } from "./category.types";

export const fetchCategoriesStart = () => {
  return CategoryActionTypes.FETCH_CATEGORIES_START.action();
};

export const fetchCategoriesSuccess = (categoriesArray) => {
  return CategoryActionTypes.FETCH_CATEGORIES_SUCCESS.action(categoriesArray);
};

export const fetchCategoriesFailed = (error) => {
  return CategoryActionTypes.FETCH_CATEGORIES_FAILED.action(error);
};
