import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button} from "react-bootstrap";
import ResumeDeuxConsulteMajeureNA from '@components/ResumeDeuxConsulteMajeureNA';
import "./TarifDeuxiemeConsulteMajeureNA.css";

import FicheCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import Certificat from "@assets/docx/CertificatIVGMedecin.docx";
import InfoPatiente from "@assets/docx/InfoPatiente.docx";
import LiaisonHAS from "@assets/pdf/FicheDeLiaisonHAS.pdf";
import FormulaireCon from "@assets/docx/FormulaireConsentement.docx";


function TarifDeuxiemeConsulteMajeureNA(props) {
  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  ///


 
  return (
    <div className="Tarification">
      <h1>Tarification et Conclusion de consultation : </h1>
      <br></br>
      <p>
      La consultation de recueil de consentement (2ème consultation préalable à l’IVG), est tarifée dans le tarif forfaitaire à l’IVG hors établissement de santé. 
      </p>

      <p>
      Cotée IC ou ICS 25 euros.  
Sa tarification peut être faite électroniquement ou par format papier.   FSE ou feuille paierRB 100% 
      </p>
      
      

      <p>
      Le consentement doit être téléchargé et signé par la patiente. 
      </p>
      <p>
      <ol>
        <li> Copie : patiente après signature.</li>
        <li> Copie : médecin ou sage femme</li>
        <li>Copie :adressée au centre d’orthogenie referent</li>
      </ol>

      </p>
      



      
    

      

      <p>Lien guide IVG ministère :</p>
      <a rel="noreferrer noopener" href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf" target="_blank">
        https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf
      </a>
      
      <a rel="noreferrer noopener"
        href="https://www.choisirsacontraception.fr/?gclid=CjwKCAjwiaX8BRBZEiwAQQxGx09bqLm7t5_O6Yi_5xe9ZEVR9ePUqUSpruG5nRH7BkxAGpo3Mxb5thoCP7EQAvD_BwE"
        target="_blank"
      >
        Lien choisirsacontraception.fr
      </a>
      <a href={InfoPatiente} target="_blank">Fiche info patient traitement</a>
      
  

      
      <div>
          
        <div style={{display:'none'}}>
        <ResumeDeuxConsulteMajeureNA ref={componentRef} data={props.onData}  />

        </div>
        <br></br>
      <Button variant="danger" onClick={handlePrint}>Résumé de 2ème consultation PDF </Button>
      <br></br>
      <a target="_blank" href={FormulaireCon}>Formulaire Consentement IVG à remplir</a>
      <br></br>
      
      
    </div>
    <p>
    Remetre à la patiente le consentement.
    </p>
    <p>
    SI  vous n’êtes pas le professionnel de santé effectuant l’IVG, adresser la patiente à un professionnel de santé pouvant effectuer l’acte
      (<a rel="noreferrer noopener" target="_blank" href="https://www.ivglesadresses.org/">
          https://www.ivglesadresses.org/
          </a>
           <a rel="noreferrer noopener" target="_blank" href="https://ivg.gouv.fr/les-centres-de-planification.html">
           Centre de planification :  https://ivg.gouv.fr/les-centres-de-planification.html
               </a>)
    </p>

   <p>
   Les documents nécessaires pour le bon déroulement de l’IVG sont : 
   </p>
   <ul>
       <li>Certificat de 1ère consultation</li>
       <li>Consentement de l’IVG signé</li>
       <li>Résumé des 2 consultations préalables</li>
       <li>Échographie de datation</li>
       <li>Résultat de prise de sang (incluant groupe sanguin, RAI et ß-HCG quantitatif)</li>
   </ul>
   <p>Les centres de planification peuvent vous renseigner et vous orientez pour toutes questions concernant l’IVG directement dans votre département. </p>
    </div>
  );
}

export default TarifDeuxiemeConsulteMajeureNA;