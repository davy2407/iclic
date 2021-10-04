import React , {useState,useEffect} from "react";
import ConventionType from "@assets/pdf/Convention-Réglementaire-medecin_SF_CS-1.pdf";




import "./NoConvNoConsultation.css";


function NoConvNoConsultation(props) {
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
          <h3>Centre rattachement</h3>
            <p>
            Les consultations préalables regroupent 2 type de consultations possible par tous médecins ou sages-femmes.<br></br>

La « première demande d'IVG »  fait partie de ces consultations. Plus d'information par la suite.
            </p>

            <p>
        Il est obligatoire selon <a target="_blank" href="https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000006171542&cidTexte=LEGITEXT000006072665." rel="noreferrer noopener"> l’article L2212-2 et L2212-9</a> de justifier d’une
         convention signée entre le praticien et un établissement de santé
          public ou privée pour la/les consultation(s) IVG de prise des médicaments.
          Cette convention est obligatoire pour prescrire les médicaments nécessaire à la
           réalisation
           d’une interruption volontaire de grossesse selon
           <a
           rel="noreferrer noopener" 
           target="_blank"
           href="https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000006171542&cidTexte=LEGITEXT000006072665">
            l’article R2212-16 </a>. 
        </p>

        <p>
        Les centres de références (CHU, Centre Hospitalier Régional, clinique), le planning familial, le conseil de l’ordre des médecins de votre département peuvent vous renseigner.
        </p>

        <p>
          <a target="_blank" rel="noreferrer noopener"  href={ConventionType}>
            Convention type à télécharger  
          </a>
        </p>
            
         

      </div>
    
  );






  
 
}

export default NoConvNoConsultation;
