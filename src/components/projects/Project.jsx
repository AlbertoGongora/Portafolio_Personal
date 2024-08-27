import "./project.css";

export const Project = ({ image, title, paragraph, buttonText, buttonLink, sideProject }) => {
    return (
        <article className={`project-container ${sideProject === 'left' ? 'left-project' : 'right-project'}`}>
          {/* Si sideProject es 'left', renderiza la imagen primero */}
          {sideProject === 'left' && (
            <figure className="project-image left-image">
              <img className="img-left" src={image} alt={title} />
            </figure>
          )}
          
          {/* Renderiza siempre el contenido de texto */}
          <section className="project-content">
            <header className="project-title">
              <h2>{title}</h2>
            </header>
            <p className="project-text">{paragraph}</p>
            <footer className="project-footer">
            <a href={buttonLink} className="project-button" target="_blank" rel="noopener noreferrer"> {buttonText}</a>

            </footer>
          </section>
        
          {/* Si sideProject es 'right', renderiza la imagen después */}
          {sideProject === 'right' && (
            <figure className="project-image right-image">
              <img className="img-right" src={image} alt={title} />
            </figure>
          )}
        </article>
      );
    };