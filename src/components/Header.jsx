import { Title } from "./header/Title.jsx";
import { ButtonNavToggle } from "./header/ButtonNavToggle.jsx";

import "./header.css";

export const Header = () => {

    return (
        <header className="header-container">
            <Title />
            <ButtonNavToggle className="nav-toggle" />
        </header>
    );
}