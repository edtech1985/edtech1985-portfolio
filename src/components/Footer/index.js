import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import {
  StyledDevelopedBy,
  StyledFooter,
  StyledIconItem,
  StyledIconList,
  StyledRightsReserved,
} from "./Footer";

import React, { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

function Footer() {
  const { idioma } = useContext(LanguageContext);

  const developedByText = {
    pt: "Desenvolvido por edtech1985",
    en: "Developed by edtech1985",
    es: "Desarrollado por edtech1985",
  };

  return (
    <StyledFooter>
      <StyledIconList>
        <StyledIconItem>
          <a
            href="https://www.instagram.com/edtech1985/"
            target="_blank"
            rel="noreferrer"
            alt="Instagram edtech1985"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </StyledIconItem>
        <StyledIconItem>
          <a
            href="https://www.linkedin.com/in/edtech1985/"
            target="_blank"
            rel="noreferrer"
            alt="Linkedin edtech1985"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </a>
        </StyledIconItem>

        <StyledIconItem>
          <a
            href="https://api.whatsapp.com/send?phone=555192002595"
            target="_blank"
            rel="noreferrer"
            alt="WhatsApp edtech1985"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </StyledIconItem>

        <StyledIconItem>
          <a
            href="https://github.com/edtech1985"
            target="_blank"
            rel="noreferrer"
            alt="Github edtech1985"
            aria-label="Github"
          >
            <FaGithub />
          </a>
        </StyledIconItem>
      </StyledIconList>
      <StyledRightsReserved>
        {idioma === "pt" && (
          <>
            © 2023 Direitos Reservados |{" "}
            <a
              href="https://www.linkedin.com/in/edtech1985/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Linkedin edtech1985"
              aria-label="Linkedin"
            >
              Edson Costa
            </a>
          </>
        )}
        {idioma === "en" && (
          <>
            © 2023 All Rights Reserved |{" "}
            <a
              href="https://www.linkedin.com/in/edtech1985/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Linkedin edtech1985"
              aria-label="Linkedin"
            >
              Edson Costa
            </a>
          </>
        )}
        {idioma === "es" && (
          <>
            © 2023 Todos los derechos reservados |{" "}
            <a
              href="https://www.linkedin.com/in/edtech1985/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Linkedin edtech1985"
              aria-label="Linkedin"
            >
              Edson Costa
            </a>
          </>
        )}
      </StyledRightsReserved>

      {/* <StyledDevelopedBy>
        {idioma === "pt" && (
          <>
            Desenvolvido por{" "}
            <a
              href="https://edtech1985.com.br/"
              target="_blank"
              rel="noreferrer"
              alt="Portfolio edtech1985"
            >
              <span>edtech1985</span>
            </a>
          </>
        )}
        {idioma === "en" && (
          <>
            Developed by{" "}
            <a
              href="https://edtech1985.com.br/"
              target="_blank"
              rel="noreferrer"
              alt="Portfolio edtech1985"
            >
              <span>edtech1985</span>
            </a>
          </>
        )}
        {idioma === "es" && (
          <>
            Desarrollado por{" "}
            <a
              href="https://edtech1985.com.br/"
              target="_blank"
              rel="noreferrer"
              alt="Portfolio edtech1985"
            >
              <span>edtech1985</span>
            </a>
          </>
        )}
      </StyledDevelopedBy> */}

      <StyledDevelopedBy>
        {idioma && (
          <>
            {developedByText[idioma]}{" "}
            <a
              href="https://edtech1985.com.br/"
              target="_blank"
              rel="noreferrer"
              aria-label="Portfolio edtech1985"
              alt={`Portfolio edtech1985 - ${
                idioma === "pt"
                  ? "Portfólio"
                  : idioma === "en"
                  ? "Portfolio"
                  : "Portafolio"
              }`}
            >
              <span>edtech1985</span>
            </a>
          </>
        )}
      </StyledDevelopedBy>
    </StyledFooter>
  );
}

export default Footer;
