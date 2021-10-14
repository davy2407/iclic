import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";





import "./BlocGrossesseCon.css";


function BlocGrossesseCon(props) {
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
  };

    const [ currentRep, setCurrentRep] =useState({
        titre : "Grossesse intra-utérine confirmée : ",
        value : "",
        reponse : 0
      });
    


    const recupRadioAcc = (e) => {
        let reponse = {
          titre: "Grossesse intra-utérine confirmée :",
          value: e.target.value,
          reponse : 1
        };
        setCurrentRep(reponse);

        
      }
    




  return (
    <div className={currentClassCard}>
        <h2>
        Grossesse intra-utérine confirmée
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

export default BlocGrossesseCon;