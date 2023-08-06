import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  NavbarTitle,
  StyledHeader,
  StyledLogo,
  StyledNavbar,
  StyledNavItem,
  BurgerMenuButton,
  IdiomasDropdown,
  IdiomaOption,
} from "./Header";
import logo from "../../img/react-removebg-preview.png";
import { LanguageContext } from "../../LanguageContext";
// import { useDarkMode } from "../../context/DarkMode";
// import DarkModeToggle from "./DarkMode";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { idioma, setIdioma } = useContext(LanguageContext);
  const handleIdiomaChange = (novoIdioma) => {
    setIdioma(novoIdioma);
    setIsOpen(false);
  };

  const handleIdiomaClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  // const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="web developer" />
      <NavbarTitle>edtech1985</NavbarTitle>

      <BurgerMenuButton
        id="BurgerButtonMenu"
        open={isOpen}
        onClick={handleMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </BurgerMenuButton>
      <StyledNavbar open={isOpen}>
        <StyledNavItem as={NavLink} to="/" exact onClick={handleNavItemClick}>
          {idioma === "pt" && "Início"}
          {idioma === "en" && "Home"}
          {idioma === "es" && "Inicio"}
        </StyledNavItem>
        <StyledNavItem
          as={NavLink}
          to="/tecnologias"
          alt="tecnologias"
          onClick={handleNavItemClick}
        >
          {idioma === "pt" && "Tecnologias"}
          {idioma === "en" && "Technologies"}
          {idioma === "es" && "Tecnologías"}
        </StyledNavItem>
        <StyledNavItem
          as={NavLink}
          to="/projetos"
          alt="projetos"
          onClick={handleNavItemClick}
        >
          {idioma === "pt" && "Projetos"}
          {idioma === "en" && "Projects"}
          {idioma === "es" && "Proyectos"}
        </StyledNavItem>
        <StyledNavItem
          as={NavLink}
          to="/sobre"
          alt="sobre"
          onClick={handleNavItemClick}
        >
          {idioma === "pt" && "Sobre Mim"}
          {idioma === "en" && "About Me"}
          {idioma === "es" && "Sobre Mí"}
        </StyledNavItem>
        <StyledNavItem
          as={NavLink}
          to="/contato"
          alt="contato"
          onClick={handleNavItemClick}
        >
          {idioma === "pt" && "Contato"}
          {idioma === "en" && "Contact"}
          {idioma === "es" && "Contacto"}
        </StyledNavItem>

        <StyledNavItem></StyledNavItem>

        <StyledNavItem onClick={handleIdiomaClick}>
          {idioma === "pt" && "🇧🇷 Language/Idioma"}
          {idioma === "en" && "🇺🇸 Language/Idioma"}
          {idioma === "es" && "🇪🇸 Language/Idioma"}
          <IdiomasDropdown open={isOpen}>
            <IdiomaOption onClick={() => handleIdiomaChange("pt")}>
              Português
            </IdiomaOption>
            <IdiomaOption onClick={() => handleIdiomaChange("en")}>
              English
            </IdiomaOption>
            <IdiomaOption onClick={() => handleIdiomaChange("es")}>
              Español
            </IdiomaOption>
          </IdiomasDropdown>
        </StyledNavItem>
      </StyledNavbar>
    </StyledHeader>
  );
}

export default Header;