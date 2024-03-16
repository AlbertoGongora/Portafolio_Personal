import { MainLayout } from "../layouts/MainLayout.jsx";
import { Intro } from "../components/homePage/Intro.jsx";
import { Toolings } from "../components/homePage/Toolings.jsx";
import { Showroom } from "../components/homePage/Showroom.jsx";
import { DownLoadCV } from "../components/homePage/DownLoadCV.jsx";
import { Quote } from "../components/homePage/Quote.jsx";
import "./homePage.css";



export const HomePage = () => {
    return (
        <>
            <MainLayout>
                <Intro />
                <Toolings />
                <Showroom />
                <DownLoadCV />
                <Quote />
            </MainLayout>
        </>
    )
}