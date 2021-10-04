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

  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  }

  const [ currentRep, setCurrentRep] =useState({
    titre : "Age gestationnel (semaine d'aménorrhée) : ",
        value : "",
        reponse : 0
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
    if (nb < 7) {
      affichageMoinsDeSept();
    } else if (nb == 7 ) {
      affichagePlusDeSeptMoinsDouze();
    } else if (nb > 7 && nb <= 9) {
      affichagePlusDouze();

      

    } else if (nb >9 && nb <=14) {
      seturrentCheckGesta("IVG ce jour, si non habilité, adresser au centre de référence.");

      
    } else if (nb >=15) {
      seturrentCheckGesta(horsDelais);


      
    }

    let reponse = {
      titre: "Age gestationnel (semaine d'aménorrhée) : ",
      value: nb,
      reponse : 1
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
        IVG ce jour à votre cabinet, si non habilité, adresser au centre de référence.          </p>
        
       
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
          <p>IVG médicamenteuse et chirurgical possible en centre de référence seulement. </p>
        
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
    <div className="BlocConsultationStyle">
   <h2>Age gestationnel (semaine d'aménorrhée)</h2>
            {/* faire input comme nb paquet tabac pConsultation */}
            <input
            min="0"
        type="number"
        name="name"
        value={saisieUtilisateurNbSemaineSA}
        onChange={handleChangeSA}
      />
      <Button variant="danger" onClick={(e)=>{recupSaisieUtilisateurNbSemaine(e);changeBtnClass();}}>
        Valider
      </Button>
      <br></br>
      <div>{currentCheckGesta}</div>
      <Button variant="info" className="BouttonRetour" onClick={()=>{
        props.retour(props.keys);
             
            }}>Retour</Button>

      <Button variant="info" className={currentClassBtt}  onClick={()=>{
        props.ajoute(currentRep);
        props.suite(props.keys);
             
            }}>Suivant</Button>


       
           
            </div>
    
  );






  
 
}

export default BlocAgeGesta;