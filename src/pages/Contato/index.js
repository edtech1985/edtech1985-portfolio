import React, { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import { Container, Titulo, IconesContato, ItemContato } from "./Contato";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function Contato() {
  const { idioma } = useContext(LanguageContext);

  return (
    <Container>
      <Titulo idioma={idioma}>{idioma === "pt" && <>Contato</>}</Titulo>
      <Titulo idioma={idioma}>{idioma === "en" && <>Contact</>}</Titulo>
      <Titulo idioma={idioma}>{idioma === "es" && <>Contacto</>}</Titulo>
      <IconesContato>
        <ItemContato>
          <a
            href="https://www.linkedin.com/in/edtech1985/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} color="#0077B5" />
            <span>Linkedin</span>
          </a>
        </ItemContato>
        {/* <ItemContato>
          <a
            href="https://www.instagram.com/edtech1985/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={40} color="#E1306C" />
            <span>Instagram</span>
          </a>
        </ItemContato> */}
        <ItemContato>
          <a
            href="https://api.whatsapp.com/send?phone=5551992002595"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={40} color="#25D366" />
            <span>Whatsapp</span>
          </a>
        </ItemContato>
        <ItemContato>
          <a
            href="https://github.com/edtech1985"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} color="#fff" />
            <span>Github</span>
          </a>
        </ItemContato>
      </IconesContato>
    </Container>
  );
}
