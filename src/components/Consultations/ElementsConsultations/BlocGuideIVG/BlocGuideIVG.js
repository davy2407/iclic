import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import GuideIVG from "@assets/pdf/GuideIvgPatiente.pdf";
import newPdfIcon from "@assets/images/PDFicon.svg";






import "./BlocGuideIVG.css";


function BlocGuideIVG(props) {
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
    titre : "Dossier guide IVG remis ",
        value : "",
        reponse : 0
      });
    
    const [ classIcon, setClassIcon] = useState("iconPDFNew");

    const [ hoverIcon, setHoverIcon] = useState("iconPDFNewHover");

    const [ globalClassIcon, setGlobalCassIcon] = useState(classIcon);


    


      const recupRadioGuide = (e) => {
        let reponse = {
          titre : "Contexte de l’IVG évoqués :",
          value : e.target.value,
          reponse : 1
        };
        setCurrentRep(reponse);

      }
        
    

  return (
    <div className={currentClassCard}>
             <h2>Dossier guide IVG remis</h2>
      <Form>
      <div key={`guide-radio`} className="mb-3" onChange={(e)=>{recupRadioGuide(e);changeBtnClass();}}>
      <Form.Check 
        type='radio'
        id={`guideOui`}
        label={`Oui`}
        value="Oui"
        name="guideIVG"
      />

<Form.Check 
        type='radio'
        id={`guideNon`}
        label={`Non`}
        value="Non"
        name="guideIVG"
      />
      </div>
      </Form>


      <br></br>
      
      <br></br>
      <div className="docContainer">
      <p> 
      <a className="NewDocContainer" rel="noopener noreferrer"  href={GuideIVG} target="_blank">
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
      />
        PDF Guide IVG
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

export default BlocGuideIVG;
