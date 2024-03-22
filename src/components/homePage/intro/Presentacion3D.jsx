import { useEffect, useRef } from 'react';
import imgFondo from "../../../assets/fondo.png";
import imgPerson from "../../../assets/person.png";

export const Presentacion3D = () => {
    const boxRef = useRef(null);
    const range = 25;

    const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

    useEffect(() => {
        const handleMouseMove = ({ x, y }) => {
            const yValue = calcValue(y, window.innerHeight);
            const xValue = calcValue(x, window.innerWidth);

            if (boxRef.current) {
                boxRef.current.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
            }

            const images = document.querySelectorAll(".card_img");
            const backgrounds = document.querySelectorAll(".card_bg");

            images.forEach(image => {
                image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
            });

            backgrounds.forEach(background => {
                background.style.backgroundPosition = `${xValue * 0.45}px ${-yValue * 0.45}px`;
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="body slide-in-right">
            <div className="box" ref={boxRef}>
                <div className="card card_person">
                    <div className="shadow">
                        <img className="card_bg" src={imgFondo} alt="Fondo" />
                    </div>
                    <img className="card_img" src={imgPerson} alt="Persona" />
                </div>
            </div>
        </div>
    );
};

