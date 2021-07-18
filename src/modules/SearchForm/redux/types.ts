import { TYPES } from "./constants";

export interface SearchFormAction {
  type: TYPES.SET_QUERY;
  payload: SearchFormType;
}

export type SearchFormType = {
  query: string;
};
