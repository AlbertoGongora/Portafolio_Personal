import { useEffect } from "react";
import { Card3D } from "./CarruselComponents/Card3D.jsx";
import { AnalogClock } from "./CarruselComponents/AnalogClock.jsx";
import { AnimationText } from "./CarruselComponents/AnimationText.jsx";
import { LoaderSpiral } from "./CarruselComponents/LoaderSpiral.jsx";
import { UserProfile } from "./CarruselComponents/UserProfile.jsx";
import "./CarruselComponents/CarroselProjects.css";

export const BigCarruselProjects = () => {
    useEffect(() => {
        const cardsContainer = document.querySelector(".container-carrosel");

        const handleClick = (e) => {
            const target = e.target.closest(".card-carrosel");

            if (!target) return;

            cardsContainer.querySelectorAll(".card-carrosel").forEach((card) => {
                card.classList.remove("active");
            });

            target.classList.add("active");
        };

        cardsContainer.addEventListener("click", handleClick);

        return () => {
            cardsContainer.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <section className="container-carrosel vertical">
            <Card3D />
            <AnalogClock />
            <AnimationText />
            <LoaderSpiral />
            <UserProfile />
        </section>
    )
}
