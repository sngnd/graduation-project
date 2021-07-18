import { colors } from "styles";
import {
  StyledImageCard,
  StyledNavigationLink,
  LikeWrapper,
} from "./ImageCardStyles";
import { LikeButton } from "components";
import { useDispatch } from "react-redux";
import { IImageCardProps } from "./types";
import { Photo } from "pexels";
import { showModal } from "./../Modal/redux/actions";

const ImageCard = ({ image }: IImageCardProps) => {
  const dispatch = useDispatch();

  const onImageClickHandler = (e: any, image: Photo) => {
    e.preventDefault();
    dispatch(
      showModal({
        imageSrc: image.src,
        imageId: image.id,
      })
    );
    document.body.style.overflow = "hidden";
  };

  return (
    <StyledImageCard onClick={(e) => onImageClickHandler(e, image)}>
      <img src={image.src.portrait} alt="something" width="100%" />
      <StyledNavigationLink
        color={colors.GRAY}
        externalLink={true}
        openInNewTab={true}
        href={image.photographer_url}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {image.photographer}
      </StyledNavigationLink>
      <LikeWrapper onClick={(e) => e.stopPropagation()}>
        <LikeButton id={image.id} />
      </LikeWrapper>
    </StyledImageCard>
  );
};

export default ImageCard;
