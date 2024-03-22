import "./Card3D.css";

export const Card3D = (props) => {
    return (
        <div className="card-carrosel active">
            <div className="background card-turn-body">
                <div className="card-turn">
                    <div className="card-content-turn">
                        <div className="card-front">
                            <p className="sub-title text-front">Alberto Góngora</p>
                            <h1 className="title-turn text-front">Proyectos</h1>
                            <p className="sub-title text-front upDown">Full Stack Developer Junior</p>
                        </div>
                        <div className="card-back">
                            <h2 className="back-title">Developer Junior</h2>
                            <p className=" text-back">
                                <span>Proyectos: </span> Aqui puedes ver varios proyectos, y si tienes tiempo para verlos todos puedes ir a la sección de All Projects.
                            </p>
                            <p className="genre text-back">
                                <span>Front End: </span> HTML5, CSS3, JavaScript y React
                            </p>
                            <p className="release-date text-back">
                                <span>Back End: </span> MySQL, NodeJS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-content" style={props.contentStyle} >
                <div className="profile-image">
                    <i className="fa-solid fa-arrow-rotate-right"></i>
                </div>
                <h3 className="title-card-bottom">Hover Card 3D</h3>
            </div>
            <div className="backdrop"></div>
        </div>
    );
}