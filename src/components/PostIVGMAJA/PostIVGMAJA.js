import React from "react";
import Button from "react-bootstrap/Button";





import "./PostIVGMAJA.css";


function PostIVGMAJA() { 
    function refreshPage() {
        window.location.reload(false);
      }


    return (
        <div className="consultationContainer">

            <h2>Consultation post IVG  
Majeure Anonyme :</h2>
            <p>
            Cette consultation intervient 14 à 21 jours après la 1ère prise médicamenteuse.
Pour les femmes majeures, l’avortement anonyme est impossible. Seul un règlement de la totalité du forfait lui permettrait un anonymat certain.
            </p>
            <p>
                <a target="_blank" rel="noreferrer noopener" href="https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000006171542&cidTexte=LEGITEXT000006072665">
                Lien article L2212-2 CSP, article L2212-9 CSP et article L2212-16 :
                </a>
            </p>


            <br></br>
<br></br>
<Button variant="danger" onClick={refreshPage}>Retourner Page d'acceuil</Button>

        </div>
    )


}


export default PostIVGMAJA;