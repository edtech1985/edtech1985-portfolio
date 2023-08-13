import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--dark);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  max-height: 10vh;
  height: 10vh;

  @media only screen and (max-width: 600px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    justify-content: center;
    flex-direction: column;
    max-height: 20vh;
    height: 20vh;
  }
`;

export const StyledIconList = styled.ul`
  display: flex;
  margin-top: 1.5rem;
  padding: 0;
  align-items: center;

  @media only screen and (max-width: 600px) {
    justify-content: center; /* Centraliza horizontalmente */
    flex-wrap: wrap; /* Quebra para várias linhas */
  }
`;

export const StyledIconItem = styled.li`
  min-height: 48px;
  min-width: 48px;
  margin-left: 1vw;
  list-style-type: none;
  font-size: 2vw;
  cursor: pointer;
  &:hover {
    color: var(--light-green);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    justify-content: center;
  }
`;

export const StyledRightsReserved = styled.p`
  font-size: 1.25vw;
  margin-bottom: 0.5vw;
  cursor: pointer;
  a {
    text-decoration: none;
    color: var(--light-green);
    &:hover {
      color: var(--dark-green);
    }
  }
  span {
    color: var(--light-green);
    &:hover {
      color: var(--dark-green);
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
    margin-bottom: 5px;
  }
`;

export const StyledDevelopedBy = styled.p`
  margin-right: 1rem;
  font-size: 1.25vw;
  cursor: pointer;
  a {
    text-decoration: none;
    color: var(--light-green);
    &:hover {
      color: var(--dark-green);
    }
  }
  span {
    color: var(--light-green);
    &:hover {
      color: var(--dark-green);
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.5rem;
  }
`;
