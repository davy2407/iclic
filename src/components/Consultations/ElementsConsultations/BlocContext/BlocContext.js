import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";




import "./BlocContext.css";


function BlocContext(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])

  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  }

  const [ currentRep, setCurrentRep] =useState({
    titre : "Contexte biopsychosocial favorable",
        value : "",
        reponse : 0
      });


      const recupRadioContexte = (e) => {
        let reponse = {
          titre: "Contexte Biopsychosocial favorable : ",
          value: e.target.value,
          reponse : 1
        };
        setCurrentRep(reponse);

      };


      const warningContexte = () => {
        return (
          <p className="Red">
            Consultation psycho-sociale à proposer ! 
      
      
          </p>
        )
      };
      
      
      const [ blocWarningContext, setBlocWarningContexte] = useState(()=>warningContexte());
      
      const afficheWarningContexte = () => {
        setCurrentWarningContexte(blocWarningContext);
      }
      
      
      
      
      const [currentWarningContexte, setCurrentWarningContexte] = useState("");
      
      
      
      
    




  return (
    <div className="BlocConsultationStyle">
      <h2>Contexte biopsychosocial favorable :</h2>


        <Form>
      <div key={`psyCho-radio`} className="mb-3" onChange={(e)=>{recupRadioContexte(e);changeBtnClass();}}>
      <Form.Check 
        type='radio'
        id={`psyChoOui`}
        label={`Oui`}
        value="Oui"
        name="contexte"
      />

<Form.Check 
        type='radio'
        id={`psyChoNon`}
        label={`Non`}
        value="Non"
        name="contexte"
        onClick={afficheWarningContexte}
      />
      </div>
      </Form>
    <div>{currentWarningContexte}</div>
    <Button variant="info" className="BouttonRetour" onClick={()=>{
        props.retour(props.keys);
             
            }}>Retour</Button>

    <Button variant="info" className={currentClassBtt} onClick={()=>{
        props.ajoute(currentRep);
        props.suite(props.keys);
             
            }}>Suivant</Button>






      





    
      <br></br>

    



           
            </div>
    
  );






  
 
}

export default BlocContext;
