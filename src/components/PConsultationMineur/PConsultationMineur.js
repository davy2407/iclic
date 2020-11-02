import React, { useState } from "react";
import Button from "react-bootstrap/Button";

// import assets
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideIVG from "@assets/pdf/GuideIvgPatiente.pdf";
import ConsentementMineur from "@assets/docx/consentementMineure.docx";

// import css
import "./pConsultationMineur.css";

function PConsultationMineur(props) {

    const [stateGlobal, setStateGlobal] = useState([]);
    const afficheStateFin = () => {
        /// remonte les données au composant parent
        let liste = [];
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
    for (let index = 0; index < liste.length; index++) {
      if (liste[index].titre=="Pas de réponses") {
        alert("Vous n'avez pas répondu à toutes les questions")
        
      }
      else  {
        console.log("OK");
      }
      
    }


    props.onRecup(liste);
    
      }

     /// current reponse
     const [currentDDRSA, setCurrentDDRSA] = useState({
      titre : "Pas de réponses",
      value : ""
    });
  
    const [currentDDRDay, setCurrentDDRDay] =useState({
      titre : "Pas de réponses",
      value : ""
    });
  
    const [currentEcho, setCurrentEcho] = useState({
      titre : "Pas de réponses",
      value : ""
    });
  
    const [ currentAcc, setCurrentAcc] =useState({
      titre : "Pas de réponses",
      value : ""
    });
  
    const [currentMode, setCurrentMode] = useState({
      titre : "Pas de réponses",
      value : ""
    });
  
    const [currentContext, setCurrentContext] = useState({
      titre : "Pas de réponses",
      value : ""
    });
  
    const [currentIST, setCurrentIST] = useState({
      titre : "Pas de réponses",
      value : ""
    });
  
    const [infoSupp, setInfoSupp] = useState({
      titre : "",
      value : ""
    });
  
    const [currentSang, setCurrentSang] = useState({
      titre : "Pas de réponses",
      value : ""
    });
  
    const [currentDossier, setCurrentDossier] = useState({
      titre : "Pas de réponses",
      value : ""
    });
  
    const [ currentConsultation, setCurrentConsultation] = useState({
      titre : "Pas de réponses",
      value : ""
    });
  
    const [ currentInfo, setCurrentInfo]= useState({
      titre : "Pas de réponses",
      value : ""
    });
  
    const [ currentHPV, setCurrentHPV] = useState({
      titre : "Pas de réponses",
      value : ""
    });
  
    const [currentDateHPV, setCurrentDateHPV]= useState({
      titre : "",
      value : ""
    });
  
    const [currentTabac, setCurrentTabac]= useState({
      titre : "Pas de réponses",
      value : ""
    });
  
    const [ currentNbTabac, setCurrentNbTabac] = useState({
      titre : "",
      value : ""
    });



  /////////////////////////////////////////////////////////////

    /// accompagnant
    const recupAccompagnant = (e) => {
        /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
        e.preventDefault();
        let reponse = {
          titre : "Personne accompagnante majeurs ou consentement parental :",
          value : e.target.value
        };
        setCurrentAcc(reponse);
    };
    
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

  const recupDecouverte = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Mode de découverte de la grossesse : ",
      value : e.target.value
    };
    setCurrentMode(reponse);
};

    ///
    
    /// Contexte biopsychosocial favorable 
    const recupContexte = (e) => {
        /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
        e.preventDefault();
        let reponse = {
          titre : "Contexte biopsychosocial favorable : ",
          value : e.target.value
        };
        setCurrentContext(reponse);
    };

    /// warning

    const [consultationPsychoSo, setConsultationPsychoSo] = useState({
        texte: "consultation psychosociale proposée",
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
      const recupIST = (e) => {
        /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
        e.preventDefault();
        let reponse = {
          titre : "Recherche IST : ",
          value : e.target.value
        };
        setCurrentIST(reponse);
    };

    const objetInfo = () => {
        return (
            <div>
                <p>
                Pour des informations supplémentaires,
                 de nombreux site internet peuvent vous renseigner.
                  Pour exemple  info-ist.fr ; ameli.fr/assure/sante/themes/mst-ist.
                </p>
            </div>
        )
    }

    const recupInfoSupp = (e) => {
        e.preventDefault();
        let reponse = {
          titre : "Info supp : ",
          value : "http://www.info-ist.fr/index.html ; https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles"
        };
        setInfoSupp(reponse);

    }
    
    const txtIST = () => {
        return (
            <div>
                <p>
                La HAS recommande un dépistage opportuniste ciblé à toutes les femmes enceintes consultant pour une IVG, sans limite d’âge. Les facteurs de risques ciblés sont : multipartenariat (au moins deux partenaires dans l’année), changement de partenaire récent, individus ou partenaires diagnostiqués avec une autre IST (Neisseria gonorrhoeae, syphilis, VIH, Mycoplasma genitalium), antécédents d’IST, personnes en situation de prostitution, après un viol. 
                </p>
                <p>
                De plus elle doit être systématique chez les femmes de 15 à 25 ans sexuellement actives.
                </p>
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

  /// Prise de sang

  const recuPriseDeSang = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Bilan sanguin prescrit (incluant groupe rhésus 2 déterminations + RAI + ß-HCG quantitatif ) : ",
      value : e.target.value
    };
    setCurrentSang(reponse);
};

const txtPriseSang = () => {
    return (
        <div>
            <p>
            2 typages de groupe sanguin sont nécessaires avant toute IVG médicamenteuse ou chirurgicale.
             Les RAI doivent dater de moins de 48h avant l’acte si négatif jusqu'alors. 
              A noter qu’une injection d’Immunoglobulines anti-D sera nécessaire en cas de
               RAI négatif avant toute IVG ou dans les 72h suivant tout saignement. 
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

const recuGuide = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Contexte de l’IVG évoqués : ",
      value : e.target.value
    };
    setCurrentDossier(reponse);
};

///


/// Consultation psychosociale proposée

const recupConsultation = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Lieux de la consultation psychosociale : ",
      value : "        "
    };
    setCurrentConsultation(reponse);
};

