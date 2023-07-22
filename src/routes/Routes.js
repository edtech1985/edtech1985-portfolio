import styled from "styled-components";
import backgroundImage from "./backgroundImage";

export const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    height: 100vh;
    max-height: 100%;
  }
`;

export const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-repeat: repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.15;
  z-index: -10;
`;
