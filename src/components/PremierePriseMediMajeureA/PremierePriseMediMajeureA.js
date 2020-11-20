import React from "react";
import { Button } from "react-bootstrap";

import "./PremierePriseMediMajeureA.css";

function PremierePriseMediMajeureA() {

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="consultationContainer">
      <h1>Consultation IVG : 1ere prise médicamenteuse.
Patiente majeure anonyme</h1>
      <p>
      Pour les femmes majeures, l’avortement anonyme est impossible. Seul un règlement de la totalité du forfait lui permettrait un anonymat certain.

        (<a
          href="https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000006171542&cidTexte=LEGITEXT000006072665."
          target="_blank"
        >
          Lien textes légaux 
        </a>)
      </p>

      <br></br>
      <br></br>
      <Button variant="danger" onClick={refreshPage}>Retourner Page d'acceuil</Button>  

        
      
    </div>
  );
}

export default PremierePriseMediMajeureA;