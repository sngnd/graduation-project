import styled from "styled-components";
import { IHeaderStylesProps } from "./types";
import { Text } from "components";

export const StyledHeader = styled.header`
  max-height: 500px;
  min-height: 380px;
  background-color: rgb(59, 59, 59);
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  top: 0;
  right: 0;
  background-image: url(${({ imageUrl }: IHeaderStylesProps) => imageUrl});
`;

export const HeaderWrapper = styled.div`
  text-align: left;
  max-width: 650px;
`;

export const HeaderSuggestions = styled.div`
  margin-top: 5px;
`;

export const StyledText = styled(Text)`
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
`;