const txtConsultationF = () => {
    return (
        <div>
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
      value : e.target.value
    };
    setCurrentInfo(reponse);
};

const txtIVG = () => {
    return (
        <div>
            
        <p>
           Il est nécessaire d’aborder dès cette consultation, les différentes
          modalités contraceptives. Site possible d’information à transmettre à
          la patiente : Lien{" "}
          <a href="https://www.choisirsacontraception.fr/?gclid=EAIaIQobChMI8_jf5raj7AIVD9d3Ch2qZwTZEAAYASAAEgIlxvD_BwE">
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
const handleChange = (e) => {
    /// recup date frotti
    let reponse = {
      titre : "Date Frotti ou HPV",
      value : e.target.value
    };
    setCurrentDateHPV(reponse);

    
    
  };

  const recupFrotti = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Frottis à jour ou test HPV :  ",
      value : e.target.value
    };
    setCurrentHPV(reponse);
};

const Frotti = () => {
    return (
        <div>
            
        <p>
         Le plan de dépistage national s’applique :
        </p>
        <ul>
            <li>
                <p>
                entre 25 et 30 ans, le dépistage du cancer du col de l’utérus reste fondé
                 sur la réalisation de deux examens cytologiques à un an d’intervalle,
                 puis 3 ans après si le résultat des deux premiers est normal.
                 </p>
                 </li>
            <li>
                <p>
                le test HPV chez les femmes à partir de 30 ans, sera réalisé 3 ans après le dernier examen 
                cytologique dont le résultat était normal ; le rythme entre deux dépistages
                 par test HPV est de 5 ans, dès lors que le résultat du test est négatif. <a target="_blank" href="https://www.has-sante.fr/upload/docs/application/pdf/2019-07/synthese_hpv.pdf">info</a>
                </p>
            </li>
        </ul>
        <br></br>
      </div>
        
    )
};
const [txtFrotti, setTxtFrotti] = useState(() => Frotti());

const [currentTxtFrotti, setCurrentTxtFrotti] = useState("");

