import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;
  background-color: var(--dark);
  width: 100vw;
  max-height: 10vh;
  height: 10vh;
  padding-left: 1.5vw;
  padding-right: 2.5vw;
  box-sizing: border-box;
  position: relative;

  @media screen and (max-width: 768px) {
    padding-right: 50px;
  }
`;

export const StyledLogo = styled.img`
  width: auto;
  height: 8vh;
`;

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--dark);
    width: 100%;
    height: 100vh;
    padding-top: 0; /* Ajuste do espaço para o menu */
    z-index: 999;
  }
`;

export const BurgerMenuButton = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 999;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    span {
      display: block;
      width: 100%;
      height: 2px;
      margin-bottom: 6px;
      position: relative;
      background-color: var(--light-green);
      border-radius: 2px;
      transform-origin: center;
      transition: transform 0.4s ease-out, opacity 0.4s ease-out;

      &:focus {
        outline: none;
      }

      &:first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

export const NavbarTitle = styled.span`
  font-size: 1.5vw;
  color: var(--light-green);
  display: flex;
  align-items: center;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 420px) {
    font-size: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 340px) {
    font-size: 0.75rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledNavItem = styled(NavLink)`
  display: block;
  padding: 1.25vw;
  color: #fff;
  text-decoration: none;
  font-size: 1.5vw;

  &:hover {
    color: var(--light-green);
  }

  &.active {
    color: var(--light-green);
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const IdiomasDropdown = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 20px;
  background-color: var(--dark);
  border-radius: 10px;
  border: 2px solid var(--light-green);
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.9);
  padding: 10px;
  z-index: 999;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column; /* Ajuste para exibir os idiomas em coluna */
    position: absolute; /* Adicione essa linha para posicionamento absoluto */
    top: 75%; /* Ajuste a distância vertical em relação ao BurgerMenuButton */
    right: 45%; /* Ajuste a distância horizontal em relação ao BurgerMenuButton */
  }
`;

export const IdiomaOption = styled.span`
  color: #fff;
  cursor: pointer;
  margin-bottom: 5px;

  &:hover {
    color: var(--light-green);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
