import React , {useState,useEffect,useRef} from "react";
import { Button, Form } from "react-bootstrap";
import FicheUnePage from "@components/FichesLiaisons/FicheUnePage";
import { useReactToPrint } from 'react-to-print';
import FormulaireCon from "@assets/pdf/FormConsentement.pdf";
import newPdfIcon from "@assets/images/PDFicon.svg";
import InfoPatiente from "@assets/pdf/FicheInfoPatiente.pdf";



import "./DeuxiemeTarifMaj.css";


function DeuxiemeTarifMaj(props) {


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
      La consultation de recueil de consentement (deuxième consultation préalable à l’IVG), est comprise dans le tarif forfaitaire à l’IVG hors établissement de santé. 
      </p>

      <p>
      Cotée IC ou ICS 25 euros.  
Sa tarification peut être faite électroniquement ou par format papier.  
<br></br>
      </p>
      
      

      <p>
      Le consentement doit être téléchargé et signé par la patiente. 
      </p>

      <p> <a className="NewDocContainer" rel="noreferrer noopener"  href={FormulaireCon} target="_blank">
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
        Formulaire Consentement IVG à remplir
      </a>          </p>




      <p>
        Copie pour : 
      </p>
      <p>
      <ol>
        <li>patiente après signature.</li>
        <li>médecin ou sage femme</li>
        <li>adressée au centre d’orthogenie referent</li>
      </ol>

      </p>
      



      
    

      

 
      <a className="Bold" rel="noreferrer noopener" href="https://ivg.gouv.fr/IMG/pdf/ivg_guide_complet.pdf" target="_blank">
        https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf
      </a>
      
      <a className="Bold" rel="noreferrer noopener"
        href="https://questionsexualite.fr/choisir-sa-contraception/l-interruption-volontaire-de-grossesse/quelle-contraception-choisir-apres-une-ivg"
        target="_blank"
      >
        Lien questionsexualite/choisir-sa-contraception.fr
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
        <FicheUnePage ref={componentRef} titre={props.onTestTitre} data={props.onElTarif}/>

        </div>
      <Button variant="danger" onClick={handlePrint}>Résumé de 2ème consultation PDF</Button>
      <br></br>






      <p>
    SI  vous n’êtes pas le professionnel de santé effectuant l’IVG, adresser la patiente à un professionnel de santé pouvant effectuer l’acte
      <ul>
        <li>
        <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://www.ivglesadresses.org/">
          https://www.ivglesadresses.org/
          </a>
        </li>
        <li>
        <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://ivg.gouv.fr/les-centres-de-planification.html">
           Centre de planification :  https://ivg.gouv.fr/les-centres-de-planification.html
               </a>
          </li>
          
        
        
        </ul>
          
    </p>

   <p>
   Pour rappel à la patiente, les documents nécessaires pour le bon déroulement de l’IVG sont :   </p>
   <ul>
       <li>Certificat de 1ère consultation</li>
       <li>Consentement de l’IVG signé</li>
       <li>Résumé des 2 consultations préalables</li>
       <li>Échographie de datation</li>
       <li>Résultat de prise de sang (incluant groupe sanguin et BHCG quantitatif) + prescription
d’un dosage des BHCG quantitatif pour <span className="Red">le jour de la consultation post IVG</span> ou d’un
autotest urinaire.</li>
   </ul>
   <p>Les centres de planification peuvent vous renseigner et vous orientez pour toutes questions concernant l’IVG directement dans votre département. </p>
          
         

      </div>
    
  );






  
 
}

export default DeuxiemeTarifMaj;