import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { CategoryActionTypes } from "./category.types";

const fetchCategoriesStart = () => {
  return CategoryActionTypes.FETCH_CATEGORIES_START.action();
};

const fetchCategoriesSuccess = (categoriesArray) => {
  return CategoryActionTypes.FETCH_CATEGORIES_SUCCESS.action(categoriesArray);
};

const fetchCategoriesFailed = (error) => {
  return CategoryActionTypes.FETCH_CATEGORIES_FAILED.action(error);
};

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart);
  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
