import React, { useState } from "react";


import { Button, Form } from "react-bootstrap";
import VerrouUn from "@components/VerrouUn";



import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";

function PriseMediPatienteMajeure(props) {
  ///Bloc fonctionnel

  const submitHandler = (e) => {
    e.preventDefault();
}


///////// boutton

const [couleurBouttonBase, setCouleurBouttonBase] = useState("TestBTNBAse");

const [couleurBouttonSel, setCouleurBouttonSel] = useState("TestBTNSel");



const [btnOuiViolenceBase, setBtnOuiViolenceBase] = useState("TestBTNBAse");

const [btnNonViolenceBase, setBtnNonViolenceBase] = useState("TestBTNBAse");





const changeCouleurBoutonViolence = (e) => {
  
  
  

  if (e.target.className==couleurBouttonSel) {
    e.target.className=couleurBouttonBase;
    
  }
  else {
    e.target.className=couleurBouttonSel;

  }



}



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
      afficheNoRep();
      
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
    titre : "",
    value : "",
    reponse : 1
  });

  //// recup radio

  const recupRadioAcc = (e) => {
    let reponse = {
      titre: "Accompagnant(e) : ",
      value: e.target.value,
      reponse : 1
    };
    setCurrentAcc(reponse);
    
  }


  const recupRadioEchographie = (e) => {
    let reponse = {
      titre: "Echographie de datation/age gestationnel : ",
      value: e.target.value,
      reponse : 1
    };
    
    setcurrentEcho(reponse);
    
  }

  const recupRadioAttestation = (e) => {
    let reponse = {
      titre: "Consultation psychosociale :",
      value: e.target.value,
      reponse : 1
  };

  setCurrentAttestation(reponse);


}


const recupRadioConsentement = (e) => {
  let reponse = {
    titre: "Consentement à l’IVG : ",
    value: e.target.value,
    reponse : 1
  };
  
  setCurrentConssent(reponse);
}

  const recupRadioBilan = (e) => {
    let reponse = {
      titre: "Prise de sang effectuée : ",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentSang(reponse);
  }



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
      setIdVerrou(()=>testVerrouUn());
      
      handleChangeVerrou();
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
        <p> 
        IVG médicamenteuse et chirurgical possible mais en centre de référence seulement.
          
          
           </p>
        
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
  
    let txtAAfficher = txtVerrouDeux;
    setcurrentInfoVerrouDeux(txtAAfficher);
  
  };

  const clicVerrouDeuxaffichage = (e) => {
   
    affichageVerrouDeux();
  };

  /// Attestation consultation psychosocial

 
  const Psy = () => {
    return (
      <div className="BulleInfo">
        <p>
        Non obligatoire pour les femmes majeures.
        </p>
      </div>
    )
  }
  const [txtPsy, setTxtPsy] = useState(()=>Psy());

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
        <Form>
      <div key={`attestationOui-radio`} className="mb-3">
      <Form.Check 
        type='radio'
        id={`attestationOuiOui`}
        label={`Oui`}
        value="Oui"
        name="attestationOui"
        
      />

