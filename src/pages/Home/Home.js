import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  max-width: 85vw;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    max-width: 90vw;
  }
`;

export const Titulo = styled.h1`
  font-size: 2rem;
  color: var(--dark);
  margin-bottom: 1rem;
  margin-top: 1rem;
  background-color: rgba(0, 128, 0, 0.1);

  @media only screen and (max-width: 600px) {
    font-size: 1.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const TextoPrincipal = styled.p`
  font-size: 1.1rem;
  color: var(--dark);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  background-color: rgba(0, 128, 0, 0.1);

  @media only screen and (max-width: 600px) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;
