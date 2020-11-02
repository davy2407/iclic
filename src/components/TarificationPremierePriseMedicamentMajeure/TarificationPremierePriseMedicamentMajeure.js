import React, { useRef } from 'react'; 
import { useReactToPrint } from 'react-to-print';
import { Button, Form } from "react-bootstrap";
import ResumePremierePriseMedicamentMajeure from '@components/ResumePremierePriseMedicamentMajeure';
import "./TarificationPremierePriseMedicamentMajeure.css";

import FicheCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import Certificat from "@assets/docx/CertificatIVGMedecin.docx";
import InfoPatiente from "@assets/docx/InfoPatiente.docx";
import LiaisonHAS from "@assets/pdf/FicheDeLiaisonHAS.pdf";
import FicheConseil from "@assets/docx/FicheConseilSurveillance.docx";


function TarificationPremierePriseMedicamentMajeure(props) {
  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  ///


 
  return (
    <div className="Tarification">
      <h1>Facturation et résumé majeure : </h1>
      <br></br>
      
      <p>
      La consultation de 1ere prise médicamenteuse est tarifée dans le
       tarif forfaitaire à l’IVG hors établissement de santé. Elle doit
        être cotée avec l’index FHV + FMV (50 + 87,92 euros). Cette cotation
         inclut l’éventuelle consultation facultative avec exonération du
          ticket modérateur  
      </p>

      <h2>Covid et IVG :</h2>
      <p>
      Téléconsultation possible. 
Condition : Outils informatique fiable pour les documents nécessaires à la pratique de l’IVG dans le cadre réglementaire.
      </p>
      <p>
      Le forfait médicament (FMV) n’est pas à facturer si vous choisissez le circuit qui permet à la patiente d’aller chercher directement les traitements abortifs à la pharmacie. 
Dans cette hypothèse, ordonnance comportant : le nom, les dosages, la posologie et la voie d’administration des médicaments. 
      </p>
      <p>
      Transmission à l’officine choisie par la patiente via ; messagerie sécurisée de santé ; dossier patient si téléconsultation intégrant cette fonctionnalité. 
La voie postale est possible. Attention au délai. 
      </p>
      <p>
      La consultation de suivi sera donc établie par téléconsultation.
       Lors de l’envoi à l’officine de l’ordonnance, il peut être ajouté un autotest
        urinaire BhCG, celui-ci est alors prise en charge par le laboratoire par
         l’intermédiaire d’un accord avec l’ANCIC et le CNGOF
         <a rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000042106233&categorieLien=id">LegiFrance</a>
      <a rel="noreferrer noopener" target="_blank" href="https://www.ameli.fr/medecin/actualites/covid-19-fin-des-mesures-derogatoires-pour-livg-medicamenteuse">ameli.fr</a>
      <a rel="noreferrer noopener" target="_blank" href="https://syngof.fr/wp-content/uploads/2020/04/covid-19_-_medecins_-_ivg.pdf">SYNGOF PDF</a>
      <a rel="noreferrer noopener" target="_blank" href="https://syngof.fr/documents-utiles/mise-a-disposition-gratuite-de-lautotest-check-top-pour-les-professionnels-de-livg-a-destination-des-femmes-realisant-une-ivg-medicamenteuse/">SYNGOF ressources utiles</a>
      </p>
    
    
      

      <p>Lien guide IVG ministère :</p>
      <a rel="noreferrer noopener" href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf" target="_blank">
        https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf
      </a>
      <a href={FicheCNGOF} target="_blank">
        Fiche info CNGOF PDF
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
        <ResumePremierePriseMedicamentMajeure ref={componentRef} data={props.onData}  />

        </div>
      <Button variant="danger" onClick={handlePrint}>Fiche de liaison première prise médicamenteuse</Button>
      <br></br>
      <a target="_blank" href={LiaisonHAS}>Fiche de liaison HAS à télécharger</a>
      <br></br>
      <a target="_blank" href={FicheConseil}>Fiche information et conseil de surveillance à télécharger</a>
      <br></br>
      
    </div>
    <p>
    Il est obligatoire de transmettre la fiche de liaison selon des modalités de
     transmission préétabli avec votre centre de référence afin de suivre les règles
      préconisées par la Commission Nationale de l’Informatique et des Libertés (CNIL). 
    Un exemplaire doit être remis à la patiente. 
    </p>
    </div>
  );
}

export default TarificationPremierePriseMedicamentMajeure;