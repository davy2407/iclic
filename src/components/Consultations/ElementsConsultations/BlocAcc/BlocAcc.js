import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";





import "./BlocAcc.css";


function BlocAcc(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])
  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  };

    const [ currentRep, setCurrentRep] =useState({
        titre : "Personne accompagnante ",
        value : "",
        reponse : 0,
        identifiant : 1

      });
    


    const recupRadioAcc = (e) => {
        let reponse = {
          titre: "Accompagnant(e) : ",
          value: e.target.value,
          reponse : 1,
          identifiant : 1

        };
        setCurrentRep(reponse);

        
      }
    




  return (
    <div className="BlocConsultationStyle">
        <h2>
        Personne accompagnante
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
        props.ajoute(currentRep);
        props.suite(props.keys);
             
            }}>Suivant</Button>


           
            </div>
    
  );






  
 
}

export default BlocAcc;
