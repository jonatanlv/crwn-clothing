import { CategoryActionTypes } from "./category.types";

export const setCategories = (categories) => {
  return CategoryActionTypes.SET_CATEGORIES.action(categories);
};
