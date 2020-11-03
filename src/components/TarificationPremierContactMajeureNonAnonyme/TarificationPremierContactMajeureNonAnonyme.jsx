import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button, Form } from "react-bootstrap";
import TestPrint from '@components/TestPrint';
import "./TarificationPremierContactMajeureNonAnonyme.css";

import FicheCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import Certificat from "@assets/docx/CertificatIVGMedecin.docx";



function TarificationPremierContactMNA(props) {
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
      <h2>Tarification :</h2>
      <p>
      La 1ère consultation préalable ou  1er contact médical :
ne fait pas partie du “ forfait  IVG hors établissement de santé”
tarif habituel de  consultation 
      </p>
      
      <br></br>
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
      <a href="https://ivg.gouv.fr/ou-avorter.html" target="_blank" rel="noreferrer noopener" >Lien ouavorter.gouv</a>
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
        
        
        
        
        
      </Form>
      <div>
        <div style={{display:'none'}}>
        <TestPrint ref={componentRef} data={props.onData}  />

        </div>
      <Button variant="danger" onClick={handlePrint}>Imprimer Résumé Consultation</Button>
      <br></br>
      <a href={Certificat} target="_blank">
          Certificat de 1ère consultation PDF à compléter
        </a>

        <p>
        Obligation légale et déontologique pour tout praticien  de remettre à la patiente une attestation de demande d’IVG.
          
La patiente dispose d’un délai de 48h entre la consultation psychosociale (si choisie) et la deuxième consultation préalable à l’IVG.
        </p>
        <p>
        La 2ème consultation préalable à l’IVG peut être effectuée par le professionnel de santé effectuant l’IVG ou non.
        </p>
    </div>
    </div>
  );
}

export default TarificationPremierContactMNA;
