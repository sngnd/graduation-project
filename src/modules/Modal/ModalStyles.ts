import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index: 20;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  color: white;
  font-size: 2rem;
  border: none;
`;

export const ModalContent = styled.div`
  position: absolute;
  max-width: 90%;
  min-width: 50%;
  max-height: 90vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: #e0e0e0;
  border-radius: 3px;
  box-shadow: 0px 0px 10px #000;
`;

export const ModalActions = styled.div`
  position: relative;
  width: 100%;
`;

export const ModalDownload = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalLike = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`;

export const ModalInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.div`
  margin-top: 5.5rem;
`;

export const Image = styled.img`
  max-height: 65vh;
  min-height: 200px;
  max-width: 100%;
  min-width: 35%;
  background-color: rgb(148, 148, 148);
`;
