import React , {useState,useEffect} from "react";

import {Button} from "react-bootstrap";





import "./BlocDosage.css";


function BlocDosage(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])
  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const [ classBaseCard, setClassBaseCArd] =useState("BlocConsultationStyle");

  const [classActifCard,setClassActifCard] =useState("BlocConsultationStyleActiv");
 
  const [currentClassCard, setCurrentClassCard] =useState(classBaseCard);

  const [ currentRep, setCurrentRep] =useState({
    titre : "Dosage ß-HCG : ",
    value : "",
    reponse : 0,
    identifiant : 1

  });

  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  };

  const [dosageHCG, setDosageHCG] = useState();
  const handleDosageHCG = event => {
      setDosageHCG(event.currentTarget.value);
    };

    const handleSubmitDosageHCG = event => {
     

      let reponse = {
        titre : "Dosage ß-HCG : ",
        value : event.currentTarget.value,
        reponse : 1,
        identifiant : 1

      };

     

     

      
      setCurrentRep(reponse);
       
    
        setDosageHCG();
    };

    const submitHandler = (e) => {
      e.preventDefault();
  }
  
  
  ///// background consulte
  

   
    


   
    




  return (
    <div className={currentClassCard}>
       <h2>Dosage ß-HCG</h2>
        <form onSubmit={(e)=>{
        
        submitHandler(e);
      
     }} >
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
            }}>Confirmer</Button>
            
        </form>
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

export default BlocDosage;