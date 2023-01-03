import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";




import "./BlocDecouverte.css";


function BlocDecouverte(props) {

  useEffect(() => {
    window.scrollTo(0,300);
 }, [])
  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const [ classBaseCard, setClassBaseCArd] =useState("BlocConsultationStyle");

  const [classActifCard,setClassActifCard] =useState("BlocConsultationStyleActiv");
 
  const [currentClassCard, setCurrentClassCard] =useState(classBaseCard);

  const [dosageHCG, setDosageHCG] = useState();

  const [ currentRep, setCurrentRep] =useState({
    titre : "Mode de découverte de la grossesse : ",
        value : "",
        reponse : 0
      });

      const [ currentBisRep, setCurrentBisRep] =useState({
        titre : "Mode de découverte de la grossesse : ",
            value : "",
            titreBis : "",
            valueBis : "",
            reponse : 0,
            identifiant : 2

          });


          const recupRadioMode = (e) => {
            let reponse = {
              titre : "Mode de découverte de la grossesse :",
              value : e.target.value,
              reponse : 1
            };
          //   if (e.target.value=="Test Sanguin") {
          //     setCurrentBisRep(reponse);
          //     setCurrentClassBtt(classBouttonBase);
    
    
          // }
        //   else if (e.target.value=="Échographie") {
        //     setCurrentBisRep(reponse);
        //     setCurrentClassBtt(classBouttonBase);
    
    
        // }
        // else {
          setCurrentRep(reponse);
          changeBtnClass();
          setCurrentOui("");
          
          
      }
    
          


  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  }



  const handleDosageHCG = event => {
    let rep = event.currentTarget.value
    setDosageHCG(rep);
    console.log(event.currentTarget.value);
    console.log(rep);
  };

  const handleSubmitDosageHCG = val => {
     

    let reponse = {
      titre : "Mode de découverte de la grossesse :Test Sanguin ; Dosage ß-HCG : ",
      value : val,
      reponse : 1,
      identifiant : 1

    };

   

   

    
    setCurrentRep(reponse);
     
  
      setDosageHCG();
  };


  
  

  const submitHandler = (e) => {
    e.preventDefault();
}
    

    


//////////////////////////////////////////////////


  
const ouiTstSanguin = () => {
  return (
      <div>
          <form onSubmit={(e)=>{
        
        submitHandler(e);
      
     }}>
            <input
            
            maxLength="7"
                value={dosageHCG}
                onChange={handleDosageHCG}
                type="text"
                placeholder="dosage ß-HCG"
             
            />
            <Button   value={dosageHCG} variant="danger" onClick={(e)=> {
              handleSubmitDosageHCG(e);
              changeBtnClass();
              console.log(e.target.value);
            }}>Confirmer</Button>
            
        </form>
      </div>
  )
}

const [afficheSang, setAfficheOUI] = useState(()=>ouiTstSanguin());


const [currentOui, setCurrentOui] = useState("");

const afficheSanguin = () => {
  let txtAAfficher = afficheSang;
  setCurrentOui(txtAAfficher);

}










   




  return (
    <div className={currentClassCard}>
      <h2>Mode de découverte de la grossesse </h2>
      <br></br>
      <Form>
      <div key={`uri-radio`} className="mb-3" >
      <Form.Check 
        type='radio'
        id={`uriTest`}
        label={`Test Urinaire`}
        value="Test Urinaire"
        name="mode"
        onClick={(e)=>{recupRadioMode(e);}}
      />

<Form.Check 
        type='radio'
        id={`sangTest`}
        label={`Test Sanguin`}
        value="Test Sanguin"
        name="mode"
        onClick={(e)=>{recupRadioMode(e);}}
      />
      <Form.Check 
        type='radio'
        id={`echoRe`}
        label={`Échographie`}
        value="Échographie"
        name="mode"
        onClick={(e)=>{recupRadioMode(e);}}

      />
      <Form.Check 
        type='radio'
        id={`CliRe`}
        label={`Clinique`}
        value="Clinique"
        name="mode"
        onClick={(e)=>{recupRadioMode(e);}}

      />
      </div>
      </Form>


      <div>{currentOui}</div>


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

export default BlocDecouverte;
