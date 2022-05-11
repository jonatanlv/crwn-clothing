import { ActionTypes } from "../../utils/reducer/reducer.utils";

export class CategoryActionTypes extends ActionTypes {
  static FETCH_CATEGORIES_START = new CategoryActionTypes(
    "Fetch categories start"
  );
  static FETCH_CATEGORIES_SUCCESS = new CategoryActionTypes(
    "Fetch categories sucess"
  );
  static FETCH_CATEGORIES_FAILED = new CategoryActionTypes(
    "Fetch categories failed"
  );
}
