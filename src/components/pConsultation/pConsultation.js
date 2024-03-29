import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import VerrouUn from "@components/VerrouUn";

// import assets ß
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideIVG from "@assets/pdf/GuideIvgPatiente.pdf";

import newPdfIcon from "@assets/images/PDFicon.svg";
// import css
import "./pConsultation.css";

/// service 





/// feuille de premiere consultation, patiente majeure non anonyme ne venant pas du 3d
function PConsultation(props) {
  useEffect(() => {
    window.scrollTo(0,0);
 }, [])
  /// Bloc Fonctionnel



////////icon

const [ classIcon, setClassIcon] = useState("iconPDFNew");

const [ hoverIcon, setHoverIcon] = useState("iconPDFNewHover");

const [ globalClassIcon, setGlobalCassIcon] = useState(classIcon);



///// background consulte


const [backgroundBase, setBackgroundBase] = useState("ConsultationContainer");

const [ backgroundSelect, setBackgroundSelect] = useState("ConsultationContainerSelect");




const [backgroundBasePrescri, setBackgroundBasePrescri] = useState(backgroundBase);

const [backgroundBaseDDR, setBackgroundBaseDDR] = useState(backgroundBase);


const [backgroundBaseAcc, setBackgroundBaseAcc] = useState(backgroundBase);

const [backgroundBaseMode, setBackgroundBaseMode] = useState(backgroundBase);

const [backgroundBaseContexte, setBackgroundBaseContexte] = useState(backgroundBase);

const [backgroundBaseViolence, setBackgroundBaseViolence] = useState(backgroundBase);

const [backgroundBaseIST, setBackgroundBaseIST] = useState(backgroundBase);

const [backgroundBaseSang, setBackgroundBaseSang] = useState(backgroundBase);

const [backgroundBaseIVG, setBackgroundBaseIVG] = useState(backgroundBase);

const [backgroundBasePsycho, setBackgroundBasePsycho] = useState(backgroundBase);

const [backgroundBaseInfo, setBackgroundBaseInfo] = useState(backgroundBase);

const [backgroundBaseFrotti, setBackgroundBaseFrotti] = useState(backgroundBase);

const [backgroundBaseTabac, setBackgroundBaseTabac] = useState(backgroundBase);















  
  

  ///////////////////////////


  const submitHandler = (e) => {
    e.preventDefault();
}


  const recupRadioAcc = (e) => {
    let reponse = {
      titre: "Accompagnant(e) : ",
      value: e.target.value,
      reponse : 1
    };
    setCurrentAcc(reponse);
    setBackgroundBaseAcc(backgroundSelect);
    
  }


  const recupRadioTabac = (e) => {
    let reponse = {
      titre: "Tabac : ",
      value: e.target.value,
      reponse : 1
    };
    setCurrentTabac(reponse);
    if (e.target.value == "Oui") {
      setCurrentNbTabac(
        {
          titre : "Paquet/Année",
          value : "",
          reponse : 0
        }
      );
      setBackgroundBaseTabac(backgroundBase);
      
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

  const recupRadioContra = (e) => {
    let reponse = {
      titre : "Information contraception postIVG : ",
      value : e.target.value,
      reponse : 1
    };
    setCurrentInfo(reponse);
    setBackgroundBaseInfo(backgroundSelect);
  }

  const recupRadioPsycho = (e) => {
    let reponse = {
      titre : "Consultation psycho-sociale proposée : ",
      value : e.target.value,
      reponse : 1
    };
    setCurrentConsultation(reponse);
    setBackgroundBasePsycho(backgroundSelect);
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




  const recupRadioMode = (e) => {
    let reponse = {
      titre : "Mode de découverte de la grossesse :",
      value : e.target.value,
      reponse : 1
    };
    setCurrentMode(reponse);
    setBackgroundBaseMode(backgroundSelect);
  }

  const recupRadioBilan = (e) => {
   
    let reponse = {
      titre: "Bilan Sanguin prescrit (incluant groupe rhésus 2 déterminations+ BHCG quantitatif ) : ",
      value: e.target.value,
      reponse : 1
    };
    setCurrentSang(reponse);
    setBackgroundBaseSang(backgroundSelect);
  }



  const recupRadioEcho = (e) => {
    let reponse = {
      titre: "Echographie :",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentEcho(reponse);
    setBackgroundBasePrescri(backgroundSelect)
    
  }

  const recupRadioGuide = (e) => {
    let reponse = {
      titre : "Contexte de l’IVG évoqués :",
      value : e.target.value,
      reponse : 1
    };
    setCurrentDossier(reponse);
    setBackgroundBaseIVG(backgroundSelect);
  }


  const recupRadioHPV = (e) => {
    let reponse = {
      titre : "Frottis à jour (ou test HPV) : ",
      value : e.target.value,
      reponse : 1
    };
    setCurrentHPV(reponse);
    if (e.target.value == "Oui") {
      setBackgroundBaseFrotti(backgroundBase);
      setCurrentDateHPV(
        {
          titre : "Date frotti/Test HPV",
          value : "",
          reponse : 0
        }
      );
      
    } else  {
      setCurrentDateHPV(
        {
          titre : "",
          value : "",
          reponse : 1
        }
      );
      setBackgroundBaseFrotti(backgroundSelect);
      
    }

  }




  const recupRadioContexte = (e) => {
    let reponse = {
      titre: "Contexte Biopsychosocial favorable : ",
      value: e.target.value,
      reponse : 1
    };
    setCurrentContext(reponse);
    setBackgroundBaseContexte(backgroundSelect);
  };


  const changeBackgroundViolence = () => {
    setBackgroundBaseViolence(backgroundSelect);
  }
  


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


  /// function permettant la liaison avec la function onProps qui remonte les donnees au composant parent.
  /// liste des differents state , manque ddr et echographie
  /// personneAccFin,modeDecouverteFin,constexteBioPsyFin,rechercheIstFin,bilanSanguinFin
  ///,guideIVGFin,consultationPsyFin,contraPostIVGFin,frottiFin,dateFrottiFin,tabacFin,nBTabacFin,infoSupp
  ///ORDRE DES PARAMETRES DONNE CI DESSUS
  const liaison = () => {};

  /// Bloc contenant les state à récupérer à la fin de la consultation
  const [globalStateFin, setGlobalStateFin] = useState([]);

  const afficheStateFin = () => {
    let liste = [];
    liste.push(currentReco);
    liste.push(currentDDRSA);
    liste.push(currentDDRDay);
    liste.push(currentEcho);
    liste.push(currentAcc);
    liste.push(currentMode);
    liste.push(currentContext);
    liste.push(currentIST);
    liste.push(infoSupp);
    liste.push(currentSang);
    liste.push(currentDossier);
    liste.push(currentConsultation);
    liste.push(currentInfo);
    liste.push(currentHPV);
    liste.push(currentDateHPV);
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
  /// current reponse

  const [currentReco, setCurrentReco] = useState({
    titre : "",
    value : "",
    reponse : 1
  });

  const [currentDDRSA, setCurrentDDRSA] = useState({
    titre : "Date DDR ",
    value : "",
    reponse : 0
  });

  const [currentDDRDay, setCurrentDDRDay] =useState({
    titre : "",
    value : "",
    reponse : 1
  });

  const [currentEcho, setCurrentEcho] = useState({
    titre : "Prescription échographie de datation ",
    value : "",
    reponse : 0
  });

  const [ currentAcc, setCurrentAcc] =useState({
    titre : "Personne accompagnante ",
    value : "",
    reponse : 0
  });

  const [currentMode, setCurrentMode] = useState({
    titre : "Mode de découverte de la grossesse ",
    value : "",
    reponse : 0
  });

  const [currentContext, setCurrentContext] = useState({
    titre : "Contexte biopsychosocial favorable",
    value : "",
    reponse : 0
  });

  const [currentIST, setCurrentIST] = useState({
    titre : "Recherche IST +/- antibio-prophylaxie ",
    value : "",
    reponse : 0
  });

  const [infoSupp, setInfoSupp] = useState({
    titre : "",
    value : "",
    reponse : 1
  });

  const [currentSang, setCurrentSang] = useState({
    titre : "Prise de sang ",
    value : "",
    reponse : 0
  });

  const [currentDossier, setCurrentDossier] = useState({
    titre : "Dossier guide IVG remis ",
    value : "",
    reponse : 0
  });

  const [ currentConsultation, setCurrentConsultation] = useState({
    titre : "Consultation psycho-sociale  obligatoirement proposée ",
    value : "",
    reponse : 0
  });

  const [ currentInfo, setCurrentInfo]= useState({
    titre : "Information contraception",
    value : "",
    reponse : 0
  });

  const [ currentHPV, setCurrentHPV] = useState({
    titre : "Frottis à jour ou test HPV",
    value : "",
    reponse : 0
  });

  const [currentDateHPV, setCurrentDateHPV]= useState({
    titre : "Date frotti/Test HPV",
    value : "",
    reponse : 1
  });

  const [currentTabac, setCurrentTabac]= useState({
    titre : "Tabac ",
    value : "",
    reponse : 0
  });

  const [ currentNbTabac, setCurrentNbTabac] = useState({
    titre : "Paquet/Année",
    value : "",
    reponse : 1
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
      <Button className={btnOuiViolenceBase} variant="danger" onClick={props.onSuite}>
       Fin de consultation 
      </Button>
      </div>
    )
  };

  const [blocTarif, setBlocTarif] = useState(()=>tarifFinal());


  //////////////////////////////////////////////////////

  /////// bloc no reponse
  const afficheNoRep = (liste) => {
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

  const ouiCovid = ()=> {
    return (
      <div> 
        
      <p>
      
      Condition : Outils informatique fiable pour les documents nécessaires à la pratique de l’IVG dans le cadre réglementaire.<br></br>
      
      <ul>
        <li>
        Pour plus d’information : <a target="_blank" rel="noreferrer noopener" href="https://solidarites-sante.gouv.fr/IMG/pdf/covid-19_annexe_ivg_medicamenteuse_majeures_9sa_tlc_09112020.pdf" >
        Fiche Consultations de télémédecine pour les IVG médicamenteuses avant 9 SA pour les femmes majeures
        </a>
        </li>
      </ul>
      Voir onglet Covid pour plus d’informations dans le cadre des consultations faites à distance (délivrance des traitements, tarification).

      

      
      </p>
      </div>
    )
  };

  const [ covidTxt, setCovidTxt] = useState(()=>ouiCovid());


  const [ currentOuiCovid, setCurrentOuiCovid] = useState("");


  const afficheCovid =() => {
    let affiche = covidTxt;
    setCurrentOuiCovid(affiche);
  }



  const recupReco = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Téléconsultation (selon recommandation applicable jusqu'à la fin de l'état d'urgence sanitaire) : ",
      value: e.target.value,
      reponse : 1
  
    };
    setCurrentReco(reponse);
  
  };


 



  




  
 


 
/////////////////////////////////////////////////////////////////////////////

  

  const [dateFrottiFin, setDateFrottiFin] = useState({});

  const handleChange = (e) => {
    /// recup date frotti
    let myDate = new Date(e.target.valueAsDate);
    
    
    let reponse = {
      titre: "Date Frotti",
      value: e.target.value,
      reponse : 1
    };
   setCurrentDateHPV(reponse);
   setBackgroundBaseFrotti(backgroundSelect);

  };

  

  const [nBTabacFin, setNbTabacFin] = useState({});

  
  
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





  const recupInfoSupp = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "Si ressource cochée oui : ",
      value : "http://www.info-ist.fr ; https://www.ameli.fr/assure/sante",
      reponse : 1
    };
    
    setInfoSupp(reponse);
  };

  /// info IST
  const returnInfoIST = () => {
    return (
      <div className="BulleInfo">
        <p>
         HAS : « dépistage recommandé ciblé à toutes les femmes consultant pour une IVG, sans limite d’âge. Systématique chez les femmes de 15 à 25 ans .»
        </p>
        
        
        <p>
          De nombreuses sources numériques existent pour l’information aux
          patient(es) des IST ainsi que de ces risques
          <a rel="noreferrer noopener"
            href="https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles"
            target="_blank"
          >
            Ameli IST
          </a>
          ,{" "}
          <a href="http://www.info-ist.fr/index.html" target="_blank" rel="noreferrer noopener">
            ISt-info
          </a>
          .
        </p>
        <br></br>

        <label>
          Vous desirez plus d'informations à transmettre à la patiente ?
          <Button className={btnOuiViolenceBase}
            variant="danger"
            value="Oui"
            onClick={(e) => {
              recupInfoSupp(e);
              changeCouleurBoutonViolence(e);
            }}
          >
            Oui
          </Button>
        
        </label>

 
      </div>
    );
  };

  /// texte info IST
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
  ///Bloc prescription echographie
  

  const echographie = () => {
    return (
      <div className="BulleInfo">
        <p className="txtInfo">
        Grossesse précoce, attendre le résultat des ß-HCG pour date d'échographie (œuf visualisé si ß-HCG supérieur à 1000-1500 UI/L).
Possibilité de prescription échographie lors de la 2ème consultation préalable à l’IVG selon résultat sanguin.
        </p>
        <p>
        Préciser faire « échographie de datation à réaliser en urgence ; IPE  » 
        sur votre ordonnance (Index pour radiologue « Vérification échographique pré-IVG »)
        </p>
      </div>
    )
  }
  const [txtEcho, setTxtEcho] = useState(() => echographie());

  const [currentInfoEcho, setCurrentInfoEcho] = useState("");

  const affichageTxtEcho = () => {
    let txtAEnlever = currentInfoEcho;
    let txtAAfficher = txtEcho;
    setCurrentInfoEcho(txtAAfficher);
    setTxtEcho(txtAEnlever);
  };
  const [logoAfficheEcho, setLogoAfficheEcho] = useState(LightOff);

  const [logoNonAfficheEcho, setLogoNonAfficheEcho] = useState(LightOn);
  const changementCouleurSVGEcho = () => {
    let currentLampe = logoAfficheEcho;
    let currentCache = logoNonAfficheEcho;
    setLogoNonAfficheEcho(currentLampe);
    setLogoAfficheEcho(currentCache);
    affichageTxtEcho();
  };


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

const warningContexte = () => {
  return (
    <p className="Red">
      Consultation psycho-sociale à proposer ! 


    </p>
  )
};


const [ blocWarningContext, setBlocWarningContexte] = useState(()=>warningContexte());

const afficheWarningContexte = () => {
  setCurrentWarningContexte(blocWarningContext);
}




const [currentWarningContexte, setCurrentWarningContexte] = useState("");










  const [valueDecouverteGro, setDecouverteGro] = useState(
    /// state bouton select ( ne fonctionne pas comme value de base actuellement )
    { value: "Selectionner" }
  );

  /// Bloc consultation Biopsychosocial
  const [consultationPsychoSo, setConsultationPsychoSo] = useState({
    texte: "consultation psycho-sociale proposée",
    className: "Red",
  });

  



  /// Consultation psychosociale
  const returnInfo = () => {
    return (
      <div className="BulleInfo">
        <p>
        Elle n’est pas obligatoire pour les personnes majeures. Mais obligation légale de la proposer.  Délai de 48h de réflexion avant de signer le consentement après la consultation psycho-sociale.

        </p>
        <br></br>
        <p>Elle peut avoir lieu : </p>
        <br></br>
        <ul>
          <li>
            dans un établissement d’information, de consultation ou de conseil
            familial 
          </li>
          <li>dans un centre de planification ou d’éducation familiale</li>
          <li>dans un service social ou un autre organisme agréé</li>
        </ul>
        <br></br>
      </div>
    );
  };

  const [txtPsycho, setTxtPsycho] = useState(() => returnInfo());

  const [currentInfoPsycho, setCurrentInfoPsycho] = useState("");

  const affichageTxtPsycho = () => {
    let txtAEnlever = currentInfoPsycho;
    let txtAAfficher = txtPsycho;
    setCurrentInfoPsycho(txtAAfficher);
    setTxtPsycho(txtAEnlever);
  };

  const [logoAffichePsycho, setLogoAffichePsycho] = useState(LightOff);

  const [logoNonAffichePsycho, setLogoNonAffichePsycho] = useState(LightOn);

  const changementCouleurSVGPsycho = () => {
    let currentLampe = logoAffichePsycho;
    let currentCache = logoNonAffichePsycho;
    setLogoNonAffichePsycho(currentLampe);
    setLogoAffichePsycho(currentCache);
    affichageTxtPsycho();
  };

  ///

  ///BLoc DDR
  

  // const handleSubmitDDR = (e) => {
  //   /// recup date frotti
    
  //   let myDate = new Date(valueDDR.valueAsDate);
    
  //   e.preventDefault();
    
  //   let reponse = {
  //     titre: "Date DDR",
  //     value: e.target.value,
  //   };
    
  //   let liste = [...globalStateFin];
  //   for (let i = 0; i < liste.length; i++) {
  //     if (
  //       liste[i].titre == reponse.titre
  //     ) {
  //       liste.splice(i, 1);
        
  //     }
      
  //   }
  //   liste.push(reponse);
  //   setGlobalStateFin(liste);

    
  // };


  /////// bloc prise de sang 
  const returnInfoSang = () => {
    return (
      <div className="BulleInfo">
        <p>
        Injection d’Immunoglobulines anti-D nécessaire en cas de rhésus négatif et de rhésus positif ou inconnue chez le partenaire, avant toute IVG ou dans les 72h suivant tout saignement. 
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

  ////////////////////////////////////////////////////////////

  const [valueDDRday, setValueDDRday] = useState();

  const [valueDDRweek, setValueDDRweek] = useState();
  

  const DDR = (e) => {
    
    let dateDDR = new Date(e);
    const MS_PER_DAY = 1000 * 60 * 60 * 24;

  const today = new Date();
  const todayInUTC = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const dateDDRInUTC = Date.UTC(
    dateDDR.getFullYear(),
    dateDDR.getMonth(),
    dateDDR.getDate()
  );


  const diffInDays = Math.floor((todayInUTC - dateDDRInUTC) / MS_PER_DAY);
  const semaineSAInDays = diffInDays ;

  const semaineSA = {
    weeks: Math.round(semaineSAInDays /7),
    days: semaineSAInDays % 7,
  };
  
  let reponse = {
    titre : "Nombre semaines SA : ",
    value : semaineSA.weeks.toString(),
    reponse : 1

  };
  let reponse2 = {
    titre : "+ jour : ",
    value : semaineSA.days.toString(),
    reponse : 1

  };
  setCurrentDDRDay(reponse2);
    setCurrentDDRSA(reponse);
    setBackgroundBaseDDR(backgroundSelect);
  
  
 
  setDateDDR(Math.round(semaineSA.weeks))
  if (Math.round(semaineSA.weeks)>=5&&Math.round(semaineSA.weeks)<9) {
    affichageTxtUrgence();
    stopVerrou();

    
  }
  else if (Math.round(semaineSA.weeks)==9&&Math.round(semaineSA.days)<=0) {
    affichageTxtUrgence();
    stopVerrou();

    
  }
  else if (Math.round(semaineSA.weeks)==9&&Math.round(semaineSA.days)>0) {
    handleChangeVerrou();
    
  }
  else if (Math.round(semaineSA.weeks)>9) {
    handleChangeVerrou();
    
  }
  else if (Math.round(semaineSA.weeks)<5) {
    setCurrentTextUrgence("");
    stopVerrou();

    
  }

  
  }

  const transmissionDDR = () => {
    let jour = valueDDRday;
    let semaineSA = valueDDRweek;
    let liste = [...globalStateFin];
    setCurrentDDRDay(jour);
    setCurrentDDRSA(semaineSA);
    
  }



  //// test 

  const textDDRIncertaine = ()=>{
    return (
      <div className="BulleInfo">
        <p>
        La DDR étant incertaine, il est nécessaire de s’assurer de la datation exacte
         rapidement afin de ne pas dépasser le terme légal pour une interruption de
          grossesse par voie médicamenteuse.
        </p>
      </div>
    )
  }


  const [DateIncertaine, setDateIncertaine] = useState(()=> textDDRIncertaine);

  const [currentIncertaine, setCurrentIncertaine] = useState("");

  const affichageDateIncertaine = ()=>{
    let txtAEnlever = currentIncertaine;
    let txtAAfficher = DateIncertaine;
    setCurrentIncertaine(txtAAfficher);

  }

  const clicDateIncertaine = () => {
    affichageTxtUrgence();
    affichageDateIncertaine();
    setCurrentDDRSA(
      {
        titre : "DDR incertaine",
        value : "",
        reponse : 1
      }
    );
    setBackgroundBaseDDR(backgroundSelect);
    
  }
  

 
 


 


 



  // const [txtMoinsDeSeptSA, setTxtMoinsDeSeptSA] = useState(
  //   () => plusDeDouzetSemaines()
  //   /// state contenant la fonction retournant le texte plus de 12 semaines
  // );

  // const [currentInfoNbSAplusDouze, setcurrentInfoNbSAplusDouze] = useState(
  //   /// texte vide affichage de base
  //   ""
  // );
  //////////////////////////////

  
 

  

  const [dateDDR, setDateDDR] = useState({});

  const Urgence = ()=> {
    return (
      <div>
        <p className="red" >
          Urgence
        </p>
      </div>
    )
  }

  const [txtUrgence, setTxtUrgence] = useState(()=> Urgence());

  const [currentTextUrgence, setCurrentTextUrgence] = useState("");

  const affichageTxtUrgence = () => {
   
    let txtAAfficher = txtUrgence;
    setCurrentTextUrgence(txtAAfficher);
    
  };


  /// Bloc information contraception post IVG

  const returnInfoPostIVG = () => {
    return (
      <div className="BulleInfo">
        <p>
         Aborder la contraception dès cette consultation. Site d’information à transmettre à la patiente : </p>
          
          <p>
          <a target="_blank" href="https://www.choisirsacontraception.fr/?gclid=EAIaIQobChMI8_jf5raj7AIVD9d3Ch2qZwTZEAAYASAAEgIlxvD_BwE">
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

  /// Bloc frotti

  const NonFrotti = () => {
    return (
      <div>
        <p className="Red">
        Prévoir en post-IVG !
        </p>
      </div>
    )
  }

  const [ txtNonFrotti, setTxtNonFrotti] = useState(()=>NonFrotti());

  const [ currentNonFrotti, setCurrentNonFrotti] = useState("");

  const affichageTxtFrottiNon = () => {
    let txtAEnlever = currentNonFrotti;
    let txtAAfficher = txtNonFrotti;
    setCurrentNonFrotti(txtAAfficher);
    
  };

  const returnInfoFrotti = () => {
    return (
      <div className="BulleInfo">
        <p>
         Le plan de dépistage national s’applique : 
        </p>
        <ul>
          <li>
            <p>
            entre 25 et 30 ans, 2 examens cytologiques à un an d’intervalle, puis 3 ans après si résultat normal.            </p>
          </li>
          <li>
            <p>
            A partir de 30 ans, 3 ans après le dernier examen cytologique (résultat normal); Test HPV tous les 5 ans.
            <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://www.has-sante.fr/upload/docs/application/pdf/2019-07/synthese_hpv.pdf">
          lien info
        </a>
            </p>
          </li>
        </ul>
       
      </div>
    );
  };

  const [txtFrotti, setTxtFrotti] = useState(() => returnInfoFrotti());

  const [currentInfoFrotti, setCurrentInfoFrotti] = useState("");

  const affichageTxtFrotti = () => {
    let txtAEnlever = currentInfoFrotti;
    let txtAAfficher = txtFrotti;
    setCurrentInfoFrotti(txtAAfficher);
    setTxtFrotti(txtAEnlever);
  };

  const [logoAfficheFrotti, setLogoAfficheFrotti] = useState(LightOff);

  const [logoNonAfficheFrotti, setLogoNonAfficheFrotti] = useState(LightOn);

  const changementCouleurSVGFrotti = () => {
    let currentLampe = logoAfficheFrotti;
    let currentCache = logoNonAfficheFrotti;
    setLogoNonAfficheFrotti(currentLampe);
    setLogoAfficheFrotti(currentCache);
    affichageTxtFrotti();
  };



  ///////////////// tabac

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

  ////////////////////////////


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

  const stopVerrou =() => {
    setVerrouShow(false);
  };

  return (
    <div className="consultationContainer">
      <VerrouUn
        show={verrouShow}
        onHide={() => setVerrouShow(false)} 
        onData={idVerrou}



      ></VerrouUn>
      <h1>Première consultation préalable/Premier contact médical Majeure </h1>
      
      <br></br>
      
      <br></br>
      <div className="ConsultationContainer">
      <p>Consultation faite par téléconsultation :</p>
            <Button  className={btnOuiViolenceBase}  variant="danger" onClick={(e)=>{recupReco(e);
            afficheCovid();
            changeCouleurBoutonViolence(e);}} value="Oui">Oui</Button>
            <br></br>
            <div>{currentOuiCovid}</div>
            </div>
           
      
      <br></br>
 
      <div className={backgroundBaseDDR}>
     

      <h2>DDR</h2>
      {/* <form >
            <input
                value={nouvelleRecherchePaquet}
                onChange={handleChangePaquet}
                type="text"
                placeholder="Paquet/année"
            />
            <Button value={nouvelleRecherchePaquet} variant="danger" onClick={(e)=> {
              handleSubmitPaquet(e)
            }}>Confirmer</Button>
        </form>
       */}
      
      
      <form>
      <input
        type="date"
        name="DDR"
        id="DDR"
        onChange={(e)=> {
          let myDate = new Date(e.target.valueAsDate);
          DDR(myDate)}}
        
        
      ></input>

      </form>
        <p><span className="Bold">SA : </span>{currentDDRSA.value}</p>
        <p><span className="Bold">Jour : </span>{currentDDRDay.value}</p>
      
      
      <br></br>
      <label>
        Date incertaine ?<Button className={btnOuiViolenceBase} variant="danger" onClick={(e)=>{clicDateIncertaine();
        changeCouleurBoutonViolence(e);}}>Oui</Button>
      </label>
      <div  className="ContainerBulle">{currentIncertaine}</div>
      <br></br>
      
      <br></br>
      </div>
      <div className={backgroundBasePrescri}>
      <h2>Prescription échographie de datation</h2>
      <Form>
      <div key={`echo-radio`} className="mb-3" onChange={(e)=>{recupRadioEcho(e);}}>
      <Form.Check 
        type='radio'
        id={`echoOui`}
        label={`Oui`}
        value="Prescrite"
        name="echographie"
      />

<Form.Check 
        type='radio'
        id={`echoNon`}
        label={`Non`}
        value="Non prescrite"
        name="echographie"
      />
      </div>
      </Form>
      
      
      
      
      
      
      
      
      {/* <label>


      <div  onChange={(e)=>{recupRadioEcho(e);}}>
      <div>
      <input id="EchOui" type="radio" value="Prescrite" name="echographie" /> 
      <label for="EchOui">Oui</label>
      </div>
      <div>
      <input id="EchNon" type="radio" value="Non prescrite" name="echographie" /> 
      <label for="EchNon">Non</label>
      </div>

      </div>
       
      <div className="Red">{currentTextUrgence}</div>
        
      </label> */}
      <div className="Red">{currentTextUrgence}</div>
      
      <input
        alt="Image information préscription"
        onClick={changementCouleurSVGEcho}
        className="Lampe"
        type="image"
        src={logoAfficheEcho}
        // onMouseEnter={()=>{
        //   changementCouleurSVGEcho();
          
        // }}
        // onMouseOut={()=>{
        //   changementCouleurSVGEcho();
        // }}
      />
      <div className="ContainerBulle">{currentInfoEcho}</div>
      <br></br>
      </div>
      <div className={backgroundBaseAcc}>
      <h2>Personne accompagnante</h2>
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
      <br></br>
      </div>
      <div className={backgroundBaseMode}>
      <h2>Mode de découverte de la grossesse </h2>
      <br></br>
      <Form>
      <div key={`uri-radio`} className="mb-3" onChange={(e)=>{recupRadioMode(e);}}>
      <Form.Check 
        type='radio'
        id={`uriTest`}
        label={`Test Urinaire`}
        value="Test Urinaire"
        name="mode"
      />

<Form.Check 
        type='radio'
        id={`sangTest`}
        label={`Test Sanguin`}
        value="Test Sanguin"
        name="mode"
      />
      <Form.Check 
        type='radio'
        id={`echoRe`}
        label={`Échographie`}
        value="Échographie"
        name="mode"
      />
      <Form.Check 
        type='radio'
        id={`CliRe`}
        label={`Clinique`}
        value="Clinique"
        name="mode"
      />
      </div>
      </Form>
       










     
      </div>
      <div className={backgroundBaseContexte}>
      <h2>Contexte biopsychosocial favorable :</h2>
      <Form>
      <div key={`psyCho-radio`} className="mb-3" onChange={(e)=>{recupRadioContexte(e);}}>
      <Form.Check 
        type='radio'
        id={`psyChoOui`}
        label={`Oui`}
        value="Oui"
        name="contexte"
      />

<Form.Check 
        type='radio'
        id={`psyChoNon`}
        label={`Non`}
        value="Non"
        name="contexte"
        onClick={afficheWarningContexte}
      />
      </div>
      </Form>
    <div>{currentWarningContexte}</div>




      





    
      <br></br>
      {/* <Button className={btnOuiViolenceBase}
        variant="danger"
        value="Oui"
        onClick={(e) => {
          recupContexteBio(e);
          changeCouleurBoutonViolence(e);
        }}
      >
        Oui
      </Button>
      <br></br>
      <Button className={btnOuiViolenceBase}
        value="Non"
        variant="danger"
        onClick={(e) => {
          afficheConsultation();
          recupContexteBio(e);
          changeCouleurBoutonViolence(e);
        }}
      >
        Non
      </Button> */}
      <br></br>
      
      </div>
      <div className={backgroundBaseViolence}>
      <h2>Violences subies en rapport ou non avec l’acte :</h2>

      <Form>
      <div key={`Vio-radio`} className="mb-3" onChange={changeBackgroundViolence} >
      <Form.Check 
        type='radio'
        id={`VioOui`}
        label={`Oui`}
        value="Oui"
        name="violence"
      />

<Form.Check 
        type='radio'
        id={`VioNon`}
        label={`Non`}
        value="Non"
        name="violence"
      />
      </div>
      </Form>







      
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

      <div className={backgroundBaseIST}>
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
      {/* Bloc a finir */}
      <br></br>
      </div>
      <div className={backgroundBaseSang}>
      <h2>
       Prescription prise de sang (Groupe sanguin : 2 déterminations, ß-HCG
        quantitatif)
      </h2>
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



      <br></br>
     
      <input
        onClick={changementCouleurSVGSang}
        className="Lampe"
        type="image"
        src={logoAfficheSang}
      />
      <br></br>
      <div className="ContainerBulle">{currentInfoSang}</div>

      <br></br>

      </div>
      <div className={backgroundBaseIVG}>
      <h2>Dossier guide IVG remis :</h2>
      <Form>
      <div key={`guide-radio`} className="mb-3" onChange={(e)=>{recupRadioGuide(e);}}>
      <Form.Check 
        type='radio'
        id={`guideOui`}
        label={`Oui`}
        value="Oui"
        name="guideIVG"
      />

<Form.Check 
        type='radio'
        id={`guideNon`}
        label={`Non`}
        value="Non"
        name="guideIVG"
      />
      </div>
      </Form>


      <br></br>
      
      <br></br>
      <div className="docContainer">
      <p> 
      <a className="NewDocContainer"  href={GuideIVG} target="_blank">
      <input
        onMouseEnter={()=>{
          setGlobalCassIcon(hoverIcon);
          
        }}
        onMouseOut={()=>{
          setGlobalCassIcon(classIcon);
        }}
        className={globalClassIcon}
        type="image"
        src={newPdfIcon}
      />
        PDF Guide IVG
      </a>
          </p>

      </div>

      </div>
      <div className={backgroundBasePsycho}>
      <h2>Consultation psycho-sociale proposée</h2>
      <br></br>
      <Form>
      <div key={`conPsy-radio`} className="mb-3" onChange={(e)=>{recupRadioPsycho(e);}}>
      <Form.Check 
        type='radio'
        id={`conPsyOui`}
        label={`Oui`}
        value="Oui"
        name="PsychoSo"
      />

<Form.Check 
        type='radio'
        id={`conPsyNon`}
        label={`Non`}
        value="Non"
        name="PsychoSo"
      />
      </div>
      </Form>
      <div>{currentWarningContexte}</div>


  
      <br></br>
      <input
        onClick={changementCouleurSVGPsycho}
        className="Lampe"
        type="image"
        src={logoAffichePsycho}
      />
      <br></br>
      <div className="ContainerBulle">{currentInfoPsycho}</div>
      <br></br>
      </div>
      <div className={backgroundBaseInfo}>
      <h2>Information contraception post-IVG</h2>
      <br></br>
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
      <br></br>
      </div>
      <div className={backgroundBaseFrotti}>
      <h2>Frottis à jour ou test HPV</h2>
      <br></br>
      <Form>
      <div key={`hpv-radio`} className="mb-3" onChange={(e)=>{recupRadioHPV(e);}}>
      <Form.Check 
        type='radio'
        id={`hpvOui`}
        label={`Oui`}
        value="Oui"
        name="HPV"
      />

<Form.Check 
        type='radio'
        id={`hpvNon`}
        label={`Non`}
        value="Non"
        name="HPV"
        onClick={(e) => {
           
          affichageTxtFrottiNon();
         
        }}
      />

      <Form.Check 
        type='radio'
        id={`default-radio`}
        label={`Non Concernée`}
        value="Non Concernée"
        name="HPV"
      />
      </div>
      </Form>








     

  
       
        <div className="ContainerBulle">{currentNonFrotti}</div>
      
      <br></br>
      <label for="dateFrotti">Date : </label>
      <input
        type="date"
        name="dateFrotti"
        id="dateFrotti"
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
      <br></br>
      <input
        onClick={changementCouleurSVGFrotti}
        className="Lampe"
        type="image"
        src={logoAfficheFrotti}
      />
      <br></br>
      <div className="ContainerBulle">{currentInfoFrotti}</div>
      <br></br>
      </div>
      <div className={backgroundBaseTabac}>
      <h2>Tabac :</h2>
      <br></br>
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


      <br></br>
      
      {/* <input type="text" nom="nbPAquet" id="nbPAquet" onChange={(e)=>{recupNombre(e);}}></input> */}
      <form  onSubmit={(e)=>{
        
        submitHandler(e);
      
     }} >
            <input
                
                value={nouvelleRecherchePaquet}
                onChange={handleChangePaquet}
                type="text"
                placeholder="Paquet/année"
            />
            <Button  className={btnOuiViolenceBase} value={nouvelleRecherchePaquet} variant="danger" onClick={(e)=> {
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
      <br></br>
      <br></br>
      <div className="ValiderContainer">
      <Button  className={btnOuiViolenceBase} onClick={(e)=>{afficheStateFin();
      changeCouleurBoutonViolence(e);}} variant="danger">
        Valider mes choix
      </Button>{" "}
      </div>

          <div>{currentReponseTarif}</div>
     
    </div> 
  );
}

export default PConsultation;
