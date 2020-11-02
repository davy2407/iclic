import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button} from "react-bootstrap";
import ResumePostIVGMajeure from '@components/ResumePostIVGMajeure';
import "./TarifPostMajeure.css";

import FicheHAS from "@assets/pdf/FicheDeLiaisonHAS.pdf";



function TarifPostMajeure(props) {
  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  ///


 
  return (
    <div className="Tarification">
      <h1>Consultation post IVG : 
CCL et facturation majeure :  </h1>
      <br></br>
      
      <p>
      La consultation post-IVG est tarifée dans le tarif forfaitaire à l’IVG hors établissement de santé. Elle doit être cotée avec l’index IC ou ICS (tarif de 25euros).
Sa tarification peut être faite électroniquement ou par format papier.   
Si une échographie de contrôle est réalisée au moment de l’examen, il conviendra de côté avec l’index IVE (30,24 euros)
      </p>
      <p>
      Pour rappel, cette consultation est prise en charge à 100% avec exonération du ticket modérateur pour : 
      </p>
     
      <ul>
          <li>Les femmes bénéficiaires de la CMU complémentaire </li>
        <li>Les femmes bénéficiaires de l’aide médicale de l’État (AME).</li>
      </ul>
      
      <p>Lien guide IVG ministère :</p>
      <a href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf" target="_blank">
        https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf
      </a>
      
      <a
        href="https://www.choisirsacontraception.fr/?gclid=CjwKCAjwiaX8BRBZEiwAQQxGx09bqLm7t5_O6Yi_5xe9ZEVR9ePUqUSpruG5nRH7BkxAGpo3Mxb5thoCP7EQAvD_BwE"
        target="_blank"
      >
        Lien choisirsacontraception.fr
      </a>
      {/* lien a finir  */}

      {/* <p>Test Info</p>
  <div>{props.onData.map((objet)=>{
    return (
      <div>
        <h4>{objet.titre}</h4>
        <p>{objet.value}</p>
      </div>
    )
  })}</div> */}
  
  

      

        
        <br></br>
        
    
        
        
        
     
      <div>
        <div style={{display:'none'}}>
        <ResumePostIVGMajeure ref={componentRef} data={props.onData}  />

        </div>
      <Button variant="danger" onClick={handlePrint}>Imprimer Résumé consultation post-IVG médicamenteuse</Button>
      <br></br>
      <a href={FicheHAS} rel="noreferrer noopener" target="_blank">    
        Fiche de liaison HAS à télécharger     
     </a>
    </div>
    <p className="Red">
  Il est obligatoire de transmettre la fiche de liaison selon des modalités de transmission préétablies avec votre centre de référence afin de suivre les règles préconisées par la Commission Nationale de l’Informatique et des Libertés (CNIL). 
Un exemplaire doit être remis à la patiente. 

  </p>
  <p>
  Il peut être confraternel de transmettre par courrier le résumé de la consultation afin de prévenir le médecin traitant si vous n’êtes pas celui-ci. 
  </p>
    </div>
  );
}

export default TarifPostMajeure;