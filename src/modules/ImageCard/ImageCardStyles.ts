import styled from "styled-components";
import { NavigationLink } from "components";

export const StyledImageCard = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  cursor: pointer;
  position: relative;
  bottom: 0;
  z-index: 6;

  &:hover:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 80px;
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(20%, rgb(0, 0, 0, 0.6)),
      color-stop(75%, rgba(255, 255, 255, 0))
    );
    background: -o-linear-gradient(
      bottom,
      rgb(0, 0, 0, 0.6) 20%,
      rgba(255, 255, 255, 0) 75%
    );
    background: linear-gradient(
      0deg,
      rgb(0, 0, 0, 0.6) 20%,
      rgba(255, 255, 255, 0) 75%
    );
  }

  &:hover a,
  &:hover div {
    display: block;
    pointer-events: all;
  }
`;

export const StyledNavigationLink = styled(NavigationLink)`
  position: absolute;
  bottom: 15px;
  left: 10px;
  display: none;
  text-decoration: none;
`;

export const LikeWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
  display: none;
`;
