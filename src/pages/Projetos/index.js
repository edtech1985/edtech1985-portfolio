import React, { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import { Container, ProjetoGrid, ProjetoCard, ProjetoImagem } from "./Projetos";

// import card1 from "../../img/psico.png";
import card1 from "../../img/psico3devices.png";
// import card2a from "../../img/cookies.png";
// import card2 from "../../img/pumpcrazy.png";
import card2 from "../../img/cookies-3devices.png";
// import card3 from "../../img/consultorio.png";
import card3 from "../../img/doctor-3devices.png";
// import card4 from "../../img/bones.png";
import card4 from "../../img/bones-3devices.png";
// import card5 from "../../img/mjn.png";
import card5 from "../../img/mjnimports-3devices.png";
import card6 from "../../img/avr2.png";
import card7 from "../../img/landing.png";
// import card8 from "../../img/landing2.png";
import card8 from "../../img/landing-3devices.png";
import BotaoVerProjeto from "../../components/ProjectButton/BotaoVerProjeto";

const Projetos = () => {
  const { idioma } = useContext(LanguageContext);
  return (
    <Container>
      <ProjetoGrid>
        <ProjetoCard>
          <ProjetoImagem src={card5} alt="Página - Importados" />
          <h2 idioma={idioma}>
            {idioma === "pt" && <>Site - Importados</>}
            {idioma === "en" && <>Website - Imports</>}
            {idioma === "es" && <>Sitio Web - Importados</>}
          </h2>
          <BotaoVerProjeto href="https://www.mjnimports.com.br/" />
        </ProjetoCard>

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

        <ProjetoCard>
          <ProjetoImagem src={card8} alt="Página - Landing Page" />

          <h2 idioma={idioma}>
            {idioma === "pt" && <>Site - Landing Page</>}
            {idioma === "en" && <>Website - Landing Page Office</>}
            {idioma === "es" && <>Sitio web - Landing Page</>}
          </h2>
          <BotaoVerProjeto href="https://ai-dev-academy.vercel.app/" />
        </ProjetoCard>
        <ProjetoCard>
          <ProjetoImagem src={card7} alt="Página - Landing Page" />

          <h2 idioma={idioma}>
            {idioma === "pt" && <>Site - Landing Page</>}
            {idioma === "en" && <>Website - Landing Page Office</>}
            {idioma === "es" && <>Sitio web - Landing Page</>}
          </h2>
          <BotaoVerProjeto href="https://criacao-de-landingpage.vercel.app/" />
        </ProjetoCard>

        <ProjetoCard>
          <ProjetoImagem src={card6} alt="Página - Consultório IA" />

          <h2 idioma={idioma}>
            {idioma === "pt" && <>Site - American Bully</>}
            {idioma === "en" && <>Website - American Bully Office</>}
            {idioma === "es" && <>Sitio web - American Bully</>}
          </h2>
          <BotaoVerProjeto href="https://avrbulls.com.br/" />
        </ProjetoCard>
      </ProjetoGrid>
    </Container>
  );
};

export default Projetos;
