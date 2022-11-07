import React , {useState,useEffect} from "react";

import {Button} from "react-bootstrap";




import "./BlocAgeGestaPriseMedi.css";


function BlocAgeGestaPriseMedi(props) {

  useEffect(() => {
    window.scrollTo(0,300);
 }, [])
  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const [ classBaseCard, setClassBaseCArd] =useState("BlocConsultationStyle");

  const [classActifCard,setClassActifCard] =useState("BlocConsultationStyleActiv");
 
  const [currentClassCard, setCurrentClassCard] =useState(classBaseCard);


  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  }

  const [ currentRep, setCurrentRep] =useState({
    titre : "Age gestationnel réel ou estimé (en semaine d’aménorrhée) : ",
        value : "",
        reponse : 0,
        identifiant : 1

      });




  /// age gestationel
  const [
    saisieUtilisateurNbSemaineSA,
    setSaisieUtilisateurNbSemaineSA,
  ] = useState(0);

  const handleChangeSA = (event) => {
    setSaisieUtilisateurNbSemaineSA(event.currentTarget.value);
  };

  const [jourSa, setJourSa] = useState(0);

  const handleChangJour = (event) => {
    setJourSa(event.currentTarget.value);
  };



  /// Bloc nombre de semaines SA

  const recupSaisieUtilisateurNbSemaine = (event) => {
    event.preventDefault();
    let nb = saisieUtilisateurNbSemaineSA;
    let nbJour = jourSa;

    if (nb> 0 && nb <7 && nbJour>=0) {
      affichageMoinsDeSept();
      changeBtnClass();
    } else if (nb == 7 && nbJour==0 ) {
      affichageMoinsDeSept();
      changeBtnClass();
    } else if (nb == 7 && nbJour>0 ) {
      affichagePlusDeSeptMoinsDouze();
      changeBtnClass();    }
    
    else if (nb == 8 && nbJour==0 ) {
      affichagePlusDeSeptMoinsDouze();
      changeBtnClass();
    }  else if (nb == 8 && nbJour>0 ) {
      affichagePlusDouze();
      changeBtnClass();    }
    
    else if (nb == 9&&nbJour==0 ) {
      affichagePlusDouze();
      changeBtnClass();
    } else if (nb == 9&&nbJour>0) {
        afficheverrou();
        setCurrentClassBtt(classBouttonBase);
        
    } else if (nb > 9&&nbJour>=0) {
      afficheverrou();
      setCurrentClassBtt(classBouttonBase);
      
  }
    
    else if (nb == 0) {
        setCurrentClassBtt(classBouttonBase);

    }



    let reponse = {
      titre: "Age gestationnel réel ou estimé (en semaine d’aménorrhée) : ",
      value: nb,
      reponse : 1,
      identifiant : 1,
      titreBis : " + jour : ",
      valueBis : nbJour

    };
    setCurrentRep(reponse);
   
 

  };


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
    seturrentCheckGesta(txtAAfficher);
  };


  const moinsDeSeptSemaines = () => {
    /// retourne le texte mois de 7 semaines si <7
    return (
      <div>
          <p>IVG médicamenteuse
            <br></br>
            <ul>
              <li>
              Mifépristone, 600 mg par voie orale (Mifégyne® 3 comprimés à 200 mg, en une
prise) suivi 36 à 48h après de 400 μg misoprostol, par voie orale (soit Gymiso® 400 μg
: 2 comprimés à 200 μg, en une prise ; soit MisoOne® 400 μg : 1 comprimé à 400 μg).
              </li>
              <li>
              Mifépristone, 200mg par voie orale (Mifégyne® 1 comprimé à 200mg, en une prise)
suivi 24-48h plus tard de 400 μg misoprostol, par voie transmuqueuse ou sub-
linguale (soit Gymiso® 400 μg : 2 comprimés à 200 μg, en une prise ; soit MisoOne®
400 μg : 1 comprimé à 400 μg).
              </li>
            </ul>
            
             </p>
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
        
            <ul>
              <li>
              « Une prise de 200mg par voie orale (Mifégyne® 1 comprimé à 200mg, en une prise)
suivie, 24 à 48 h plus tard, de 800 μg de misoprostol (soit Gymiso® 400 μg : 4
comprimés à 200 μg, en une prise ; soit MisoOne® 400 μg : 2 comprimé à 400 μg) en
une seule prise, par voie transmuqueuse orale ou sublinguale (hors AMM).
              </li>
              <li>
              Il n’est pas recommandé́ d’utiliser la voie vaginale.
              </li>
            </ul>
        
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
          <p>IVG ce jour à votre cabinet, si non habilité, adresser au centre de référence.


          <br></br>
            <ul>
            <li>
              « Une prise de 200mg par voie orale (Mifégyne® 1 comprimé à 200mg, en une prise)
suivie, 24 à 48 h plus tard, de 800 μg de misoprostol (soit Gymiso® 400 μg : 4
comprimés à 200 μg, en une prise ; soit MisoOne® 400 μg : 2 comprimé à 400 μg) en
une seule prise, par voie transmuqueuse orale ou sublinguale (hors AMM).
              </li>
              <li>
              Il n’est pas recommandé́ d’utiliser la voie vaginale.
              </li>
            </ul>
          </p>
        
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
            <h3>Semaines</h3>
            <input
            min={0}
        type="number"
        name="name"
        value={saisieUtilisateurNbSemaineSA}
        onChange={handleChangeSA}
      />
      <h4>Jour</h4>
      <input
            min={0}
            max={6}
        type="number"
        name="nameJ"
        value={jourSa}
        onChange={handleChangJour}
      />
      <Button variant="danger" onClick={(e)=>{recupSaisieUtilisateurNbSemaine(e);}}>
        Valider
      </Button>
      <br></br>
      <div>{currentCheckGesta}</div>
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

export default BlocAgeGestaPriseMedi;