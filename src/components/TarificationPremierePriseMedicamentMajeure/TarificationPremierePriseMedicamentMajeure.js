import React, {useState, useRef } from 'react'; 
import { useReactToPrint } from 'react-to-print';
import  Button  from "react-bootstrap/Button";
import ResumePremierePriseMedicamentMajeure from '@components/ResumePremierePriseMedicamentMajeure';
import "./TarificationPremierePriseMedicamentMajeure.css";

import FicheCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import Certificat from "@assets/docx/CertificatIVGMedecin.docx";
import InfoPatiente from "@assets/docx/InfoPatiente.docx";
import LiaisonHAS from "@assets/pdf/FicheDeLiaisonHAS.pdf";
import FicheConseil from "@assets/docx/FicheConseilSurveillance.docx";


function TarificationPremierePriseMedicamentMajeure(props) {
  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  ///

  const ouiCovidBloc = () => {
    return (
      <div >
       
      <p>
      Téléconsultation possible. 
      </p><p>
Condition : Outils informatique fiable pour les documents nécessaires à la pratique de l’IVG dans le cadre réglementaire.
      </p>
      <p>
      Le forfait médicament (FMV) n’est pas à facturer si vous choisissez le circuit qui permet à la patiente d’aller chercher directement les traitements abortifs à la pharmacie. 
      </p>
      <p>
Dans cette hypothèse, ordonnance comportant : le nom, les dosages, la posologie et la voie d’administration des médicaments. 
      </p>
      <p>
      Transmission à l’officine choisie par la patiente via ; messagerie sécurisée de santé ; dossier patient si téléconsultation intégrant cette fonctionnalité. 
</p>
<p>
La voie postale est possible. Attention au délai. 
      </p>
      <p>
      La consultation de suivi sera donc établie par téléconsultation.
      </p>
      <p>
       Lors de l’envoi à l’officine de l’ordonnance, il peut être ajouté un autotest
        urinaire BhCG, celui-ci est alors prise en charge par le laboratoire par
         l’intermédiaire d’un accord avec l’ANCIC et le CNGOF
         <ul>
           <li>
           <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000042106233&categorieLien=id">LegiFrance</a>

           </li>
           <li>
           <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://www.ameli.fr/medecin/actualites/covid-19-fin-des-mesures-derogatoires-pour-livg-medicamenteuse">ameli.fr</a>

           </li>
           <li>
           <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://syngof.fr/wp-content/uploads/2020/04/covid-19_-_medecins_-_ivg.pdf">SYNGOF PDF</a>

           </li>
         </ul>
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
      <h1>Facturation et résumé majeure : </h1>
      <br></br>
      
      <p>
      La consultation de 1ere prise médicamenteuse est tarifée dans le
       tarif forfaitaire à l’IVG hors établissement de santé.</p>
       <p> Elle doit
        être cotée avec l’index FHV + FMV (50 + 87,92 euros).
        </p>
        <p> Cette cotation
         inclut l’éventuelle consultation facultative prise en charge à 100% avec exonération du
          ticket modérateur  
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
    Il est <span className="Red Bold">obligatoire</span> de transmettre la fiche de liaison selon des modalités de
     transmission préétabli avec votre centre de référence afin de suivre les règles
      préconisées par la Commission Nationale de l’Informatique et des Libertés (CNIL). 
    <sapn className="Red Bold">Un exemplaire doit être remis à la patiente.</sapn> 
    </p>
    <a className="Bold" target="_blank" href={LiaisonHAS}>Fiche de liaison HAS à télécharger</a>

    </div>
  );
}

export default TarificationPremierePriseMedicamentMajeure;