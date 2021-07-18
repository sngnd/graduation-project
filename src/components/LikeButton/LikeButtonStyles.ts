import styled from "styled-components";
import { colors } from "styles";
import { ILikeButtonStyleProps } from "./types";

export const LikeButtonStyle = styled.button`
  color: ${({ isButtonActive }: ILikeButtonStyleProps) =>
    isButtonActive ? colors.ACTIVE_LIKE : colors.DISABLED_LIKE};
  font-size: 1.5rem;
  transition: all 0.1s ease-out;
  background-color: transparent;
  border: none;
`;
