import styled from "styled-components";

export const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;

export const Post = styled.div`
  width: auto;
  height: 25vh; /* Altura fixa para padronizar o tamanho */
  display: flex;
  margin: 1rem;
  justify-content: center;
  align-items: flex-start; /* Alinhar a imagem ao topo */
  overflow: hidden; /* Esconder partes de mídia que excedem o espaço */

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajustar mídia para cobrir o espaço sem perder proporção */
    object-position: top; /* Alinhar a imagem ao topo */
  }
`;

export const ImageLink = styled.a`
  text-decoration: none;
  color: inherit;
`;
