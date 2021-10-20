import React , {useState,useEffect} from "react";
import { Button } from "react-bootstrap";



import "./QuestionConsultationConv.css";


function QuestionConsultationConv(props) {
  const [animation, setAnimation] = useState(0);

  const toggle = props.toggle;
  
  useEffect(() => {
    renderAnimations()
 }, [toggle]);

 const renderAnimations = () => {
    return toggle ? setAnimation(1) : setAnimation(0)
 };

 

  return (
      <div animation={animation} className="QuestionConsulationStyle">
          <h3>Attestation et convention signées</h3>
          <p>
          J’atteste sur l’honneur être formé pour pratiquer l’interruption volontaire de
           grossesse conformément à la loi<a href="https://www.legifrance.gouv.fr/" target="_blank" rel="noreferrer noopener"> L2212</a> du Code de la Santé Publique ainsi que
            d’avoir signé une convention avec un centre de rattachement.
          </p>
            <p>
              <Button variant="danger" id="1" onClick={(e)=>{
                props.onFonction.recupId(e);
                props.onFonction.questionMajMin();
              }} value="Première consultation préalable à l'ivg/Premier contact médical">Première consultation préalable à l'ivg/Premier contact médical</Button>
            </p>
            <p>
            <Button variant="danger" id="2" onClick={(e)=>{
              props.onFonction.recupId(e);
              props.onFonction.questionMajMin();
              }} value="Deuxième consultation préalable à l'ivg/Recueil de consentement">Deuxième consultation préalable à l'ivg/Recueil de consentement</Button>
            </p>
            <p>
                <Button variant="danger" id="3" onClick={(e)=>{
                  props.onFonction.recupId(e);
                props.onFonction.questionMajMin();
              }} value="Premier temps de consultation pour prise médicamenteuse">Premier temps de consultation pour prise médicamenteuse</Button>
            </p>
            <p>
                <Button variant="danger" id="4" onClick={(e)=>{
                  props.onFonction.recupId(e);
                props.onFonction.questionMajMin();
              }} value="Deuxième temps de consultation pour prise médicamenteuse (facultative)">Deuxième temps de consultation pour prise médicamenteuse (facultative)</Button>
            </p>

            <p>
                <Button variant="danger" id="5" onClick={(e)=>{
                  props.onFonction.recupId(e);
                props.onFonction.questionMajMin();
              }} value="Troisième temps de consultation: consultation de suivi">Troisième temps de consultation: consultation de suivi</Button>
            </p>


            <p>
            Les mesures dérogatoires en date d’avril 2021 autorise :</p>
            <ul>
                <li>
                La prise en charge de l’IVG médicamenteuse en ville jusqu’à 9 semaines d’aménorrhée. 
                </li>
                <li>
                Autorisation à la téléconsultation pour les 2 consultations préalables. 
                </li>
            </ul>
            <p>

            Les différents changements sont intégrés et notifiés lors de l’avancement sur le site. Pour en savoir plus, merci de vous rendre sur l’onglet « Covid ». 
            </p>

            
         

      </div>
    
  );






  
 
}

export default QuestionConsultationConv;
