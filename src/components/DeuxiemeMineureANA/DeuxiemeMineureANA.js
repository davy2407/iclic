import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import VerrouUn from "@components/VerrouUn";


// import assets
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import AccordMaj from "@assets/docx/consentementMineure.docx";


// import css
import newPdfIcon from "@assets/images/PDFicon.svg";

import "./DeuxiemeMineureANA.css";

/// service 



/// feuille de deuxieme consultation, patiente majeure non anonyme
function DeuxiemeConsultationMineureANA(props) {


  const [ classIcon, setClassIcon] = useState("iconPDFNew");

  const [ hoverIcon, setHoverIcon] = useState("iconPDFNewHover");
  
  
  const [iconRefe, setIconRefe] = useState(classIcon);
 

    const submitHandler = (e) => {
      e.preventDefault();
  }
  





  ///// background consulte


const [backgroundBase, setBackgroundBase] = useState("ConsultationContainer");

const [ backgroundSelect, setBackgroundSelect] = useState("ConsultationContainerSelect");




const [backgroundBaseAtt, setBackgroundBaseAtt] = useState(backgroundBase);


const [backgroundBaseAcc, setBackgroundBaseAcc] = useState(backgroundBase);

const [backgroundBaseGros, setBackgroundBaseGros] = useState(backgroundBase);

const [backgroundBaseViolence, setBackgroundBaseViolence] = useState(backgroundBase);

const [backgroundBasePsycho, setBackgroundBasePsycho] = useState(backgroundBase);

const [backgroundBaseAge, setBackgroundBaseAge] = useState(backgroundBase);

const [backgroundBaseIST, setBackgroundBaseIST] = useState(backgroundBase);

const [backgroundBaseSang, setBackgroundBaseSang] = useState(backgroundBase);

const [backgroundBaseDosage, setBackgroundBaseDosage] = useState(backgroundBase);

const [backgroundBaseGroupe, setBackgroundBaseGroupe] = useState(backgroundBase);


const [backgroundBaseTabac, setBackgroundBaseTabac] = useState(backgroundBase);


const [backgroundBaseInfo, setBackgroundBaseInfo] = useState(backgroundBase);


//////////////////////////////////




  const [ globalStateFin, setGlobalStateFin] =useState([])
  /// state global liste

  const afficheStateFin = () => {
    let liste = [];
  liste.push(currentAttestation);
  liste.push(currentAcc);
  liste.push(currentConsultation);

  liste.push(currentGrossese);
  liste.push(currentEcho);
  liste.push(currentDosage);
  liste.push(currentGroupe);
  liste.push(currentIST);
  liste.push(infoSupp);
  liste.push(currentSang);

  
  liste.push(currentInfo);
  // liste.push(currentHPV);
  // liste.push(currentDateHPV);
  liste.push(currentTabac);
  liste.push(currentNbTabac);
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

/////////: radio recup
const recupRadioTabac = (e) => {
  let reponse = {
    titre: "Tabac : ",
    value: e.target.value,
    reponse : 1
  };
  setCurrentTabac(reponse);
  if (e.target.value == "Oui") {
    setBackgroundBaseTabac(backgroundBase);
    setCurrentNbTabac(
      {
        titre : "",
        value : "",
        reponse : 0
      }
    );

    
  } else {
    setCurrentNbTabac(
      {
        titre : "",
        value : "",
        reponse : 1
      }
    );
    setBackgroundBaseTabac(backgroundSelect);
  }
  
}






const recupRadioAcc = (e) => {
  let reponse = {
    titre: "Personne accompagnante majeurs ou consentement parental : ",
    value: e.target.value,
    reponse : 1
  };
  setCurrentAcc(reponse);
  setBackgroundBaseAcc(backgroundSelect);
  
}

const recupRadioPAtt = (e) => {
     
  let reponse = {
    titre: "Attestation 1ere consultation préalable en main de la patiente : ",
    value: e.target.value,
    reponse : 1
  };
  setCurrentAttestation(reponse);
  setBackgroundBaseAtt(backgroundSelect);
}

const recupRadioContra = (e) => {
  let reponse = {
    titre : "Information contraception postIVG : ",
    value : e.target.value,
    reponse : 1
  };
  setCurrentInfo(reponse);
  setBackgroundBaseInfo(backgroundSelect);

}

const recupRadioAtt = (e) => {
  let reponse = {
    titre: "Consultation psychosociale : ",
    value: e.target.value,
    reponse : 1
  };
  setCurrentConsultation(reponse);
  setBackgroundBasePsycho(backgroundSelect)
}


const recupRadioIST = (e) => {
  let reponse = {
    titre : "Recherche IST : ",
    value : e.target.value,
    reponse : 1
  };
  setCurrentIST(reponse);
  setBackgroundBaseIST(backgroundSelect);
}

const recupRadioGro = (e) => {
  let reponse = {
    titre: "Grossesse intra-utérine confirmée : ",
    value: e.target.value,
    reponse : 1
  };
  setCurrentGrossese(reponse);
  setBackgroundBaseGros(backgroundSelect);
}

const recupRadioBilan = (e) => {
   
  let reponse = {
    titre: "Bilan Sanguin prescrit (incluant groupe rhésus 2 déterminations+ BHCG quantitatif ) : ",
    value: e.target.value,
    reponse : 1
  };
  setCurrentSang(reponse);
  if (e.target.value=="Non") {
    setBackgroundBaseDosage(backgroundSelect);
    setBackgroundBaseGroupe(backgroundSelect);
    setBackgroundBaseSang(backgroundSelect);
    setCurrentDosage(
      {
        titre : "",
        value : "",
        reponse : 1
      }
    );
    setCurrentGroupe(
      {
        titre : "",
        value : "",
        reponse : 1
      }

    );

    
  } else {
    setBackgroundBaseSang(backgroundSelect);
    setBackgroundBaseDosage(backgroundBase);
    setBackgroundBaseGroupe(backgroundBase);
    setCurrentDosage(
      {
        titre : "",
        value : "",
        reponse : 0
      }
    );
    setCurrentGroupe(
      {
        titre : "",
        value : "",
        reponse : 0
      }

    );


  }
}





 //// button
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




  //// current state 
  const [currentAttestation, setCurrentAttestation] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [currentGrossese, setCurrentGrossese] =useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [currentEcho, setCurrentEcho] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [ currentAcc, setCurrentAcc] =useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [currentDosage, setCurrentDosage] = useState({
    titre : "",
    value : "",
    reponse : 1
  });

  const [currentGroupe, setCurrentGroupe] = useState({
    titre : "",
    value : "",
    reponse : 1
  });

  const [currentIST, setCurrentIST] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [infoSupp, setInfoSupp] = useState({
    titre : "",
    value : "",
    reponse : 1
  });

  const [currentSang, setCurrentSang] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  

  const [ currentConsultation, setCurrentConsultation] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [ currentInfo, setCurrentInfo]= useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

 

  const [currentTabac, setCurrentTabac]= useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [ currentNbTabac, setCurrentNbTabac] = useState({
    titre : "",
    value : "",
    reponse : 1
  });



  /////////////////////////////////////////////////////////////////////////////

   //////////////////////////////// tarif ou no reponse

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
          Tarification
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
  
  
  
      /////////////////////////////////////////////////////////////////////////////


  ////// Attestation 1ère consultation préalable à l’IVG
 

  const attestation = () => {
    return (
      <div className="BulleInfo">
        <p>
        Une première consultation préalable à l’IVG est nécessaire avant d’effectuer le recueil du consentement de la patiente.
        </p>
        
      </div>
    )
  }
  const [txtAttestation, setTxtAttestation] = useState(() => attestation());

  const [currentInfoAttestation, setCurrentInfoAttestation] = useState("");

  const affichageTxtAttestation = () => {
    let txtAEnlever = currentInfoAttestation;
    let txtAAfficher = txtAttestation;
    setCurrentInfoAttestation(txtAAfficher);
    setTxtAttestation(txtAEnlever);
  };
  const [logoAfficheAttestation, setLogoAfficheAttestation] = useState(LightOff);

  const [logoNonAfficheAttestation, setLogoNonAfficheAttestation] = useState(LightOn);
  
  const changementCouleurSVGAttestation = () => {
    let currentLampe = logoAfficheAttestation;
    let currentCache = logoNonAfficheAttestation;
    setLogoNonAfficheAttestation(currentLampe);
    setLogoAfficheAttestation(currentCache);
    affichageTxtAttestation();
  };



  ///////////////////////////////////////////////////////////////////////////////


  ///// accompagnant

  

  const accompagnantTXT = () => {
    return (
      <div className="BulleInfo">
        <p>
        Accompagnement personne majeure identique au cours des différentes consultations : soutien moral efficient.        </p>
        
      </div>
    )
  }
  const [txtAccompagnant, setTxtAccompagnant] = useState(() => accompagnantTXT());

  const [currentInfoAccompagnant, setCurrentInfoAccompagnant] = useState("");

  const affichageTxtAccompagnant = () => {
    let txtAEnlever = currentInfoAccompagnant;
    let txtAAfficher = txtAccompagnant;
    setCurrentInfoAccompagnant(txtAAfficher);
    setTxtAccompagnant(txtAEnlever);
  };
  const [logoAfficheAccompagnant, setLogoAfficheAccompagnant] = useState(LightOff);

  const [logoNonAfficheAccompagnant, setLogoNonAfficheAccompagnant] = useState(LightOn);
  
  const changementCouleurSVGAccompagnant = () => {
    let currentLampe = logoAfficheAccompagnant;
    let currentCache = logoNonAfficheAccompagnant;
    setLogoNonAfficheAccompagnant(currentLampe);
    setLogoAfficheAccompagnant(currentCache);
    affichageTxtAccompagnant();
  };

  ////////////////////////////////////////////////////////////////////////////////////



  ///// consultation psycho

  

  const consultationPsy = () => {
    return (
      <div className="BulleInfo">
        <p>
        L’attestation est obligatoire avec un délai de 48h pour les jeunes filles mineurs, anonyme ou non.        
        </p>
        
      </div>
    )
  }
  const [txtConsultationPsy, setTxtConsultationPsy] = useState(() => consultationPsy());

  const [currentInfoConsultationPsy, setCurrentInfoConsultationPsy] = useState("");

  const affichageTxtConsultationPsy = () => {
    let txtAEnlever = currentInfoConsultationPsy;
    let txtAAfficher = txtConsultationPsy;
    setCurrentInfoConsultationPsy(txtAAfficher);
    setTxtConsultationPsy(txtAEnlever);
  };
  const [logoAfficheConsultationPsy, setLogoAfficheConsultationPsy] = useState(LightOff);

  const [logoNonAfficheConsultationPsy, setLogoNonAfficheConsultationPsy] = useState(LightOn);
  
  const changementCouleurSVGConsultationPsy = () => {
    let currentLampe = logoAfficheConsultationPsy;
    let currentCache = logoNonAfficheConsultationPsy;
    setLogoNonAfficheConsultationPsy(currentLampe);
    setLogoAfficheConsultationPsy(currentCache);
    affichageTxtConsultationPsy();
  };

  

  /////////////////////////////////////////////////////////////////////////////////


  /////// grossesse confirmée


    /////////////// Bloc Violence 

    const violence = () => {
      return (
        <div className="BulleInfo">
          <p>
          Cette information ne figurera pas sur le résumé.
  Cette violence peut être physique, sexuelle, économique,
   verbale ou psychologique dans un contexte conjugal,
    professionnel ou plus récemment de cyberviolence. 
          </p>
          
          <p>
            <a rel="noreferrer noopener" target="_blank" href="https://www.has-sante.fr/jcms/p_3104867/fr/reperage-des-femmes-victimes-de-violences-au-sein-du-couple">
            https://www.has-sante.fr/reperage-des-femmes-victimes-de-violences-au-sein-du-couple
  
            </a>
          </p>
          <p>
          Pour toutes questions de prise en charge : <a href="http://www.declicviolence.fr/" rel="noreferrer noopener" target="_blank">http://www.declicviolence.fr/</a>
          </p>
        </div>
      )
    }
    const [txtViolence, setTxtViolence] = useState(() => violence());
  
    const [currentInfoViolence, setCurrentInfoViolence] = useState("");
  
    const affichageTxtViolence = () => {
      let txtAEnlever = currentInfoViolence;
      let txtAAfficher = txtViolence;
      setCurrentInfoViolence(txtAAfficher);
      setTxtViolence(txtAEnlever);
    };
    const [logoAfficheViolence, setLogoAfficheViolence] = useState(LightOff);
  
    const [logoNonAfficheViolence, setLogoNonAfficheViolence] = useState(LightOn);
    const changementCouleurSVGViolence = () => {
      let currentLampe = logoAfficheViolence;
      let currentCache = logoNonAfficheViolence;
      setLogoNonAfficheViolence(currentLampe);
      setLogoAfficheViolence(currentCache);
      affichageTxtViolence();
    };
  
  
    /////////////////////////////////////////////////////////////////////////
  
  

  




  /////////////////////////////////////////////////////////////////////////////////////


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
    } else if (nb > 7 && nb < 9) {
      affichagePlusDouze();
      handleChangeVerrou()
      

    } else if (nb >=9 && nb <=14) {
      seturrentCheckGesta("Seule IVG chirurgical en centre de référence possible, adressée en urgence selon le terme estimé (limité légale : 14 SA).");
      handleChangeVerrou()
      
    } else if (nb >=15) {
      seturrentCheckGesta(horsDelais);
      handleChangeVerrou();

      
    }

    let reponse = {
      titre: "Echographie de datation/Age gestationnel : ",
      value: nb,
      reponse : 1
    };
    setCurrentEcho(reponse);
    setBackgroundBaseAge(backgroundSelect);
   
 

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

  /// Bloc verrou2

 

    ////////////////////////////////////////////////////////////////////


    ///// bloc ist

const recupInfoSupp = (e) => {
  e.preventDefault();
  let reponse = {
    titre : "Si ressource cochée oui : ",
    value : "http://www.info-ist.fr ; https://www.ameli.fr/assure/sante/",
    reponse : 1
  };
  
  setInfoSupp(reponse);
};
    
    const returnInfoIST = () => {
      return (
        <div className="BulleInfo">
          <p>
            HAS :  « dépistage recommandé ciblé à toutes les femmes consultant pour une IVG, sans limite d’âge. Systématique chez les femmes de 15 à 25 ans. »              </p>
            
            
            <p>
              De nombreuses sources numériques existent pour l’information aux
              patient(es) des IST ainsi que de ces risques
              <a className="Bold" rel="noreferrer noopener"
                href="https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles"
                target="_blank"
              >
                Ameli IST
              </a>
              ,{" "}
              <a className="Bold" rel="noreferrer noopener" href="http://www.info-ist.fr/index.html" target="_blank">
                ISt-info
              </a>
              .
            </p>
  
          <label>
            Vous desirez plus d'informations à transmettre ?
            <Button
            className={btnOuiViolenceBase} 
            onClick={(e)=>{recupInfoSupp(e);
              changeCouleurBoutonViolence(e);}} 
            variant="danger"
            value="Oui"
              
            >
              Oui
            </Button>
            
          </label>
  
          <br></br>
  
          <br></br>
        </div>
      );
    };
  
   
    const [txtIST, setTxtIST] = useState(() => returnInfoIST());
  
    const [currentInfoIST, setCurrentInfoIST] = useState("");
  
    const affichageTxtIST = () => {
      let txtAEnlever = currentInfoIST;
      let txtAAfficher = txtIST;
      setCurrentInfoIST(txtAAfficher);
      setTxtIST(txtAEnlever);
    };
  
    const [logoAfficheIST, setLogoAfficheIST] = useState(LightOff);
  
    const [logoNonAfficheIST, setLogoNonAfficheIST] = useState(LightOn);
  
    const changementCouleurSVGIST = () => {
      let currentLampe = logoAfficheIST;
      let currentCache = logoNonAfficheIST;
      setLogoNonAfficheIST(currentLampe);
      setLogoAfficheIST(currentCache);
      affichageTxtIST();
    };

    ////// bilan sanguin
    


    const returnInfoSang = () => {
      return (
        <div className="BulleInfo">
          <p>
            « (Groupe sanguin 2 déterminations, HCG quantitatif)
Injection d’Immunoglobulines anti-D nécessaire en cas de rhésus négatif et de rhésus positif ou inconnue chez le partenaire, avant toute IVG ou dans les 72h suivant tout saignement. »
            </p>
          
        </div>
      );
    };
  
    const [txtSang, setTxtSang] = useState(() => returnInfoSang());
  
    const [currentInfoSang, setCurrentInfoSang] = useState("");
  
    const affichageTxtSang = () => {
      let txtAEnlever = currentInfoSang;
      let txtAAfficher = txtSang;
      setCurrentInfoSang(txtAAfficher);
      setTxtSang(txtAEnlever);
    };
  
    const [logoAfficheSang, setLogoAfficheSang] = useState(LightOff);
  
    const [logoNonAfficheSang, setLogoNonAfficheSang] = useState(LightOn);
  
    const changementCouleurSVGSang = () => {
      let currentLampe = logoAfficheSang;
      let currentCache = logoNonAfficheSang;
      setLogoNonAfficheSang(currentLampe);
      setLogoAfficheSang(currentCache);
      affichageTxtSang();
    };

    /////////////////////////////////////////////////////////////////////

    /// Dosage ß-HCG :
    const [dosageHCG, setDosageHCG] = useState(0);
  const handleDosageHCG = event => {
      setDosageHCG(event.currentTarget.value);
    };

    const handleSubmitDosageHCG = event => {
      event.preventDefault();
      let reponse = {
        titre : "Dosage ß-HCG : ",
        value : event.currentTarget.value,
        reponse : 1
      };
      setCurrentDosage(reponse);
      setBackgroundBaseDosage(backgroundSelect);
       
    
        setDosageHCG(0);
    };

    ///////////////////////////////////////////////////////////////////


    /// Groupe Sanguin 

    const [groupeSanguin, setGroupeSanguin] = useState("");
    const handleChangeGroupe = (e) => {
      /// recup date frotti
     
      
      
      let reponse = {
        titre: "Groupe Sanguin : ",
        value: e.target.value,
        reponse : 1
      };
     setCurrentGroupe(reponse);
     setBackgroundBaseGroupe(backgroundSelect);
    
      
    };
    

    /////////////////////////////////////////////////////////////////////////


    ////////////: contraception post IVG
    

    const returnInfoPostIVG = () => {
      return (
        <div className="BulleInfo">
            <p>
               Aborder dès cette consultation, les différentes
              modalités contraceptives. 
            </p>
            <p>
            Site possible d’information à transmettre à
              la patiente : 
            </p>
            <p>
            Lien{" "}
              <a target="_blank" rel="noreferrer noopener" href="https://www.choisirsacontraception.fr/?gclid=EAIaIQobChMI8_jf5raj7AIVD9d3Ch2qZwTZEAAYASAAEgIlxvD_BwE">
                choisirsacontraception.com
              </a>
            </p>
            <br></br>
          </div>
      );
    };
  
    const [txtPostIVG, setTxtPostIVG] = useState(() => returnInfoPostIVG());
  
    const [currentInfoPostIVG, setCurrentInfoPostIVG] = useState("");
  
    const affichageTxtPostIVG = () => {
      let txtAEnlever = currentInfoPostIVG;
      let txtAAfficher = txtPostIVG;
      setCurrentInfoPostIVG(txtAAfficher);
      setTxtPostIVG(txtAEnlever);
    };
  
    const [logoAffichePostIVG, setLogoAffichePostIVG] = useState(LightOff);
  
    const [logoNonAffichePostIVG, setLogoNonAffichePostIVG] = useState(LightOn);
  
    const changementCouleurSVGPostIVG = () => {
      let currentLampe = logoAffichePostIVG;
      let currentCache = logoNonAffichePostIVG;
      setLogoNonAffichePostIVG(currentLampe);
      setLogoAffichePostIVG(currentCache);
      affichageTxtPostIVG();
    };

    ////////////////////////////////////////////////////////////////////


    
    ////////////////////////////////////////////////////////////////////////


    //// Tabac 

   
  const [nouvelleRecherchePaquet, setNouvelleRecherchePaquet] = useState()


const handleChangePaquet = event => {
  setNouvelleRecherchePaquet(event.currentTarget.value);
};
const handleSubmitPaquet = event => {
event.preventDefault();
let reponse = {
  titre : "Nombre Paquet : ",
  value : event.currentTarget.value,
  reponse : 1
};
setCurrentNbTabac(reponse);
setBackgroundBaseTabac(backgroundSelect);
 

setNouvelleRecherchePaquet();
};


const txtWarningContra = () => {
  return (
    <p className="Red">
      Attention contraception !
    </p>
  )
}

const [blocWarningContra, setBlocWarningContra] = useState(()=> txtWarningContra());


const [currentWarningContra, setCurrentWarningContra] = useState("");


const afficheWarningContra = () => {
  setCurrentWarningContra(blocWarningContra);
}


const returnInfoTabac = () => {
  return (
    <div className="BulleInfo">
      <p>
       Le calcul du tabac en paquet/année peut vous être calculé sur : 
      </p>

      <p>
        <a href="http://medicalcul.free.fr/packyear.html" target="_blank" rel="noreferrer noopener" className="Bold" >
        http://medicalcul.free.fr/packyear.html.
        </a>
      </p>

      <p>
      1 paquet-année = 1 paquet de cigarette (20 cigarettes) par jour pendant 1 an.
      </p>


     
    </div>
  );
};

const [txtTabac, setTxtTabac] = useState(() => returnInfoTabac());

const [currentInfoTabac, setCurrentInfoTabac] = useState("");

const affichageTxtTabac = () => {
  let txtAEnlever = currentInfoTabac;
  let txtAAfficher = txtTabac;
  setCurrentInfoTabac(txtAAfficher);
  setTxtTabac(txtAEnlever);
};

const [logoAfficheTabac, setLogoAfficheTabac] = useState(LightOff);

const [logoNonAfficheTabac, setLogoNonAfficheTabac] = useState(LightOn);

const changementCouleurSVGTabac = () => {
  let currentLampe = logoAfficheTabac;
  let currentCache = logoNonAfficheTabac;
  setLogoNonAfficheTabac(currentLampe);
  setLogoAfficheTabac(currentCache);
  affichageTxtTabac();
};





////////////////////////////////////

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

const [ idVerrou, setIdVerrou] = useState(()=>testVerrouUn());

const [verrouShow, setVerrouShow] = useState(false);

const handleChangeVerrou = () => {
  /// affichage modal
  setVerrouShow(true);

};

    /////////////////////////////////////////////////////////////////////////////

  return (
      <div className="consultationContainer">
        <VerrouUn
        /// modal les props son les function permettant laffichage ou non du modal ainsi que la liste
        /// de boutons ( à la base radio ^^) et la fonction affichagedonnée qui sera appelée dans certains cas par la fonction
        /// recupIdbouton du modal
        show={verrouShow}
        onHide={() => setVerrouShow(false)} 
        onData={idVerrou}

      ></VerrouUn>
          <h1>
          Deuxième consultation préalable à l’IVG/Recueil de consentement 
Mineure : 
          </h1>
          <br></br>
          







          <div className={backgroundBaseAtt}>
          <h2>Attestation première consultation préalable à l’IVG : </h2>
          <Form>
      <div key={`Att-radio`} className="mb-3" onChange={(e)=>{recupRadioPAtt(e);}}>
      <Form.Check 
        type='radio'
        id={`AttOui`}
        label={`Oui`}
        value="Oui"
        name="attestation"
      />

<Form.Check 
        type='radio'
        id={`AttNon`}
        label={`Non`}
        value="Non"
        name="attestation"
        onClick={()=>{
       
          setIdVerrou(()=>testVerrouDeux());
          handleChangeVerrou();}}
      />
      </div>
      </Form>





          <input
      onClick={changementCouleurSVGAttestation}
      className="Lampe"
      type="image"
      src={logoAfficheAttestation}
    />
    <div className="ContainerBulle">  {currentInfoAttestation}</div>
          </div>



          <div className={backgroundBaseAcc}>
          <h2>Personne accompagnante majeure ou consentement parental obligatoire :</h2>
          
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
        onClick={()=>{
       
          setIdVerrou(()=>testVerrouUn());
          handleChangeVerrou();}}
      />
      </div>
      </Form>
      <p><a className="NewDocContainer" rel="noreferrer noopener" href={AccordMaj} target="_blank">
      <input
        alt="Image document accord référant"
        className={iconRefe}
        onMouseEnter={()=>{
          setIconRefe(hoverIcon);
          
          
        }}
        onMouseOut={()=>{
          setIconRefe(classIcon);
        }}
        type="image"
        src={newPdfIcon}
      />
        Fiche accord référant
      </a>
          </p>
          
          
          <input
      onClick={changementCouleurSVGAccompagnant}
      className="Lampe"
      type="image"
      src={logoAfficheAccompagnant}
    />
    <div className="ContainerBulle">  {currentInfoAccompagnant}</div>

          </div>


          <div className={backgroundBasePsycho}>
            
          <h2>Attestation consultation psycho-sociale  :</h2>

          <Form>
      <div key={`sousAtt-radio`} className="mb-3" onChange={(e)=>{recupRadioAtt(e);}}>
      <Form.Check 
        type='radio'
        id={`sousAttOui`}
        label={`Oui`}
        value="Oui"
        name="sousAtte"
      />

<Form.Check 
        type='radio'
        id={`sousAttNon`}
        label={`Non`}
        value="Non"
        name="sousAtte"
        onClick={()=>{
       
          setIdVerrou(()=>testVerrouUn());
          handleChangeVerrou();}}
      />
      </div>
      </Form>





        
          <input
      onClick={changementCouleurSVGConsultationPsy}
      className="Lampe"
      type="image"
      src={logoAfficheConsultationPsy}
    />
    <div className="ContainerBulle">  {currentInfoConsultationPsy}</div>
          </div>
    

          <div className={backgroundBaseViolence}>
      <h2>Violences subies en rapport ou non avec l’acte :</h2>
      <div >


      <Form>
      <div key={`vio-radio`} className="mb-3" onChange={()=>{
        setBackgroundBaseViolence(backgroundSelect);
      }}>
      <Form.Check 
        type='radio'
        id={`Voui`}
        label={`Oui`}
        value="Oui"
        name="violence"
      />

<Form.Check 
        type='radio'
        id={`Vnon`}
        label={`Non`}
        value="Non"
        name="violence"
      />
      </div>
      </Form>

      </div>
      {/* <Button id={1} variant="danger" className={btnOuiViolenceBase} onClick={(e)=>{changeCouleurBoutonViolence(e);}} >Oui</Button>
      <Button id={2} variant="danger" className={btnOuiViolenceBase} onClick={(e)=>{changeCouleurBoutonViolence(e);}}>Non</Button> */}
      <input
        onClick={changementCouleurSVGViolence}
        className="Lampe"
        type="image"
        src={logoAfficheViolence}
      />
      <div className="ContainerBulle">  {currentInfoViolence}</div>
      </div>    
    

          <div className={backgroundBaseGros}>
          <h2>Grossesse intra-utérine confirmée :</h2>
          <Form>
      <div key={`gro-radio`} className="mb-3" onChange={(e)=>{recupRadioGro(e);}}>
      <Form.Check 
        type='radio'
        id={`groOui`}
        label={`Oui`}
        value="Oui"
        name="grossesse"
      />

<Form.Check 
        type='radio'
        id={`groNon`}
        label={`Non`}
        value="Non"
        name="grossesse"
      />
      </div>
      </Form>

          </div>


          <div className={backgroundBaseAge}>
          <h2>Age gestationnel (semaine d'aménorrhée) : </h2>
          {/* faire input comme nb paquet tabac pConsultation */}
          <input
          min="0"
      type="number"
      name="name"
      value={saisieUtilisateurNbSemaineSA}
      onChange={handleChangeSA}
    />
    <Button className={btnOuiViolenceBase} variant="danger" onClick={(e)=>{recupSaisieUtilisateurNbSemaine(e);
      changeCouleurBoutonViolence(e);}}>
      Valider
    </Button>
    <br></br>
    <div>{currentCheckGesta}</div>
    <br></br>
          </div>



    <div div className={backgroundBaseIST}>
    <h2>Recherche IST +/- antibio-prophylaxie</h2>
    <br></br>
    <Form>
      <div key={`Ist-radio`} className="mb-3" onChange={(e)=>{recupRadioIST(e);}}>
      <Form.Check 
        type='radio'
        id={`ISToui`}
        label={`Oui`}
        value="Oui"
        name="ISTantibio"
      />

<Form.Check 
        type='radio'
        id={`IstNon`}
        label={`Non`}
        value="Non"
        name="ISTantibio"
      />
      </div>
      </Form>

    <br></br>
    <input
      onClick={changementCouleurSVGIST}
      className="Lampe"
      type="image"
      src={logoAfficheIST}
    />
    <div className="ContainerBulle">  {currentInfoIST}</div>
    </div>
    <div div className={backgroundBaseSang}>
    <h2>
      Prise de sang effectuée (Groupe sanguin : 2 déterminations, ß-HCG
      quantitatif)
    </h2>
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
      />
      </div>
      </Form>
      <p>
      « Prescrire un dosage des BHCG quantitatif le jour de la prise médicamenteuse.
Sauf en cas d’utilisation d’un autotest urinaire. »
      </p>

    <input
      onClick={changementCouleurSVGSang}
      className="Lampe"
      type="image"
      src={logoAfficheSang}
    />
    <br></br>
    <div className="ContainerBulle">{currentInfoSang}</div>
    </div>


      <div className={backgroundBaseDosage}>
      <h2>Dosage ß-HCG : </h2>
      <form onSubmit={(e)=>{
        
        submitHandler(e);
      
     }} >
          <input
                      maxLength="7"

              value={dosageHCG}
              onChange={handleDosageHCG}
              type="text"
              placeholder="dosage ß-HCG"
          />
          <Button className={btnOuiViolenceBase} value={dosageHCG} variant="danger" onClick={(e)=> {
              handleSubmitDosageHCG(e);
              changeCouleurBoutonViolence(e);
            }}>Confirmer</Button>
          
      </form>
      </div>


      <div className={backgroundBaseGroupe}>
      <h3>Groupe sanguin : </h3>
        <Form.Group>
  <Form.Control as="select" size="lg" onChange={(e) => {
          handleChangeGroupe(e);
        }}>
          <option value="">Choisir..</option>
          <option value="A-">A-</option>
    <option value="A+">A+</option>
    <option value="B-">B-</option>
    <option value="B+">B+</option>
    <option value="AB-">AB-</option>
    <option value="AB+">AB+</option>
    <option value="O-">O-</option>
    <option value="O+">O+</option>
  </Form.Control>
  </Form.Group>
      </div>
<div className={backgroundBaseInfo}>
      <h2>Information contraception post-IVG</h2>

      <Form>
      <div key={`contra-radio`} className="mb-3" onChange={(e)=>{recupRadioContra(e);}}>
      <Form.Check 
        type='radio'
        id={`contraOui`}
        label={`Oui`}
        value="Oui"
        name="contraception"
      />

<Form.Check 
        type='radio'
        id={`contraNon`}
        label={`Non`}
        value="Non"
        name="contraception"
      />
      </div>
      </Form>


    <br></br>
    <input
      onClick={changementCouleurSVGPostIVG}
      className="Lampe"
      type="image"
      src={logoAffichePostIVG}
    />
    <br></br>
    <div className="ContainerBulle">{currentInfoPostIVG}</div>
      </div>

      <div className={backgroundBaseTabac}>
      <h2>Tabac :</h2>
      <Form>
      <div key={`tabac-radio`} className="mb-3" onChange={(e)=>{recupRadioTabac(e);}}>
      <Form.Check 
        type='radio'
        id={`tabacOui`}
        label={`Oui`}
        value="Oui"
        name="Tabac"
        onClick={afficheWarningContra}
      />

<Form.Check 
        type='radio'
        id={`tabacNon`}
        label={`Non`}
        value="Non"
        name="Tabac"
        
      />

      </div>
      </Form>


      <div>{currentWarningContra}</div>






    
      <form >
          <input
              value={nouvelleRecherchePaquet}
              onChange={handleChangePaquet}
              type="text"
              placeholder="Paquet/année"
          />
          <Button className={btnOuiViolenceBase} value={nouvelleRecherchePaquet} variant="danger" onClick={(e)=> {
              handleSubmitPaquet(e);
              changeCouleurBoutonViolence(e);
            }}>Confirmer</Button>
      </form>
      <input
        onClick={changementCouleurSVGTabac}
        className="Lampe"
        type="image"
        src={logoAfficheTabac}
      />
      <br></br>
      <div className="ContainerBulle">{currentInfoTabac}</div>
      </div>




      <Button className={btnOuiViolenceBase} onClick={(e)=>{afficheStateFin();
        changeCouleurBoutonViolence(e);}} variant="danger">Valider mes choix</Button>
      <br></br>
      <div>{currentReponseTarif}</div>


      </div>
  )
}

export default DeuxiemeConsultationMineureANA;
