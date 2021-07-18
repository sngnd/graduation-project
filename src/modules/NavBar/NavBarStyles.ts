import styled from "styled-components";
import { INavBarStylesProps } from "./types";
import { colors } from "styles/";
import { MainIcon } from "assets";
import { NavigationLink } from "components/";
import { Text } from "components";

export const StyledNav = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  min-height: 66px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: ${({ isActive }: INavBarStylesProps) =>
    isActive ? colors.PRIMARY_DARK : "transparent"};
`;

export const StyledNavigationLink = styled(NavigationLink)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-decoration: none;
  color: black;
  margin-left: 1rem;
  margin-right: 2rem;
`;

export const StyledMainIcon = styled(MainIcon)`
  width: 40px;
  height: 40px;
`;

export const StyledText = styled(Text)`
  display: inline;
  margin-left: 10px;
  font-weight: bold;
`;
