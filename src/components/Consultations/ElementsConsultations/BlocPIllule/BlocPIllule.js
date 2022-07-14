import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";





import "./BlocPIllule.css";


function BlocPIllule(props) {
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
        titre : "Pilule du lendemain : ",
        value : "",
        reponse : 0,
        identifiant : 1,

      });
    


    const recupRadioPil = (e) => {
        let reponse = {
          titre: "Pilule du lendemain : ",
          value: e.target.value,
          reponse : 1,
          identifiant : 1,


        };
        setCurrentRep(reponse);

        
      }
    




  return (
    <div className={currentClassCard}>
        <h2>
        Une pilule du lendemain a-t-elle été prise par la patiente ?
        </h2>


        <label>
      <Form>
      <div key={`acc-radio`} className="mb-3" onChange={(e)=>{recupRadioPil(e);changeBtnClass();}}>
      <Form.Check 
        type='radio'
        id={`accOui`}
        label={`Oui`}
        value="Oui"
        name="pillule"
      />

<Form.Check 
        type='radio'
        id={`accNon`}
        label={`Non`}
        value="Non"
        name="pillule"
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

export default BlocPIllule;
