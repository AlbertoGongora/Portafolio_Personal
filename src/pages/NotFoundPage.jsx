import { MainLayout } from "../layouts/MainLayout.jsx";

export function NotFoundPage() {
  return (
    <MainLayout>
      <section className="not-found-container" style={{ width: "100%", height: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

      <h2 className="not-found-title" style={{ fontSize: "64px" }}>Not Found</h2>
      <p className="not-found-text" style={{ fontSize: "36px" }}>Esta página no existe</p>
      </section>
    </MainLayout>
  );
}
