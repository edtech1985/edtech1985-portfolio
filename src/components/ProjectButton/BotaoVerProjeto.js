import React, { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import styled from "styled-components";

const StyledBotaoVerProjeto = styled.a`
  font-size: 0.75rem;
  color: white;
  text-decoration: none;
  background-color: var(--dark-green);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: background-color 0.3s ease, border 0.3s ease;

  &:hover {
    background-color: var(--dark);
    border: 2px solid var(--light-green);
    color: var(--light-green);
  }
`;

const BotaoVerProjeto = ({ href }) => {
  const { idioma } = useContext(LanguageContext);

  return (
    <StyledBotaoVerProjeto
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {idioma === "pt" && <>Ver Projeto</>}
      {idioma === "en" && <>View Project</>}
      {idioma === "es" && <>Ver Proyecto</>}
    </StyledBotaoVerProjeto>
  );
};

export default BotaoVerProjeto;
