import { TYPES } from "./constants";
import { SearchFormAction, SearchFormType } from "./types";

const initialState = {
  query: "",
};

export const searchFormReducer = (
  state = initialState,
  action: SearchFormAction
): SearchFormType => {
  switch (action.type) {
    case TYPES.SET_QUERY:
      return action.payload;

    default:
      return state;
  }
};
