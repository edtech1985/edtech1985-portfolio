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
  return (
    <StyledFooter>
      <StyledIconList>
        <StyledIconItem>
          <a
            href="https://www.instagram.com/psipabla/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </StyledIconItem>
        <StyledIconItem>
          <a
            href="https://www.linkedin.com/in/psi-pabla/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </StyledIconItem>

        <StyledIconItem>
          <a
            href="https://api.whatsapp.com/send?phone=555196950402&text=Olá%20Pabla,%20gostaria%20de%20mais%20informações%20sobre%20a%20psicoterapia.
            "
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </StyledIconItem>

        <StyledIconItem>
          <a
            href="https://github.com/edtech1985"
            target="_blank"
            rel="noreferrer"
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
            >
              Edson Costa
            </a>
          </>
        )}
      </StyledRightsReserved>

      <StyledDevelopedBy>
        {idioma === "pt" && (
          <>
            Desenvolvido por{" "}
            <a
              href="https://github.com/edtech1985/"
              target="_blank"
              rel="noreferrer"
            >
              <span>edtech1985</span>
            </a>
          </>
        )}
        {idioma === "en" && (
          <>
            Developed by{" "}
            <a
              href="https://github.com/edtech1985/"
              target="_blank"
              rel="noreferrer"
            >
              <span>edtech1985</span>
            </a>
          </>
        )}
        {idioma === "es" && (
          <>
            Desarrollado por{" "}
            <a
              href="https://github.com/edtech1985/"
              target="_blank"
              rel="noreferrer"
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