const affichageFrotti = () => {
let txtAEnlever = currentTxtFrotti;
let txtAAfficher = txtFrotti;
setCurrentTxtFrotti(txtAAfficher);
setTxtFrotti(txtAEnlever);
};
const [logoAfficheFrotti, setLogoAfficheFrotti] = useState(LightOff);

const [logoNonAfficheFrotti, setLogoNonFrotti] = useState(LightOn);
const changementCouleurSVGFrotti = () => {
let currentLampe = logoAfficheFrotti;
let currentCache = logoNonAfficheFrotti;
setLogoNonFrotti(currentLampe);
setLogoAfficheFrotti(currentCache);
affichageFrotti();
}

///

/// Tabac 


const recupTabac = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Tabac : ",
      value : e.target.value
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
console.log(todayInUTC);
console.log(dateDDRInUTC);


const diffInDays = Math.floor((todayInUTC - dateDDRInUTC) / MS_PER_DAY);
const semaineSAInDays = diffInDays + 14;

const semaineSA = {
  weeks: Math.round(semaineSAInDays /7),
  days: semaineSAInDays % 7,
};

let reponse = {
  titre : "Nombre semaines SA : ",
  value : semaineSA.weeks.toString()

};
let reponse2 = {
  titre : "+ jour : ",
  value : semaineSA.days.toString()

};
console.log(reponse2);
setValueDDRday(reponse2);
setValueDDRweek(reponse);



setDateDDR(Math.round(semaineSA.weeks))
if (Math.round(semaineSA.weeks)>=5&&Math.round(semaineSA.weeks)<7) {
  affichageTxtUrgence();
  setCurrentVerrou("");
  
}
else if (Math.round(semaineSA.weeks)>=7) {
  affichageVerrou();
  
}
else if (Math.round(semaineSA.weeks)<5) {
  setCurrentTextUrgence("");
  setCurrentVerrou("");
  
}


}

const transmissionDDR = () => {
  let jour = valueDDRday;
  let semaineSA = valueDDRweek;
  setCurrentDDRSA(semaineSA);
  setCurrentDDRDay(jour);
}



//// test 

