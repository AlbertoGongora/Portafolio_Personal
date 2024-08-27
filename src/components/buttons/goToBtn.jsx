import "./goToBtn.css";

export const GoToBtn = ({ location, text, id=""}) => {
    return (
        <button onClick={() => window.location.href = location} id={id} className="goTobtn">{text}</button>
    );
}