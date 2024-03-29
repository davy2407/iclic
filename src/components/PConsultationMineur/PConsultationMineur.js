import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import VerrouUn from "@components/VerrouUn";


// import assets
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideIVG from "@assets/pdf/GuideIvgPatiente.pdf";
import AccordMaj from "@assets/pdf/consentementMineure.pdf";


// import css 
import "./pConsultationMineur.css";
import newPdfIcon from "@assets/images/PDFicon.svg";



function PConsultationMineur(props) {

  useEffect(() => {
    window.scrollTo(0,0);
 }, [])

  const submitHandler = (e) => {
    e.preventDefault();
}


////////icon

const [ classIcon, setClassIcon] = useState("iconPDFNew");

const [ hoverIcon, setHoverIcon] = useState("iconPDFNewHover");

const [ iconIVG, setIconIVG] = useState(classIcon);

const [iconRefe, setIconRefe] = useState(classIcon);


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


const [backgroundBaseTabac, setBackgroundBaseTabac] = useState(backgroundBase);


 

    const afficheStateFin = () => {
        /// remonte les données au composant parent
        let liste = [];
        liste.push(currentReco);
        liste.push(currentAcc);
    liste.push(currentDDRSA);
    liste.push(currentDDRDay);
    liste.push(currentEcho);
    
    liste.push(currentMode);
    liste.push(currentContext);
    liste.push(currentIST);
    liste.push(infoSupp);
    liste.push(currentSang);
    liste.push(currentDossier);
    liste.push(currentConsultation);
    liste.push(currentInfo);
    
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
    
      }
      /////////

      const recupRadioAcc = (e) => {
        let reponse = {
          titre: "Personne accompagnante majeurs ou consentement parental : "+e.target.value+" ; identité : ",
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

      const recupRadioContexte = (e) => {
        let reponse = {
          titre: "Contexte Biopsychosocial favorable : ",
          value: e.target.value,
          reponse : 1
        };
        setCurrentContext(reponse);
        setBackgroundBaseContexte(backgroundSelect);
       
      };

      const recupRadioPsycho = (e) => {
        let reponse = {
          titre : "Consultation psycho-sociale proposée : ",
          value : e.target.value,
          reponse : 1
        };
        setCurrentConsultation(reponse);
        setBackgroundBasePsycho(backgroundSelect);
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

      const recupRadioViolence = () => {
        setBackgroundBaseViolence(backgroundSelect);

        
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


      ///// recup radio
      const recupRadioEcho = (e) => {
        let reponse = {
          titre: "Echographie :",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentEcho(reponse);
        setBackgroundBasePrescri(backgroundSelect);
        
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

      const recupRadioContra = (e) => {
        let reponse = {
          titre : "Information contraception postIVG : ",
          value : e.target.value,
          reponse : 1
        };
        setCurrentInfo(reponse);
        setBackgroundBaseInfo(backgroundSelect);
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
    


 
     /// current reponse


     const [currentReco, setCurrentReco] = useState({
      titre : "",
      value : "",
      reponse : 1
    });



     const [currentDDRSA, setCurrentDDRSA] = useState({
      titre : "Pas de réponses",
      value : "",
      reponse : 0
    });
  
    const [currentDDRDay, setCurrentDDRDay] =useState({
      titre : "",
      value : "",
      reponse : 1
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
  
    const [currentMode, setCurrentMode] = useState({
      titre : "Pas de réponses",
      value : "",
      reponse : 0
    });
  
    const [currentContext, setCurrentContext] = useState({
      titre : "Pas de réponses",
      value : "",
      reponse : 0
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
  
    const [currentDossier, setCurrentDossier] = useState({
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

    //////////////////// boutton

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
  setCurrentCovidPsycho(()=>PsychoCovid());
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





const PsychoCovid = () => {
  return (
    <p>
      Par visioconférence ou à défaut par téléphone.<br></br> 
La personne qualifiée en conseil conjugal doit remettre à la femme mineure une attestation de consultation (e-mail possible). 
    </p>
  )
};


const [currentCovidPsycho, setCurrentCovidPsycho] = useState();










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
       Fin de consultation 
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

    /// accompagnant
    
    
    const txtAccompagnant = () => {
        return (
            <div>
                <p>
                Dans le cas d’une jeune fille avec personne majeure accompagnante différente
                 des parents ou du représentant légal, il convient de prévenir de la nécessité
                  d’accompagnement par la même personne de son choix au cours des différentes
                   consultations afin de permettre un soutien moral efficient.
                </p>
            </div>
        )
    };
    const [txtAcc, setTxtAcc] = useState(() => txtAccompagnant());

  const [currentTxtAcc, setCurrentTxtAcc] = useState("");

  const affichageAcc = () => {
    let txtAEnlever = currentTxtAcc;
    let txtAAfficher = txtAcc;
    setCurrentTxtAcc(txtAAfficher);
    setTxtAcc(txtAEnlever);
  };
  const [logoAfficheAcc, setLogoAfficheAcc] = useState(LightOff);

  const [logoNonAfficheAcc, setLogoNonAfficheAcc] = useState(LightOn);
  const changementCouleurSVGAcc = () => {
    let currentLampe = logoAfficheAcc;
    let currentCache = logoNonAfficheAcc;
    setLogoNonAfficheAcc(currentLampe);
    setLogoAfficheAcc(currentCache);
    affichageAcc();
  }
  ///

  ///Mode decouverte grossesse

 

    ///
    
    /// Contexte biopsychosocial favorable 
    
    /// warning

    const [consultationPsychoSo, setConsultationPsychoSo] = useState({
        texte: "consultation psycho-sociale proposée",
        className: "Red",
      });
    
      const [
        affichageWarningConsultation,
        setAffichageWarningConsultation,
      ] = useState({ texte: "", className: "" });
    
      const afficheConsultation = () => {
        setAffichageWarningConsultation(consultationPsychoSo);
      };


      ///

      /// Bloc IST 
     

    

    const recupInfoSupp = (e) => {
        e.preventDefault();
        let reponse = {
          titre : "Info supp : ",
          value : "http://www.info-ist.fr ; https://www.ameli.fr/assure/sante",
          reponse : 1
        };
        setInfoSupp(reponse);

    }
    
    const txtIST = () => {
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
        )
    };
    const [txtBaseIST, setTxtBaseIST] = useState(() => txtIST());

  const [currentTxtIST, setCurrentTxtIST] = useState("");

  const affichageIST = () => {
    let txtAEnlever = currentTxtIST;
    let txtAAfficher = txtBaseIST;
    setCurrentTxtIST(txtAAfficher);
    setTxtBaseIST(txtAEnlever);
  };
  const [logoAfficheIST, setLogoAfficheIST] = useState(LightOff);

  const [logoNonAfficheIST, setLogoNonAfficheIST] = useState(LightOn);
  const changementCouleurSVGIST = () => {
    let currentLampe = logoAfficheIST;
    let currentCache = logoNonAfficheIST;
    setLogoNonAfficheIST(currentLampe);
    setLogoAfficheIST(currentCache);
    affichageIST();
  }

  
  ///

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

  /// Prise de sang



const txtPriseSang = () => {
    return (
        <div className="BulleInfo">
            <p>
            Injection d’Immunoglobulines anti-D nécessaire en cas de rhésus négatif et de rhésus positif ou inconnue chez le partenaire, avant toute IVG ou dans les 72h suivant tout saignement. 
            </p>
        </div>
    )
};
const [txtSang, setTxtSang] = useState(() => txtPriseSang());

const [currentTxtSang, setCurrentTxtSang] = useState("");

const affichageSang = () => {
let txtAEnlever = currentTxtSang;
let txtAAfficher = txtSang;
setCurrentTxtSang(txtAAfficher);
setTxtSang(txtAEnlever);
};
const [logoAfficheSang, setLogoAfficheSang] = useState(LightOff);

const [logoNonAfficheSang, setLogoNonAfficheSang] = useState(LightOn);
const changementCouleurSVGPriseDeSang = () => {
let currentLampe = logoAfficheSang;
let currentCache = logoNonAfficheSang;
setLogoNonAfficheSang(currentLampe);
setLogoAfficheSang(currentCache);
affichageSang();
}

///


/// Dossier guide IVG remis ou à défaut feuille d’information dédiées :



///


/// Consultation psychosociale proposée

const recupConsultation = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Lieux de la consultation psycho-sociale : ",
      value : "        ",
      reponse : 1
    };
    setCurrentConsultation(reponse);
};

const txtConsultationF = () => {
    return (
        <div className="BulleInfo">
            <p>
            Un entretien psycho-social, fait par une personne qualifiée en conseil conjugal, 
            est obligatoire en cas de patiente mineure. Il a lieu entre les deux consultations
             préalables à l’IVG. Un délai de 48 heures est à respecter entre la consultation
              psycho-sociale et la deuxième consultation préalable à l’IVG. 
            </p>
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
        </div>
    )
};
const [txtConsultation, setTxtConsultation] = useState(() => txtConsultationF());

const [currentTxtConsultation, setCurrentTxtConsultation] = useState("");

const affichageConsultation = () => {
let txtAEnlever = currentTxtConsultation;
let txtAAfficher = txtConsultation;
setCurrentTxtConsultation(txtAAfficher);
setTxtConsultation(txtAEnlever);
};
const [logoAfficheConsultation, setLogoAfficheConsultation] = useState(LightOff);

const [logoNonAfficheConsultation, setLogoNonAfficheConsultation] = useState(LightOn);
const changementCouleurSVGConsultation = () => {
let currentLampe = logoAfficheConsultation;
let currentCache = logoNonAfficheConsultation;
setLogoNonAfficheConsultation(currentLampe);
setLogoAfficheConsultation(currentCache);
affichageConsultation();
}


///

/// Information contraception post-IVG

const recupPostIVG = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Information contraception postIVG : ",
      value : e.target.value,
      reponse : 1
    };
    setCurrentInfo(reponse);
};

const txtIVG = () => {
    return (
        <div className="BulleInfo">
            
        <p>
         Aborder dès cette consultation, les différentes modalités contraceptives. Site d’information à transmettre à la patiente :
        </p>

        <p>
        <a rel="noreferrer noopener" href="https://www.choisirsacontraception.fr/?gclid=EAIaIQobChMI8_jf5raj7AIVD9d3Ch2qZwTZEAAYASAAEgIlxvD_BwE">
            choisirsacontraception.com
          </a>
        </p>
        <p>
        Toute mineure depuis le 1er janvier 2020 peut bénéficier d'une contraception gratuite. Quel que soit son âge, elle bénéficie d'une prise en charge complète par l'Assurance Maladie et sans avance de frais.

        </p>
        <br></br>
      </div>
        
    )
};
const [txtPostIVG, setTxtPostIVG] = useState(() => txtIVG());

const [currentTxtPostIVG, setCurrentTxtPostIVG] = useState("");

const affichagePostIVG = () => {
let txtAEnlever = currentTxtPostIVG;
let txtAAfficher = txtPostIVG;
setCurrentTxtPostIVG(txtAAfficher);
setTxtPostIVG(txtAEnlever);
};
const [logoAffichePostIVG, setLogoAffichePostIVG] = useState(LightOff);

const [logoNonAffichePostIVG, setLogoNonPostIVG] = useState(LightOn);
const changementCouleurSVGPostIVG = () => {
let currentLampe = logoAffichePostIVG;
let currentCache = logoNonAffichePostIVG;
setLogoNonPostIVG(currentLampe);
setLogoAffichePostIVG(currentCache);
affichagePostIVG();
}


/// frotti et date 
// const handleChange = (e) => {
//     /// recup date frotti
//     let reponse = {
//       titre : "Date Frotti ou HPV",
//       value : e.target.value
//     };
//     setCurrentDateHPV(reponse);

    
    
//   };

//   const recupFrotti = (e) => {
//     /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
//     e.preventDefault();
//     let reponse = {
//       titre : "Frottis à jour ou test HPV :  ",
//       value : e.target.value
//     };
//     setCurrentHPV(reponse);
// };

// const Frotti = () => {
//     return (
//         <div className="BulleInfo">
            
//         <p>
//          Le plan de dépistage national s’applique :
//         </p>
//         <ul>
//             <li>
//                 <p>
//                 entre 25 et 30 ans, le dépistage du cancer du col de l’utérus reste fondé
//                  sur la réalisation de deux examens cytologiques à un an d’intervalle,
//                  puis 3 ans après si le résultat des deux premiers est normal.
//                  </p>
//                  </li>
//             <li>
//                 <p>
//                 le test HPV chez les femmes à partir de 30 ans, sera réalisé 3 ans après le dernier examen 
//                 cytologique dont le résultat était normal ; le rythme entre deux dépistages
//                  par test HPV est de 5 ans, dès lors que le résultat du test est négatif. <a target="_blank" href="https://www.has-sante.fr/upload/docs/application/pdf/2019-07/synthese_hpv.pdf">info</a>
//                 </p>
//             </li>
//         </ul>
//         <br></br>
//       </div>
        
//     )
// };
// const [txtFrotti, setTxtFrotti] = useState(() => Frotti());

// const [currentTxtFrotti, setCurrentTxtFrotti] = useState("");

// const affichageFrotti = () => {
// let txtAEnlever = currentTxtFrotti;
// let txtAAfficher = txtFrotti;
// setCurrentTxtFrotti(txtAAfficher);
// setTxtFrotti(txtAEnlever);
// };
// const [logoAfficheFrotti, setLogoAfficheFrotti] = useState(LightOff);

// const [logoNonAfficheFrotti, setLogoNonFrotti] = useState(LightOn);
// const changementCouleurSVGFrotti = () => {
// let currentLampe = logoAfficheFrotti;
// let currentCache = logoNonAfficheFrotti;
// setLogoNonFrotti(currentLampe);
// setLogoAfficheFrotti(currentCache);
// affichageFrotti();
// }

// ///

/// Tabac 


const recupTabac = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Tabac : ",
      value : e.target.value,
      reponse : 1
    };
    setCurrentTabac(reponse);
};


/////// bloc DDR 
const [valueDDRday, setValueDDRday] = useState();

const [valueDDRweek, setValueDDRweek] = useState();
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

  const verrou = () => {
    /// retourne le texte mois de 7 semaines si >12
    return (
      <div>
        
        
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

  const [Verrou,setVerrou] = useState(()=> verrou());
 

const [currentVerrou, setCurrentVerrou] = useState("");

const affichageVerrou = () => {
    let txtAEnlever = currentVerrou;
    let txtAAfficher = Verrou;
    setCurrentVerrou(txtAAfficher);
    
  };
  


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
const semaineSAInDays = diffInDays;

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
  setCurrentVerrou("");

  
}
else if (Math.round(semaineSA.weeks)==9&&Math.round(semaineSA.days)<=0) {
  affichageTxtUrgence();
  setCurrentVerrou("");

  
}
else if (Math.round(semaineSA.weeks)==9&&Math.round(semaineSA.days)>0) {
  handleChangeVerrou();
  
}
else if (Math.round(semaineSA.weeks)>9) {
  handleChangeVerrou();
  
}
else if (Math.round(semaineSA.weeks)<5) {
  setCurrentTextUrgence("");
  setCurrentVerrou("");
  
}


}





//// test 

const textDDRIncertaine = ()=>{
  return (
    <div>
      <p className="Red">
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


const echographie = () => {
  return (
    <div className="BulleInfo" >

<p>
        Grossesse précoce, attendre le résultat des ß-HCG pour date d'échographie (œuf visualisé si ß-HCG supérieur à 1000-1500 UI/L).
Possibilité de prescription échographie lors de la 2ème consultation préalable à l’IVG selon résultat sanguin.
        </p>
      <p>
      « Préciser faire « échographie de datation à réaliser en urgence ; IPE  » sur votre ordonnance (Index pour radiologue « Vérification échographique pré-IVG »). »
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

////////////////////////////////////////////////////////////////////


////////// nb tabac

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



//////////////////////////////////////////////////////////////////


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





 

    return (
        <div className="consultationContainer">
        <VerrouUn
        show={verrouShow}
        onHide={() => setVerrouShow(false)} 
        onData={idVerrou}



      ></VerrouUn>
          <h1>
              Première consultation préalable/Premier contact médical
            Mineure : 
            </h1>
          
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




          <div className={backgroundBaseAcc}>
          <h2>Personne accompagnante majeure ou consentement parental obliagtoire :</h2>

          
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
        onClick={handleChangeVerrou}
      />
      </div>
      </Form>
      <div className="docContainer">
      <p> <a className="NewDocContainer"  href={AccordMaj} target="_blank">
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
      </a>          </p>

      </div>
      

          </label>
          

      <br></br>
          </div>
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
      <div>{currentVerrou}</div>
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
      <div className="Red">{currentTextUrgence}</div>
      
      <input
        onClick={changementCouleurSVGEcho}
        className="Lampe"
        type="image"
        src={logoAfficheEcho}
      />
      <div  className="ContainerBulle">{currentInfoEcho}</div>








          </div>
          <div className={backgroundBaseMode}>
          <h2>Mode de découverte de la grossesse :</h2>

<label>

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
</label> 


          </div>
          <div className={backgroundBaseContexte}>
          <h2>Contexte biopsychosocial favorable</h2>
      <label>
     
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
      />
      </div>
      </Form>
      </label>
      <p className={affichageWarningConsultation.className}>
        {affichageWarningConsultation.texte}
      </p>
      <br></br>


          </div>
          <div className={backgroundBaseIST}>
          <h2>Recherche IST +/- antibio-prophylaxie </h2>
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
      <input
        onClick={changementCouleurSVGIST}
        className="Lampe"
        type="image"
        src={logoAfficheIST}
      />
      <div className="ContainerBulle">{currentTxtIST}</div>
      <br></br>

          </div>
          <div className={backgroundBaseSang}>
          <h2> Prescription prise de sang (Groupe sanguin 2 déterminations, ß-HCG quantitatif)</h2>

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
<input
  onClick={changementCouleurSVGPriseDeSang}
  className="Lampe"
  type="image"
  src={logoAfficheSang}
/>
<div className="ContainerBulle">{currentTxtSang}</div>
<br></br>

          </div>
          <div className={backgroundBaseIVG}>
          <h2>Dossier guide IVG remis ou à défaut feuille d’information dédiées : </h2>
      <label>
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

      </label>

      <div className="docContainer">
      <p> <a className="NewDocContainer"  href={GuideIVG} target="_blank">
      <input
      alt="Image PDF Dossier Guide IVG"
      className={iconIVG}
      onMouseEnter={()=>{
        setIconIVG(hoverIcon);
        
      }}
      onMouseOut={()=>{
        setIconIVG(classIcon);
      }}
        type="image"
        src={newPdfIcon}
      />
        PDF Guide IVG
      </a>
          </p>

      </div>





          </div>
          <div className={backgroundBasePsycho}>
          <h2>Consultation psycho-sociale obligatoire :</h2>
      <label>
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
        onClick={handleChangeVerrou}
      />
      </div>
      </Form>
      </label>
      <p className={affichageWarningConsultation.className}>
        {affichageWarningConsultation.texte}
      </p>
    <div>{currentCovidPsycho}</div>
      <input
        onClick={changementCouleurSVGConsultation}
        className="Lampe"
        type="image"
        src={logoAfficheConsultation}
      />
      <div className="ContainerBulle">{currentTxtConsultation}</div>
          </div>
          <div className={backgroundBaseViolence}>
      <h2>Violences subies en rapport ou non avec l’acte :</h2>
      <div onChange={(e)=>{recupRadioViolence(e);}}>
      <div>
      <input id="Voui" type="radio" value="Oui" name="violence" /> 
      <label for="Voui">Oui</label>
      </div>
      <div>
      <input id="Vnon" type="radio" value="Non" name="violence" /> 
      <label for="Vnon">Non</label>
      </div>

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
          <div className={backgroundBaseInfo}>
          <h2>Information contraception post-IVG</h2>
      <label>
      
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
      </Form>      </label>
      <input
        onClick={changementCouleurSVGPostIVG}
        className="Lampe"
        type="image"
        src={logoAffichePostIVG}
      />
      <div className="ContainerBulle">{currentTxtPostIVG}</div>
          </div>
    
          <div className={backgroundBaseTabac}>
          <h2>Tabac</h2>
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

      <form onSubmit={(e)=>{
        
        submitHandler(e);
      
     }}>
            <input
                value={nouvelleRecherchePaquet}
                onChange={handleChangePaquet}
                type="text"
                placeholder="Paquet/année"
            />
            <Button variant="danger" className={btnOuiViolenceBase} value={nouvelleRecherchePaquet} variant="danger" onClick={(e)=> {
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



      <Button
      className={btnOuiViolenceBase} onClick={(e)=>{afficheStateFin();
        changeCouleurBoutonViolence(e);}} variant="danger"
      >
        Valider mes choix
      </Button>{" "}
      


      <div>{currentReponseTarif}</div>








      












          
          
        </div>
      );

}

export default PConsultationMineur;