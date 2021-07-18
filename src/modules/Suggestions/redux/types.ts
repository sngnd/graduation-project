import { TYPES } from "./constants";

export interface SuggestionsAction {
  type: TYPES.GET_SUGGESTIONS;
  payload: SuggestionsType;
}

export type SuggestionsType = {
  suggestions: string;
};
