import { SearchForm } from "../";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/createStore";
import Suggestions from "./../Suggestions/Suggestions";
import {
  HeaderSuggestions,
  HeaderWrapper,
  StyledHeader,
  StyledText,
} from "./HeaderStyles";
import { Text } from "components";
import { colors } from "styles";
import { NavigationLink } from "components/";

const Header = () => {
  const { data } = useSelector((state: RootState) => state.headerBackground);

  const [bgUrl, setBgUrl] = useState("");
  const [bgAuthorUrl, setBgAuthorUrl] = useState("");

  useEffect(() => {
    const photo = data?.photos[0];
    setBgUrl(`${photo?.src.original}`);
    setBgAuthorUrl(`${photo?.photographer_url}`);
  }, [data?.photos]);

  return (
    <>
      <StyledHeader imageUrl={bgUrl}>
        <HeaderWrapper>
          <Text variant="h1" color={colors.WHITE}>
            The best free stock photos videos shared by talented creators.
          </Text>
          <SearchForm />
          <HeaderSuggestions>
            <strong>Suggested: </strong>
            <Suggestions />
          </HeaderSuggestions>
        </HeaderWrapper>
        <StyledText variant="p" color={colors.GRAY}>
          Photo by {""}
          <NavigationLink
            href={bgAuthorUrl}
            openInNewTab={true}
            externalLink={true}
            color={colors.GRAY}
            hoverColor={colors.WHITE}
          >
            {data?.photos[0].photographer}
          </NavigationLink>
        </StyledText>
      </StyledHeader>
    </>
  );
};
export default Header;
