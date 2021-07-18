import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { colors } from "styles";
import {
  StyledNav,
  StyledMainIcon,
  StyledNavigationLink,
  StyledText,
} from "./NavBarStyles";
import { SearchForm } from "modules";

const NavBar = () => {
  const location = useLocation();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!location.pathname.includes("/search")) {
      window.addEventListener("scroll", changeBackground);
    } else {
      setIsActive(true);
    }
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [location.pathname]);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setIsActive(true);
    } else setIsActive(false);
  };

  return (
    <StyledNav isActive={isActive}>
      <StyledNavigationLink
        href="/"
        externalLink={true}
        openInNewTab={true}
        color={colors.WHITE}
      >
        <StyledMainIcon />
        <StyledText variant="p" color={colors.WHITE}>
          Pexels
        </StyledText>
      </StyledNavigationLink>
      {isActive ? <SearchForm /> : ""}
    </StyledNav>
  );
};

export default NavBar;
