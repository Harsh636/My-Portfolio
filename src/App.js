import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./Components/Header/Header";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ResumePage from "./pages/ResumePage/ResumePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import SkillPage from "./pages/SkillPage/SkillPage";
import CertificatePage from "./pages/CertificatePage/CertificatePage";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route path="/certificate" element={<CertificatePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
