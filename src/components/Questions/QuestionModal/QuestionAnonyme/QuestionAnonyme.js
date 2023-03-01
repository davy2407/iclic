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

            <p>
             L’anonymat doit désormais être proposé à TOUTES les femmes (mineure, majeure). La prise en charge à 100% par l’AMO ainsi que la pratique du tiers payant obligatoire et l’absence de décompte envoyé à l’assuré garantissent l’anonymat.
            </p>
            <p>
            Il n’est plus nécessaire d’utiliser un NIR anonyme lorsque le NIR réel peut être fiabilisé par un support VITALE. 
            </p>

            <p>
            Toutefois, dans le cas où la récupération du NIR réel ne peut être fiabilisé par un support de droit le professionnel de santé doit utiliser :
           <ul>
            <li>
            NIR fictif 2 55 55 55 + code de caisse + 030
            </li>
            <li>
            Date de naissance réelle ou à défaut 01/01/2014
              </li>
           </ul>
            </p>
            <p>
            SI dans tous les cas l’anonymat ne peut être assuré et que la patiente le souhaite, il est nécessaire de la rediriger vers un établissement de santé.
            </p>
         

      </div>
    
  );






  
 
}

export default QuestionAnonyme;
