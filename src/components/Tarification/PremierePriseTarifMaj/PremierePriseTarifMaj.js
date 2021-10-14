import React , {useState,useEffect,useRef} from "react";
import { Button } from "react-bootstrap";
import FicheDeuxPages from "@components/FichesLiaisons/FicheDeuxPages";
import { useReactToPrint } from 'react-to-print';
import FicheHAS from "@assets/pdf/FicheDeLiaisonHAS.pdf";
import FicheConseil from "@assets/pdf/FicheConseilSurveillance.pdf";
import FicheUnePage from "@components/FichesLiaisons/FicheUnePage";





import "./PremierePriseTarifMaj.css";


function PremierePriseTarifMaj(props) {


  useEffect(() => {
    window.scrollTo(0,0);
 }, [])
  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

 


  return (
      <div  
            
            className="Consultation">

<h1>Facturation et résumé majeure</h1>
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
      
  
      <a className="Bold" rel="noreferrer noopener" target="_blank" href={FicheConseil}>Fiche information et conseil de surveillance à télécharger</a>


        
        <div style={{display:'none'}}>
        <FicheDeuxPages ref={componentRef} data={props.onElDoubleTarif}/>

        </div>
      <Button variant="danger" onClick={handlePrint}>Imprimer Résumé consultation post-IVG médicamenteuse</Button>
      <br></br>


      <p>
    Il est <span className="Red Bold">obligatoire</span> de transmettre la fiche de liaison selon des modalités de
     transmission préétabli avec votre centre de référence afin de suivre les règles
      préconisées par la Commission Nationale de l’Informatique et des Libertés (CNIL). 
    <sapn className="Red Bold"> Un exemplaire doit être remis à la patiente.</sapn> 
    </p>
<a className="Bold" href={FicheHAS} rel="noopener noreferrer"  target="_blank">    
        Fiche de liaison HAS à télécharger     
     </a>

      </div>
    
  );


 
}

export default PremierePriseTarifMaj;