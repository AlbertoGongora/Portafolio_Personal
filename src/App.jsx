import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import "./App.css";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutme" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>)
}

export default App
