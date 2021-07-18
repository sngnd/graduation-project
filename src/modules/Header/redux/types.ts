import { Photo } from "pexels";
import { TYPES } from "./constants";

interface GetBackgroundAction {
  type: TYPES.GET_BACKGROUND;
}

interface GetBackgroundSuccessAction {
  type: TYPES.GET_BACKGROUND_SUCCESS;
  payload: IPhotosData;
}

interface GetBackgroundErrorAction {
  type: TYPES.GET_BACKGROUND_ERROR;
  payload: string;
}

export type BackgroundAction =
  | GetBackgroundAction
  | GetBackgroundSuccessAction
  | GetBackgroundErrorAction;

export interface IPhotosData {
  total_results?: number;
  page: number;
  photos: Photo[];
}

export interface IPhotosState {
  data: IPhotosData | null;
  loading: boolean;
  error: string;
}
