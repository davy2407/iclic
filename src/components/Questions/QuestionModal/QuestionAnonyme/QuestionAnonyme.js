import React , {useState,useEffect} from "react";
import { Button } from "react-bootstrap";



import "./QuestionAnonyme.css";


function QuestionAnonyme(props) {
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
              <Button variant="danger" id="1" value="Majeure" onClick={(e)=>{
                props.onFonction.recupId(e);
                props.onFonction.selection(e,props.onIdCons,props.onIdMaj);
              }} >Non-Anonyme</Button>
            </p>
            <p>
            <Button variant="danger" id="2" value="Mineure" onClick={(e)=>{
                props.onFonction.recupId(e);
                props.onFonction.selection(e,props.onIdCons,props.onIdMaj)
              }}>Anonyme</Button>
            </p>
            
         

      </div>
    
  );






  
 
}

export default QuestionAnonyme;
