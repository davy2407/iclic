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
            Les mesures dérogatoires relatives à l’IVG médicamenteuse instaurées lors du précédent Etat d’urgence sanitaire sont rétablies face à la deuxième vague par arrêté du 7 novembre 2020.<br></br>
            A savoir :</p>
            <ul>
                <li>
                La consultation de prise de médicament par téléconsultation (avec délivrance en pharmacie d’officine des médicaments nécessaires).

                </li>
                <li>
                Prolonger les délais d’IVG médicamenteuse de 7 à 9 semaines d’aménorrhées.

                </li>
                <li>
                Consultation de contrôle (14-21 jours après) par téléconsultation.

                </li>
            </ul>
            <p>

            Le 2ème temps de consultation pour prise médicamenteuse n’est pas mentionné et reste facultatif. Ces consultations sont prises en charge à 100% par l’assurance maladie.

            </p>

            <p>
            Les différents changements sont intégrés et notifiés lors de l’avancement sur le site. Pour en savoir plus, fermer la page et voir la page Covid.
            </p>
            
         

      </div>
    
  );






  
 
}

export default QuestionConsultationConv;
