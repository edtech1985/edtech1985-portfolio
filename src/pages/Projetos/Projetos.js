import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  max-width: 90vw;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const ProjetoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: 601px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProjetoCard = styled.div`
  background-color: var(--dark);
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--light-green);
  min-height: 80%;

  &:hover {
    box-shadow: 0 0 10px var(--light-green), 0 0 20px var(--light-green),
      0 0 30px var(--light-green);
  }

  h2 {
    font-size: 1rem;
    color: var(--light-green);
    margin: 0.75rem 0;
  }
`;

export const ProjetoLink = styled.a`
  font-size: 0.75rem;
  color: white;
  text-decoration: none;
  background-color: var(--dark-green);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: background-color 1s ease-in-out, border 1s ease-in-out;

  &:hover {
    background-color: var(--dark);
    border: 2px solid var(--light-green);
    color: var(--light-green);
  }
`;

export const ProjetoImagem = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.5);
  }
`;
