import { PageAction, PageType } from "./types";
import { TYPES } from "./constants";

const initialState = {
  page: 1,
};

const pageReducer = (state = initialState, action: PageAction): PageType => {
  switch (action.type) {
    case TYPES.NEXT_PAGE:
      return { ...state, page: state.page + 1 };

    case TYPES.CLEAR:
      return initialState;

    default:
      return state;
  }
};

export { pageReducer };
