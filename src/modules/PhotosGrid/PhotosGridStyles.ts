import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  margin-top: 86px;
  text-align: center;
`;

export const Button = styled.button`
  border: 0;
  padding: 0.7rem;
  background-color: #04a484;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
`;

export const Photos = styled.div`
  margin-top: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

export const PhotosWrapper = styled.div`
  width: 80%;
  display: -ms-grid;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

export const Bottom = styled.div`
  grid-column: 1/3;
  margin-top: 30px;
`;

export const LoaderWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const loader1 = keyframes`
0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }`;

const loader2 = keyframes`
   0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  100% {
    -webkit-transform: translate(24px, 0);
    transform: translate(24px, 0);
  }`;

const loader3 = keyframes`
0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }`;

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 40px;

  & div {
    position: absolute;
    top: 0px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: black;
    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & div:nth-child(1) {
    left: 8px;
    -webkit-animation: ${loader1} 0.6s infinite;
    animation: ${loader1} 0.6s infinite;
  }

  & div:nth-child(2) {
    left: 8px;
    -webkit-animation: ${loader2} 0.6s infinite;
    animation: ${loader2} 0.6s infinite;
  }

  & div:nth-child(3) {
    left: 32px;
    -webkit-animation: ${loader2} 0.6s infinite;
    animation: ${loader2} 0.6s infinite;
  }

  & div:nth-child(4) {
    left: 56px;
    -webkit-animation: ${loader3} 0.6s infinite;
    animation: ${loader3} 0.6s infinite;
  }
`;
