import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button} from "react-bootstrap";
import ResumeDeuxConsulteMajeureNA from '@components/ResumeDeuxConsulteMajeureNA';
import "./TarifDeuxiemeConsulteMineureANA.css";

import FicheCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import Certificat from "@assets/docx/CertificatIVGMedecin.docx";
import InfoPatiente from "@assets/docx/InfoPatiente.docx";
import LiaisonHAS from "@assets/pdf/FicheDeLiaisonHAS.pdf";
import FormulaireCon from "@assets/docx/FormulaireConsentement.docx";


function TarifDeuxiemeConsulteMineureANA(props) {
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
      L’IVG est prise en charge à 100% dans le cadre d’un tarif forfaitaire avec dispense totale d’avance de frais pour les patientes .       </p>
      
      

      <p>
      La jeune femme mineure bénéficie des conditions de facturation anonymes aux caisses de sécurité sociale, (article<a target="_blank" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000006735222&cidTexte=LEGITEXT000006073189&dateTexte=20151016">D. 132-3</a>  du Code de la sécurité  32 ). 
      Le médecin de ville ou la sage-femme utilise une feuille de soins papier et doit indiquer un NIR spécifique (2 55 55 55 +code caisse +030).  
      </p>

      

      <p>
      La consultation de recueil de consentement (2ème consultation préalable), est tarifée dans le tarif forfaitaire à l’IVG hors établissement de santé. Il doit être coté avec l’index IC ou ICS (tarif de 25euros). Cette cotation doit être respectée même si vous n’effectuez pas vous même l’IVG. 

      </p>

      <p>
      Le consentement doit être téléchargé et signé par la patiente.
      </p>
      <ol>
        <li>
         Copie : patiente après signature.

        </li>
        <li>
         Copie : médecin ou sage femme
          
        </li>
        <li>
        3Copie : pour le praticien orthogéniste
          
        </li>
      </ol>
  



      
    

      

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
    Il est confraternel de faire suivre le résumé et de la remettre en main de la patiente.
    </p>
    <p>
    Au terme de cette consultation, dans le cas où vous n’êtes pas le professionnel
     de santé effectuant l’IVG, il est nécessaire d’adresser la patiente à 
     un professionnel de santé pouvant effectuer l’acte
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
       <li>Consentement à l’IVG signé</li>
       <li>Résumé des 2 consultations préalables</li>
       <li>Échographie de datation</li>
       <li>Résultat de prise de sang (incluant groupe sanguin, RAI et ß-HCG quantitatif)</li>
   </ul>
   <p>Les centres de planification peuvent vous renseigner et vous orientez pour toutes questions concernant l’IVG directement dans votre département. </p>
    </div>
  );
}

export default TarifDeuxiemeConsulteMineureANA;