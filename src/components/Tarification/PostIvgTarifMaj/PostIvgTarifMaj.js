import React , {useState,useEffect,useRef} from "react";
import { Button } from "react-bootstrap";
import FicheUnePage from "@components/FichesLiaisons/FicheUnePage";
import { useReactToPrint } from 'react-to-print';
// import FicheHAS from "@assets/pdf/FicheDeLiaisonHAS.pdf";




import "./PostIvgTarifMaj.css";


function PostIvgTarifMaj(props) {


  useEffect(() => {
    window.scrollTo(0,0);
 }, [])
  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [ classIcon, setClassIcon] = useState("iconPDFNew");

const [ hoverIcon, setHoverIcon] = useState("iconPDFNewHover");

const [ iconConsen, setIconConsen] = useState(classIcon);







  




 
  
 

  return (
      <div  
            
            className="Consultation">
<h1>Fin de consultation</h1>

<h2>Tarification et conclusion de consultation</h2>
      <br></br>
      
      <p>
      La consultation post-IVG est tarifée dans le tarif forfaitaire à l’IVG hors établissement de santé.
      </p>
      <p>
       Elle doit être cotée avec l’index IC ou ICS (tarif de 25euros). Sauf si cotation complète de l’ensemble du forfait au moment de la première prise de médicament 
       </p>
       <p>
Sa tarification peut être faite électroniquement ou par format papier.  
<br></br>

</p>
<p>
Si une échographie de contrôle est réalisée au moment de l’examen, il conviendra de côter avec l’index IVE (30,24 euros).
      </p>
      <p>
      Pour rappel, cette consultation est prise en charge à 100% avec exonération du ticket modérateur pour toutes les femmes.
      </p>
      

     <br></br>
     
      
    
      <a className="Bold" rel="noreferrer noopener" href="https://ivg.gouv.fr/IMG/pdf/ivg_guide_complet.pdf" target="_blank">
        https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf
      </a>
      
      <a className="Bold" rel="noreferrer noopener"
        href="https://questionsexualite.fr/choisir-sa-contraception/l-interruption-volontaire-de-grossesse/quelle-contraception-choisir-apres-une-ivg"
        target="_blank"
      >
        Lien questionsexualite.fr
      </a>

        
        <div style={{display:'none'}}>
        <FicheUnePage ref={componentRef} titre={props.onTestTitre} data={props.onElTarif}/>

        </div>
      <Button variant="danger" onClick={handlePrint}>Imprimer Résumé consultation post-IVG médicamenteuse</Button>
      <br></br>


      <p className="Red">
  Il est obligatoire de transmettre la fiche de liaison selon des modalités de transmission préétablies avec votre centre de référence afin de suivre les règles préconisées par la Commission Nationale de l’Informatique et des Libertés (CNIL). 
Un exemplaire doit être remis à la patiente. 

  </p>
  <p>
  Il peut être confraternel de transmettre par courrier le résumé de la consultation afin de prévenir le médecin traitant si vous n’êtes pas celui-ci. 
  </p>
  {/* <a className="Bold" href={FicheHAS} rel="noopener noreferrer"  target="_blank">    
        Fiche de liaison HAS à télécharger     
     </a> */}

      </div>
    
  );






  
 
}

export default PostIvgTarifMaj;