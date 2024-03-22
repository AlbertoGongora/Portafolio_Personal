import "./UserProfile.css";

export const UserProfile = (props) => {
    return (
        <div className="card-carrosel">
            <div className="background card-dinamic">
                <div className="img-card-dinamic"></div>
            </div>

            <div className="card-content" style={props.contentStyle}>
                <div className="profile-image">
                    <i className="fa-solid fa-user"></i>
                </div>
                <h3 className="title-card-bottom">Users</h3>
            </div>
            <div className="backdrop"></div>
        </div>
    )
}