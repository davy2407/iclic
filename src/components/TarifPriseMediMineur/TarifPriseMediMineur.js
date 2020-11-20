import React, { useState, useRef, useEffect } from 'react'; 
import { useReactToPrint } from 'react-to-print';
import { Button, Form } from "react-bootstrap";
import ResumePremierePriseMedicamentMajeure from '@components/ResumePremierePriseMedicamentMajeure';
import "./TarifPriseMediMineur.css";

import FicheCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import Certificat from "@assets/docx/CertificatIVGMedecin.docx";
import InfoPatiente from "@assets/docx/InfoPatiente.docx";
import LiaisonHAS from "@assets/pdf/FicheDeLiaisonHAS.pdf";
import FicheConseil from "@assets/docx/FicheConseilSurveillance.docx";


function TarifPriseMediMineur(props) {

  useEffect(() => {
    window.scrollTo(0,0);
 }, [])

  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  ///
  


 
  return (

    




    <div className="Tarification">
      <h1>Conclusion et tarification</h1>

      <h2>Tarification</h2>
      <br></br>
      
      <p>
      La consultation de 1ere prise médicamenteuse est tarifée dans le tarif forfaitaire à l’IVG hors établissement de santé.
      </p>
      <p>
      
       Elle doit être cotée avec l’index FHV + FMV (50 + 87,92 euros).
       </p>
       <p>
       
       
       Cette cotation inclut l’éventuelle consultation facultative de 2ème prise médicamenteuse.  
      </p>

      <p>
      Sa tarification peut être faite électroniquement ou par format papier.  

      </p>
      <p> 
Pour rappel, cette consultation est prise en charge à 100% avec exonération du ticket modérateur pour toutes les femmes.
      </p>
     


      <p>
      Par ailleurs, comme c’est le cas aujourd’hui, la jeune femme mineure bénéficie des conditions de facturation anonymes aux caisses de sécurité sociale (<a target="_blank" rel="noreferrer noopener" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000006735222&cidTexte=LEGITEXT000006073189&dateTexte=20151016">article D. 132-3</a> du Code de la sécurité). 
      </p>
      <p>
      Les dispositions de la circulaire Cnam-TS 49/2003 du 24 mars 2003 s’appliquent : le médecin de ville ou la sage-femme utilise une feuille de soins papier et doit indiquer un NIR spécifique (2 55 55 55 +code caisse +030). La facturation électronique est exclue dans ce seul cas de figure.
      </p>

     
      

     <br></br>
     <br></br>
      <a className="Bold" rel="noreferrer noopener" href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf" target="_blank">
        https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf
      </a>
      
      <a className="Bold" rel="noreferrer noopener"
        href="https://www.choisirsacontraception.fr/?gclid=CjwKCAjwiaX8BRBZEiwAQQxGx09bqLm7t5_O6Yi_5xe9ZEVR9ePUqUSpruG5nRH7BkxAGpo3Mxb5thoCP7EQAvD_BwE"
        target="_blank"
      >
        Lien choisirsacontraception.fr
      </a>
      <br></br>
      <br></br>

      
  
      <a className="Bold" target="_blank" href={FicheConseil}>Fiche information et conseil de surveillance à télécharger</a>

      
      <div>
        <div style={{display:'none'}}>
        <ResumePremierePriseMedicamentMajeure ref={componentRef} data={props.onData}  />

        </div>
      <Button variant="danger" onClick={handlePrint}>Fiche de liaison première prise médicamenteuse</Button>
      
     
      <br></br>
      <br></br>
      
    </div>
    <p>
    Il est <span className="Bold" className="Red">obligatoire</span> de transmettre la fiche de liaison selon des modalités de
     transmission préétabli avec votre centre de référence afin de suivre les règles
      préconisées par la Commission Nationale de l’Informatique et des Libertés (CNIL). 
    <span className="Red">Un exemplaire doit être remis à la patiente</span>. 
    </p>
    <p>
    Toute mineure depuis le 1er janvier 2020 peut bénéficier d'une contraception gratuite. Quel que soit son âge, elle bénéficie d'une prise en charge complète par l'Assurance Maladie et sans avance de frais.
    </p>
    <p> 
    <a className="Bold" target="_blank" rel="noreferrer noopener" href="https://www.legifrance.gouv.fr/affichJO.do?idJO=JORFCONT000042266235">
    Journal officiel contraception mineure de moins de 15 ans.
    </a>
    </p>
    <p>
    Pour rappel toute femme mineure peut obtenir du médecin ou de la sage-femme la prescription d’un moyen contraceptif sans autorisation parentale. Le parcours contraceptif est prise en charge à 100% par l’assurance maladie et est protégé par le secret si la jeune femme mineure le demande. 
    </p>
    <ul>
    Le parcours comprend : 
        <li>
          
            Une consultation annuelle au cours de laquelle sont prescrits des examens de biologie médicale en vue d’une contraception
           
        </li>
        <li>
           
            Une consultation de suivi, la première année d’accès à la contraception         
        </li>
        <li>
           
            Les actes liés à la pose, au changement ou au retrait d’un dispositif contraceptif
                
            
        </li>
        <li>
            
            Certains examens de biologie médicale (glycémie à jeun, cholestérol total, triglycérides) une fois par an si nécessaire
                
          
        </li>
        <li>
            
            Les contraceptifs remboursables.
                
          
        </li>
    </ul>
    <p>
    Une consultation dédiée de première consultation de contraception et de prévention des maladies sexuellement transmissibles pour les jeunes filles de 15 à 18 ans. Elle est applicable depuis le 1er novembre 2017 pour les médecins de spécialité médecine générale ou gynécologie. Elle est cotée selon le code CCP avec prise en charge à 100% (46 euros). Elle ne peut pas s’additionner au forfait IVG.
    </p>
    <a className="Bold" target="_blank" href={LiaisonHAS}>Fiche de liaison HAS à télécharger</a>
    </div>
  );
}

export default TarifPriseMediMineur;