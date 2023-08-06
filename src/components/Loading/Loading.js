import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 25rem;
  margin: 0 auto;
  text-align: center;
`;

export const LoadingBar = styled.div`
  width: 100%;
  height: 0.75rem;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  overflow: hidden;

  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  background-color: none;
`;

export const Bar = styled.div`
  height: 100%;
  background-color: var(--dark-green);
  border-radius: 5px;
  transition: width 0.1s ease; /* Ajuste o tempo de transição conforme necessário */
`;

export const Message = styled.div`
  font-size: 16px;
  font-weight: bold;

  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
`;

export const BlinkingDots = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const Dots = styled.span`
  animation: ${BlinkingDots} 2.5s infinite;
`;
