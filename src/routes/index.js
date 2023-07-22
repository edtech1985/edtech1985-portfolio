import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Main, StyledBackground } from "./Routes";
import Home from "../pages/Home";
import SobreMim from "../pages/SobreMim";
import Contato from "../pages/Contato";
import Projetos from "../pages/Projetos";
import Tecnologias from "../pages/Tecnologias";

export default function AppRouter() {
  return (
    <Main>
      <Router>
        <StyledBackground />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/sobre" element={<SobreMim />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </Main>
  );
}
