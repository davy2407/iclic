import React, { useState } from "react";

import { Button } from "react-bootstrap";

import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";


import "./DeuxiemePriseMajeureA.css";


function DeuxiemePriseMajeureA(props) {
    function refreshPage() {
        window.location.reload(false);
      }
    
    
    
    return (
        <div className="consultationContainer">

            <h1>
                Consultation deuxième prise médicamenteuse (facultative) Majeure Anonyme :
            </h1>

           

            <p>
            Cette consultation intervient 36 à 48 heures après la première prise médicamenteuse, qui a lieu à domicile ou, si la femme le désire, en présence du médecin ou de la sage-femme.</p>
<p>
Pour les femmes majeures, l’avortement anonyme est impossible. Seul un règlement de la totalité du forfait lui permettrait un anonymat certain.
</p>

<br>
</br>
<br></br>

<p>
                  <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000006171542&cidTexte=LEGITEXT000006072665">Lien textes légaux </a>



                  
            </p>
            <br></br>
<br></br>
<Button variant="danger" onClick={refreshPage}>Retourner Page d'acceuil</Button>

            

            


        </div>
    )


}



export default DeuxiemePriseMajeureA;