import { useEffect } from "react";
import { Header, NavBar, PhotosGrid } from "modules";
import { useDispatch, useSelector } from "react-redux";
import { SUGGESTIONS } from "constants/suggestions";
import { fetchBackground } from "modules/Header/redux/actions";
import { getSuggestions } from "modules/Suggestions/redux/actions";
import { RootState } from "store/createStore";

const SUGGESTIONS_LENGTH = 7;
const MAX_RANGE = 40;
const MIN_RANGE = 1;

const HomePage = () => {
  const dispatch = useDispatch();

  const photos = useSelector((state: RootState) => state.photos);

  const setSuggestions = () => {
    let currentSuggestions = SUGGESTIONS.split(",");
    let results = [];
    while (results.length < SUGGESTIONS_LENGTH) {
      let random = Math.floor(
        Math.random() * (MAX_RANGE - MIN_RANGE) + MIN_RANGE
      );
      if (results.indexOf(currentSuggestions[random]) < 0) {
        results.push(currentSuggestions[random]);
      }
    }
    let res = results.join(",");
    dispatch(getSuggestions({ suggestions: res }));
  };

  useEffect(() => {
    fetchBackground(dispatch);
    setSuggestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Header />
      <PhotosGrid photos={photos} isHomePage={true} />
    </div>
  );
};

export default HomePage;
