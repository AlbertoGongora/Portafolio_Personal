import imgLogo from "../../assets/LogoFox.png";

export const Title = () => {
    return (
        <>
            <img src={imgLogo} className="logoFox" alt="Logotipo del portafolio, Zorro en un circulo" />
            <h1 className="title-header">DevCodeFox</h1>
        </>
    );
}