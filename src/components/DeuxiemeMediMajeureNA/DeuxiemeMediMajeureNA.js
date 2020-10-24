import React, { useState } from "react";

import { Button } from "react-bootstrap";

import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";


import "./DeuxiemeMediMajeureNA.css";


function DeuxiemeMediMajeureNA(props) {
    
    
    
    return (
        <div>

            <h1>Consultation 2ème prise médicamenteuse (facultative) :
            Majeure Non Anonyme</h1>

            <p>
            Cette consultation intervient 36 à 48 heures après la 1ère prise médicamenteuse,
             qui a lieu à domicile ou, si la femme le désire, en présence du médecin ou de la sage-femme.

            </p>
            <h2>Effets secondaires de la mifépristone :</h2>
            <Button variant="secondary" value="Oui">Oui</Button>
            <Button variant="secondary" value="Non">Non</Button>

            <h2>Délivrance du misoprostol :</h2>
            <Button variant="secondary" value="Oui">Oui</Button>
            <Button variant="secondary" value="Non">Non</Button>

            <h2>Nécessité d’une injection préventive d’Ig anti-D :</h2>
            <Button variant="secondary" value="Oui">Oui</Button>
            <Button variant="secondary" value="Non">Non</Button>

            <h2>Arrêt de travail prescrit pour la prise médicamenteuse : </h2>
            <Button variant="secondary" value="Oui">Oui</Button>
            <Button variant="secondary" value="Non">Non</Button>

            <h2>Contraception choisie par la patiente :</h2>
            <Button variant="secondary" value="Oui">Oui</Button>
            <Button variant="secondary" value="Non">Non</Button>


            <Button variant="danger">Valider mes choix</Button>


        </div>
    )


}



export default DeuxiemeMediMajeureNA;