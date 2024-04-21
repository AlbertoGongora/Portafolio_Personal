import { useState } from 'react';
import { Card3D }  from "./CarruselComponents/Card3D.jsx";
import { AnalogClock }  from "./CarruselComponents/AnalogClock.jsx";
import { AnimationText }  from "./CarruselComponents/AnimationText.jsx";
import { LoaderSpiral }  from "./CarruselComponents/LoaderSpiral.jsx";
import { UserProfile }  from "./CarruselComponents/UserProfile.jsx";
import "./CarruselComponents/MiniCarruselProject.css";

export const MiniCarruselProject = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const cardContentStyle = {
        display: "none"
    };

    const handleTouchStart = (event) => {
        // Guarda la posición inicial del toque
        setTouchStart(event.touches[0].clientX);
    };

    const handleTouchMove = (event) => {
        if (!touchStart) return;

        // Calcula la distancia de desplazamiento
        const touchEnd = event.touches[0].clientX;
        const touchDiff = touchStart - touchEnd;

        // Si el desplazamiento es mayor a un umbral, cambia el índice del carrusel
        if (Math.abs(touchDiff) > 50) {
            if (touchDiff > 0) {
                // Deslizar hacia la izquierda
                if (currentIndex < 4) setCurrentIndex(currentIndex + 1);
            } else {
                // Deslizar hacia la derecha
                if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
            }
        }
    };

    const handleTouchEnd = () => {
        // Restablece el estado del toque inicial
        setTouchStart(null);
    };

    return (
        <section className="slider-container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <div className="slider">  
                <div className="sliders" style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
                    <input type="radio" name="radio-btn" id="radio1"/>
                    <input type="radio" name="radio-btn" id="radio2"/>
                    <input type="radio" name="radio-btn" id="radio3"/>
                    <input type="radio" name="radio-btn" id="radio4"/>
                    <input type="radio" name="radio-btn" id="radio5"/>

                    <div className="slide first">
                        <Card3D contentStyle={cardContentStyle}/>
                        <h3 className="title-card-mini">Card 3D</h3>
                    </div>
                    <div className="slide ">
                        <AnalogClock contentStyle={cardContentStyle}/>
                        <h3 className="title-card-mini">Analog Clock</h3>
                    </div>
                    <div className="slide ">
                        <AnimationText contentStyle={cardContentStyle}/>
                        <h3 className="title-card-mini">Animation Text</h3>
                    </div>
                    <div className="slide ">
                        <LoaderSpiral contentStyle={cardContentStyle}/>
                        <h3 className="title-card-mini">Loading...</h3>
                    </div>
                    <div className="slide ">
                        <UserProfile contentStyle={cardContentStyle}/>
                        <h3 className="title-card-mini">User Profile</h3>
                    </div>
                </div>

                <div className="navigation-manual">
                    <label htmlFor="radio1" className="manual-btn btn-1"></label>
                    <label htmlFor="radio2" className="manual-btn btn-2"></label>
                    <label htmlFor="radio3" className="manual-btn btn-3"></label>
                    <label htmlFor="radio4" className="manual-btn btn-4"></label>
                    <label htmlFor="radio5" className="manual-btn btn-5"></label>
                </div>
            </div>
        </section>
    );
};

