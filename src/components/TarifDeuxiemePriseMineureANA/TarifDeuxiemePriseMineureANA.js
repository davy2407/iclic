import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button} from "react-bootstrap";
import ResumeDeuxiemePriseMedi from '@components/ResumeDeuxiemePriseMedi';
import "./TarifDeuxiemePriseMineureANA.css";

import FicheCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import Certificat from "@assets/docx/CertificatIVGMedecin.docx";
import InfoPatiente from "@assets/docx/InfoPatiente.docx";
import LiaisonHAS from "@assets/pdf/FicheDeLiaisonHAS.pdf";
import FicheConseil from "@assets/docx/FicheConseilSurveillance.docx";


function TarifDeuxiemePriseMineureANA(props) {
  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  ///


 
  return (
    <div className="Tarification">
      <h1>Consultation 2ème prise médicamenteuse (facultative) :
CCL et facturation mineure A/NA.</h1>
      <br></br>
      <p>
      Le forfait a été enregistré lors de la 1ère consultation de prise médicamenteuse, elle ne doit pas être renouvelée lors de cette consultation.       </p>
      
      <p>
      La consultation de 2ème prise médicamenteuse est facultative et peut être
       réalisée au choix du médecin ou de la patiente, elle est tarifée dans
        le tarif forfaitaire à l’IVG hors établissement de santé. Elle doit être
         cotée avec l’index FHV + FMV (50 + 87,92 euros). 
Sa tarification peut être faite électroniquement ou par format papier.
      </p>

      <p>
      Pour rappel, cette consultation est prise en charge à 100% avec exonération du ticket modérateur pour :
      </p>
      
     
      <ul>
          <li>
          Les jeunes filles mineures non émancipées sans consentement parental
          </li>
          
        <li>Les femmes bénéficiaires de la CMU complémentaire</li>
        <li>Les femmes bénéficiaires de l’aide médicale de l’État (AME).</li>
      </ul>

      <p>
      Par ailleurs, comme c’est le cas aujourd’hui, la jeune femme mineure
       bénéficie des conditions de facturation anonymes aux caisses
        de sécurité sociale, d’ores et déjà applicables,
         <a rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000006735222&cidTexte=LEGITEXT000006073189&dateTexte=20151016">(article D. 132-3 du Code de la sécurité  32)</a>

      </p>

      <p>
      Les dispositions de la circulaire Cnam-TS 49/2003 du 24 mars 2003 s’appliquent :
       le médecin de ville ou la sage-femme utilise une feuille de soins
        papier et doit indiquer un NIR spécifique (2 55 55 55 +code caisse +030).
         La facturation électronique est exclue dans ce seul cas de figure.
      </p>
      <br></br>

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

      <br></br>
      <div>
          
        <div style={{display:'none'}}>
        <ResumeDeuxiemePriseMedi ref={componentRef} data={props.onData}  />

        </div>
        <br></br>
      <Button variant="danger" onClick={handlePrint}>Résumé consultation 2eme prise médicamenteuse </Button>
      <br></br>
    
      <a target="_blank" href={FicheConseil}>Fiche information et conseil de surveillance à télécharger</a>
      <br></br>
      
    </div>















      
    

      

      
      
  

      
      
    <p>
    Il est confraternel de faire suivre le résumé et de la remettre en main de la patiente.
    </p>
    <p>
    Pour rappel : il est utile de rappeler à la patiente l’obligation de la
     consultation de contrôle afin de vérifier avec le professionnel de santé
      de la bonne réussite de la méthode (J14-21). La date de cette consultation
       est à remplir manuellement sur le résumé. 
    </p>

    <p>
    Pour cela, assurez-vous que la patiente possède bien la prise de sang
     (HCG quantitatif) à effectuer pour la consultation de contrôle. 
    L’autotest urinaire peut également être utilisé pour juger le succès de l’IVG 
    médicamenteuse. Celui-ci peut être réalisé à domicile combiné à un suivi téléphonique
    <a rel="noreferrer noopener" target="_blank" href="https://ansfl.org/document/cngof-2016-livg-medicamenteuse/">Lien recommandation CNGOF</a>
   <a rel="noreferrer noopener" target="_blank" href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter">17) Lien HAS recommandation</a> 
    </p>
    </div>
  );
}

export default TarifDeuxiemePriseMineureANA;