import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import ConsentForm from "@assets/pdf/FormConsentement.pdf";
import newPdfIcon from "@assets/images/PDFicon.svg";






import "./BlocConsentmentIVG.css";


function BlocConsentmentIVG(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])
  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const [ classBaseCard, setClassBaseCArd] =useState("BlocConsultationStyle");

  const [classActifCard,setClassActifCard] =useState("BlocConsultationStyleActiv");
 
  const [currentClassCard, setCurrentClassCard] =useState(classBaseCard);


  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  }

  const [ currentRep, setCurrentRep] =useState({
    titre : "Consentement à l’IVG signé : ",
        value : "",
        reponse : 0,
        identifiant : 1

      });
    
    const [ classIcon, setClassIcon] = useState("iconPDFNew");

    const [ hoverIcon, setHoverIcon] = useState("iconPDFNewHover");

    const [ globalClassIcon, setGlobalCassIcon] = useState(classIcon);

    const [ currentVerrou, setCurrentVerrou] = useState("");

    const verrouTxt = () => {
      return (
          <div className="Red Verrou">
              <p>
              Dans le cadre de l’interruption volontaire de grossesse, votre réponse va à l’encontre des recommandations établies actuellement en vigueur en France.
              <br></br>
              <br></br>
              Il est nécessaire, selon vos réponses, un ajustement et une reprise à la consultation précédente.           <br></br>
              Selon le temps estimer de la grossesse, il peut s’agir d’une urgence.<br></br>
              Votre centre de référence peut vous répondre afin d’établir une prise en charge dans les meilleurs conditions pour la patiente.
              </p>
          </div>
      )
  };
  
  const [txtVerrou, setTextverrou] = useState(
      () => verrouTxt()
  );
  
  const afficheverrou = () => {
    
    let txtAAfficher = txtVerrou;
    setCurrentVerrou(txtAAfficher);
  };
  


    


      const recupRadioGuide = (e) => {
        let reponse = {
          titre : "Consentement à l’IVG signé : ",
          value : e.target.value,
          reponse : 1,
          identifiant : 1

        };
        setCurrentRep(reponse);

      }
        
    

  return (
    <div className={currentClassCard}>
             <h2>Consentement à l’IVG signé</h2>
      <Form>
      <div key={`guide-radio`} className="mb-3" onChange={(e)=>{recupRadioGuide(e);}}>
      <Form.Check 
        type='radio'
        id={`guideOui`}
        label={`Oui`}
        value="Oui"
        name="guideIVG"
        onClick={()=>{setCurrentVerrou("");changeBtnClass();}}

      />

<Form.Check 
        type='radio'
        id={`guideNon`}
        label={`Non`}
        value="Non"
        name="guideIVG"
        onClick={()=>{afficheverrou();setCurrentClassBtt(classBouttonBase);}}

      />
      </div>
      </Form>

      {currentVerrou}



      <br></br>
      
      <br></br>
      <div className="docContainer">
      <p> 
      <a className="NewDocContainer" rel="noopener noreferrer"  href={ConsentForm} target="_blank">
      <input
        onMouseEnter={()=>{
          setGlobalCassIcon(hoverIcon);
          
        }}
        onMouseOut={()=>{
          setGlobalCassIcon(classIcon);
        }}
        className={globalClassIcon}
        type="image"
        src={newPdfIcon}
        alt="image pdf consentement IVG"
      />
        Formulaire de consentement
      </a>
          </p>

      </div>
      <Button variant="info" className="BouttonRetour" onClick={()=>{
        props.retour(props.keys);
             
            }}>Retour</Button>

      <Button variant="info" className={currentClassBtt}  onClick={()=>{
                               setCurrentClassCard(classActifCard);

                               props.ajoute(currentRep);
                               setTimeout(() => {
                                 props.suite(props.keys);
                        
                               }, 501);
             
            }}>Suivant</Button>



      </div>


    
  );






  
 
}

export default BlocConsentmentIVG;
