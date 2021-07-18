import { TYPES } from "./constants";

interface nextPageAction {
  type: TYPES.NEXT_PAGE;
}

export type PageType = {
  page: number;
};

interface clearPagesAction {
  type: TYPES.CLEAR;
}

export type PageAction = nextPageAction | clearPagesAction;
