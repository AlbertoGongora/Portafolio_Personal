import { Presentacion3D } from "./Presentacion3D";
// import imgBackground from "../../assets/roto1.jpg";
import "./introTitle.css";

export const Intro = () => {
    return (
        <section className="intro-container">
            {/* <img className="intro-background" src={imgBackground} alt="Imagen de fondo con roto" /> */}
            <div className="intro-title-container">
                <h2 className="intro-title">Soy Alberto Góngora</h2>
                <div className="container">
                    <div className="top">Full Stack Developer</div>
                    <div className="bottom" aria-hidden="true">Full Stack Developer</div>
                </div>
                <p className="intro-text">Desarrollador de Frontend y Backend con ganas de aprender y crecer.</p>
            </div>
            <Presentacion3D />

        </section>
    )
}