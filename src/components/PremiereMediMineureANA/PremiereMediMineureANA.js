
import React, { useState } from "react";


import { Button, Form } from "react-bootstrap";


import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";

function PremiereMediMineureANA(props) {
  ///Bloc fonctionnel

  const [globalStateFin, setGlobalStateFin] = useState([]);

  const afficheStateFin = () => {
    let liste = [];
    liste.push(currentCovid);
    liste.push(currentEcho);
    liste.push(currentgest);
    liste.push(currentConssent);
    liste.push(currentAttestation);
    liste.push(currentSang);
    liste.push(currentDosage);
    liste.push(currentGroupe);
    liste.push(currentAcc);
    
    let noReponse = [];
    for (let index = 0; index < liste.length; index++) {
      
      if (liste[index].reponse==0) {
        noReponse.push(liste[index].titre)
        
      }
      
      
    }
    setStateNoReponse(noReponse);
    if (noReponse.length>0) {

      /// affiche bloc no reponse
      afficheNoRep(noReponse);
      
    }
    else if (noReponse.length==0) {

      /// reponse ok affiche bouton tarif
      afficheTarif();
      
    }


    props.onRecup(liste);
  };

  //////////////////////////////////////

  //// current state 

  const [currentEcho, setcurrentEcho] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [ currentgest, setCurrentGest] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [ currentConssent, setCurrentConssent] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [ currentAttestation, setCurrentAttestation] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [currentSang, setCurrentSang] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [currentDosage, setCurrentDosage] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [ currentGroupe, setCurrentGroupe] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [ currentAcc, setCurrentAcc] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [ currentCovid, setcurrentCovid] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });






  ////////////// current reponseOUTarif

  const [ currentReponseTarif, setCurrentReponseTarif] = useState("")

  //////////////////////////////////// tarification

  const afficheTarif = () => {
    setCurrentReponseTarif(blocTarif)
  };

  const tarifFinal = () => {
    return (
      <div className="TarifiContainer">
      <Button variant="danger" onClick={props.onSuite}>
        Suite
      </Button>
      </div>
    )
  };

  const [blocTarif, setBlocTarif] = useState(()=>tarifFinal());


  //////////////////////////////////////////////////////

  /////// bloc no reponse
  const afficheNoRep = () => {
    setCurrentReponseTarif(pasDeReponseBloc)
  };

  const [ stateNoReponse, setStateNoReponse] = useState([]);
  const pasDeReponse = () => {
    return (
      <div>
        <h4 className="Red">Vous n'avez pas répondu à toutes les questions </h4>
        

      </div>
    )
  }


  const [pasDeReponseBloc, setPasDeReponseBloc] = useState(()=>pasDeReponse())




  /////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////

  const [
    saisieUtilisateurNbSemaineSA,
    setSaisieUtilisateurNbSemaineSA,
  ] = useState(0);

  const handleChange = (event) => {
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
    } else if (nb > 7) {
      affichagePlusDouze();
    }
    let reponse = {
      titre: "Echographie de datation/Age gestationnel(SA) : ",
      value: nb,
      reponse : 1
    };
    setCurrentGest(reponse);
   
 

    setSaisieUtilisateurNbSemaineSA(0);
  };
  const moinsDeSeptSemaines = () => {
    /// retourne le texte mois de 7 semaines si <7
    return (
      <div>
        <p>IVG médicamenteuse</p>
      </div>
    );
  };
  const [txtMoinsDeSeptSA, setTxtMoinsDeSeptSA] = useState(
    () => moinsDeSeptSemaines()
    /// state contenant la fonction retournant le texte moins de 7 semaines
  );

  const [currentInfoNbSAmoinsSept, setCurrentInfoNbSAmoinsSept] = useState(
    /// texte vide affichage de base
    ""
  );

  const affichageMoinsDeSept = () => {
    /// gère laffichage du texte - de 7 semaines
    let txtAEnlever = currentInfoNbSAmoinsSept;
    let txtAAfficher = txtMoinsDeSeptSA;
    setCurrentInfoNbSAmoinsSept(txtAAfficher);
    setcurrentInfoNbSAplusDouze("");
    setcurrentInfoNbSAplusSeptMoinsDouze("");
  };

  ///

  const plusDeSeptMoinsDouzeSemaines = () => {
    /// retourne le texte plus de 7 semaines moins de 12 si >7 <12
    return (
      <div>
        <p>
        IVG ce jour à votre cabinet, si non habilité, adresser au centre de référence.
        </p>
        
      
        <br></br>
      </div>
    );
  };
  const [txtPlusDeSeptSAmoinsDouze, settxtPlusDeSeptSAmoinsDouze] = useState(
    () => plusDeSeptMoinsDouzeSemaines()
    /// state contenant la fonction retournant le texte plus de 7 semaines moins 12
  );

  const [
    currentInfoNbSAplusSeptMoinsDouze,
    setcurrentInfoNbSAplusSeptMoinsDouze,
  ] = useState(
    /// texte vide affichage de base
    ""
  );

  const affichagePlusDeSeptMoinsDouze = () => {
    /// gère laffichage du texte + de 7 semaines -12
    let txtAEnlever = currentInfoNbSAplusSeptMoinsDouze;
    let txtAAfficher = txtPlusDeSeptSAmoinsDouze;
    setcurrentInfoNbSAplusSeptMoinsDouze(txtAAfficher);
   setcurrentInfoNbSAplusDouze("");
   setCurrentInfoNbSAmoinsSept("");
  };

  const plusDeDouzetSemaines = () => {
    /// retourne le texte mois de 7 semaines si >12
    return (
      <div>
        <p> IVG médicamenteuse et chirurgical possible mais en centre de référence seulement. </p>
        <br></br>
        <h1 className="Verrou1">VERROU : </h1>
        <br></br>
        <p className="Verrou1">
          Dans le cadre de l’interruption volontaire de grossesse, votre réponse
          va à l’encontre des recommandations établies actuellement en vigueur
          en France.
        </p>
        <p className="Verrou1">
          Il est nécessaire d’adresser votre patiente vers le centre de
          référence duquel dépend la patiente (à défaut aux urgences spécialisés
          le plus proche). Le degré d’urgence est à établir selon les signes
          cliniques ou l’âge gestationnel estimé.
        </p>
        <br></br>
        <br></br>
        <a href="#">Informations et orientation de la patiente.</a>
        {/* /// liens à finir */}
        <br></br>
        <a href="#">Retour vers la page d’accueil.</a>
        <br></br>
      </div>
    );
  };
  const [txtPlusDeDouzeSA, settxtPlusDeDouzeSA] = useState(
    () => plusDeDouzetSemaines()
    /// state contenant la fonction retournant le texte plus de 12 semaines
  );

  const [currentInfoNbSAplusDouze, setcurrentInfoNbSAplusDouze] = useState(
    /// texte vide affichage de base
    ""
  );

  const affichagePlusDouze = () => {
    /// gère laffichage du texte + 12
    let txtAEnlever = currentInfoNbSAplusDouze;
    let txtAAfficher = txtPlusDeDouzeSA;
    setcurrentInfoNbSAplusDouze(txtAAfficher);
    setcurrentInfoNbSAplusSeptMoinsDouze("");
    setCurrentInfoNbSAmoinsSept("");
  };

  /// Bloc verrou2

  const verrouDeux = () => {
    /// retourne le texte verrou 2
    return (
      <div>
        <h1 className="Verrou1">VERROU :</h1>
        <br></br>
        <p className="Verrou1">
          Dans le cadre de l’interruption volontaire de grossesse, votre réponse
          va à l’encontre des recommandations établies actuellement en vigueur
          en France.
        </p>
        <p className="Verrou1">
          Il est nécessaire, selon vos réponses, un ajustement et une reprise à
          la consultation précédente.
        </p>
        <p className="Verrou1">
          Selon le temps estimer de la grossesse, il peut s’agir d’une urgence.
        </p>
        <p className="Verrou1">
          Votre centre de référence peut vous répondre afin d’établir une prise
          en charge dans les meilleurs conditions pour la patiente.
        </p>
        <br></br>
        <br></br>
        <a href="#">Informations et orientation de la patiente.</a>
        {/* /// liens à finir */}
        <br></br>
        <a href="#">Retour vers la page d’accueil.</a>
        <br></br>
      </div>
    );
  };
  const [txtVerrouDeux, settxtVerrouDeux] = useState(
    () => verrouDeux()
    /// state contenant la fonction retournant le texte plus de 12 semaines
  );

  const [currentInfoVerrouDeux, setcurrentInfoVerrouDeux] = useState(
    /// texte vide affichage de base
    ""
  );

  const affichageVerrouDeux = () => {
    /// gère laffichage du texte + de 7 semaines -12
    let txtAEnlever = currentInfoVerrouDeux;
    let txtAAfficher = txtVerrouDeux;
    setcurrentInfoVerrouDeux(txtAAfficher);
    settxtVerrouDeux(txtAEnlever);
  };

  const clicVerrouDeuxaffichage = (e) => {
    e.preventDefault();
    affichageVerrouDeux();
  };

  /// Attestation consultation psychosocial

  const recupAttestation = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Consultation psychosociale :",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentAttestation(reponse);
    
  };

  const blocTxtPsy = ()=> {
    return (
      <div className="BulleInfo">
        <p>
        L’attestation est obligatoire avec un délai de 48h pour les jeunes femmes mineurs, anonyme ou non. 
        </p>
      </div>
    )
  }

  const [txtPsy, setTxtPsy] = useState(()=>blocTxtPsy());

  const [currentInfoPsy, setCurrentInfoPsy] = useState("");

  const affichageTxtPsy = () => {
    let txtAEnlever = currentInfoPsy;
    let txtAAfficher = txtPsy;
    setCurrentInfoPsy(txtAAfficher);
    setTxtPsy(txtAEnlever);
  };

  const [logoAffichePsy, setLogoAffichePsy] = useState(LightOff);

  const [logoNonAffichePsy, setLogoNonAffichePsy] = useState(LightOn);

  const changementCouleurSVGPsy = () => {
    let currentLampe = logoAffichePsy;
    let currentCache = logoNonAffichePsy;
    setLogoNonAffichePsy(currentLampe);
    setLogoAffichePsy(currentCache);
    affichageTxtPsy();
  };

  const siOuiConsultationPsy = () => {
    /// retourne le questionnaire si consultation psycho
    return (
      <div>
        <h4>attestation :</h4>
        <br></br>
        <Button variant="secondary">Oui</Button>
        <Button variant="secondary">Non</Button>
        <br></br>
      </div>
    );
  };
  const [txtConsultationPsyCho, settxtConsultationPsyCho] = useState(
    () => siOuiConsultationPsy()
    /// state contenant la fonction retournant le questionnaire si oui consultation psy
  );

  const [
    currentConsultationAttestation,
    setcurrentConsultationAttestation,
  ] = useState(
    /// texte vide affichage de base
    ""
  );

  const affichageConsultationAttestation = () => {
    /// gère laffichage du questionnaire attestation
    let txtAEnlever = currentConsultationAttestation;
    let txtAAfficher = txtConsultationPsyCho;
    setcurrentConsultationAttestation(txtAAfficher);
    settxtConsultationPsyCho(txtAEnlever);
  };

  const clicOuiConsultation = (e) => {
    e.preventDefault();
    affichageConsultationAttestation();
  };
  //////////////////////////////////////////////////////

  //////// Consentement

  const recupConsentement = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Consentement à l’IVG : ",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentConssent(reponse);
    
  };

  


  //////////////////////////////////////////////////////

  /// Bloc prise de sang

  const recupSang = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Prise de sang effectuée : ",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentSang(reponse);
    
  };

  const priseDeSang = () => {
    return (
      <div className="BulleInfo">
        <p>(Groupe sanguin 2 déterminations, ßHCG quantitatif)</p>
        <p>
        Injection d’Immunoglobulines anti-D nécessaire en cas de rhésus négatif et de rhésus positif ou inconnue chez le partenaire, avant toute IVG ou dans les 72h suivant tout saignement. 
        </p>
      </div>
    );
  };

  const [txtPriseDeSang, setTxtPriseDeSang] = useState(() => priseDeSang());

  const [currentInfoPriseDesang, setCurrentInfoPriseDesang] = useState("");

  const affichageTxtPriseDeSang = () => {
    let txtAEnlever = currentInfoPriseDesang;
    let txtAAfficher = txtPriseDeSang;
    setCurrentInfoPriseDesang(txtAAfficher);
    setTxtPriseDeSang(txtAEnlever);
  };

  const [logoAffichePriseDeSang, setLogoAffichePriseDeSang] = useState(
    LightOff
  );

  const [logoNonAffichePriseDeSang, setLogoNonAffichePriseDeSang] = useState(
    LightOn
  );

  const changementCouleurSVGPriseDesang = () => {
    let currentLampe = logoAffichePriseDeSang;
    let currentCache = logoNonAffichePriseDeSang;
    setLogoNonAffichePriseDeSang(currentLampe);
    setLogoAffichePriseDeSang(currentCache);
    affichageTxtPriseDeSang();
  };

  ////////////////////////////////////////////////

 

  ///////////// doasge 
  const [nouvelleRechercheßHCG, setNouvelleRechercheßHCG] = useState(0)
 

  const handleChangeßHCG = event => {
    setNouvelleRechercheßHCG(event.currentTarget.value);
  };
