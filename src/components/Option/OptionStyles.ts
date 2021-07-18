import styled from "styled-components";
import { colors } from "styles";
import { IStyledOptionProps } from "./types";

export const StyledOption = styled.li`
  background-color: ${({ selectedSize, option }: IStyledOptionProps) =>
      selectedSize === option ? colors.GRAY : undefined}
    & label {
    display: flex;
    align-items: center;
    padding-left: 15px;
  }
`;

export const RadioInput = styled.input`
  margin-right: 10px;
  margin-top: 10px;
  &:last-of-type {
    margin-bottom: 10px;
  }
`;
