import { useEffect, useState } from 'react';
import { MenuLinks } from './MenuLinks.jsx';
import './ButtonNavToggle.css';

export const ButtonNavToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuClass = isOpen ? 'open' : '';

    return (
        <>
            <div id="hamburger" className={`hamburglar ${isOpen ? 'is-open' : 'is-closed'}`} onClick={toggleMenu}>
                <div className="burger-icon">
                    <div className="burger-container">
                        <span className="burger-bun-top line"></span>
                        <span className="burger-filling line"></span>
                        <span className="burger-bun-bot line"></span>
                    </div>
                </div>
                <div className="path-burger"></div>
            </div>
            <nav className={menuClass} >
                    <ul className="menu">
                        <li className="menu-home">
                            <a href="/">Home</a>
                        </li>
                        <li className="menu-about">
                            <a href="/aboutme">About</a>
                        </li>
                        <li className="menu-projects">
                            <a href="/projects">Projects</a>
                        </li>
                    </ul>
                    <MenuLinks />
            </nav>
        </>
    )

}
        