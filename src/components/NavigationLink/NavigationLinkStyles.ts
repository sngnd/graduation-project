import { NavLink } from "react-router-dom"; //NavLink можно задавать стили для активной
import styled, { css } from "styled-components";
import { INavigationLinkProps } from "./types";

const commonLinkStyles = css`
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  cursor: pointer;
  color: ${({ color }: INavigationLinkProps) => color};
`;

export const InternalLink = styled(NavLink)`
  ${commonLinkStyles}
`;

export const ExternalLink = styled.a`
  ${commonLinkStyles}
`;
