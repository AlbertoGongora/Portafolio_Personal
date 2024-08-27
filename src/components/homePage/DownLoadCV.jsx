export const DownLoadCV = () => { 
    const urlCV = "../../../public/CV/AlbertoCV.pdf";
    return (
        <section className="download-cv">
            <h3 className="download-cv-title">Mi CV</h3>
            <a href={urlCV} download="Alberto_Gongora_CV.pdf" id="download-cv-button">Descargar CV</a>
        </section>
    );
}


