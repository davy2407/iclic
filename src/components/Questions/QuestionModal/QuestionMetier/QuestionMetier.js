import React , {useState, useEffect} from "react";
import { Button } from "react-bootstrap";



import "./QuestionMetier.css";


function QuestionMetier(props) {

  const [animation, setAnimation] = useState(0);

  const toggle = props.toggle;
  
  useEffect(() => {
    renderAnimations()
 }, [toggle]);

 const renderAnimations = () => {
    return toggle ? setAnimation(1) : setAnimation(0)
 };


 

  return (
      <div animation={animation} className="QuestionMetierStyle">
          <h1>Vous êtes professionnel de santé</h1>
            <p>
              <Button variant="danger" onClick={()=>{
                props.onFonction.convention();
              }} value="Médecin gynécologue/Chirurgien obstéstrique">Médecin gynécologue/Chirurgien obstéstrique</Button>
            </p>
            <p>
              <Button variant="danger" value="Médecin généraliste" onClick={()=>{
                props.onFonction.demandeAttestation()
              }}>Médecin généraliste</Button>
            </p>
            <p>
              <Button variant="danger" value="Sage-femme" onClick={()=>{
                props.onFonction.demandeAttestation()
              }}>Sage-femme</Button>
              
            </p>

            {/* <p className="ButtonRetour">
            <Button variant="light" value="Retour" onClick={()=>{
                props.onFonction.retour();
              }}>Retour</Button>
            </p> */}
          

      </div>
    
  );






  
 
}

export default QuestionMetier;
