import React, { useState } from "react";

import { Button } from "react-bootstrap";

import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";


import "./DeuxiemePriseMajeureA.css";


function DeuxiemePriseMajeureA(props) {
    
    
    
    return (
        <div>

            <h1>
                Consultation 2ème prise médicamenteuse (facultative) :
                Majeure Anonyme : 
            </h1>

            <p>
            Cette consultation intervient 36 à 48 heures après la 1ère prise médicamenteuse,
             qui a lieu à domicile ou, si la femme le désire,
              en présence du médecin ou de la sage-femme.
            </p>

            <p>
            Pour les femmes majeures, l’avortement anonyme est relatif.
             En effet, seules les IVG réalisées en établissement de santé pratiquant
              le tiers payant peuvent être pratiquées de manière confidentielle.
               La loi relative à l’interruption volontaire de grossesse dispose que :
                « Seule la réalisation d’une IVG dans un établissement de santé qui assure
                 la dispense d’avance des frais permet de garantir un véritable anonymat
                  de l’intervention »
                  <a target="_blank" href="https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000006171542&cidTexte=LEGITEXT000006072665">lien info</a>
            </p>

            <p>
            Il n’existe donc pour cette patiente que 2 possibilités :
            </p>

            <ul>
                <li>Réalisation de l’IVG selon le déroulement pour une patiente majeure non anonyme et paiement de l’acte sans remboursement possible. </li>
                <li>2. Adressement de la patiente vers le centre de référence afin de rendre anonyme l’acte.</li>
            </ul>


        </div>
    )


}



export default DeuxiemePriseMajeureA;