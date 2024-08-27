import { GoToBtn } from "../components/buttons/goToBtn.jsx";
import { MainLayout } from "../layouts/MainLayout.jsx";
import "./AboutPage.css";

export function AboutPage() {
  return (
    <MainLayout>
      <section className="about-container">

      <h2 className="about-title">En construcción</h2>
      <p className="about-text">En breve podras ver información sobre mi</p>
      <GoToBtn location={"/"} text={"Home"} id={"home-button"} />
      </section>
    </MainLayout>
  );
}
