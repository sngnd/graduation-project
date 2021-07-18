import { Option, ToggleButton } from "components";
import { Photo } from "pexels";
import { ReactNode } from "react";
import { useState } from "react";
import { IDownloadButtonProps } from "./types";
import {
  DownloadButtonName,
  DropdownContainer,
  DropdownMenu,
} from "./DownloadButtonStyles";

const SIZES = ["original", "large", "medium", "small"];

const DownloadButton = ({ imageSrc }: IDownloadButtonProps) => {
  const [active, setActive] = useState(false);
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);

  const onChange = (event: any) => {
    setSelectedSize(event.currentTarget.value);
    setActive(active ? false : true);
  };

  const getSizeList = (): ReactNode => {
    let keyArray: Array<string> = [];
    for (let key in imageSrc) {
      if (SIZES.includes(key)) {
        keyArray.push(key);
      }
    }
    return keyArray.map((key) => {
      return (
        <Option
          option={key}
          selectedSize={selectedSize}
          onChange={(event: any) => onChange(event)}
        />
      );
    });
  };

  const onDownloadHandler = () => {
    const key = selectedSize as keyof Photo["src"];
    if (!!selectedSize) setSelectedSize(SIZES[0]);
    const url = imageSrc[key];
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobURL;
        a.style.display = "none";
        a.download = selectedSize;
        a.click();
      });
  };

  const handleToggle = () => {
    setActive((prev: boolean) => (prev ? false : true));
  };

  return (
    <DropdownContainer>
      <DownloadButtonName onClick={onDownloadHandler}>
        Download
      </DownloadButtonName>
      <ToggleButton onClick={handleToggle} active={active} />
      <DropdownMenu active={active}>
        <ul>{getSizeList()}</ul>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default DownloadButton;
