import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  text-align: center;
  max-width: 96vw;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const ProjetoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const AnimationBackground = styled.div`
  position: absolute;
  top: -0.5;
  bottom: 0;
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
  background: black;
  z-index: -5;
`;

export const ProjetoCard = styled.div`
  position: relative;
  width: 40vw;
  height: 50vh;
  overflow: hidden;

  z-index: -10;

  background-color: var(--dark);
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    box-shadow: 4px 10px 16px rgba(0, 0, 0, 0.75);
  }

  h2 {
    font-size: 1rem;
    color: var(--light-green);
    margin: 0.75rem 0;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
      z-index: -10;
    }
    100% {
      transform: rotate(360deg);
      z-index: -10;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 40vw;
    height: 50vh;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
    z-index: -10;
  }

  &:after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 40vw;
    height: 50vh;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
    animation-delay: -3s;
    z-index: -10;
  }
`;

export const ProjetoLink = styled.a`
  position: relative; /* Adicione essa linha */
  z-index: 1; /* Coloque o botão acima do card */

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
