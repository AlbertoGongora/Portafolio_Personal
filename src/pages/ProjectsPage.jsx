import { MainLayout } from "../layouts/MainLayout.jsx";
import "./ProjectsPage.css";

export function ProjectsPage() {
  return (
    <MainLayout>
      <section style={{ width: "100%", height: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

      <h2 style={{ fontSize: "64px" }}>En construcción</h2>
      <p style={{ fontSize: "36px" }}>En breve podras ver los proyectos</p>
      <button onClick={() => window.location.href = "/"} className="home-button">Home</button>
      </section>
    </MainLayout>
  );
}
