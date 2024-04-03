export const FooterEmail = () => {
    const handleEmailClick = () => {
        const email = "gongorabada@gmail.com";
        const subject = "Consulta desde tu sitio web";

        window.location.href = `mailto:${email}?subject=${subject}`;
    };

    return (
        <section className="footer-email">
            <a className="link-email" href="#" onClick={handleEmailClick}>
                <h3>SHOOT ME A MAIL</h3>
                <i className="fas fa-envelope"></i>
            </a>
        </section>
    );
};
