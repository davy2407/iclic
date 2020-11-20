import React, { useRef, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button} from "react-bootstrap";
import ResumePostIVGMajeure from '@components/ResumePostIVGMajeure';
import "./TarifPostMin.css";

import FicheHAS from "@assets/pdf/FicheDeLiaisonHAS.pdf";



function TarifPostMin(props) {

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
      <h1>Conclusion et tarification mineure</h1>
      <h2>Tarification</h2>
      <br></br>
      
      <p>
      La consultation post-IVG est tarifée dans le tarif forfaitaire à l’IVG hors établissement de santé. 
      </p>
      <p>
      Elle doit être cotée avec l’index IC ou ICS (tarif de 25 euros).
      </p>
      
      <p>


Sa tarification peut être faite électroniquement ou par format papier.   
</p>
<p>
Si une échographie de contrôle est réalisée au moment de l’examen, il conviendra de côté avec l’index IVE (30,24 euros).
      </p>
      <p>
        L'IVG est prise en charge à 100% dans le cadre d'un tarif forfaitaire avec dispense totale d'avance de frais pour toutes les patientes. 

      </p>
     
      

      <p>
      Par ailleurs, la jeune femme mineure bénéficie des conditions de facturation anonyme aux caisses de sécurité sociale 
      (<a className="Bold" target="_blank" rel="noreferrer noopener" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000006735222&cidTexte=LEGITEXT000006073189&dateTexte=20151016">article D. 132-3</a> du Code de la sécurité  32 ).
      </p>

      <p>
      Les dispositions de la circulaire Cnam-TS 49/2003 du 24 mars 2003 s’appliquent : le médecin de ville ou la sage-femme utilise une feuille de soins papier et doit indiquer un NIR spécifique (2 55 55 55 +code caisse +030). La facturation électronique est exclue dans ce seul cas de figure.
      </p>









      
 
      <a className="Bold" rel="noreferrer noopener" href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf" target="_blank">
        https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf
      </a>
      
      <a className="Bold" rel="noreferrer noopener"
        href="https://www.choisirsacontraception.fr/?gclid=CjwKCAjwiaX8BRBZEiwAQQxGx09bqLm7t5_O6Yi_5xe9ZEVR9ePUqUSpruG5nRH7BkxAGpo3Mxb5thoCP7EQAvD_BwE"
        target="_blank"
      >
        Lien choisirsacontraception.fr
      </a>
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
  
  

      

        
        <br></br>
        <br></br>
        
    
        
        
        
     
      <div>
        <div style={{display:'none'}}>
        <ResumePostIVGMajeure ref={componentRef} data={props.onData}  />

        </div>
      <Button variant="danger" onClick={handlePrint}>Imprimer Résumé consultation post-IVG médicamenteuse</Button>
      <br></br>
      <p></p>
     
    </div>
    <p >
    Toute mineure depuis le 1er janvier 2020 peut bénéficier d'une contraception gratuite. Quel que soit son âge, elle bénéficie d'une prise en charge complète par l'Assurance Maladie et sans avance de frais. (<a rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichJO.do?idJO=JORFCONT000042266235">Info</a>)

  </p>
  <p>
  Il est <span className="Red Bold">obligatoire</span> de transmettre la fiche de liaison selon des modalités de transmission préétabli avec votre centre de référence afin de suivre les règles préconisées par la Commission Nationale de l’Informatique et des Libertés (CNIL). 
Un exemplaire doit être remis à la patiente.  </p>
<a className="Bold" href={FicheHAS}  target="_blank">    
        Fiche de liaison HAS à télécharger     
     </a>
    </div>
  );
}

export default TarifPostMin;