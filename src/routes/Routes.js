import styled from "styled-components";
import backgroundImage from "./backgroundImage";

export const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    height: fit-content;
    min-height: 100vh;
  }
`;

export const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 90vh;
  background-image: url(${backgroundImage});
  background-size: contain;
  background-repeat: round;
  background-position: center center;
  opacity: 0.15;
  z-index: -10;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    height: fit-content;
  }
`;
