import React from "react";
import Logo from '../images/LOGO_IVG.svg';

import "./ResumePremiereConsultationMajeureNonAnonyme.css";



function ResumePremiereConsultationMNA(props) {
    return (
        <div>
            <img src={Logo} className="logo"></img>
            <br></br>
            <br></br>
            <h1>Résumé de  la consultation de 1er contact médical préalable à l’IVG : </h1>
            <br></br>
            <p>Nom/prénom et date de naissance :</p>
            <br></br>
            <br></br>
            <br></br>
            <p>Antécédent(s) :</p>
            <br></br>
            <br></br>
            <br></br>
            <p>DDR :  DATE et SA</p>
            {/* a faire */}
            <p>Echographie :  Prescrite/non prescrite</p>
            {/* a faire */}
    <p>Mode de découverte de la grossesse : {}</p>

        </div>
    )
}


export default ResumePremiereConsultationMNA;
