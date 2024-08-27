import "./goHomeBtn.css";

export const GoHomeBtn = () => {
    return (
        <button onClick={() => window.location.href = "/"} className="home-button">Home</button>
    );
}