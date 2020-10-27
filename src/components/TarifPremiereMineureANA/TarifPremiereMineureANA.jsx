import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button, Form } from "react-bootstrap";
import ResumePremiereConsultationMineureANA from '@components/ResumePremiereConsultationMineureANA';
import "./TarifPremiereMineureANA.css";

import FicheCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import Certificat from "@assets/docx/CertificatIVGMedecin.docx";



function TarifPremiereMineureANA(props) {
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
      
      <p>
      L’IVG est prise en charge à 100% dans le cadre d’un tarif forfaitaire avec dispense totale 
      d’avance de frais pour :
      </p>
     
      <ul>
          <li>Les jeunes filles mineures non émancipées sans consentement parental </li>
        <li>Les femmes bénéficiaires de la CMU complémentaire</li>
        <li>Les femmes bénéficiaires de l’aide médicale de l’État (AME).</li>
      </ul>
      <p>
      La jeune femme mineure bénéficie des conditions de facturation anonymes aux caisses
       de sécurité sociale, d’ores et déjà applicables,
        (<a target="_blank" href="20) https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000006735222&cidTexte=LEGITEXT000006073189&dateTexte=20151016">article D. 132-3</a> du Code de la Sécurité Sociale 32). 
      </p>
      <p>
      Les dispositions de la circulaire Cnam-TS 49/2003 du 24 mars 2003 s’appliquent :
       le médecin de ville ou la sage-femme utilise une feuille de soins papier et doit
        indiquer un NIR spécifique (2 55 55 55 +code caisse +030).
         La facturation électronique est exclue dans ce seul cas de figure.
      </p>
      <p>
      Dans le cas d’une jeune fille mineure avec consentement parental,
       en dehors des alinéas sus mentionnés, la 1ère consultation préalable
        à l’IVG ne fait pas partie du tarif forfaitaire IVG hors établissement de santé.
         Cette consultation est tarifiée selon la cotation habituelle. 
      </p>

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
      <a target="_blank" href="https://ivg.gouv.fr/ou-avorter.html">Lien ou-avorter.gouv</a>
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
  <p className="Red">
  En rouge : Un délai de 48h est nécessaire entre la consultation psychosociale et la deuxième consultation préalable à l’IVG.

  </p>
  

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
        
        
        
      </Form>
      <div>
        <div style={{display:'none'}}>
        <ResumePremiereConsultationMineureANA ref={componentRef} data={props.onData}  />

        </div>
      <Button variant="danger" onClick={handlePrint}>Imprimer Résumé Consultation</Button>
      <br></br>
      <a href={Certificat} target="_blank">
          Certificat de 1ère consultation PDF à compléter
        </a>
    </div>
    </div>
  );
}

export default TarifPremiereMineureANA;