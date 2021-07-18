import { Photo } from "pexels";
import { TYPES } from "./constants";

interface ShowModalAction {
  type: TYPES.SHOW_MODAL;
  payload: ModalProperties;
}

interface HideModalAction {
  type: TYPES.HIDE_MODAL;
  payload?: any;
}

export interface ModalProperties {
  imageSrc: Photo["src"];
  imageId: number;
}

export type ModalState = {
  modal: ModalProperties | null;
};

export type ModalAction = ShowModalAction | HideModalAction;
