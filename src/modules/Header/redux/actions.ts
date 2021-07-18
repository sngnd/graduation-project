// import { PhotosData } from "./../types";
import { TYPES } from "./constants";
import { client } from "services/api/createClient";
import { PhotosWithTotalResults, ErrorResponse } from "pexels";
import { BackgroundAction, IPhotosData } from "./types";

const PER_PAGE_1 = 1;
const COLOR = "black";
const QUERY = "Nature";
const ORIENTATION = "landscape";

const getBackground = (): BackgroundAction => ({
  type: TYPES.GET_BACKGROUND,
});

const getBackgroundSuccess = (payload: IPhotosData): BackgroundAction => ({
  type: TYPES.GET_BACKGROUND_SUCCESS,
  payload,
});

const getBackgroundError = (payload: string): BackgroundAction => ({
  type: TYPES.GET_BACKGROUND_ERROR,
  payload,
});

const fetchBackground = async (dispatch: any) => {
  dispatch(getBackground());
  try {
    const photo: PhotosWithTotalResults | ErrorResponse =
      await client.photos.search({
        per_page: PER_PAGE_1,
        page: getRandomNumber(),
        color: COLOR,
        query: QUERY,
        orientation: ORIENTATION,
      });
    if ("error" in photo) {
      throw new Error(photo.error);
    } else {
      dispatch(getBackgroundSuccess(photo));
    }
  } catch (error) {
    dispatch(getBackgroundError(error));
  }
};

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 20) + 1;
};

export { fetchBackground };
