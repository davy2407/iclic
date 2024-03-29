import React, { useRef, useEffect, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button, Form } from "react-bootstrap";
import ResumePremiereConsultationMineureANA from '@components/ResumePremiereConsultationMineureANA';
import "./TarifPremiereMineureANA.css";


import Certificat from "@assets/pdf/CertificatIVGMedecin.pdf";
import ConsentementMineur from "@assets/pdf/consentementMineure.pdf";




function TarifPremiereMineureANA(props) {

  useEffect(() => {
    window.scrollTo(0,0);
 }, [])
  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  ///

  ///

  const [couleurBouttonBase, setCouleurBouttonBase] = useState("TestBTNBAse"); 

  const [couleurBouttonSel, setCouleurBouttonSel] = useState("TestBTNSel");



  const [btnOuiViolenceBase, setBtnOuiViolenceBase] = useState("TestBTNBAse");

  const [btnNonViolenceBase, setBtnNonViolenceBase] = useState("TestBTNBAse");





 const changeCouleurBoutonViolence = (e) => {
    
    
    
  
    if (e.target.className==couleurBouttonSel) {
      e.target.className=couleurBouttonBase;
      
    }
    else {
      e.target.className=couleurBouttonSel;

    }



 }

 const ouiCovid = ()=> {
  return (
    <div>

      <p>
      Le professionnel remet les ordonnances nécessaires :<br></br>
      <ul>
        <li>
        l’échographie de datation.
        </li>
        <li>
        le dosage des Béta HCG + Rhésus sanguin. 
        </li>
      </ul>
      <br></br>
      Il transmet de plus le certificat de demande d’IVG.
      </p>
      <p>
      Si le professionnel ne pratique pas l’intervention, il se doit d’orienter sans délai vers les professionnels réalisant des IVG et disponibles.
      </p>
      <p>
      Toutes les consultations à l’IVG sont actuellement possibles en téléconsultation depuis l’arrêter du 7 novembre 2020. 
      </p>











      

    </div>
  )
};

const [ covidTxt, setCovidTxt] = useState(()=>ouiCovid());


const [ currentOuiCovid, setCurrentOuiCovid] = useState("");


const afficheCovid =() => {
  let affiche = covidTxt;
  setCurrentOuiCovid(affiche);
}




  ///////////////////////////////////


 
  return (
    <div className="Tarification">
      <h1>Tarification et Conclusion de consultation</h1>
      <br></br>
      <div className="ConsultationContainer">
      <p>Consultation faite par téléconsultation :</p>
            <Button  className={btnOuiViolenceBase}  variant="danger" onClick={(e)=>{
            afficheCovid();
            changeCouleurBoutonViolence(e);}} value="Oui">Oui</Button>
            <br></br>
            <div>{currentOuiCovid}</div>
            </div>




      <br></br>
      
      <p>
      L’IVG est prise en charge à 100% dans le cadre d’un tarif forfaitaire avec dispense totale d’avance de frais pour toutes les patientes 
      </p>
     
      
      <p>
      La jeune femme mineure bénéficie des conditions de facturation anonymes aux caisses
       de sécurité sociale
        (<a rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000006735222&cidTexte=LEGITEXT000006073189&dateTexte=20151016">article D. 132-3</a> du Code de la Sécurité Sociale 32). 
      </p>
      <p>
      Circulaire Cnam-TS 49/2003 du 24 mars 2003  : le médecin de ville ou la sage-femme utilise une feuille de soins papier et doit indiquer un NIR spécifique (2 55 55 55 +code caisse +030).
      <br></br>Ne pas utiliser la carte vitale de la patiente mineur!
      </p>
      
      <br></br>
      <a href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf" target="_blank" rel="noreferrer noopener">
        https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf
      </a>
      
      <a rel="noreferrer noopener"
        href="https://www.choisirsacontraception.fr/?gclid=CjwKCAjwiaX8BRBZEiwAQQxGx09bqLm7t5_O6Yi_5xe9ZEVR9ePUqUSpruG5nRH7BkxAGpo3Mxb5thoCP7EQAvD_BwE"
        target="_blank"
      >
        Lien choisirsacontraception.fr
      </a>
      <a rel="noreferrer noopener" target="_blank" href="https://ivg.gouv.fr/ou-avorter.html">Lien ou-avorter.gouv</a>
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
  <p className="Red">
  Un délai de 48h est nécessaire entre la consultation psychosociale et la deuxième consultation préalable à l’IVG.

  </p>


  

      <Form>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Certificat de 1ère consultation remise à la patiente :"
          />
        </Form.Group>
        <p>
        <a className="Bold" rel="noreferrer noopener" href={Certificat} target="_blank">
      Certificat de 1ère consultation pour IVG, document à compléter
        </a>

        </p>

        <p>
        <a className="Bold" href={ConsentementMineur} target="_blank ">Formulaire de consentement pour patiente mineure.</a>

        </p>
        


        </Form>

        
        <br></br>
        <p>
          Il est confraternel de faire suivre le résumé et de la remettre en
          main de la patiente.
        </p>
        
        <p>
          La 2ème consultation préalable à l’IVG peut être effectuée par le
          professionnel de santé effectuant l’IVG ou non.
        </p>
        <br></br>
        <br></br>
        
        
        
     
      <div>
        <div style={{display:'none'}}>
        <ResumePremiereConsultationMineureANA ref={componentRef} data={props.onData}  />

        </div>
      <Button variant="danger" onClick={handlePrint}>Imprimer Résumé Consultation</Button>
      <br></br>
      
    </div>
    </div>
  );
}

export default TarifPremiereMineureANA;