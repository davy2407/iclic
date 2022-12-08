import React , {useState,useEffect,useRef} from "react";
import { Button } from "react-bootstrap";
import FicheDeuxPages from "@components/FichesLiaisons/FicheDeuxPages";
import { useReactToPrint } from 'react-to-print';
import FicheHAS from "@assets/pdf/FicheDeLiaisonHAS.pdf";
import InfoPatiente from "@assets/pdf/FicheInfoPatiente.pdf";
import FicheConseilSurveillance from "@assets/pdf/FicheConseilSurveillance.pdf";
import newPdfIcon from "@assets/images/PDFicon.svg";






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
      La consultation de 1ere prise médicamenteuse est tarifée dans le
       tarif forfaitaire à l’IVG hors établissement de santé.</p>
       <p> Elle doit
        être cotée avec l’index FHV + FMV (50 + 87,92 euros).
        <br></br>
    
        </p>
        <p> Cette cotation
         inclut l’éventuelle consultation facultative prise en charge à 100% avec exonération du
          ticket modérateur  
      </p>

     
      
    
    
      

 
      <a className="Bold" rel="noreferrer noopener" href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf" target="_blank">
        https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf
      </a>
     
      <a className="Bold" rel="noreferrer noopener"
        href="https://questionsexualite.fr/choisir-sa-contraception/l-interruption-volontaire-de-grossesse/quelle-contraception-choisir-apres-une-ivg"
        target="_blank"
      >
        Lien choisirsacontraception.fr
      </a>
      <br></br>
      <br></br>
      
  
      <a className="NewDocContainer" rel="noreferrer noopener"  href={FicheConseilSurveillance} target="_blank">
      <input
        alt="Image document fiche conseil"
        className={iconConsen}
        onMouseEnter={()=>{
          setIconConsen(hoverIcon);
          
        }}
        onMouseOut={()=>{
          setIconConsen(classIcon);
        }}
        type="image"
        src={newPdfIcon}
      />
  Fiche information et conseil de surveillance à télécharger
      </a>

      <a className="NewDocContainer" rel="noreferrer noopener"  href={InfoPatiente} target="_blank">
      <input
        alt="Image document consentement"
        className={iconConsen}
        onMouseEnter={()=>{
          setIconConsen(hoverIcon);
          
        }}
        onMouseOut={()=>{
          setIconConsen(classIcon);
        }}
        type="image"
        src={newPdfIcon}
      />
        Fiche info patient traitement
      </a> 

        
        <div style={{display:'none'}}>
        <FicheDeuxPages ref={componentRef} titre={props.onTestTitre} data={props.onElDoubleTarif}/>

        </div>
      <Button variant="danger" onClick={handlePrint}>Imprimer résumé de consultation/fiche de liaison</Button>
      <br></br>


      <p>
    Il est <span className="Red Bold">obligatoire</span> de transmettre la fiche de liaison selon des modalités de
     transmission préétabli avec votre centre de référence afin de suivre les règles
      préconisées par la Commission Nationale de l’Informatique et des Libertés (CNIL). 
    <sapn className="Red Bold"> Un exemplaire doit être remis à la patiente.</sapn> 
    </p>
<a className="Bold" href={FicheHAS} rel="noopener noreferrer"  target="_blank">    
 Fiche de liaison « type » HAS.    
     </a>

      </div>
    
  );


 
}

export default PremierePriseTarifMaj;