import React from "react";

import "./PremierePriseMediMajeureA.css";

function PremierePriseMediMajeureA(props) {
  return (
    <div>
      <h1>Consultation IVG : 1ere prise médicamenteuse.
Patiente majeure A</h1>
      <p>
        Pour les femmes majeures, l’avortement anonyme est relatif. En effet,
        seules les IVG réalisées en établissement de santé pratiquant le tiers
        payant peuvent être pratiquées de manière confidentielle. La loi
        relative à l’interruption volontaire de grossesse dispose que : « Seule
        la réalisation d’une IVG dans un établissement de santé qui assure la
        dispense d’avance des frais permet de garantir un véritable anonymat de
        l’intervention »
        <a
          href="https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000006171542&cidTexte=LEGITEXT000006072665."
          target="_blank"
        >
          lien info
        </a>
      </p>

        
      <p>
      Il n’existe donc pour cette patiente que 2 possibilités : 
      </p>
      <ul>
                <li>Réalisation de l’IVG selon le déroulement pour une patiente majeure non anonyme et paiement de l’acte sans remboursement possible. </li>
                <li>Adressement de la patiente vers le centre de référence afin de rendre anonyme l’acte.</li>
            </ul>
    </div>
  );
}

export default PremierePriseMediMajeureA;