import React from "react";
import "./MidSection.css";
import AppCore from "./AppCore";

function MidSection() {
  /// Midsection est un composant surement inutile, il contient un texte qui doit disparaitre quand le modal se ferme.
  /// il contient aussi AppCore, le composant censé gérer la partie en intérraction avec l'utilisateur

  return (
    <div className="Mid">
      <div className="BlocInfo">
        <p>
          Ce site a été créé à destination de tout professionnel de santé
          prenant en charge l'interruption volontaire de grossesse
          médicamenteuse afin d'apporter une aide dans sa protocolisation en
          médecine ambulatoire.
        </p>

        <p>
          Cet outil met à disposition de fiches d'information à destination des
          patientes et assure un suivi de l'acte selon les recommandations
          actuelles en France. Aucune donnée personnelle n'est enregistrée, un
          résumé imprimable vous est proposé à la fin de la saisie de chaque
          consultation
        </p>

        <p>
          L'IVG médicamenteuse se décompose en cinq consultaions, les deux
          premières ("préalables") pouvant être effectuées par un médecin ou
          sage femme ne pratiquant pas lui même l'acte.
        </p>

        <p>
          Le contenu de ce site ne se substitue pas à la responsabilité de
          décision et de prescription du médecin
        </p>

        <p>
          L'interruption volontaire de grossesse est autorisé en France depuis
          la loi Veil du 17 Janvier 1975 , elle est gratuite et accessible à
          toute femme en France selon les délais légaux de la loi 2001-588 du 4
          Juillet 2001
        </p>
      </div>
      <AppCore></AppCore>
    </div>
  );
}

export default MidSection;

