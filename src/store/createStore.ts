import { combineReducers, createStore } from "redux";
import { headerBackgroundReducer } from "modules/Header/redux/reducer";
import { searchFormReducer } from "modules/SearchForm/redux/reducer";
import { suggestionsReducer } from "./../modules/Suggestions/redux/reducer";
import { modalReducer } from "modules/Modal/redux/reducer";
import { curatedPhotosReducer } from "./curatedPhotos/reducer";
import { photosReducer } from "./photos/reducer";
import { pageReducer } from "modules/PhotosGrid/redux/reducer";

const rootReducer = combineReducers({
  headerBackground: headerBackgroundReducer,
  searchForm: searchFormReducer,
  suggestions: suggestionsReducer,
  modal: modalReducer,
  curatedPhotos: curatedPhotosReducer,
  photos: photosReducer,
  page: pageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
