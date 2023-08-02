import React, { useContext } from "react";
import { Container, Titulo, TextoPrincipal } from "./Home";
import { LanguageContext } from "../../LanguageContext";

const Home = () => {
  const { idioma } = useContext(LanguageContext);

  return (
    <Container>
      <Titulo idioma={idioma}>
        {idioma === "pt" && <>Seja bem-vindo ao meu Portfólio</>}
      </Titulo>
      <Titulo idioma={idioma}>
        {idioma === "en" && <>Welcome to my Portfolio</>}
      </Titulo>
      <Titulo idioma={idioma}>
        {idioma === "es" && <>Bienvenido a mi Portafolio</>}
      </Titulo>

      <TextoPrincipal idioma={idioma}>
        {idioma === "pt" && (
          <>
            Aqui você encontrará uma amostra dos meus projetos pessoais, minha
            trajetória profissional e informações sobre mim. <br></br>
            Sou apaixonado por desenvolvimento web, com foco especial em
            <b> JavaScript</b>,<b> React</b> e<b> Node.js</b>. <br></br>O site
            está disponível em 3 idiomas para sua conveniência.<br></br>{" "}
            Sinta-se à vontade para explorar e conhecer mais sobre meu trabalho!
          </>
        )}
        {idioma === "en" && (
          <>
            Here you will find a showcase of my personal projects, my
            professional journey, and some information about me. I am passionate
            about web development, with a special focus on <b> JavaScript</b>,
            <b> React</b> and<b> Node.js</b>.<br></br> The website is available
            in 3 languages for your convenience. Feel free to explore and learn
            more about my work!
          </>
        )}
        {idioma === "es" && (
          <>
            Aquí encontrarás una muestra de mis proyectos personales, mi
            trayectoria profesional y algunas informaciones sobre mí. Soy
            apasionado por el desarrollo web, con un enfoque especial en
            <b> JavaScript</b>,<b> React</b> y<b> Node.js</b>. <br></br>El sitio
            web está disponible en 3 idiomas para su comodidad. ¡Siéntete libre
            de explorar y conocer más sobre mi trabajo!
          </>
        )}
      </TextoPrincipal>
    </Container>
  );
};

export default Home;
