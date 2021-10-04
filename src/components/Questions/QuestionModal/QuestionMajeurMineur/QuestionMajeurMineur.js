import React , {useState,useEffect} from "react";
import { Button } from "react-bootstrap";



import "./QuestionMajeurMineur.css";


function QuestionMajeurMineur(props) {
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
          <h3>La patiente est : </h3>
            <p>
              <Button variant="danger" id="1" onClick={(e)=>{
                  props.onFonction.recupId(e)
                  props.onFonction.questionAno();
              }} value="Majeure" >Majeure</Button>
            </p>
            <p>
            <Button variant="danger" id="2" onClick={(e)=>{
                  props.onFonction.recupId(e)
                  props.onFonction.questionAno();
              }} value="Mineure">Mineure</Button>
            </p>
            
         

      </div>
    
  );






  
 
}

export default QuestionMajeurMineur;
