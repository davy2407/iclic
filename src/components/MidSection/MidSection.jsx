import React from "react";
import "./MidSection.css";

import AppCore from "@components/AppCore";


////// espace bouttons 
////// angle input
////// POPup modal verrou
////// bloc consulte/tarif info sur côté gauche , question droite
///// age gestationel semaine+jour 

function MidSection() {
  /// Midsection est un composant surement inutile, il contient un texte qui doit disparaitre quand le modal se ferme.
  /// il contient aussi AppCore, le composant censé gérer la partie en intérraction avec l'utilisateur

  return (
    <div className="Mid">
            <div className="Marge"></div>

      
      <AppCore></AppCore>
      <div className="Marge"></div>

    </div>
  );
}

export default MidSection;
