import { TYPES } from "./constants";
import { SearchFormAction, SearchFormType } from "./types";

export const setQuery = (payload: SearchFormType): SearchFormAction => {
  return {
    type: TYPES.SET_QUERY,
    payload,
  };
};
