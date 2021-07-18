import styled from "styled-components";
import { SearchInput } from "components";

export const StyledForm = styled.form`
  max-width: 650px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  background-color: white;
  border-radius: 7px;
`;

export const StyledSearchInput = styled(SearchInput)`
  width: 90%;
`;

export const StyledButton = styled.button`
  width: 10%;
  padding: 0;
  height: 50px;
  border: none;
  background-color: transparent;
`;
