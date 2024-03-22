import { useState, useEffect} from 'react';
import { Presentacion3D } from "./intro/Presentacion3D";
import "./intro/presentacion3D.css";
import "./intro/introTitle.css";

export const Intro = () => {
    const [presentacionRef, setPresentacionRef] = useState(null);

    // Función para agregar las clases de animación después de un breve retraso
    const addAnimations = () => {
        const introTitle = document.querySelector('.intro-title-container');

        introTitle.classList.add('slide-in-left');
        if (presentacionRef) {
            presentacionRef.classList.add('slide-in-right');
        }
    };

    // Hook useEffect para ejecutar la función después de 100ms
    useEffect(() => {
        const timeout = setTimeout(addAnimations, 100);

        // Limpiar el temporizador al desmontar el componente
        return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setPresentacionRef]);

    return (
        <section className="intro-container">
            <div className="intro-title-container slide-in-left">
                <h2 className="intro-title">Soy Alberto Góngora</h2>
                <div className="container">
                    <div className="top">Full Stack Developer</div>
                    <div className="bottom" aria-hidden="true">Full Stack Developer</div>
                </div>
                <p className="intro-text">Desarrollador de Frontend y Backend con ganas de aprender y crecer.</p>
            </div>
            <Presentacion3D className="slide-in-right" />

        </section>
    )
}