const handleSubmitßHCG = event => {
  event.preventDefault();
  let reponse = {
    titre : "ß-HCG : ",
    value : event.currentTarget.value,
    reponse : 1
  };
 setCurrentDosage(reponse);

    
  

  
  
  
};
////////////////////////////////////////////////////////

//////////: groupe 

const handleChangeGroupe = (e) => {
  /// recup date frotti
 
  
  
  let reponse = {
    titre: "Groupe Sanguin : ",
    value: e.target.value,
    reponse : 1
  };
 setCurrentGroupe(reponse);

  
};





  ////////////////////////////////////////


  //////// Personne Acc

  const recupAcc = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Personne accompagnante majeure ou consentement parental obligatoire  : ",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentAcc(reponse);
    
  };
  const accomp = () => {
    return (
      <div className="BulleInfo">
        <p>Accompagnement personne majeure identique au cours des différentes consultations : soutien moral efficient.</p>
       
      </div>
    );
  };

  const [txtAccomp, setTxtAccomp] = useState(() => accomp());

  const [currentInfoAccomp, setCurrentInfoAccomp] = useState("");

  const affichageTxtAccomp = () => {
    let txtAEnlever = currentInfoAccomp;
    let txtAAfficher = txtAccomp;
    setCurrentInfoAccomp(txtAAfficher);
    setTxtAccomp(txtAEnlever);
  };

  const [logoAfficheAccomp, setLogoAfficheAccomp] = useState(
    LightOff
  );

  const [logoNonAfficheAccomp, setLogoNonAfficheAccomp] = useState(
    LightOn
  );

  const changementCouleurSVGAccomp = () => {
    let currentLampe = logoAfficheAccomp;
    let currentCache = logoNonAfficheAccomp;
    setLogoNonAfficheAccomp(currentLampe);
    setLogoAfficheAccomp(currentCache);
    affichageTxtAccomp();
  };

  


  //////////////////////////////////////////////////


  //// echo 
  const recupEcho = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Echographie de datation/age gestationnel : ",
      value: e.target.value,
      reponse : 1
    };
    
    setcurrentEcho(reponse);
    
  };

  ///////// oui covid

  const ouiCovid = () => {
    return (
      <div>
        <h3>Covid et IVG :</h3>
        <p>
        Téléconsultation possible. Condition : Outils informatique fiable pour les documents nécessaires à la pratique de l’IVG dans le cadre réglementaire.
        </p>
        <p>
        Arrêt de l’allongement du délai de réalisation d’une IVG médicamenteuse (15 avril 2020-11 Juillet 2020).
        </p>
        <a rel="noreferrer noopener"
          href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000042106233&categorieLien=id"
          target="_blank"
        >
          Legifrance.gouv
        </a>
        .
        <a rel="noreferrer noopener"
          href="https://www.ameli.fr/medecin/actualites/covid-19-fin-des-mesures-derogatoires-pour-livg-medicamenteuse"
          target="_blank"
        >
          ameli.fr
        </a>
        <a rel="noreferrer noopener"
          href="https://syngof.fr/wp-content/uploads/2020/04/covid-19_-_medecins_-_ivg.pdf"
          target="_blank"
        >
          syngof
        </a>

      </div>
    )
  }

  const [ ouiCovidTxt, setOuiCovidTxt] = useState(()=>ouiCovid());

  const [ currentOuiCovid, setCurrentOuiCovid] = useState("");

  const afficheOuiCovid = () => {
    let affiche = ouiCovidTxt
    setCurrentOuiCovid(affiche);
  }

  const recupCovid = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Téléconsultation (selon recommandation applicable jusqu’au 31 octobre 2020) : ",
      value: e.target.value,
      reponse : 1
    };
    
    setcurrentCovid(reponse);
    
  };


  ///////////////////////////////////////

  return (
    <div className="consultationContainer">
      <h1>Consultation première prise médicamenteuse mineure : </h1>
      <h2>Prélude</h2>

      <br></br>
      <div className="ConsultationContainer">
      <label>
        Consultation faite dans le cadre des dispositions du Covid valable
        jusqu’au 31 octobre 2020 : 
        <Button variant="secondary" value="Oui" onClick={(e)=>{
          recupCovid(e);
          afficheOuiCovid();}}>Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recupCovid(e);}}>Non</Button>
      </label>
      <div>{currentOuiCovid}</div>
      <br></br>
      </div>
      
      <br></br>
      <h2>La patiente a en sa possession :</h2>
      <br></br>
      <div className="ConsultationContainer">
      <h3>Échographie de datation :</h3>
      <br></br>
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupEcho(e);}}>Oui</Button>
      <Button variant="secondary" value="Non" onClick={(e)=>{recupEcho(e);}}>Non</Button>
      <br></br>
      </div>
      <div className="ConsultationContainer">
      <h3>Age gestationnel :</h3>
      <br></br>
      <input
        type="number"
        name="name"
        value={saisieUtilisateurNbSemaineSA}
        onChange={handleChange}
      />
      <Button variant="danger" onClick={recupSaisieUtilisateurNbSemaine}>
        Valider
      </Button>
      <br></br>
      <div>{currentInfoNbSAmoinsSept}</div>
      <div>{currentInfoNbSAplusSeptMoinsDouze}</div>
      <div>{currentInfoNbSAplusDouze}</div>
      <br></br>
      </div>
      <div className="ConsultationContainer">
      <h3>Consentement à l’IVG signé :</h3>
      <br></br>
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupConsentement(e)}}>Oui</Button>
      <Button variant="secondary" value="Non" onClick={(e)=>{
        recupConsentement(e);
        clicVerrouDeuxaffichage();}}>
        Non
      </Button>
      <div>{currentInfoVerrouDeux}</div>
      <br></br>
      </div>
      <div className="ConsultationContainer">
      <h3>Attestation consultation psychosociale :</h3>
      <br></br>
      <Button variant="secondary" value="Oui" onClick={(e)=>{
        recupAttestation(e);
        clicOuiConsultation(e);}}>
        Oui
      </Button>
      <Button variant="secondary" value="Non" onClick={(e)=>{recupAttestation(e)}}>Non</Button>
      <br></br>
      <div>{currentConsultationAttestation}</div>
      <input
        onClick={changementCouleurSVGPsy}
        className="Lampe"
        type="image"
        src={logoAffichePsy}
      />
      <div>{currentInfoPsy}</div>
      <br></br>
      </div>
      <br></br>
      <div className="ConsultationContainer">
      <h3>Prise de sang effectuée :</h3>
      <br></br>
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupSang(e)}}>Oui</Button>
      <Button variant="secondary" onClick={(e)=>{
        recupSang(e);
        clicVerrouDeuxaffichage();}}>
        Non
      </Button>
      <br></br>
      <div>{currentInfoVerrouDeux}</div>
      <input
        onClick={changementCouleurSVGPriseDesang}
        className="Lampe"
        type="image"
        src={logoAffichePriseDeSang}
      />
      <div>{currentInfoPriseDesang}</div>
      <br></br>
      </div>
      
        <div className="ConsultationContainer">
        <h3>Dosage ß-HCG :</h3>
        <form >
            <input
                value={nouvelleRechercheßHCG}
                onChange={handleChangeßHCG}
                type="text"
                placeholder="saisir ßHCG"
            />
            <Button value={nouvelleRechercheßHCG} variant="secondary" onClick={(e)=> {
              handleSubmitßHCG(e)
            }}>Confirmer</Button>
        </form>
        </div>
        <div className="ConsultationContainer">
        <h3>Groupe sanguin : </h3>
        <Form.Group>
  <Form.Control as="select" size="lg" onChange={(e) => {
          handleChangeGroupe(e);
        }}>
          <option value="">Choisir..</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
  </Form.Control>
  </Form.Group>
      
        </div>

      <div className="ConsultationContainer">
      <h3>Personne accompagnante majeure ou consentement parental obligatoire :</h3>
      <br></br>
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupAcc(e);}}>Oui</Button>
      <Button variant="secondary" value="Non" onClick={(e)=>{recupAcc(e);}}>Non</Button>
      <input
        onClick={changementCouleurSVGAccomp}
        className="Lampe"
        type="image"
        src={logoAfficheAccomp}
      />
      <div>{currentInfoAccomp}</div>

      </div>
      <br></br>
      <div className="ConsultationContainer">
      <ul>
        <li>
          <a rel="noreferrer noopener"
            href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf"
            target="_blank"
          >
            Lien guide IVG
          </a>
        </li>
        
      </ul>
      </div>

      <Button onClick={afficheStateFin} >Valider mes choix</Button>
      <div>{currentReponseTarif}</div>
    </div>
  );
}

export default PremiereMediMineureANA;