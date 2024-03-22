import "./LoaderSpiral.css";

export const LoaderSpiral = (props) => {
    return (
        <div className="card-carrosel">
            <div className="background card-load">
                <div className="preloader">
                    <div className="loader"></div>
                </div>
            </div>

            <div className="card-content" style={props.contentStyle}>
                <div className="profile-image">
                    <i className="fa-solid fa-hourglass-half"></i>
                </div>
                <h3 className="title-card-bottom">Loading...</h3>
            </div>
            <div className="backdrop"></div>
        </div>
    )
}