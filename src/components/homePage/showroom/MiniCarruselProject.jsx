import { Card3D }  from "./CarruselComponents/Card3D.jsx"
import { AnalogClock }  from "./CarruselComponents/AnalogClock.jsx"
import { AnimationText }  from "./CarruselComponents/AnimationText.jsx"
import { LoaderSpiral }  from "./CarruselComponents/LoaderSpiral.jsx"
import { UserProfile }  from "./CarruselComponents/UserProfile.jsx"
import "./CarruselComponents/MiniCarruselProject.css"

export const MiniCarruselProject = () => {
    const cardContentStyle = {
        display: "none"
    };
    
    return (
        <section className="slider-container">
            <div className="slider">  
                <div className="sliders">
                    <input type="radio" name="radio-btn" id="radio1"/>
                    <input type="radio" name="radio-btn" id="radio2"/>
                    <input type="radio" name="radio-btn" id="radio3"/>
                    <input type="radio" name="radio-btn" id="radio4"/>
                    <input type="radio" name="radio-btn" id="radio5"/>

                    <div className="slide first">
                        <Card3D contentStyle={cardContentStyle}/>
                    </div>
                    <div className="slide ">
                        <AnalogClock contentStyle={cardContentStyle}/>
                    </div>
                    <div className="slide ">
                        <AnimationText contentStyle={cardContentStyle}/>
                    </div>
                    <div className="slide ">
                        <LoaderSpiral contentStyle={cardContentStyle}/>
                    </div>
                    <div className="slide ">
                        <UserProfile contentStyle={cardContentStyle}/>
                    </div>

                </div>

                <div className="navigation-manual">
                    <label htmlFor="radio1" className="manual-btn btn-1"></label>
                    <label htmlFor="radio2" className="manual-btn btn-2"></label>
                    <label htmlFor="radio3" className="manual-btn btn-3"></label>
                    <label htmlFor="radio4" className="manual-btn btn-4"></label>
                    <label htmlFor="radio5" className="manual-btn btn-5"></label>
                </div>

            </div>
        </section>

    )
}