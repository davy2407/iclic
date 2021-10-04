import React , {useState,useEffect} from "react";
import { Button } from "react-bootstrap";



import "./QuestionConvention.css";


function QuestionConvention(props) {
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
          <h3>Vous avez signé une convention avec un centre de référence</h3>
            <p>
              <Button variant="danger" value="Oui" onClick={()=>{
                props.onFonction.consulationOui();
              }}>Oui</Button>
            </p>
            <p>
            <Button variant="danger" onClick={()=>{
              props.onFonction.conventionNOn();
            }} value="Non">Non</Button>
            </p>
            {/* <p className="ButtonRetour">
            <Button variant="light" value="Retour" onClick={()=>{
                props.onFonction.retour();
              }}>Retour</Button>
            </p> */}
            
         

      </div>
    
  );






  
 
}

export default QuestionConvention;
