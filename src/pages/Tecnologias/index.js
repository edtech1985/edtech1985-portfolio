import React, { useContext } from "react";
import { Container, TextoPrincipal } from "./Tecnologias";
import { LanguageContext } from "../../LanguageContext";

const Tecnologias = () => {
  const { idioma } = useContext(LanguageContext);

  return (
    <Container>
      <TextoPrincipal idioma={idioma}>
        {idioma === "pt" && (
          <>
            Minha jornada no mundo da programação começou com a descoberta do
            <span>
              <b> JavaScript</b>
            </span>
            , que rapidamente se tornou uma paixão. Com ele, pude desenvolver
            aplicações web interativas e dinâmicas, aprimorando a experiência do
            usuário e a usabilidade. Além disso, aprofundei meus conhecimentos
            em{" "}
            <span>
              <b> React</b> e<b> Node.js</b>
            </span>
            , dois pilares fundamentais do desenvolvimento moderno.
            <br />
            <br />
            Utilizando o <b>React</b>, consegui criar interfaces intuitivas e
            reativas, aproveitando a sua flexibilidade e componentização para
            construir aplicações escaláveis. Essa biblioteca me permitiu
            trabalhar de forma eficiente e oferecer uma experiência de usuário
            agradável em diferentes projetos.
            <br />
            <br />
            Ao explorar o <b>Node.js</b>, pude desenvolver aplicativos do lado
            do servidor com alta performance, tornando possível a construção de
            soluções completas para as necessidades de negócio. Sua arquitetura
            não bloqueante e orientada a eventos me permitiu criar aplicações
            assíncronas e escaláveis.
            <br />
            <br />
            No decorrer da minha trajetória, também tive a oportunidade de
            trabalhar com bancos de dados <b>SQL</b> e NoSQL, como o{" "}
            <b>MongoDB</b>. Isso me proporcionou a habilidade de projetar e
            otimizar estruturas de banco de dados, garantindo a integridade e
            eficiência dos sistemas.
            <br />
            <br />
            Sou apaixonado por aprender e estou sempre em busca de novos
            desafios e tecnologias. Por meio do <b>GitHub</b>, compartilho parte
            do meu trabalho e projetos pessoais desenvolvidos ao longo do tempo,
            o que me permite aprimorar minhas habilidades e colaborar com a
            comunidade de desenvolvedores.
            <br />
            <br />
            Estou entusiasmado com a oportunidade de continuar crescendo e
            aprimorando minhas habilidades em <b> JavaScript</b>,<b> React</b> e
            <b> Node.js</b> e outras tecnologias, contribuindo para o
            desenvolvimento de soluções inovadoras e impactantes no mundo da
            tecnologia.
          </>
        )}
        {idioma === "en" && (
          <>
            My journey into the world of programming began with the discovery of{" "}
            <span>
              <b>JavaScript</b>
            </span>
            , which quickly became a passion. With it, I was able to develop
            interactive and dynamic web applications, enhancing user experience
            and usability. Additionally, I deepened my knowledge in{" "}
            <span>
              <b>React</b>
            </span>{" "}
            and <b>Node.js</b>, two fundamental pillars of modern development.
            <br />
            <br />
            Using <b>React</b>, I could create intuitive and reactive
            interfaces, leveraging its flexibility and componentization to build
            scalable applications. This library allowed me to work efficiently
            and provide a pleasant user experience in different projects.
            <br />
            <br />
            Exploring <b>Node.js</b>, I developed high-performance server-side
            applications, enabling the construction of complete solutions for
            business needs. Its non-blocking and event-driven architecture
            allowed me to create asynchronous and scalable applications.
            <br />
            <br />
            Throughout my journey, I also had the opportunity to work with both
            SQL and NoSQL databases, such as <b>MongoDB</b>. This provided me
            with the ability to design and optimize database structures,
            ensuring system integrity and efficiency.
            <br />
            <br />I am passionate about learning and am always seeking new
            challenges and technologies. Through <b>GitHub</b>, I share some of
            my work and personal projects developed over time, which allows me
            to improve my skills and collaborate with the developer community.
            <br />
            <br />I am excited about the opportunity to continue growing and
            enhancing my skills in <b>JavaScript</b>, <b>React</b>,{" "}
            <b>Node.js</b>, and other technologies, contributing to the
            development of innovative and impactful solutions in the world of
            technology.
          </>
        )}
        {idioma === "es" && (
          <>
            Mi trayectoria en el mundo de la programación comenzó con el
            descubrimiento de{" "}
            <span>
              <b>JavaScript</b>
            </span>
            , que rápidamente se convirtió en una pasión. Con él, pude
            desarrollar aplicaciones web interactivas y dinámicas, mejorando la
            experiencia del usuario y la usabilidad. Además, profundicé mis
            conocimientos en{" "}
            <span>
              <b>React</b>
            </span>{" "}
            y <b>Node.js</b>, dos pilares fundamentales del desarrollo moderno.
            <br />
            <br />
            Utilizando <b>React</b>, pude crear interfaces intuitivas y
            reactivas, aprovechando su flexibilidad y componentización para
            construir aplicaciones escalables. Esta biblioteca me permitió
            trabajar de manera eficiente y ofrecer una agradable experiencia de
            usuario en diferentes proyectos.
            <br />
            <br />
            Al explorar <b>Node.js</b>, desarrollé aplicaciones de alto
            rendimiento del lado del servidor, lo que permitió la construcción
            de soluciones completas para las necesidades empresariales. Su
            arquitectura no bloqueante y basada en eventos me permitió crear
            aplicaciones asíncronas y escalables.
            <br />
            <br />A lo largo de mi trayectoria, también tuve la oportunidad de
            trabajar con bases de datos SQL y NoSQL, como <b>MongoDB</b>. Esto
            me brindó la habilidad de diseñar y optimizar estructuras de bases
            de datos, garantizando la integridad y eficiencia de los sistemas.
            <br />
            <br />
            Soy apasionado por aprender y siempre estoy buscando nuevos desafíos
            y tecnologías. A través de <b>GitHub</b>, comparto parte de mi
            trabajo y proyectos personales desarrollados a lo largo del tiempo,
            lo que me permite mejorar mis habilidades y colaborar con la
            comunidad de desarrolladores.
            <br />
            <br />
            Estoy entusiasmado con la oportunidad de seguir creciendo y
            mejorando mis habilidades en <b>JavaScript</b>, <b>React</b>,{" "}
            <b>Node.js</b> y otras tecnologías, contribuyendo al desarrollo de
            soluciones innovadoras e impactantes en el mundo de la tecnología.
          </>
        )}
      </TextoPrincipal>
    </Container>
  );
};

export default Tecnologias;
