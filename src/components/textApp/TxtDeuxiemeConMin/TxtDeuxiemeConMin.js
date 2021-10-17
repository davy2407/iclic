import React, {useState,useEffect} from "react";
import "./TxtDeuxiemeConMin.css";




function TxtDeuxiemeConMin(props) {

//   const [animation, setAnimation] = useState(0);
//   const toggle = props.toggle;
//   useEffect(() => {
//     renderNotification()
// }, [toggle]);

// const renderNotification = () => {
//     return toggle ? setAnimation(1) : null
// };

    return (
        
            <div 
            // animation={animation}
            // onAnimationEnd={() => {setAnimation(0);}}
            className="TextStart">
 <p>
          Dans le cas particulier de l’IVG, l’article <a rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000031930097&cidTexte=LEGITEXT000006072665&dateTexte=20160128">L. 2212-7</a> Lien n°19 du code de la
           santé publique dispose : « Si la femme est mineure non émancipée,
            le consentement de l’un des titulaires de l’autorité parentale ou,
             le cas échéant, du représentant légal est recueilli. Ce consentement
              est joint à la demande qu’elle présente au médecin en dehors de la
               présence de toute autre personne. 
          </p>

          <p>
          Si la femme mineure non émancipée désire garder le secret,
           le médecin doit s’efforcer, dans l’intérêt de celle-ci,
            d’obtenir son consentement pour que le ou les titulaires
             de l’autorité parentale ou, le cas échéant, le représentant
              légal soient consultés ou doit vérifier que cette démarche
               a été faite lors de l’entretien mentionné à l’article
                L 2212-4. Si la mineure ne veut pas effectuer cette démarche,
                 ou si le consentement n’est pas obtenu, l’interruption
                  volontaire de grossesse ainsi que les actes médicaux
                   et les soins qui lui sont liés peuvent être pratiqués
                    à la demande de l’intéressée, présentée dans les conditions prévues au 1er alinéa. Dans ce cas, la mineure se fait accompagner dans sa démarche par la personne majeure de son choix 

          </p>

          <p>
          Une jeune fille mineure non émancipée doit donner au médecin son consentement pour avorter sans que ses parents, son tuteur ou toute autre personne ne soient présents afin qu'elle n'agisse pas sous la contrainte.

          </p>

       
        
      </div>
        
    )

}


export default TxtDeuxiemeConMin;