import { ModalAction, ModalProperties } from "./types";
import { TYPES } from "./constants";

export function showModal(payload: ModalProperties): ModalAction {
  return {
    type: TYPES.SHOW_MODAL,
    payload,
  };
}

export function hideModal(): ModalAction {
  return {
    type: TYPES.HIDE_MODAL,
  };
}
