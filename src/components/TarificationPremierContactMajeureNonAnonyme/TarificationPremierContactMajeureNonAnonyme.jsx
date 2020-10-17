import React from "react";
import { Button, Form } from "react-bootstrap";

import "./TarificationPremierContactMajeureNonAnonyme.css";

import FicheCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";

function TarificationPremierContactMNA() {
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

      <Form>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Certificat de 1ère consultation remise à la patiente :"
          />
        </Form.Group>

        <a href="#" target="_blank">
          Certificat de 1ère consultation PDF
        </a>
        <a href="#" target="_blank">
          Résumé de 1ère consultation PDF
        </a>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default TarificationPremierContactMNA;
