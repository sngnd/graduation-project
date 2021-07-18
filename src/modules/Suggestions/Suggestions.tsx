import { useSelector } from "react-redux";
import { RootState } from "store/createStore";
import SuggestionView from "./SuggestionView/SuggestionView";

const Suggestions = () => {
  const { suggestions } = useSelector((state: RootState) => state.suggestions);

  let results = suggestions.split(",");
  return (
    <>
      {results.map((item) => (
        <SuggestionView suggestion={item} key={item + new Date().getTime()} />
      ))}
    </>
  );
};

export default Suggestions;
