import { Photo } from "pexels";
import { TYPES } from "../photos/constants";

export interface PhotosData {
  total_results?: number;
  page: number;
  photos: Photo[];
}

export type PhotosState = {
  data: PhotosData | null;
  loading: boolean;
  error: string;
};

interface GetPhotosSuccessAction {
  type: TYPES.GET_PHOTOS_SUCCESS;
  payload: PhotosData;
}

interface GetPhotosAction {
  type: TYPES.GET_PHOTOS;
}

interface GetPhotosErrorAction {
  type: TYPES.GET_PHOTOS_ERROR;
  payload: string;
}

export type PhotosAction =
  | GetPhotosAction
  | GetPhotosSuccessAction
  | GetPhotosErrorAction;
