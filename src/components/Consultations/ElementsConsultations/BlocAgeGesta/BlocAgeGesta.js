import React , {useState,useEffect} from "react";

import {Button} from "react-bootstrap";




import "./BlocAgeGesta.css";


function BlocAgeGesta(props) {

  useEffect(() => {
    window.scrollTo(0,300);
 }, [])
  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const [ classBaseCard, setClassBaseCArd] =useState("BlocConsultationStyle");

  const [classActifCard,setClassActifCard] =useState("BlocConsultationStyleActiv");
 
  const [currentClassCard, setCurrentClassCard] =useState(classBaseCard);

  const [ currentVerrou, setCurrentVerrou] = useState("");

  const verrouTxt = () => {
    return (
        <div className="Red Verrou">
             <p>
            Dans le cadre de l’interruption volontaire de grossesse, votre réponse va à l’encontre des recommandations établies actuellement en vigueur en France.
            <br></br>
            <br></br>
            Il est nécessaire d’adresser votre patiente vers le centre de référence duquel dépend la patiente (à défaut aux urgences spécialisés le plus proche).
            <br></br>
            Le degré d’urgence est à établir selon les signes cliniques ou l’âge gestationnel estimé.
            </p>
        </div>
    )
};

const [txtVerrou, setTextverrou] = useState(
    () => verrouTxt()
);

const afficheverrou = () => {
  
  let txtAAfficher = txtVerrou;
  setCurrentVerrou(txtAAfficher);
};



  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  }

  const [ currentRep, setCurrentRep] =useState({
    titre : "Age gestationnel réel ou estimé (en semaine d’aménorrhée) : ",
        value : "",
        reponse : 0,
        identifiant : 1

      });


   

  const horsDelais = () => {
    return (
      <div>
        <p className="Red">
        Hors délais pour une IVG en France. Le
délai légal pour l’IVG chirurgical est actuellement de 14 semaines d’aménorrhée.
        </p>
      </div>

    )
  }

  /// age gestationel
  const [
    saisieUtilisateurNbSemaineSA,
    setSaisieUtilisateurNbSemaineSA,
  ] = useState(0);

  const handleChangeSA = (event) => {
    setSaisieUtilisateurNbSemaineSA(event.currentTarget.value);
  };

  /// Bloc nombre de semaines SA

  const recupSaisieUtilisateurNbSemaine = (event) => {
    event.preventDefault();
    let nb = saisieUtilisateurNbSemaineSA;
    if (nb>0&&nb < 7) {
      affichageMoinsDeSept();
      changeBtnClass();
      setCurrentVerrou("");

    } else if (nb == 7) {
      affichagePlusDeSeptMoinsDouze();
      changeBtnClass();
      setCurrentVerrou("");
    }else if (nb == 8) {
      affichagePlusDeSeptMoinsDouze();
      changeBtnClass();
      setCurrentVerrou("");
    }else if (nb == 9) {
      affichagePlusDeSeptMoinsDouze();
      changeBtnClass();
      setCurrentVerrou("");
    } else if (nb > 9 ) {
      afficheverrou();
      setCurrentClassBtt(classBouttonBase);
      seturrentCheckGesta("")

      

    } 


    let reponse = {
      titre: "Age gestationnel réel ou estimé (en semaine d’aménorrhée) : ",
      value: nb,
      reponse : 1,
      identifiant : 1

    };
    setCurrentRep(reponse);
   
 

    setSaisieUtilisateurNbSemaineSA(0);
  };
  const moinsDeSeptSemaines = () => {
    /// retourne le texte mois de 7 semaines si <7
    return (
      <div>
          <p>IVG médicamenteuse </p>
      </div>
    );
  };
  const [txtMoinsDeSeptSA, setTxtMoinsDeSeptSA] = useState(
    () => moinsDeSeptSemaines()
    /// state contenant la fonction retournant le texte moins de 7 semaines
  );


  const affichageMoinsDeSept = () => {
    /// gère laffichage du texte - de 7 semaines
    let txtAAfficher = txtMoinsDeSeptSA;
    seturrentCheckGesta(txtAAfficher);
  };

  ///

  const plusDeSeptMoinsDouzeSemaines = () => {
    /// retourne le texte plus de 7 semaines moins de 12 si >7 <12
    return (
      <div>
        <p>
        URGENCE
       </p>         
       
      </div>
    );
  };
  const [txtPlusDeSeptSAmoinsDouze, settxtPlusDeSeptSAmoinsDouze] = useState(
    () => plusDeSeptMoinsDouzeSemaines()
    /// state contenant la fonction retournant le texte plus de 7 semaines moins 12
  );

 

  const affichagePlusDeSeptMoinsDouze = () => {
    /// gère laffichage du texte + de 7 semaines -12
    let txtAAfficher = txtPlusDeSeptSAmoinsDouze;
    seturrentCheckGesta(txtAAfficher);

  };

  const plusDeDouzetSemaines = () => {
    /// retourne le texte mois de 7 semaines si >12
    return (
      <div>
          <p>Verrou à faire </p>
        
      </div>
    );
  };
  const [txtPlusDeDouzeSA, settxtPlusDeDouzeSA] = useState(
    () => plusDeDouzetSemaines()
    /// state contenant la fonction retournant le texte plus de 12 semaines
  );

 

  const [ currentCheckGesta , seturrentCheckGesta] = useState("");

  const affichagePlusDouze = () => {
    /// gère laffichage du texte + 12
    let txtAAfficher = txtPlusDeDouzeSA;
    seturrentCheckGesta(txtAAfficher);
  };
  

   




  return (
    <div className={currentClassCard}>
   <h2>Age gestationnel réel ou estimé (en semaine d’aménorrhée)</h2>
            {/* faire input comme nb paquet tabac pConsultation */}
            <input
            min="0"
        type="number"
        name="name"
        value={saisieUtilisateurNbSemaineSA}
        onChange={handleChangeSA}
      />
      <Button variant="danger" onClick={(e)=>{recupSaisieUtilisateurNbSemaine(e);}}>
        Valider
      </Button>
      <br></br>
      <div>{currentCheckGesta}</div>
      {currentVerrou}

      <Button variant="info" className="BouttonRetour" onClick={()=>{
        props.retour(props.keys);
             
            }}>Retour</Button>

      <Button variant="info" className={currentClassBtt}  onClick={()=>{
        setCurrentClassCard(classActifCard);

        props.ajoute(currentRep);
        setTimeout(() => {
          props.suite(props.keys);
 
        }, 501);
             
            }}>Suivant</Button>


       
           
            </div>
    
  );






  
 
}

export default BlocAgeGesta;