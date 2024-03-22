import { CarroselProjects } from "./showroom/CarroselProjects.jsx"

export const Showroom = () => {
    return (
        <section className="showroom-container">
            <h3 className="showroom-title">SHOWROOM</h3>
            <CarroselProjects />
            <button onClick={() => window.location.href = "/projects"} type="button" className="showroom-button">All Projects Details</button>
        </section>
    )
}