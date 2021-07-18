import { useState } from "react";
import { ILikeButtonProps } from "./types";
import { LikeButtonStyle } from "./LikeButtonStyles";

const LikeButton = ({ id }: ILikeButtonProps) => {
  const [liked, setLiked] = useState(false);

  const onClick = (): void => {
    let storedLikes = localStorage.getItem("likes");
    liked ? setLiked(false) : setLiked(true);
    let likes = [];
    if (storedLikes != null) {
      storedLikes = JSON.parse(storedLikes);
      if (typeof storedLikes?.length !== "undefined") {
        for (let i = 0; i < storedLikes?.length; i++) {
          likes.push(storedLikes[i]);
        }
        if (isImageLiked(id)) {
          const index = likes.indexOf(id.toString());
          console.log(index);
          likes.splice(index, 1);
        } else {
          likes.push(id.toString());
        }
      }
    }
    localStorage.setItem("likes", JSON.stringify(likes));
  };

  const isImageLiked = (id: number) => {
    let storedLikes = localStorage.getItem("likes");
    if (storedLikes != null) {
      storedLikes = JSON.parse(storedLikes);
      if (storedLikes?.includes(id.toString())) {
        return true;
      }
    }
    return false;
  };

  return (
    <LikeButtonStyle
      isButtonActive={isImageLiked(id)}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      ❤
    </LikeButtonStyle>
  );
};

export default LikeButton;
