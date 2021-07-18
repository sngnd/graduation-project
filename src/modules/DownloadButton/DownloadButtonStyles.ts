import styled from "styled-components";
import { IDropdownMenuProps } from "./types";

export const DropdownMenu = styled.button`
  display: none;
  transition: 0.3s ease-out;
  display: ${({ active }: IDropdownMenuProps) => (active ? "block" : "none")};

  & ul {
    list-style: none;
    position: absolute;
    padding: 10px 0 10px 0;
    top: 45px;
    background-color: white;
    width: 180px;
    z-index: 10;
    border-radius: 5px;
  }
`;

export const DownloadButtonName = styled.button`
  background-color: #05a081;
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  text-align: center;
  height: 40px;
  border: none;
  border-radius: 5px 0 0 5px;
  border-right: 1px solid white;
  color: white;
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 180px;
  top: 0;
`;
