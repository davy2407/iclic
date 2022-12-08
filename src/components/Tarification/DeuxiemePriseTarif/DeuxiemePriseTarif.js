import React , {useState,useEffect,useRef} from "react";
import { Button, Form } from "react-bootstrap";
import FicheUnePage from "@components/FichesLiaisons/FicheUnePage";
import { useReactToPrint } from 'react-to-print';
import FicheConseil from "@assets/pdf/FicheConseilSurveillance.pdf";
import newPdfIcon from "@assets/images/PDFicon.svg";
import InfoPatiente from "@assets/pdf/FicheInfoPatiente.pdf";




import "./DeuxiemePriseTarif.css";


function DeuxiemePriseTarif(props) {


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


<p>
      Le forfait a été enregistré lors de la 1ère consultation de prise médicamenteuse, il ne doit pas être renouvelé lors de cette consultation.       </p>
      
      <p>
      La consultation de 2ème prise médicamenteuse est facultative et peut être
       réalisée au choix du médecin ou de la patiente. Elle est tarifée dans
        le tarif forfaitaire à l’IVG hors établissement de santé. 

      </p>

      <p>
      La  2ème prise médicamenteuse peut se faire au cabinet  du médecin ou au domicile de la patiente si  le medecin a remis les comprimés à la patiente lors du rendez vous precedent. 
      </p>
      <p>
      <a className="NewDocContainer" rel="noreferrer noopener"  href={FicheConseil} target="_blank">
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

      </p> 

      <br></br>
      
      
      
     
      

      
    

      

   
      <a className="Bold" rel="noreferrer noopener" href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf" target="_blank">
        https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf
      </a>
      
      <a className="Bold" rel="noreferrer noopener"
        href="https://questionsexualite.fr/choisir-sa-contraception/l-interruption-volontaire-de-grossesse/quelle-contraception-choisir-apres-une-ivg"
        target="_blank"
      >
        Lien choisirsacontraception.fr
      </a>


        
        <div style={{display:'none'}}>
        <FicheUnePage ref={componentRef} titre={props.onTestTitre} data={props.onElTarif}/>

        </div>
      <Button variant="danger" onClick={handlePrint}>Résumé consultation 2eme prise médicamenteuse</Button>
      <br></br>






      <p>
    Remettre à la patiente la fiche de liaison qui reprend toutes les étapes de l’IVG de la patiente.
    </p>
   

    <p>
    Obligation de consultation de contrôle afin de vérifier la bonne réussite de la méthode (J14-21). 
    </p>
    <p>
    La date de cette consultation est à remplir <span className="Red Bold">manuellement</span> sur le résumé.
    </p> 

    <p>
Assurez-vous que la patiente possède bien la prise de sang (βHCG quantitatif) à effectuer pour la consultation de contrôle.
</p>
<p> 
L’autotest urinaire peut également être utilisé pour juger le succès de l’IVG 
médicamenteuse. 
</p>

<p>

Celui-ci peut être réalisé à domicile combiné à un suivi téléphonique
    </p>

   

      </div>
    
  );






  
 
}

export default DeuxiemePriseTarif;