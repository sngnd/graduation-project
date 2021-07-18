import { ChangeEvent, FormEvent, useState } from "react";
import {
  StyledButton,
  StyledForm,
  StyledSearchInput,
} from "./SearchFormStyles";
import { SearchIcon } from "assets";
import { useDispatch } from "react-redux";
import { setQuery } from "./redux/actions";
import { useHistory } from "react-router";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!!search) {
      dispatch(setQuery({ query: search }));
      history.push(`/search/${search}`);
      setSearch("");
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledSearchInput value={search} onChange={onChangeHandler} />
      <StyledButton>
        <SearchIcon />
      </StyledButton>
    </StyledForm>
  );
};

export default SearchForm;
