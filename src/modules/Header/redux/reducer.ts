import { TYPES } from "./constants";
import { BackgroundAction, IPhotosState } from "./types";

const initialState: IPhotosState = {
  data: null,
  loading: false,
  error: "",
};

export const headerBackgroundReducer = (
  state = initialState,
  action: BackgroundAction
): IPhotosState => {
  switch (action.type) {
    case TYPES.GET_BACKGROUND:
      return { ...state, loading: true, error: "" };

    case TYPES.GET_BACKGROUND_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: "" };

    case TYPES.GET_BACKGROUND_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
