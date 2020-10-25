import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button, Form } from "react-bootstrap";
import ResumePremierePriseMedicamentMajeure from '@components/ResumePremierePriseMedicamentMajeure';
import "./TarificationPremierePriseMedicamentMajeure.css";

import FicheCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import Certificat from "@assets/docx/CertificatIVGMedecin.docx";



function TarificationPremierePriseMedicamentMajeure(props) {
  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  ///


 
  return (
    <div>
      <h1>Consultation 1ere prise médicamenteuse, 
Facturation et résumé majeure :</h1>
      <br></br>
      
      <p>
      La consultation de 1ere prise médicamenteuse est tarifée dans le tarif forfaitaire
       à l’IVG hors établissement de santé. Elle doit être cotée avec l’index FHV + FMV
        (50 + 87,92 euros). Cette cotation inclue l’éventuelle consultation facultative
         de 2ème prise médicamenteuse.
      </p>
      <p>
      Sa tarification peut être faite électroniquement ou par format papier.   
Pour rappel, cette consultation est prise en charge à 100% avec exonération du
 ticket modérateur pour :
      </p>
     
      <ul>
          
        <li>Les femmes bénéficiaires de la CMU complémentaire</li>
        <li>Les femmes bénéficiaires de l’aide médicale de l’État (AME).</li>
      </ul>

      <h2>Covid et IVG :</h2>
      <p>
      Le forfait médicament (FMV) n’est pas à facturer si vous choisissez le circuit
       qui permet à la patiente d’aller chercher directement les traitements abortifs
        à la pharmacie. 
Dans cette hypothèse, vous établissez une ordonnance comportant
 : le nom, les dosages, la posologie et la voie d’administration des médicaments.
      </p>
      <p>
      L’ordonnance est ensuite transmise à l’officine choisie par la patiente
       via une messagerie sécurisée de santé ou déposée dans le dossier patient
        dans le cas de l’usage d’une solution de téléconsultation intégrant cette
         fonctionnalité. A défaut, vous pouvez transmettre l’ordonnance directement
          à la patiente par voie postale ou messagerie.
      </p>
      <p>
      Dans ce cas précis, seul l’index FHV est coté selon les même dispositions qu’en
       présentiel au cabinet.
      </p>
      <p>
      La consultation de suivi sera donc établie par téléconsultation.
       Lors de l’envoi à l’officine de l’ordonnance, il peut être ajouté un autotest
        urinaire BhCG, celui-ci est alors prise en charge par le laboratoire par
         l’intermédiaire d’un accord avec l’ANCIC et le CNGOF 
      </p>

      {/* a finir //////////////////////////////////////////////////////// */}
      

      <p>Lien guide IVG ministère :</p>
      <a href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf" target="_blank">
        https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf
      </a>
      <a href={FicheCNGOF} target="_blank">
        Fiche info CNGOF PDF
      </a>
      <a
        href="https://www.choisirsacontraception.fr/?gclid=CjwKCAjwiaX8BRBZEiwAQQxGx09bqLm7t5_O6Yi_5xe9ZEVR9ePUqUSpruG5nRH7BkxAGpo3Mxb5thoCP7EQAvD_BwE"
        target="_blank"
      >
        Lien choisirsacontraception.fr
      </a>
      <a href="#">Lien ouavorter.com</a>
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
  

      <Form>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Certificat de 1ère consultation remise à la patiente :"
          />
        </Form.Group>

        
        <br></br>
        <p>
          Il est confraternel de faire suivre le résumé et de la remettre en
          main de la patiente.
        </p>
        <p>
          La patiente dispose d’un délai de 48h entre la consultation
          psychosociale (si choisie) et la deuxième consultation préalable à
          l’IVG.
        </p>
        <p>
          La 2ème consultation préalable à l’IVG peut être effectuée par le
          professionnel de santé effectuant l’IVG ou non.
        </p>
        <br></br>
        <br></br>
        <h2>Voir bas de page pour impression docs</h2>
        
        
      </Form>
      <div>
      <ResumePremierePriseMedicamentMajeure ref={componentRef} data={props.onData}  />
      <Button variant="danger" onClick={handlePrint}>Imprimer Résumé Consultation</Button>
      <br></br>
      
    </div>
    </div>
  );
}

export default TarificationPremierePriseMedicamentMajeure;