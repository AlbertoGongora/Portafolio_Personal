import { FooterTitle } from "./footer/FooterTitle";
import { FooterLinks } from "./footer/FooterLinks";
import { FooterEmail } from "./footer/FooterEmail";
import { FooterCopy } from "./footer/FooterCopy";

import "./footer.css";

export const Footer = () => {
    return (
        <footer className="footer-container">
            <FooterTitle />
            <FooterLinks />
            <FooterEmail />
            <FooterCopy />
        </footer>
    )
}