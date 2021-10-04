import React , {useState,useEffect} from "react";




import "./NoConsultationNoAttInfo.css";


function NoConsultationNoAttInfo(props) {
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
          <h3>Info Formation</h3>
          <p>
          Les consultations préalables regroupent 2 type de consultations possible par tous médecins ou sages-femmes.
          </p>
          <p>
          La « première demande d'IVG »  fait partie de ces consultations. Plus d'information par la suite.
          </p>


          <p>
        Selon <a rel="noreferrer noopener"
        target="_blank"
        href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000006911489&cidTexte=LEGITEXT000006072665&dateTexte=20030527"
        > l’Article R2212-11</a> , il est nécessaire d’avoir une attestation de compétence afin de pratiquer les interruptions de grossesse par voie médicamenteuse. Cette compétence est acquise par une formation universitaire pour les médecins et les sages-femmes. Elle est reconnue lors des études universitaires en justifiant d’une qualification ou d’une pratique régulière.
         L’attestation de formation est délivrée par le directeur de l’établissement
          hospitalier après avis du chef de service en charge des IVG médicamenteuses. 
        </p>
        <p>
        Des formations continues pour les praticiens libéraux proposent une formation
         qualifiante pour la pratique de l’IVG médicamenteuse hors établissement..
        </p>
        <p>
        Les centres de référence (CHU, Centre Hospitalier Régional, clinique),
         le planning familial, le conseil de l’ordre des médecins de votre département
          peuvent vous renseigner.
        </p>
        <p>
          <a rel="noreferrer noopener" target="_blank" href="http://revho.fr/">Lien site REVHO</a>
        </p>
        <p>
          <a rel="noreferrer noopener" target="_blank" href="https://www.sftg.eu/formations/liste-formations/833-ivg-medicamenteuse.html">Lien SFTG</a>
        </p>
        <p>
          <a rel="noreferrer noopener" target="_blank" href="https://www.ogdpc.fr/organismes">Lien OGPDC</a>
        </p>
            
            
         

      </div>
    
  );






  
 
}

export default NoConsultationNoAttInfo;