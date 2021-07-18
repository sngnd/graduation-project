import { colors } from "styles";
import { ISuggestionsViewProps } from "./types";
import { setQuery } from "../../SearchForm/redux/actions";
import { useDispatch } from "react-redux";
import { StyledNavigationLink } from "./SuggestionStyles";

const SuggestionView = ({ suggestion }: ISuggestionsViewProps) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setQuery({ query: suggestion }));
  };

  return (
    <StyledNavigationLink
      href={`search/${suggestion}`}
      onClick={onClickHandler}
      color={colors.WHITE}
    >
      {suggestion}
    </StyledNavigationLink>
  );
};

export default SuggestionView;
