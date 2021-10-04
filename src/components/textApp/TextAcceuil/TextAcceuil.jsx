import React, {useState,useEffect} from "react";
import "./TextAcceuil.css";



function TextAcceuil(props) {

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
        Site créé à destination de tout professionnel de santé prenant en charge l’interruption volontaire de grossesse médicamenteuse hors établissement de santé.
        
        <br></br>

        
        Cet outil met à disposition des fiches d’information à destination des patientes et assure un suivi de l’acte. Les documents officiels sont disponibles selon les recommandations actuelles en France.
        
        <br></br>

        
        Aucune donnée personnelle n’est enregistrée, un résumé imprimable vous est proposé à la fin de la saisie de chaque consultation. 
        <br></br>

        
        L’IVG médicamenteuse : 5 consultations, 2 premières (« préalables ») pouvant être effectuées par un médecin ou sage femme ne pratiquant pas lui même l’acte.
        </p>
        <p>
        Le contenu de ce site ne se substitue pas à la responsabilité de décision et de prescription du praticien.
        </p>


        <p>
          L'interruption volontaire de grossesse est autorisé en France depuis
          la loi Veil du 17 Janvier 1975 , elle est gratuite et accessible à
          toute femme en France selon les délais légaux de la loi <a rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000222631&categorieLien=id"> 2001-588 du 4
          Juillet 2001</a>,<a rel="noreferrer noopener"
          target="_blank"
          href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000027221802&categorieLien=id"
          >Loi avortement du 25 mars 2013 </a>.
          <br></br>
          N’hésitez pas à nous contacter via contact.ivgclic@gmail.com.
         
        </p>

       
        
      </div>
        
    )

}


export default TextAcceuil;


