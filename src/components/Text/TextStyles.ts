import styled, { css } from "styled-components";
import { ITextStylesProps } from "./types";

const commonTextStyles = css`
  font-family: "Poppins", sans-serif;
  color: ${({ color }: ITextStylesProps) => color};
`;

export const StyledH1 = styled.h1`
  ${commonTextStyles}
  font-size: 30px;
`;

export const StyledP = styled.p`
  ${commonTextStyles}
  font-size: 14px;
`;
