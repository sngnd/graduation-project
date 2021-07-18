import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/createStore";
import { DownloadButton } from "modules";
import { LikeButton } from "components/";
import { hideModal } from "./redux/actions";
import {
  ButtonClose,
  Image,
  ImageWrapper,
  ModalActions,
  ModalContent,
  ModalDownload,
  ModalInfo,
  ModalLike,
  StyledModal,
} from "./ModalStyles";

const Modal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.modal);

  if (modal === null) {
    return null;
  }

  const closeModalHandler = () => {
    dispatch(hideModal());
    document.body.style.overflow = "auto";
  };

  return (
    <StyledModal onClick={closeModalHandler}>
      <ButtonClose>&#10005;</ButtonClose>
      <ModalContent onClick={(event: any) => event.stopPropagation()}>
        <ModalActions>
          <ModalDownload>
            <DownloadButton imageSrc={modal.imageSrc} />
          </ModalDownload>
          <ModalLike>
            <LikeButton id={modal.imageId} />
          </ModalLike>
        </ModalActions>
        <ModalInfo>
          <ImageWrapper>
            <Image src={modal.imageSrc.large} alt="" />
          </ImageWrapper>
        </ModalInfo>
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
