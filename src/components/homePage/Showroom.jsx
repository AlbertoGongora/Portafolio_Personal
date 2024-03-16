export const Showroom = () => {
    return (
        <section className="showroom-container">
            <h3 className="showroom-title">SHOWROOM</h3>
            <p className="showroom-text">¡Puedes ver mi trabajo en el la seccion <span className="showroom-span">Proyectos</span>!</p>
            <button onClick={() => window.location.href = "/projects"} type="button" className="showroom-button">All Projects Details</button>
        </section>
    )
}