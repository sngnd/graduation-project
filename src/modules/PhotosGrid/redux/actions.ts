import { TYPES } from "./constants";
import { PageAction } from "./types";

export const getToNextPage = (): PageAction => {
  return {
    type: TYPES.NEXT_PAGE,
  };
};

export const clearPages = (): PageAction => ({
  type: TYPES.CLEAR,
});
