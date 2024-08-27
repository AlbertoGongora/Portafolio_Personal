import { GoToBtn } from "../buttons/goToBtn.jsx"
import { CarroselProjects } from "./showroom/CarroselProjects.jsx"

export const Showroom = () => {
    return (
        <section className="showroom-container">
            <h3 className="showroom-title">SHOWROOM</h3>
            <CarroselProjects />
            <GoToBtn location={"/projects"} text={"All Projects Details"} id={"showroom-button"} />
        </section>
    )
}