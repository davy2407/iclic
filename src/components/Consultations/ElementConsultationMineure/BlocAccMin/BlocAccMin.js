import React , {useState,useEffect} from "react";
import ConsentementMineur from "@assets/pdf/consentementMineure.pdf";
import newPdfIcon from "@assets/images/PDFicon.svg";

import {Form,Button} from "react-bootstrap";





import "./BlocAccMin.css";


function BlocAcc(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])
  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const [ classIcon, setClassIcon] = useState("iconPDFNew");

  const [ hoverIcon, setHoverIcon] = useState("iconPDFNewHover");
  
  const [ iconConsen, setIconConsen] = useState(classIcon);

  const [ classBaseCard, setClassBaseCArd] =useState("BlocConsultationStyle");

  const [classActifCard,setClassActifCard] =useState("BlocConsultationStyleActiv");
 
  const [currentClassCard, setCurrentClassCard] =useState(classBaseCard);

  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  };

    const [ currentRep, setCurrentRep] =useState({
        titre : "Personne accompagnante ",
        value : "",
        reponse : 0
      });
    


    const recupRadioAcc = (e) => {
        let reponse = {
          titre: "Accompagnant(e) : ",
          value: e.target.value,
          reponse : 1
        };
        setCurrentRep(reponse);

        
      }

      
  const [ currentVerrou, setCurrentVerrou] = useState("");

  const verrouTxt = () => {
    return (
        <div className="Red Verrou">
            <p>
            Dans le cadre de l’interruption volontaire de grossesse, votre réponse va à l’encontre des recommandations établies actuellement en vigueur en France.
            <br></br>
            <br></br>
            Il est nécessaire d’adresser votre patiente vers le centre de référence duquel dépend la patiente (à défaut aux urgences spécialisés le plus proche).
            <br></br>
            Le degré d’urgence est à établir selon les signes cliniques ou l’âge gestationnel estimé.
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

    




  return (
    <div className={currentClassCard}>
        <h2>
        Personne accompagnante majeure ou consentement parental obliagtoire
        </h2>


        <label>
      <Form>
      <div key={`acc-radio`} className="mb-3" onChange={(e)=>{recupRadioAcc(e);}}>
      <Form.Check 
        type='radio'
        id={`accOui`}
        label={`Oui`}
        value="Oui"
        name="accompagant"
        onClick={()=>{setCurrentVerrou("");changeBtnClass();}}

      />

<Form.Check 
        type='radio'
        id={`accNon`}
        label={`Non`}
        value="Non"
        name="accompagant"
        onClick={()=>{afficheverrou();setCurrentClassBtt(classBouttonBase);}}

      />
      </div>
      </Form>
      {currentVerrou}

      <p>
        <a className="NewDocContainer" rel="noreferrer noopener"  href={ConsentementMineur} target="_blank">
      <input
        alt="Image document consentement mineure"
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
        Formulaire de consentement pour patiente mineure
      </a>
        </p>
        
      </label>
      <Button variant="info" className="BouttonRetour" onClick={()=>{
        props.retour(props.keys);
             
            }}>Retour</Button>


      <Button variant="info" className={currentClassBtt} onClick={()=>{
                          setCurrentClassCard(classActifCard);

        props.ajoute(currentRep);
        setTimeout(() => {
          props.suite(props.keys);

        }, 501);
             
            }}>Suivant</Button>


           
            </div>
    
  );






  
 
}

export default BlocAcc;
