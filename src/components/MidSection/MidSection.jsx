import React from "react";
import "./MidSection.css";

import AppCore from "@components/AppCore";

function MidSection() {
  /// Midsection est un composant surement inutile, il contient un texte qui doit disparaitre quand le modal se ferme.
  /// il contient aussi AppCore, le composant censé gérer la partie en intérraction avec l'utilisateur

  return (
    <div className="Mid">
      
      <AppCore></AppCore>
    </div>
  );
}

export default MidSection;
