import { TYPES } from "./constants";
import { ModalState, ModalAction } from "./types";

const initialState: ModalState = {
  modal: null,
};

const modalReducer = (
  state = initialState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    case TYPES.SHOW_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case TYPES.HIDE_MODAL:
      return {
        ...state,
        modal: null,
      };
    default:
      return state;
  }
};

export { modalReducer };
