import React from "react";
import "./Contact.css";



function Contact() {

    return (
        <div id="contactDisplay" className="Mid"> 
                        <div className="BorderApp"></div>
        <div className="Core">
        <h1>Contact </h1>
            <br></br>
            <h2>Responsable éditorial : </h2>
            <p>
            PUECH Lilian : médecin généraliste.
            </p>
            <p>
                Mr WEISS Julien : interne en médecine générale.
            </p>
            <p>
            Pour toutes demande, n’hésitez pas à nous contacter via contact.ivgclic@gmail.com
            </p>

            <h2>Intégration, développement et graphisme : </h2>
            <p>
            Mr Bindé Davy : Chargé de mission principal du projet.
            </p>
            <p>
            Mr Degre Thibaud : Graphiste, en charge de l’élaboration du logo.

            </p>
            
            <p>
            Mr Do rozario Enzo : Chargé de l’aide à la conception.
            </p>

        </div>
        <div className="BorderApp"></div>
            
        </div>
    )

}


export default Contact;


