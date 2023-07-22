import { Container, TextoPrincipal } from "./SobreMim";
import React, { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

const SobreMim = () => {
  const { idioma } = useContext(LanguageContext);

  return (
    <Container>
      <TextoPrincipal idioma={idioma}>
        {idioma === "pt" && (
          <>
            Bacharel em <b>Administração de Empresas</b> com ênfase em Comércio
            Exterior. Atualmente cursando <b>Engenharia de Software</b>. Ao
            longo dos meus estudos, concluí estágios nas áreas de logística,
            administração e finanças, adquirindo valiosa experiência prática. No
            final de 2021, fiz uma transição da indústria financeira para a área
            de tecnologia, impulsionado pela minha paixão por lógica e resolução
            de problemas. <br></br>
            <br></br>Atualmente, estou estudando ativamente JavaScript, React e
            Node.js. Esses cursos me proporcionaram uma base sólida em
            desenvolvimento web. Além disso, adquiri conhecimento e experiência
            prática em bancos de dados SQL e NoSQL enquanto trabalhava como
            <b> Analista de Suporte Técnico Nível 2</b> na Lit Onlearning -
            Saint Paul Educacional. <br></br>
            <br></br>Durante meus anos na faculdade, tive a oportunidade de
            estudar no exterior, na <b>Nova Zelândia</b>, por dois anos, onde
            alcancei
            <b> fluência em inglês</b>. Também sou proficiente em espanhol, o
            que me permite me comunicar efetivamente com pessoas de diferentes
            origens. Antes de minha função atual, trabalhei como{" "}
            <b>Ouvidor Trilíngue</b>, utilizando minhas habilidades linguísticas
            para facilitar a comunicação eficaz entre falantes de inglês e
            espanhol. <br></br>
            <br></br> Além de meus empreendimentos acadêmicos e profissionais,
            invisto ativamente no <b>mercado financeiro</b> tradicional desde
            2015, adquirindo experiência em mercados de ações. Também estou
            envolvido no mercado de <b>criptomoedas</b> como investidor e
            entusiasta desde 2016.
          </>
        )}
        {idioma === "en" && (
          <>
            Bachelor of <b>Business Administration</b> with an emphasis on{" "}
            <b>International Trade</b>. Currently pursuing a degree in{" "}
            <b>Software Engineering</b>. Throughout my studies, I completed
            internships in <b>logistics</b>, <b>administration</b>, and{" "}
            <b>finance</b>, gaining valuable hands-on experience. In late 2021,
            I made a transition from the financial industry to the technology
            field, driven by my passion for logic and problem-solving. <br></br>
            <br></br>Currently, I am actively studying <b>JavaScript</b>,{" "}
            <b>React</b>, and <b>Node.js</b>. These courses have provided me
            with a solid foundation in web development. Additionally, I have
            acquired knowledge and practical experience in <b>SQL</b> and{" "}
            <b>NoSQL</b> databases while working as a{" "}
            <b>Level 2 Technical Support Analyst</b> at Lit Onlearning - Saint
            Paul Educacional. <br></br>
            <br></br>During my college years, I had the opportunity to study
            abroad in <b>New Zealand</b> for two years, where I achieved fluency
            in English. I am also proficient in Spanish, which allows me to
            effectively communicate with people from different backgrounds.
            Before my current role, I worked as a <b>Trilingual Ombudsman</b>,
            using my language skills to facilitate effective communication
            between English and Spanish speakers. <br></br>
            <br></br>In addition to my academic and professional pursuits, I
            have been actively investing in the traditional{" "}
            <b>financial market </b>
            since 2015, gaining experience in stock markets. I am also involved
            in the <b>cryptocurrency</b> market as an investor and enthusiast
            since 2016.
          </>
        )}
        {idioma === "es" && (
          <>
            Licenciado en <b>Administración de Empresas</b> con énfasis en{" "}
            <b>Comercio Exterior</b>. Actualmente cursando{" "}
            <b>Ingeniería de Software</b>. A lo largo de mis estudios, realicé
            pasantías en <b>logística</b>, <b>administración</b> y{" "}
            <b>finanzas</b>, adquiriendo valiosa experiencia práctica. A finales
            de 2021, hice una transición de la industria financiera al campo de
            la tecnología, impulsado por mi pasión por la lógica y la resolución
            de problemas. <br></br>
            <br></br>Actualmente, estoy estudiando activamente <b>JavaScript</b>
            , <b>React</b> y <b>Node.js</b>. Estos cursos me han proporcionado
            una sólida base en desarrollo web. Además, he adquirido
            conocimientos y experiencia práctica en bases de datos <b>SQL</b> y{" "}
            <b>NoSQL</b> mientras trabajaba como{" "}
            <b> Analista de Soporte Técnico de Nivel 2</b> en Lit Onlearning -
            Saint Paul Educacional. <br></br>
            <br></br>Durante mis años universitarios, tuve la oportunidad de
            estudiar en el extranjero en <b>Nueva Zelanda</b> durante dos años,
            donde logré fluidez en inglés. También tengo un buen dominio del
            español, lo que me permite comunicarme eficazmente con personas de
            diferentes orígenes. Antes de mi cargo actual, trabajé como{" "}
            <b>Defensor Trilingüe</b>, utilizando mis habilidades lingüísticas
            para facilitar la comunicación efectiva entre hablantes de inglés y
            español. <br></br>
            <br></br>Además de mis actividades académicas y profesionales, he
            estado invirtiendo activamente en el <b>mercado financiero</b>{" "}
            tradicional desde 2015, adquiriendo experiencia en mercados de
            acciones. También estoy involucrado en el mercado de{" "}
            <b>criptomonedas</b> como inversionista y entusiasta desde 2016.
          </>
        )}
      </TextoPrincipal>
    </Container>
  );
};

export default SobreMim;
