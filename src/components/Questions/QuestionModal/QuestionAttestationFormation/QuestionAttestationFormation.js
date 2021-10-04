import React , {useState,useEffect} from "react";
import { Button } from "react-bootstrap";





import "./QuestionAttestationFormation.css";


function QuestionAttestationFormation(props) {
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
          <h3>Vous êtes en possession d'une attestation justificative de formation à l'IVG</h3>

          <p>
              <Button variant="danger" value="Oui" onClick={()=> {
                  props.onFonction.convention();
              }}>Oui</Button>
            </p>
            <p>
            <Button variant="danger" value="Non" onClick={()=>{
                props.onFonction.conventionNOn();
                props.onFonction.changeReponseFin();
            }}>Non</Button>
            </p>
            
         

      </div>
    
  );






  
 
}

export default QuestionAttestationFormation;
