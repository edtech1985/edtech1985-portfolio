import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  max-width: 90vw;
  margin: 1.5rem auto 1.5rem auto;

  @media only screen and (max-width: 600px) {
    max-width: 90vw;
  }
`;

export const TextoPrincipal = styled.p`
  font-size: 1rem;
  color: var(--dark);
  line-height: 1.25;
  background-color: rgba(0, 128, 0, 0.1);

  @media only screen and (max-width: 600px) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;
