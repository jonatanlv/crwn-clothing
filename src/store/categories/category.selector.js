import { createSelector } from "reselect";

const selectCategorySlice = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategorySlice],
  (categories) => categories.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
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
