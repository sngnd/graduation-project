import { TYPES } from "./constants";
import { SuggestionsAction, SuggestionsType } from "./types";

export const getSuggestions = (payload: SuggestionsType): SuggestionsAction => {
  return {
    type: TYPES.GET_SUGGESTIONS,
    payload,
  };
};
