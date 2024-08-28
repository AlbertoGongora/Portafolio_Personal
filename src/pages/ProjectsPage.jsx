import { MainLayout } from "../layouts/MainLayout.jsx";
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
          paragraph="Un buscador de Pokemóns por ID o nombre, que también recrea una Pokédex mostrando información detallada de cada Pokémon. Este proyecto fue desarrollado utilizando HTML, CSS, y JavaScript Vanilla."
          buttonText="Ver Más"
          buttonLink="https://albertogongora.github.io/pokedex/"
          sideProject="left"  
        />
        <Project
          image="/ImgProjects/cosmic.png"
          title="CRM Cosmic"
          paragraph="Desarrollé el FrontEnd de CRM Cosmic, un sistema avanzado de gestión de clientes, utilizando React y Vite. Durante el desarrollo, creé librerías personalizadas para optimizar el rendimiento y mejorar la experiencia del usuario. El proyecto aún está en desarrollo, pero ya puedes ver un video de presentación, y pronto estará disponible la versión completa de la aplicación."
          buttonText="Ver Más"
          buttonLink="https://youtu.be/fGAkeSnA72s"
          sideProject="right"  
        />
        <Project
          image="/ImgProjects/profileCard.png"
          title="TypeScript & SASS Project"
          paragraph="Proyecto que integra TypeScript y SASS, desplegado manualmente en Vercel. Este proceso me permitió profundizar en la configuración del despliegue y optimizar el flujo de trabajo desde la terminal."
          buttonText="Ver más"
          buttonLink="https://type-script-sass-dbisw6wep-devcodefoxs-projects.vercel.app/"
          sideProject="left"
        />
        <Project
          image="/ImgProjects/insta.png"
          title="¡Sígueme en Instagram!"
          paragraph="Si te interesa ver más proyectos, componentes y contenido relacionado con el desarrollo, te invito a seguirme en Instagram. Haz clic en el siguiente enlace para estar al tanto de mis últimas creaciones y novedades. ¡Gracias por visitar mi perfil!"
          buttonText="Ver más"
          buttonLink="https://www.instagram.com/devcodefox/"
          sideProject="right"
        />
      </section>
    </MainLayout>
  );
}
