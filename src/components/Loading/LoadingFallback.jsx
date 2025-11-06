// components/Loading/LoadingFallback.js
import styled, { keyframes } from "styled-components";
import { color } from "../../styles/theme";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 5px solid ${color.gray[200]};
  border-top: 5px solid ${color.primary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingFallback = () => (
  <LoaderWrapper>
    <Loader />
  </LoaderWrapper>
);

export default LoadingFallback;
