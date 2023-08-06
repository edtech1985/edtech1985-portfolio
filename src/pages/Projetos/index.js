import React, { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import { Container, ProjetoGrid, ProjetoCard, ProjetoImagem } from "./Projetos";

import card1 from "../../img/psico.png";
import card2 from "../../img/cookies.png";
import card3 from "../../img/consultorio.png";
import card4 from "../../img/bones.png";
import BotaoVerProjeto from "../../components/ProjectButton/BotaoVerProjeto";

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
          <BotaoVerProjeto href="https://www.psicologapablaamaral.com.br/" />
        </ProjetoCard>
        <ProjetoCard>
          <ProjetoImagem src={card2} alt="Página - Cookies" />

          <h2 idioma={idioma}>
            {idioma === "pt" && <>Site - Cookies</>}
            {idioma === "en" && <>Website - Cookies</>}
            {idioma === "es" && <>Sitio Web - Cookies</>}
          </h2>
          <BotaoVerProjeto href="https://www.pumpcrazy.com.br/" />
        </ProjetoCard>
        <ProjetoCard>
          <ProjetoImagem src={card4} alt="Página - Bonés" />

          <h2 idioma={idioma}>
            {idioma === "pt" && <>Site - Bonés</>}
            {idioma === "en" && <>Website - Caps</>}
            {idioma === "es" && <>Sitio Web - Tapas</>}
          </h2>
          <BotaoVerProjeto href="https://cap-shop-edtech1985.vercel.app/" />
        </ProjetoCard>
        <ProjetoCard>
          <ProjetoImagem src={card3} alt="Página - Consultório IA" />

          <h2 idioma={idioma}>
            {idioma === "pt" && <>Site - Consultório IA</>}
            {idioma === "en" && <>Website - AI Medical Office</>}
            {idioma === "es" && <>Sitio web - Consultorio IA</>}
          </h2>
          <BotaoVerProjeto href="https://ai-medical-office.vercel.app/" />
        </ProjetoCard>
      </ProjetoGrid>
    </Container>
  );
};

export default Projetos;