<Form.Check 
        type='radio'
        id={`attestationOuiNon`}
        label={`Non`}
        value="Non"
        name="attestationOui"
        
      />
      </div>
      </Form>
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
    let txtAAfficher = txtConsultationPsyCho;
    setcurrentConsultationAttestation(txtAAfficher);
  };

  const clicOuiConsultation = (e) => {
   
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
  const [nouvelleRechercheßHCG, setNouvelleRechercheßHCG] = useState()
 

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

  

  


  //////////////////////////////////////////////////


  //// echo 
  
  ///////// oui covid


  const nonCovid = () => {
    return (
      <div>
        

      </div>
    )
  }

  const [nonCovidTxt , setNonCovidTxt] = useState(()=>nonCovid());
 
  const ouiCovid = () => {
    return (
      <div>
        
        <p>
        Téléconsultation possible. Condition : Outils informatique fiable pour les documents nécessaires à la pratique de l’IVG dans le cadre réglementaire. 
        </p>
        <p>
        Arrêt de l’allongement du délai de réalisation d’une IVG médicamenteuse (15 avril 2020-11 Juillet 2020).
        </p>
        <ul>
          <li>
          <a className="Bold" rel="noreferrer noopener"
          href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000042106233&categorieLien=id"
          target="_blank"
        >
          Legifrance.gouv
        </a>

          </li>
          <li>
          <a className="Bold" rel="noreferrer noopener"
          href="https://www.ameli.fr/medecin/actualites/covid-19-fin-des-mesures-derogatoires-pour-livg-medicamenteuse"
          target="_blank"
        >
          ameli.fr
        </a>
            
          </li>
          <li>
          <a className="Bold" rel="noreferrer noopener"
          href="https://syngof.fr/wp-content/uploads/2020/04/covid-19_-_medecins_-_ivg.pdf"
          target="_blank"
        >
          syngof
        </a>

            
          </li>
        </ul>
       



        
        
        
        
      </div>
    )
  }

  const [ ouiCovidTxt, setOuiCovidTxt] = useState(()=>ouiCovid());

  const [ currentOuiCovid, setCurrentOuiCovid] = useState("");

  const afficheOuiCovid = (e) => {
    let value = e.target.value;
    if (value=="Oui") {
      let affiche = ouiCovidTxt
    setCurrentOuiCovid(affiche);
      
    }
    else if (value=="Non") {
      let affiche = nonCovidTxt
    setCurrentOuiCovid(affiche);
      
    }
    
  }

  const recupCovid = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Téléconsultation (selon recommandation applicable jusqu'à la fin de l'état d'urgence sanitaire) : ",
      value: e.target.value,
      reponse : 1
    };
    
    setcurrentCovid(reponse);
    
  };


  /////////////////////////////////////////////////// txt verrou 1

  const testVerrouDeux = () => {
    return (
      <div>
         <p className="Red">
           Dans le cadre de l’interruption volontaire de grossesse, votre réponse va à l’encontre des recommandations établies actuellement en vigueur en France. 
           
         </p>
         <p className="Red">
         Il est nécessaire, selon vos réponses, un ajustement et une reprise à la consultation précédente.             </p>
 
             <p className="Red">
 
             Selon le temps estimer de la grossesse, il peut s’agir d’une urgence. 
                       
                         </p>
 
                         <p className="Red">
                         Votre centre de référence peut vous répondre afin d’établir une prise en charge dans les meilleurs conditions pour la patiente.
                         </p>
 
 
      </div>
    )
  }
 
   const testVerrouUn = () => {
     return (
       <div>
          <p className="Red">
         Dans le cadre de l’interruption volontaire de grossesse, votre réponse va à l’encontre des recommandations établies actuellement en vigueur en France. 
 
           
         </p>
         <p className="Red">
         Il est nécessaire d’adresser votre patiente vers le centre de référence duquel dépend la patiente (à défaut aux urgences spécialisés le plus proche).
             </p>
 
             <p className="Red">
 
             Le degré d’urgence est à établir selon les signes cliniques ou l’âge gestationnel estimé.
             </p>
 
 
       </div>
     )
   }
 


  ////// verrou 1

  const [verrouShow, setVerrouShow] = useState(false);

const handleChangeVerrou = () => {
  /// affichage modal
  setVerrouShow(true);

};


//////// verrou 2 





