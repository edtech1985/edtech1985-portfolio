import React, { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import {
  Container,
  ProjetoGrid,
  ProjetoCard,
  ProjetoLink,
  ProjetoImagem,
} from "./Projetos";

import card1 from "../../img/psico.png";
import card2 from "../../img/cookies.png";
import card3 from "../../img/consultorio.png";
import card4 from "../../img/bones.png";

const Projetos = () => {
  const { idioma } = useContext(LanguageContext);
  return (
    <Container>
      <ProjetoGrid>
        <ProjetoCard>
          <ProjetoImagem src={card1} alt="Página - Psicóloga" />
          <h2 idioma={idioma}>
            {idioma === "pt" && <>Site - Psicóloga</>}
            {idioma === "en" && <>Website - Psychologist</>}
            {idioma === "es" && <>Sitio Web - Psicóloga</>}
          </h2>
          <ProjetoLink
            href="https://psicologa-pabla-amaral.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {idioma === "pt" && <>Ver Projeto</>}
            {idioma === "en" && <>View Project</>}
            {idioma === "es" && <>Ver Proyecto</>}
          </ProjetoLink>
        </ProjetoCard>
        <ProjetoCard>
          <ProjetoImagem src={card2} alt="Página - Cookies" />

          <h2 idioma={idioma}>
            {idioma === "pt" && <>Site - Cookies</>}
            {idioma === "en" && <>Website - Cookies</>}
            {idioma === "es" && <>Sitio Web - Cookies</>}
          </h2>
          <ProjetoLink
            href="https://pump-crazy-cookies.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {idioma === "pt" && <>Ver Projeto</>}
            {idioma === "en" && <>View Project</>}
            {idioma === "es" && <>Ver Proyecto</>}
          </ProjetoLink>
        </ProjetoCard>
        <ProjetoCard>
          <ProjetoImagem src={card4} alt="Página - Bonés" />

          <h2 idioma={idioma}>
            {idioma === "pt" && <>Site - Bonés</>}
            {idioma === "en" && <>Website - Caps</>}
            {idioma === "es" && <>Sitio Web - Tapas</>}
          </h2>
          <ProjetoLink
            href="https://cap-store-gules.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {idioma === "pt" && <>Ver Projeto</>}
            {idioma === "en" && <>View Project</>}
            {idioma === "es" && <>Ver Proyecto</>}
          </ProjetoLink>
        </ProjetoCard>
        <ProjetoCard>
          <ProjetoImagem src={card3} alt="Página - Consultório IA" />

          <h2 idioma={idioma}>
            {idioma === "pt" && <>Site - Consultório IA</>}
            {idioma === "en" && <>Website - AI Medical Office</>}
            {idioma === "es" && <>Sitio web - Consultorio IA</>}
          </h2>
          <ProjetoLink
            href="https://ai-medical-office.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {idioma === "pt" && <>Ver Projeto</>}
            {idioma === "en" && <>View Project</>}
            {idioma === "es" && <>Ver Proyecto</>}
          </ProjetoLink>
        </ProjetoCard>
      </ProjetoGrid>
    </Container>
  );
};

export default Projetos;
