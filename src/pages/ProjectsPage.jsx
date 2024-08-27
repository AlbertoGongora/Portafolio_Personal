import { MainLayout } from "../layouts/MainLayout.jsx";
import { GoToBtn } from "../components/buttons/goToBtn.jsx";
import { Project } from "../components/projects/Project.jsx";
import "./ProjectsPage.css";

export function ProjectsPage() {
  return (
    <MainLayout>
      <section className="projectPage-container">
        <h2 className="projectPage-title">Mis proyectos</h2>
        <Project
          image="/ImgProjects/pokedex.png"
          title="Visualizador de Pokemóns"
          paragraph="Buscador de Pokemóns por id o por nombre, y recreacion de una Pokedex con la informacion de cada uno de los pokemóns."
          buttonText="Ver Más"
          buttonLink="https://albertogongora.github.io/pokedex/"
          sideProject="left"  
        />
        <Project
          image="/ImgProjects/cosmic.png"
          title="CRM Cosmic"
          paragraph="Desarrollé el FrontEnd de CRM Cosmic, un sistema de gestión de clientes con React y Vite. Este es un video de presentación del proyecto, y pronto tendrán acceso a la aplicación completa."
          buttonText="Ver Más"
          buttonLink="https://youtu.be/fGAkeSnA72s"
          sideProject="right"  
        />
        <GoToBtn location={"/"} text={"Home"} id={"home-button"} />
      </section>
    </MainLayout>
  );
}
