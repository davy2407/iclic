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
    




  return (
    <div className="BlocConsultationStyle">
        <h2>
        Personne accompagnante majeure ou consentement parental obliagtoire
        </h2>


        <label>
      <Form>
      <div key={`acc-radio`} className="mb-3" onChange={(e)=>{recupRadioAcc(e);changeBtnClass();}}>
      <Form.Check 
        type='radio'
        id={`accOui`}
        label={`Oui`}
        value="Oui"
        name="accompagant"
      />

<Form.Check 
        type='radio'
        id={`accNon`}
        label={`Non`}
        value="Non"
        name="accompagant"
      />
      </div>
      </Form>
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
        props.ajoute(currentRep);
        props.suite(props.keys);
             
            }}>Suivant</Button>


           
            </div>
    
  );






  
 
}

export default BlocAcc;
