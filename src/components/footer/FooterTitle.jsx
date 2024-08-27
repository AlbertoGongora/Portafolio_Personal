import { VisitCounter } from "../visits/visitsCounter.jsx"

export const FooterTitle = () => {
    return (
        <section className="footer-title">
        <div className="title-container">
            <h2 className="connectme">CONNECT WITH ME</h2>
            <VisitCounter />
        </div>
    </section>
    )
}