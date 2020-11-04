import React, { useState, useRef } from 'react'; 
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
  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  ///
  const ouiCovidBloc = () => {
    return (
      <div >
        <h4>Covid et IVG : </h4>
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
         <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000042106233&categorieLien=id">LegiFrance</a>
      <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://www.ameli.fr/medecin/actualites/covid-19-fin-des-mesures-derogatoires-pour-livg-medicamenteuse">ameli.fr</a>
      <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://syngof.fr/wp-content/uploads/2020/04/covid-19_-_medecins_-_ivg.pdf">SYNGOF PDF</a>
      <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://syngof.fr/documents-utiles/mise-a-disposition-gratuite-de-lautotest-check-top-pour-les-professionnels-de-livg-a-destination-des-femmes-realisant-une-ivg-medicamenteuse/">SYNGOF ressources utiles</a>
      </p>
    
    
      </div>
    )
  }

  const [ouiCovid, setOuiCovid] = useState(()=>ouiCovidBloc());

  const [currentOui, setCurrentOui] = useState("");

  const affichageOuiCovid = () => {
    let txtAEnlever = currentOui;
    let txtAAfficher = ouiCovid;
    setCurrentOui(txtAAfficher);
  
    
  };


 
  return (

    




    <div className="Tarification">
      <h1>Facturation et résumé Mineure : </h1>
      <br></br>
      
      <p>
      La consultation de 1ere prise médicamenteuse est tarifée dans le tarif forfaitaire à l’IVG hors établissement de santé. Elle doit être cotée avec l’index FHV + FMV (50 + 87,92 euros). Cette cotation inclut l’éventuelle consultation facultative de 2ème prise médicamenteuse.  
      </p>

      <p>
      Sa tarification peut être faite électroniquement ou par format papier.   
Pour rappel, cette consultation est prise en charge à 100% avec exonération du ticket modérateur pour : 
      </p>
      <ul>
          <li>
              <p>
              Les jeunes filles mineures non émancipées sans consentement parental
              </p>
          </li>
          <li>
              <p>
              Les femmes bénéficiaires de la CMU complémentaire 
              </p>
          </li>
          <li>
              <p>
              Les femmes bénéficiaires de l’aide médicale de l’État (AME).
              </p>
          </li>
      </ul>


      <p>
      Par ailleurs, comme c’est le cas aujourd’hui, la jeune femme mineure bénéficie des conditions de facturation anonymes aux caisses de sécurité sociale, d’ores et déjà applicables, (<a target="_blank" rel="noreferrer noopener" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000006735222&cidTexte=LEGITEXT000006073189&dateTexte=20151016">article D. 132-3</a> du Code de la sécurité). 
      </p>
      <p>
      Les dispositions de la circulaire Cnam-TS 49/2003 du 24 mars 2003 s’appliquent : le médecin de ville ou la sage-femme utilise une feuille de soins papier et doit indiquer un NIR spécifique (2 55 55 55 +code caisse +030). La facturation électronique est exclue dans ce seul cas de figure.
      </p>

      {/* <div className="ConsultationContainer">
          <label>
        Consultation faite dans le cadre des dispositions du Covid valable
        jusqu’au 31 octobre 2020 : 
        <Button variant="secondary" onClick={()=> {affichageOuiCovid()}}>Oui</Button>
        <Button variant="secondary" >Non</Button>
      </label>
  <div>{currentOui}</div>
      <br></br>
          </div> */}
      

      <p>Lien guide IVG ministère :</p>
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
    Un exemplaire doit être remis à la patiente. 
    </p>
    <p>
    Toute mineure depuis le 1er janvier 2020 peut bénéficier d'une contraception gratuite. Quel que soit son âge, elle bénéficie d'une prise en charge complète par l'Assurance Maladie et sans avance de frais. 
    <a className="Bold" target="_blank" rel="noreferrer noopener" href="https://www.legifrance.gouv.fr/affichJO.do?idJO=JORFCONT000042266235">
    Journal officiel contraception mineure de moins de 15 ans :
    </a>
    </p>
    <p>
    Pour rappel toute femme mineure peut obtenir du médecin ou de la sage-femme la prescription d’un moyen contraceptif sans autorisation parentale. Le parcours contraceptif est prise en charge à 100% par l’assurance maladie et est protégé par le secret si la jeune femme mineure le demande. 
    </p>
    <ul>
    Le parcours comprend : 
        <li>
            <p>
            Une consultation annuelle au cours de laquelle sont prescrits des examens de biologie médicale en vue d’une contraception
            </p>
        </li>
        <li>
            <p>
            Une consultation de suivi, la première année d’accès à la contraception            </p>
        </li>
        <li>
            <p>
            Les actes liés à la pose, au changement ou au retrait d’un dispositif contraceptif
                
            </p>
        </li>
        <li>
            <p>
            Certains examens de biologie médicale (glycémie à jeun, cholestérol total, triglycérides) une fois par an si nécessaire
                
            </p>
        </li>
        <li>
            <p>
            Les contraceptifs remboursables.
                
            </p>
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