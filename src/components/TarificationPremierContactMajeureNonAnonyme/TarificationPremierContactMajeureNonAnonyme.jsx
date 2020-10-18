import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button, Form } from "react-bootstrap";
import resumePremiereConsulteMNA from "@components/ResumePremiereConsultationMajeureNonAnonyme";
import TestPrint from '@components/TestPrint';
import "./TarificationPremierContactMajeureNonAnonyme.css";

import FicheCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import Certificat from "@assets/pdf/IvgCertifPremier.pdf";



function TarificationPremierContactMNA(props) {
  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  ///


 
  return (
    <div>
      <h1>Tarification et Conclusion de consultation : </h1>
      <br></br>
      <h2>Tarification :</h2>
      <p>
        La 1ère consultation préalable/de 1er contact médical ne fait pas partie
        du tarif forfaitaire IVG hors établissement de santé. Cette consultation
        est tarifiée selon la cotation habituelle. Sa tarification peut être
        faite électroniquement ou par format papier.
      </p>
      <p>
        Pour rappel, cette consultation est prise en charge à 100% avec
        exonération du ticket modérateur pour :
      </p>
      <ul>
        <li>Les femmes bénéficiaires de la CMU complémentaire</li>
        <li>Les femmes bénéficiaires de l’aide médicale de l’État (AME).</li>
      </ul>

      <br></br>
      <br></br>
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
      <TestPrint ref={componentRef} data={props.onData}  />
      <Button variant="danger" onClick={handlePrint}>Imprimer Résumé Consultation</Button>
      <br></br>
      <a href={Certificat} target="_blank">
          Certificat de 1ère consultation PDF à compléter
        </a>
    </div>
    </div>
  );
}

export default TarificationPremierContactMNA;
