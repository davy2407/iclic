import React , {useState,useEffect,useRef} from "react";
import Certificat from "@assets/pdf/CertificatIVGMedecin.pdf";
import { Button, Form } from "react-bootstrap";
import FicheUnePage from "@components/FichesLiaisons/FicheUnePage";
import { useReactToPrint } from 'react-to-print';


import "./PremiereTarifMaj.css";


function PremiereTarifMaj(props) {


  useEffect(() => {
    window.scrollTo(0,0);
 }, [])
  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });







  const ouiCovid = ()=> {
    return (
      <div>
  
  
        <p>
        Les règles de facturation habituelle sont à observer (cotation : TCG, 25€). 
        </p>
        <p>
        Le professionnel remet les ordonnances nécessaires :<br></br>
        <ul>
          <li>
          l’échographie de datation.
          </li>
          <li>
          le dosage des Béta HCG + Rhésus sanguin. 
          </li>
          <br></br>
          Il transmet de plus le certificat de demande d’IVG.
        </ul>
        </p>
        <p>
        Si le professionnel ne pratique pas l’intervention, il se doit d’orienter sans délai vers les professionnels réalisant des IVG, et disponibles.
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
  



  




 
  
 

  return (
      <div  
            
            className="Consultation">
        



<h1>Tarification et Conclusion de consultation</h1>
      <br></br>
      <h2>Tarification</h2>

      <div>
            <p>Consultation faite dans le cadre des dispositions du Covid valable jusqu'à la fin de l'état d'urgence sanitaire « (téléconsultation) » :</p>
            <Button variant="danger" onClick={(e)=>{
            afficheCovid();}} value="Oui">Oui</Button>
            <br></br>
            <div>{currentOuiCovid}</div>
            </div>



            <p>
      La 1ère consultation préalable ou  1er contact médical :
ne fait pas partie du “ forfait  IVG hors établissement de santé”
tarif habituel de  consultation 
      </p>
      
      <br></br>
     
      <a rel="noreferrer noopener" href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf" target="_blank">
        https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf
      </a>
      
      <a rel="noreferrer noopener"
        href="https://www.choisirsacontraception.fr/?gclid=CjwKCAjwiaX8BRBZEiwAQQxGx09bqLm7t5_O6Yi_5xe9ZEVR9ePUqUSpruG5nRH7BkxAGpo3Mxb5thoCP7EQAvD_BwE"
        target="_blank"
      >
        Lien choisirsacontraception.fr
      </a>
      <a href="https://ivg.gouv.fr/ou-avorter.html" target="_blank" rel="noreferrer noopener" >Lien ouavorter.gouv</a>



      <br></br>
  <br></br>
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
        </Form>


        
        <div style={{display:'none'}}>
        <FicheUnePage ref={componentRef} data={props.onElTarif}  />

        </div>
      <Button variant="danger" onClick={handlePrint}>Imprimer Résumé Consultation</Button>
      <br></br>






        <p>
        Obligation légale et déontologique pour tout praticien  de remettre à la patiente une attestation de demande d’IVG.
          
La patiente dispose d’un délai de 48h entre la consultation psychosociale (si choisie) et la deuxième consultation préalable à l’IVG.
        </p>
        <p>
        La 2ème consultation préalable à l’IVG peut être effectuée par le professionnel de santé effectuant l’IVG ou non.
        </p>

          
         

      </div>
    
  );






  
 
}

export default PremiereTarifMaj;
