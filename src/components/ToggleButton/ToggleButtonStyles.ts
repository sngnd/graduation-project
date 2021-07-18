import styled from "styled-components";
import { IToggleButtonStylesProps } from "./types";

export const StyledToggleButton = styled.button`
  color: #000000;
  background-color: #05a081;
  font-size: 1rem;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transition: all ease-in-out 0.3s;

  &::before {
    content: "";
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    transform: ${({ active }: IToggleButtonStylesProps) =>
      active ? "rotate(-135deg)" : undefined};
    border: 5px solid;
    border-top-color: rgb(255, 255, 255, 0);
    border-left-color: rgba(255, 255, 255, 0);
    border-right-color: rgba(255, 255, 255);
    border-bottom-color: rgba(255, 255, 255);
    margin-top: -2.5px;
    background-color: rgba(255, 255, 255, 0);
    transition: all ease-in-out 0.2s;
  }
`;
