import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../../LanguageContext";
import { Container, ProjetoGrid, ProjetoCard, ProjetoImagem } from "./Projetos";

// import card1 from "../../img/psico.png";
import card1 from "../../img/mockup/psico3devices.png";
// import card2a from "../../img/cookies.png";
// import card2 from "../../img/pumpcrazy.png";
import card2 from "../../img/mockup/cookies-3devices.png";
// import card3 from "../../img/consultorio.png";
import card3 from "../../img/mockup/doctor-3devices.png";
// import card4 from "../../img/bones.png";
import card4 from "../../img/mockup/bones-3devices.png";
// import card5 from "../../img/mjn.png";
import card5 from "../../img/mockup/mjnimports-3devices.png";
import card6 from "../../img/avr2.png";
import card7 from "../../img/mockup/land2-3devices.png";
// import card8 from "../../img/landing2.png";
import card8 from "../../img/mockup/landing-3devices.png";
import underContruction from "../../img/Under-Construction.jpg";

import BotaoVerProjeto from "../../components/ProjectButton/BotaoVerProjeto";

import AOS from "aos";
import "aos/dist/aos.css";

const Projetos = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const { idioma } = useContext(LanguageContext);
  return (
    <Container>
      <ProjetoGrid>
        <div className="animation" data-aos="fade-down-right">
          <ProjetoCard>
            <ProjetoImagem src={card5} alt="Página - Importados" />
            <h2 idioma={idioma}>
              {idioma === "pt" && <>Site - Importados</>}
              {idioma === "en" && <>Website - Imports</>}
              {idioma === "es" && <>Sitio Web - Importados</>}
            </h2>
            <BotaoVerProjeto href="https://www.mjnimports.com.br/" />
          </ProjetoCard>
        </div>

        <div className="animation" data-aos="fade-down">
          <ProjetoCard>
            <ProjetoImagem src={card1} alt="Página - Psicóloga" />
            <h2 idioma={idioma}>
              {idioma === "pt" && <>Site - Psicóloga</>}
              {idioma === "en" && <>Website - Psychologist</>}
              {idioma === "es" && <>Sitio Web - Psicóloga</>}
            </h2>
            <BotaoVerProjeto href="https://www.psicologapablaamaral.com.br/" />
          </ProjetoCard>
        </div>

        <div className="animation" data-aos="fade-down">
          <ProjetoCard>
            <ProjetoImagem src={card2} alt="Página - Cookies" />

            <h2 idioma={idioma}>
              {idioma === "pt" && <>Site - Cookies</>}
              {idioma === "en" && <>Website - Cookies</>}
              {idioma === "es" && <>Sitio Web - Cookies</>}
            </h2>
            <BotaoVerProjeto href="https://www.pumpcrazy.com.br/" />
          </ProjetoCard>
        </div>
        <div className="animation" data-aos="fade-down-left">
          <ProjetoCard>
            <ProjetoImagem src={card4} alt="Página - Bonés" />

            <h2 idioma={idioma}>
              {idioma === "pt" && <>Site - Bonés</>}
              {idioma === "en" && <>Website - Caps</>}
              {idioma === "es" && <>Sitio Web - Tapas</>}
            </h2>
            <BotaoVerProjeto href="https://cap-shop-edtech1985.vercel.app/" />
          </ProjetoCard>
        </div>
        <div className="animation" data-aos="fade-right">
          <ProjetoCard>
            <ProjetoImagem src={card3} alt="Página - Consultório IA" />

            <h2 idioma={idioma}>
              {idioma === "pt" && <>Site - Consultório IA</>}
              {idioma === "en" && <>Website - AI Medical Office</>}
              {idioma === "es" && <>Sitio web - Consultorio IA</>}
            </h2>
            <BotaoVerProjeto href="https://ai-medical-office.vercel.app/" />
          </ProjetoCard>
        </div>

        <div className="animation" data-aos="fade-up">
          <ProjetoCard>
            <ProjetoImagem src={card8} alt="Página - Landing Page" />

            <h2 idioma={idioma}>
              {idioma === "pt" && <>Site - Landing Page</>}
              {idioma === "en" && <>Website - Landing Page</>}
              {idioma === "es" && <>Sitio web - Landing Page</>}
            </h2>
            <BotaoVerProjeto href="https://ai-dev-academy.vercel.app/" />
          </ProjetoCard>
        </div>
        <div className="animation" data-aos="fade-up">
          <ProjetoCard>
            <ProjetoImagem src={card7} alt="Página - Landing Page" />

            <h2 idioma={idioma}>
              {idioma === "pt" && <>Site - Landing Page 2</>}
              {idioma === "en" && <>Website - Landing Page 2 </>}
              {idioma === "es" && <>Sitio web - Landing Page 2</>}
            </h2>
            <BotaoVerProjeto href="https://criacao-de-landingpage.vercel.app/" />
          </ProjetoCard>
        </div>

        <div className="animation" data-aos="fade-left">
          <ProjetoCard>
            <ProjetoImagem
              src={underContruction}
              alt="Página - Consultório IA"
            />

            <h2 idioma={idioma}>
              {idioma === "pt" && <>Site - American Bully</>}
              {idioma === "en" && <>Website - American Bully</>}
              {idioma === "es" && <>Sitio web - American Bully</>}
            </h2>
            <BotaoVerProjeto href="https://avrbulls.com.br/" />
          </ProjetoCard>
        </div>

        <div className="animation" data-aos="fade-up">
          <ProjetoCard>
            <ProjetoImagem
              src={underContruction}
              alt="Página - Consultório IA"
            />

            <h2 idioma={idioma}>
              {idioma === "pt" && <>Site - Projeto Latido</>}
              {idioma === "en" && <>Website - Projeto Latido</>}
              {idioma === "es" && <>Sitio web - Projeto Latido</>}
            </h2>
            <BotaoVerProjeto href="https://projeto-latido.vercel.app/" />
          </ProjetoCard>
        </div>
        <div className="animation" data-aos="fade-up">
          <ProjetoCard>
            <ProjetoImagem
              src={underContruction}
              alt="Página - Consultório IA"
            />

            <h2 idioma={idioma}>
              {idioma === "pt" && <>Site - Mercado</>}
              {idioma === "en" && <>Website - Market</>}
              {idioma === "es" && <>Sitio web - Mercado</>}
            </h2>
            <BotaoVerProjeto href="https://parmigiani.vercel.app/" />
          </ProjetoCard>
        </div>
      </ProjetoGrid>
    </Container>
  );
};

export default Projetos;
