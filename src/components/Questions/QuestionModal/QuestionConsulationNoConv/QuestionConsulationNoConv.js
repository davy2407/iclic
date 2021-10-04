import React , {useState,useEffect} from "react";
import { Button } from "react-bootstrap";



import "./QuestionConsulationNoConv.css";


function QuestionConsulationNoConv(props) {
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
          <h3>Consultation préalables à l'ivg</h3>
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
          Attestation de compétence (obligatoire) + convention avec un centre agrée accorde l’IVG médicamenteuse hors établissement de santé.
          </p>
          <p>
          2 consultations préalables à l’IVG effectués par tous médecin ou sage-femme.
          </p>
          <p>
          Orientation de la patiente vers un(e) confrère qualifié(e) pour la prise du médicament.
          </p>
          <p>
          Tout médecin ou sage femme doit répondre à une demande d’IVG et « il restitue à
           la femme sa demande pour que celle-ci soit remise au médecin ou à la sage-femme
            choisis par elle et lui délivrent un certificat attestant qu'ils se sont conformés
             aux articles <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031930122/" target="_blank" rel="noreferrer noopener">L. 2212-3</a> et <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000018156675/2008-02-22/" target="_blank" rel="noreferrer noopener">L. 2212-5</a>.
          </p>
          <p>
          D’après l’article 18 du code de déontologie article R4127-18 « un médecin … ; … est toujours libre de s’y refuser et doit en informer l’intéressée dans les conditions et délais prévus par la loi » <a href="https://www.conseil-national.medecin.fr/code-deontologie/devoirs-generaux-medecins-art-2-31/article-18-ivg" target="_blank" rel="noreferrer noopener">voir lien</a>.
          </p>
          <p>
          Ce site n’enregistre aucune information personnelle, l’identité de la patiente et du praticien sont à compléter après impression des différents documents.
          </p>
            
            


            
      </div>
    
  );






  
 
}

export default QuestionConsulationNoConv;