const [ idVerrou, setIdVerrou] = useState(()=>testVerrouUn());
  ///////////////////////////////////////

  return (
    <div className="consultationContainer">

<VerrouUn
      
        show={verrouShow}
        onHide={() => setVerrouShow(false)} 
        onData={idVerrou}


      ></VerrouUn>
    
      <h1>Consultation première prise médicamenteuse : </h1>
      <h2>Prélude</h2>

      <br></br>
      <div className="ConsultationContainer">
      <label>
        Consultation faite dans le cadre des dispositions du Covid valable
        jusqu'à la fin de l'état d'urgence sanitaire : 
        <Button variant="secondary" value="Oui" 
        className={btnOuiViolenceBase}  variant="danger" onClick={(e)=>{ recupCovid(e);
          afficheOuiCovid(e);
          changeCouleurBoutonViolence(e);}}
        >Oui</Button>
   
      </label>
      <div>{currentOuiCovid}</div>
      <br></br>
      </div>
      <div className="ConsultationContainer">
        <h3>Protocole et coordonnées du centre de référence remise à la patiente.
           </h3>
           <h4>Actuellement en cours de réalisation : à remplir manuellement sur la fiche de liaison.</h4>
        
      </div>
      <br></br>
      <h2>La patiente a en sa possession :</h2>
      <br></br>
      <div className="ConsultationContainer">
      <h3>Échographie de datation :</h3>
      <br></br>

      <Form>
      <div key={`Echographie-radio`} className="mb-3" onChange={(e)=>{recupRadioEchographie(e);}}>
      <Form.Check 
        type='radio'
        id={`EchographieOui`}
        label={`Oui`}
        value="Oui"
        name="Echographie"
      />

<Form.Check 
        type='radio'
        id={`EchographieNon`}
        label={`Non`}
        value="Non"
        name="Echographie"
        onClick={()=>{
          setIdVerrou(()=>testVerrouDeux());
          handleChangeVerrou();}}
      />
      </div>
      </Form>

      <div>{currentInfoVerrouDeux}</div>










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

      <Form>
      <div key={`Consentement-radio`} className="mb-3" onChange={(e)=>{recupRadioConsentement(e);}}>
      <Form.Check 
        type='radio'
        id={`ConsentementOui`}
        label={`Oui`}
        value="Oui"
        name="Consentement"
        
      />

<Form.Check 
        type='radio'
        id={`ConsentementNon`}
        label={`Non`}
        value="Non"
        name="Consentement"
        onClick={()=>{
          setIdVerrou(()=>testVerrouDeux());
         
          handleChangeVerrou();}}
        
      />
      </div>
      </Form>









      <div>{currentInfoVerrouDeux}</div>
      <br></br>
      </div>
      <div className="ConsultationContainer">
      <h3>Attestation consultation psychosociale :</h3>
      <br></br>

      <Form>
      <div key={`attestation-radio`} className="mb-3" onChange={(e)=>{recupRadioAttestation(e);}}>
      <Form.Check 
        type='radio'
        id={`BugOui`}
        label={`Oui`}
        value="Oui"
        name="attestationBug"
        onClick={(e)=>{
          clicOuiConsultation(e);}}
      />

<Form.Check 
        type='radio'
        id={`BugNon`}
        label={`Non`}
        value="Non"
        name="attestationBug"
        
      />
      </div>
      </Form>






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


      <Form>
      <div key={`Bilan-radio`} className="mb-3" onChange={(e)=>{recupRadioBilan(e);}}>
      <Form.Check 
        type='radio'
        id={`BilanOui`}
        label={`Oui`}
        value="Oui"
        name="BilanSang"
      />

<Form.Check 
        type='radio'
        id={`BilanNon`}
        label={`Non`}
        value="Non"
        name="BilanSang"
        onClick={()=>{
          setIdVerrou(()=>testVerrouDeux());
          handleChangeVerrou();}}
      />
      </div>
      </Form>






     
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
        <form onSubmit={(e)=>{
        
        submitHandler(e);
      
     }} >
            <input
                value={nouvelleRechercheßHCG}
                onChange={handleChangeßHCG}
                type="text"
                placeholder="saisir ß-HCG"
            />
            <Button  className={btnOuiViolenceBase} value={nouvelleRechercheßHCG} variant="danger" onClick={(e)=> {
              handleSubmitßHCG(e);
              changeCouleurBoutonViolence(e);

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
      <h3>Personne accompagnante :</h3>
      <label>
      <Form>
      <div key={`acc-radio`} className="mb-3" onChange={(e)=>{recupRadioAcc(e);}}>
      <Form.Check 
        type='radio'
        id={`accOui`}
        label={`Oui`}
        value="Oui"
        name="accompagant"
      />

<Form.Check 
        type='radio'
        id={`accNon`}
        label={`Non`}
        value="Non"
        name="accompagant"
      />
      </div>
      </Form>
       

     






        
      </label>

      </div>
      <br></br>
      <div className="ConsultationContainer">
     
       <p>
       <a className="Bold" rel="noreferrer noopener"
            href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf"
            target="_blank"
          >
            Lien guide IVG
          </a>
       </p>
          
      
       
     
      </div>

      <Button className={btnOuiViolenceBase} onClick={(e)=>{afficheStateFin();
      changeCouleurBoutonViolence(e);}} variant="danger" >Valider mes choix</Button>



  
      <div>{currentReponseTarif}</div>

    </div>
  );
}

export default PriseMediPatienteMajeure;
