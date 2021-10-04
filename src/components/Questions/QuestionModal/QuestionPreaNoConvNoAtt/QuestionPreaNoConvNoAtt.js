import React , {useState,useEffect} from "react";
import { Button } from "react-bootstrap";



import "./QuestionPreaNoConvNoAtt.css";


function QuestionPreaNoConvNoAtt(props) {
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
          <h3>Consultation préalable à l'IVG</h3>
          <p>
              <Button variant="danger" value="Oui" onClick={()=>{
                props.onFonction.afficheConsultationNoConv();
              }} >Oui</Button>
            </p>
            <p>
            <Button variant="danger" value="Non" onClick={()=>{
              props.onFonction.afficheTest();
            }}>Non</Button>
            </p>
          <p>
          Les consultations préalables regroupent 2 type de consultations possible par tous médecins ou sages-femmes.<br></br>
            La « première demande d'IVG »  fait partie de ces consultations. Plus d'information par la suite.

          </p>
            
            
         

      </div>
    
  );






  
 
}

export default QuestionPreaNoConvNoAtt;
