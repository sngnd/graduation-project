import { PhotosData } from "./types";
import { TYPES } from "../photos/constants";
import { PhotosAction } from "./types";
import { client } from "services/api/createClient";
import { Photos, ErrorResponse } from "pexels";
const PER_PAGE = 6;

const getCuratedPhotos = (): PhotosAction => ({
  type: TYPES.GET_PHOTOS,
});

const getCuratedPhotosSuccess = (payload: PhotosData): PhotosAction => ({
  type: TYPES.GET_PHOTOS_SUCCESS,
  payload,
});

const getCuratedPhotosError = (payload: string): PhotosAction => ({
  type: TYPES.GET_PHOTOS_ERROR,
  payload,
});

export const fetchCuratedPhotos = async (dispatch: any, page: number) => {
  dispatch(getCuratedPhotos());
  try {
    const photos: Photos | ErrorResponse = await client.photos.curated({
      per_page: PER_PAGE,
      page: page,
    });
    if ("error" in photos) {
      throw new Error(photos.error);
    } else {
      dispatch(getCuratedPhotosSuccess(photos));
    }
  } catch (error) {
    dispatch(getCuratedPhotosError(error));
  }
};
