import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
