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
  margin-bottom: 1rem;
  margin-top: 1rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
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
  border: 2px solid transparent; /* Adicionando uma borda transparente */
  transition: background-color 0.3s ease, border 0.3s ease; /* Adicionando a transição para a borda */

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
    transform: scale(1.05);
  }
`;
