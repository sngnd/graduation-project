import { TYPES } from "./constants";
import { PhotosAction, PhotosData } from "./types";
import { client } from "services/api/createClient";
import { PhotosWithTotalResults, ErrorResponse } from "pexels";
const PER_PAGE = 6;

const getPhotos = (): PhotosAction => ({
  type: TYPES.GET_PHOTOS,
});

const getPhotosSuccess = (payload: PhotosData): PhotosAction => ({
  type: TYPES.GET_PHOTOS_SUCCESS,
  payload,
});

const getPhotosError = (payload: string): PhotosAction => ({
  type: TYPES.GET_PHOTOS_ERROR,
  payload,
});

export const fetchPhotos = async (
  dispatch: any,
  query: string,
  page: number
) => {
  dispatch(getPhotos());
  try {
    const photos: PhotosWithTotalResults | ErrorResponse =
      await client.photos.search({
        query: query,
        per_page: PER_PAGE,
        page: page,
      });
    if ("error" in photos) {
      throw new Error(photos.error);
    } else {
      dispatch(getPhotosSuccess(photos));
    }
  } catch (error) {
    dispatch(getPhotosError(error));
  }
};
