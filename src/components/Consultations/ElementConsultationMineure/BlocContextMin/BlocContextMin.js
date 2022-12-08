import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";




import "./BlocContextMin.css"; 


function BlocContextMin(props) {
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
      
      
      
      const [ currentVerrou, setCurrentVerrou] = useState("");

      const verrouTxt = () => {
        return (
            <div className="Red Verrou">
                <p>
                Prise en charge hospitalière recommandée ! 
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
      <h2>Contexte biopsychosocial favorable :</h2>


        <Form>
      <div key={`psyCho-radio`} className="mb-3" >
      <Form.Check 
        type='radio'
        id={`psyChoOui`}
        label={`Oui`}
        value="Oui"
        name="contexte"
        onClick={(e)=>{setCurrentVerrou("");recupRadioContexte(e);changeBtnClass();}}
      />

<Form.Check 
        type='radio'
        id={`psyChoNon`}
        label={`Non`}
        value="Non"
        name="contexte"
        onClick={()=>{console.log("test");afficheverrou();setCurrentClassBtt(classBouttonBase);}}
      />
      </div>
      </Form>

      {currentVerrou}

    <div>{currentWarningContexte}</div>
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






      





    
      <br></br>

    



           
            </div>
    
  );






  
 
}

export default BlocContextMin;
