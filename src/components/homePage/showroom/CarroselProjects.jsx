import { useState, useEffect } from 'react';
import { BigCarruselProjects } from "./BigCarruselProjects.jsx";
import { MiniCarruselProject } from "./MiniCarruselProject.jsx";

export const CarroselProjects = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {windowWidth > 840 ? (
                <BigCarruselProjects />
            ) : (
                <MiniCarruselProject />
            )}
        </>
    );
};
