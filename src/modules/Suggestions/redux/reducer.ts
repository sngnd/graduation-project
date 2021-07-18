import { TYPES } from "./constants";
import { SuggestionsAction, SuggestionsType } from "./types";

const initialState = {
  suggestions: "",
};

export const suggestionsReducer = (
  state = initialState,
  action: SuggestionsAction
): SuggestionsType => {
  switch (action.type) {
    case TYPES.GET_SUGGESTIONS:
      return action.payload;

    default:
      return state;
  }
};
