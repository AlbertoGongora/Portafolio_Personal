import{ useEffect } from 'react'
import "./AnalogClock.css";

export const AnalogClock = (props) => {
    useEffect(() => {
        const deg = 6;
        const hour = document.querySelector(".hour");
        const min = document.querySelector(".min");
        const sec = document.querySelector(".sec");

        const setClock = () => {
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;

            hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
            min.style.transform = `rotateZ(${mm}deg)`;
            sec.style.transform = `rotateZ(${ss}deg)`;
        };

        setClock();
        const intervalId = setInterval(setClock, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="card-carrosel primer-card">
            <div className="background primer-card"> 
                <div className="clock">
                    <div className="hour"></div>
                    <div className="min"></div>
                    <div className="sec"></div>
                </div>
            </div>

            <div className="card-content" style={props.contentStyle}>
                <div className="profile-image">
                    <i className="fa-regular fa-clock"></i>
                </div>
                <h3 className="title-card-bottom">Analog clock</h3>
            </div>
            <div className="backdrop"></div>
        </div>
    )
}