const textDDRIncertaine = ()=>{
  return (
    <div>
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
  
}
const recupEcho = (e) => {
  e.preventDefault();
  let reponse = {
    titre: "Echographie :",
    value: e.target.value,
  };
  setCurrentEcho(reponse);
};

const echographie = () => {
  return (
    <div>
      <p>
      En pratique sur une grossesse a priori toute débutante, 
      attendre le résultat des ß-HCG (dans la journée ou le lendemain)
       pour programmer l’échographie (œuf visualisé si ß-HCG supérieur 1000-1500 UI/L)
        afin qu’elle ne soit pas répétée inutilement. Il existe la possibilité d’attendre
         la 2ème consultation préalable à l’IVG afin de programmer l’échographie de datation
          en fonction du résultat sanguin.
      </p>
      <p>
      Faire apparaître la mention « échographie de datation à réaliser 
      en urgence pour IVG » sur votre ordonnance afin que le forfait IVG soit appliqué,
       (Index pour radiologue IPE).
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

const [nouvelleRecherchePaquet, setNouvelleRecherchePaquet] = useState(0)
 

  const handleChangePaquet = event => {
    setNouvelleRecherchePaquet(event.currentTarget.value);
  };
const handleSubmitPaquet = event => {
  event.preventDefault();
  let reponse = {
    titre : "Nombre Paquet : ",
    value : event.currentTarget.value
  };
  setCurrentNbTabac(reponse);
   
  

  
  
  
};

//////////////////////////////////////////////////////////////////










    return (
        <div className="consultationContainer">
          <h1>
              1ère consultation préalable/1er contact médical
            Mineur : 
            </h1>
          
          <br></br>
          <div className="ConsultationContainer">
          <h2>Personne accompagnante majeurs ou consentement parental</h2>
          <label>
          <Button variant="secondary" value="Oui" onClick={(e) => {
            recupAccompagnant(e);
          }}>Oui</Button>
          <Button variant="secondary" value="Non"  onClick={(e) => {
            recupAccompagnant(e);
          }}>Non</Button>

          </label>
          <input
        onClick={changementCouleurSVGAcc}
        className="Lampe"
        type="image"
        src={logoAfficheAcc}
      />
      <div>{currentTxtAcc}</div>

      <br></br>
          </div>
          <div className="ConsultationContainer">
          <h2>DDR</h2>
      {/* <form >
            <input
                value={nouvelleRecherchePaquet}
                onChange={handleChangePaquet}
                type="text"
                placeholder="Paquet/année"
            />
            <Button value={nouvelleRecherchePaquet} variant="secondary" onClick={(e)=> {
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
      <Button  variant="danger" onClick={transmissionDDR}  >Valider DDR</Button>
      </form>
      
      <br></br>
      <label>
        Date incertaine ?<Button variant="secondary" onClick={()=>{clicDateIncertaine();}}>Oui</Button>
      </label>
      <div>{currentVerrou}</div>
      <div>{currentIncertaine}</div>
      <br></br>
          </div>
          <div className="ConsultationContainer">
          <h2>Prescription échographie de datation</h2>
      <label>
        Prescription :
      <div className="Red">{currentTextUrgence}</div>
        <Button variant="secondary" value="Prescrite" onClick={(e)=>{recupEcho(e)}}>Oui</Button>
        <Button variant="secondary" value="Non prescrite" onClick={(e)=>{recupEcho(e)}}>Non</Button>
      </label>
      
      <input
        onClick={changementCouleurSVGEcho}
        className="Lampe"
        type="image"
        src={logoAfficheEcho}
      />
      <p>{currentInfoEcho}</p>








          </div>
          <div className="ConsultationContainer">
          <h2>Mode de découverte de la grossesse :</h2>

<label>
Mode de découverte de la grossesse :
<Button variant="secondary" value="Test sanguin" onClick={(e) => {
      recupDecouverte(e);
    }}>Test sanguin</Button>
    <Button variant="secondary" value="Test urinaire"  onClick={(e) => {
      recupDecouverte(e);
    }}>Test urinaire</Button>
    <Button variant="secondary" value="Echographie" onClick={(e) => {
      recupDecouverte(e);
    }}>Echographie</Button>
    <Button variant="secondary" value="Clinique"  onClick={(e) => {
      recupDecouverte(e);
    }}>Clinique</Button>
</label> 


          </div>
          <div className="ConsultationContainer">
          <h2>Contexte biopsychosocial favorable</h2>
      <label>
      Contexte biopsychosocial favorable :
      <Button variant="secondary" value="Oui" onClick={(e) => {
            recupContexte(e);
          }}>Oui</Button>
          <Button variant="secondary" value="Non"  onClick={(e) => {
              afficheConsultation();
            recupContexte(e);
          }}>Non</Button>
      </label>
      <p className={affichageWarningConsultation.className}>
        {affichageWarningConsultation.texte}
      </p>
      <br></br>


          </div>
          <div className="ConsultationContainer">
          <h2>Recherche IST +/- antibio-prophylaxie </h2>
      <label>
      Recherche IST +/- antibio-prophylaxie 
      <Button variant="secondary" value="Oui" onClick={(e) => {
            recupIST(e);
          }}>Oui</Button>
          <Button variant="secondary" value="Non"  onClick={(e) => {
            recupIST(e);
          }}>Non</Button>

      </label>
      <p>
          De nombreuses sources numériques existent pour l’information aux patient(es)
           des IST ainsi que de ces risques<a href="https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles" target="_blank">Ameli IST</a>, <a href="http://www.info-ist.fr/index.html" target="_blank">ISt-info</a>.
        </p>
        <br></br>

        <label>
          Vous desirez plus d'informations à transmettre ? 
          <Button variant="secondary" value="Oui" onClick={(e)=>{recupInfoSupp(e);}}>Oui</Button>
          <Button variant="secondary" value="Non" onClick={(e)=>{recupInfoSupp(e);}}>Non</Button>
        </label>
      <input
        onClick={changementCouleurSVGIST}
        className="Lampe"
        type="image"
        src={logoAfficheIST}
      />
      <p>{currentTxtIST}</p>
      <br></br>

          </div>
          <div className="ConsultationContainer">
          <h2>Prise de sang (Groupe sanguin 2 déterminations, RAI, ß-HCG quantitatif)</h2>

<label>
    Prise de sang :
    <Button variant="secondary" value="Oui" onClick={(e)=>{recuPriseDeSang(e);}}>Oui</Button>
    <Button variant="secondary" value="Non" onClick={(e)=>{recuPriseDeSang(e);}}>Non</Button>

</label>
<input
  onClick={changementCouleurSVGPriseDeSang}
  className="Lampe"
  type="image"
  src={logoAfficheSang}
/>
<p>{currentTxtSang}</p>
<br></br>

          </div>
          <div className="ConsultationContainer">
          <h2>Dossier guide IVG remis ou à défaut feuille d’information dédiées : </h2>
      <label>
      <Button variant="secondary" value="Oui" onClick={(e)=>{recuGuide(e);}}>Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recuGuide(e);}}>Non</Button>

      </label>
      <p><a href={GuideIVG} target="_blank">
        PDF Guide IVG
      </a></p>
          </div>
          <div className="ConsultationContainer">
          <h2>Consultation psychosociale proposée</h2>
      <label>
      Consultation psychosociale proposée
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupConsultation(e);}}>Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recupConsultation(e);}}>Non</Button>
      </label>
      <p className={affichageWarningConsultation.className}>
        {affichageWarningConsultation.texte}
      </p>
      <input
        onClick={changementCouleurSVGConsultation}
        className="Lampe"
        type="image"
        src={logoAfficheConsultation}
      />
      <p>{currentTxtConsultation}</p>
          </div>
          <div className="ConsultationContainer">
          <h2>Information contraception post-IVG</h2>
      <label>
      Information contraception post-IVG
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupPostIVG(e);}}>Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recupPostIVG(e);}}>Non</Button>
      </label>
      <input
        onClick={changementCouleurSVGPostIVG}
        className="Lampe"
        type="image"
        src={logoAffichePostIVG}
      />
      <p>{currentTxtPostIVG}</p>
          </div>
          <div className="ConsultationContainer">
          <h2>Frottis à jour ou test HPV</h2>
      <label>
      Frottis à jour
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupFrotti(e);}}>Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recupFrotti(e);}}>Non</Button>
        <Button variant="secondary" value="Non Concernée" onClick={(e)=>{recupFrotti(e);}}>Non Concernée</Button>
     </label>
     <label for="dateFrotti">Date : </label>
      <input type="date" name="dateFrotti" id="dateFrotti" onChange={(e)=>{handleChange(e);}}></input>
      <br></br>
     <input
        onClick={changementCouleurSVGFrotti}
        className="Lampe"
        type="image"
        src={logoAfficheFrotti}
      />
      <p>{currentTxtFrotti}</p>
          </div>
          <div className="ConsultationContainer">
          <h2>Tabac</h2>
      <label>
          Tabac : 
          <Button variant="secondary" value="Oui" onClick={(e)=>{recupTabac(e);}}>Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recupTabac(e);}}>Non</Button>

      </label>
      <form >
            <input
                value={nouvelleRecherchePaquet}
                onChange={handleChangePaquet}
                type="text"
                placeholder="Paquet/année"
            />
            <Button value={nouvelleRecherchePaquet} variant="secondary" onClick={(e)=> {
              handleSubmitPaquet(e)
            }}>Confirmer</Button>
        </form>
          </div>
     







      

      
      

      


      

      
      




      
      


      
      


      


      <a href={ConsentementMineur} target="_blank ">consentement Mineure pdf</a>
      <br></br>



      <Button
        onClick={afficheStateFin}
        variant="secondary"
      >
        Valider mes choix
      </Button>{" "}
      <Button variant="danger" onClick={props.onSuite}>
        Tarification

      </Button>









      












          
          
        </div>
      );

}

export default PConsultationMineur;