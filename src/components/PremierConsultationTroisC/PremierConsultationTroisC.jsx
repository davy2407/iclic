import React  from "react";
import Button from "react-bootstrap/Button";

import "./PremierConsultationTroisC.css";

function PremierConsultationTroisC() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="consultationContainer">
      <h1> 1 ère consultation préalable/1er contact médical Majeure Anonyme</h1>
      <p>
      Pour les femmes majeures, l’avortement anonyme est impossible. Seul un règlement de la totalité du forfait lui permettrait un anonymat certain.
        <a rel="noreferrer noopener"
          href="https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000006171542&cidTexte=LEGITEXT000006072665."
          target="_blank"
        >
          lien info
        </a>
      </p>

      <br></br>
<Button variant="danger" onClick={refreshPage}>Retourner Page d'acceuil</Button>

      {/* <Button onClick={props.onSuite()}>Poursuivre la consultation</Button> */}
    </div>
  );
}

export default PremierConsultationTroisC;
