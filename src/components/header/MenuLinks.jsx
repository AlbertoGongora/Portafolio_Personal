import "./MenuLinks.css";

export const MenuLinks = () => {
    return (
        <ul className="menu-links">
            <li className="menugithub">
                <a href="https://github.com/AlbertoGongora " target="_blank" rel="noreferrer">
                    <h3>GitHub</h3>
                    <i className="fab fa-github"></i>
                </a>
            </li>
            <li className="menulinkedin">
                <a href="https://www.linkedin.com/in/albertogongora/" target="_blank" rel="noreferrer">
                    <h3>LinkedIn</h3>
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li className="menuinstagram">
                <a href="https://www.instagram.com/devcodefox/" target="_blank" rel="noreferrer">
                    <h3>Instagram</h3>
                    <i className="fab fa-instagram"></i>
                </a>
            </li>
            <li className="menuwhatsapp">
            <a href="https://api.whatsapp.com/send?phone=+34637492305" target="_blank" rel="noreferrer">
                <h3>Whatsapp</h3>
                <i className="fab fa-whatsapp"></i>
            </a>

            </li>
        </ul>
    )
}