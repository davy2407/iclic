import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button} from "react-bootstrap";
import ResumeDeuxiemePriseMedi from '@components/ResumeDeuxiemePriseMedi';
import "./TarifDeuxiemePriseMediMajeureNA.css";

import FicheCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import Certificat from "@assets/docx/CertificatIVGMedecin.docx";
import InfoPatiente from "@assets/docx/InfoPatiente.docx";
import LiaisonHAS from "@assets/pdf/FicheDeLiaisonHAS.pdf";
import FicheConseil from "@assets/docx/FicheConseilSurveillance.docx";


function TarifDeuxiemePriseMediMajeureNA(props) {
  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  ///


 
  return (
    <div className="Tarification">
      <h1>Consultation 2ème prise médicamenteuse (facultative) :
CCL et facturation majeure NA.</h1>
      <br></br>
      <p>
      La  2ème prise médicamenteuse peut se faire au cabinet  du médecin ou au domicile de la patiente si  le medecin a remis les comprimés à la patiente lors du rendez vous precedent. 
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
        <ResumeDeuxiemePriseMedi ref={componentRef} data={props.onData}  />

        </div>
        <br></br>
      <Button variant="danger" onClick={handlePrint}>Résumé consultation 2eme prise médicamenteuse </Button>
      
      <a target="_blank" href={FicheConseil}>Fiche information et conseil de surveillance à télécharger</a>
      <br></br>
      
    </div>
    <p>
    Remettre à la patiente la fiche de liaison qui reprend toutes les étapes de l’IVG de la patiente.
    </p>
   

    <p>
    Obligation de consultation de contrôle afin de vérifier la bonne réussite de la méthode (J14-21). La date de cette consultation est à remplir manuellement sur le résumé. 
assurez-vous que la patiente possède bien la prise de sang (βHCG quantitatif) à effectuer pour la consultation de contrôle. 
L’autotest urinaire peut également être utilisé pour juger le succès de l’IVG 
médicamenteuse. Celui-ci peut être réalisé à domicile combiné à un suivi téléphonique
    <a rel="noreferrer noopener" target="_blank" href="https://ansfl.org/document/cngof-2016-livg-medicamenteuse/">Lien recommandation CNGOF</a>
   <a rel="noreferrer noopener" target="_blank" href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter"> Lien HAS recommandation</a> 
    </p>
    </div>
  );
}

export default TarifDeuxiemePriseMediMajeureNA;