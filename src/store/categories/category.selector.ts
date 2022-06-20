import { createSelector } from "reselect";
import { RootState } from "../store";
import { CategoryMap } from "./category.types";

const selectCategorySlice = (state: RootState) => state.categories;

export const selectCategories = createSelector(
  [selectCategorySlice],
  (categories) => categories.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => {
    return categories.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategorySlice],
  (categories) => categories.isLoading
);

export const selectCategoriesError = createSelector(
  [selectCategorySlice],
  (categories) => categories.error
);
