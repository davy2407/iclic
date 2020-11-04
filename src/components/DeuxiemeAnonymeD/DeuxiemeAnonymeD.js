import React from "react";
import Button from"react-bootstrap/Button";



import "./DeuxiemeAnonymeD.css";

function DeuxiemeAnonymeD() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="consultationContainer">
      <h1> Patiente majeure anonyme :  </h1>
<p>
Pour les femmes majeures, l’avortement anonyme est impossible.   
</p>

<p>
Seul un règlement de la totalité du forfait lui permettrait un anonymat certain.
</p>


<br></br>
<br></br>
<Button variant="danger" onClick={refreshPage}>Retourner Page d'acceuil</Button>
    </div>
  );
}

export default DeuxiemeAnonymeD;
