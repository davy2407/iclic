import React, { useState } from "react";
import Button from "react-bootstrap/Button";

// import assets
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideIVG from "@assets/pdf/GuideIvgPatiente.pdf";

// import css
import "./pConsultation.css";

/// feuille de premiere consultation, patiente majeure non anonyme ne venant pas du 3d
function PConsultation(props) {
  /// Bloc Fonctionnel

  const [couleurBouttonBase, setCouleurBouttonBase] = useState("secondary");

  const [couleurBouttonSel, setCouleurBouttonSel] = useState("danger");


  /// function permettant la liaison avec la function onProps qui remonte les donnees au composant parent.
  /// liste des differents state , manque ddr et echographie
  /// personneAccFin,modeDecouverteFin,constexteBioPsyFin,rechercheIstFin,bilanSanguinFin
  ///,guideIVGFin,consultationPsyFin,contraPostIVGFin,frottiFin,dateFrottiFin,tabacFin,nBTabacFin,infoSupp
  ///ORDRE DES PARAMETRES DONNE CI DESSUS
  const liaison = () => {


  }


  /// Bloc contenant les state à récupérer à la fin de la consultation
  const [globalStateFin,setGlobalStateFin] =useState([]);
  
  const afficheStateFin = () => {
    console.log("state de fin va suivre");
    for (let index = 0; index < globalStateFin.length; index++) {
      console.log(globalStateFin[index]);
      
    }
    props.onRecup(globalStateFin);

  }


  const [dateDDRFin, setDateDDRFin] = useState({});

  const [personneAccFin, setPersonneAccFin] = useState({});

  const recupAccompagnant = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "accompagant",
      value : e.target.value
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    setPersonneAccFin(reponse);
    console.log("accompagnant " + reponse.value);
    
    
  };

  const [modeDecouverteFin, setModeDecouverte] = useState({});

  const recupModeDecouverte = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "Mode de découverte de la grossesse :",
      value : e.target.value
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    setModeDecouverte(reponse);
    
    
  };

  const [constexteBioPsyFin, setContexteBioPsyFin] = useState({});

  const recupContexteBio = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "Contexte Bio",
      value : e.target.value
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    setContexteBioPsyFin(reponse);
    console.log("Contexte biopsychosocial favorable :" + reponse.value);
  };

  const [rechercheIstFin, setRechercheIstFin] = useState({});

  const recupIST = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "Recherche IST : ",
      value : e.target.value
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    setRechercheIstFin(reponse);
    console.log("IST " + reponse.value);
  };

  const [bilanSanguinFin, setBilanSanguinFin] = useState({});

  const recupBilan = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "Bilan Sanguin",
      value : e.target.value
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    setBilanSanguinFin(reponse);
    console.log("Bilan sanguin prescrit (incluant groupe rhésus 2 déterminations + RAI + BHCG quantitatif ) :" + reponse.value);
  };

  const [guideIVGFin, setGuideIVGFin] = useState({});

  const recupInfoGuideIVG = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "Contexte de l’IVG évoqués :",
      value : e.target.value
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    setGuideIVGFin(reponse);
    console.log("contexte de l'IVG evoqué : " + reponse.value);
  };



  const [consultationPsyFin, setConsultationPsyFin] = useState({});

  const recupConsultationPsy = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "Consultation psychosociale proposée :",
      value : e.target.value
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    setConsultationPsyFin(reponse);
    console.log("consultation proposé " + reponse.value);
  };

  const [contraPostIVGFin, setContraPostIVGFin] = useState({});

  const recupinfoPostIVG = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "Information contraception postIVG : ",
      value : e.target.value
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    setContraPostIVGFin(reponse);
    console.log("info post ivg " + reponse.value);
  };

  const [frottiFin, setFrottiFin] = useState({});

  const recupFrotti = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "Frottis à jour :",
      value : e.target.value
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    setFrottiFin(reponse);
    console.log("type frotti " + reponse.value);
  };

  const [dateFrottiFin, setDateFrottiFin] = useState({});

  const handleChange = (e) => {
    /// recup date frotti
    let reponse = {
      titre : "Date Frotti",
      value : e.target.value
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);

    console.log("date frotti : "+reponse.value);
    setDateFrottiFin(reponse);
    
  };

  const [tabacFin, setTabacFin] = useState({});
  const recupTabac = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "Tabac",
      value : e.target.value
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    setTabacFin(reponse);
    console.log("Fumeuse : " + reponse.value);
  };

  const [nBTabacFin, setNbTabacFin] = useState({});

  const recupNombre = (e) => {
    let reponse = {
      titre : "Nombre Paquet",
      value : e.target.value
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    console.log("test nb : "+nBTabacFin.value);

    console.log("nb paquet : "+reponse.value);
    setNbTabacFin(reponse);

  }
  
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
  let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
   

    console.log("nb paquet : "+reponse.value);
    setNbTabacFin(reponse);
  

  
  
  setNouvelleRecherchePaquet(0);
};

  const [infoSupp, setInfoSupp] = useState({});

  const recupInfoSupp = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "Si ressource cochée oui :",
      value : e.target.value
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    setInfoSupp(reponse);
    console.log("info supp : " + reponse.value);

  }

  /// info IST
  const returnInfoIST = () => {
    return (
      <div>
        <p>
          La HAS recommande un dépistage opportuniste ciblé à toutes les
           femmes enceintes consultant pour une IVG, sans limite d’âge.
        </p>
        <br></br>
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
        
        <br></br>
        
        <br></br>
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

  const [valueDecouverteGro, setDecouverteGro] = useState(
    /// state bouton select ( ne fonctionne pas comme value de base actuellement )
    { value: "Selectionner" }
  );

  /// Bloc consultation Biopsychosocial
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

  /// Consultation psychosociale
  const returnInfo = () => {
    return (
      <div>
        <p>
          {" "}
           Elle n’est pas obligatoire pour les personnes majeures. Il existe
          l’obligation légale de le proposer. La patiente a un délai de 48h de
          réflexion avant de signer le consentement après cette consultation.
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
  let newDate = new Date();
  console.log(newDate);
  const [recuptDateDDR, setRecuptDateDDR] = useState(newDate);

  const changeDate = () => {
    let NDate = new Date();
    setRecuptDateDDR(NDate);
    console.log(NDate);
  };

  const [dateDDR, setDateDDR] = useState({});

  /// Bloc information contraception post IVG

  const returnInfoPostIVG = () => {
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

  const returnInfoFrotti = () => {
    return (
      <div>
        <p>
           Le plan de dépistage national s’applique, pour toute femme
          immunocompétente de 25 à 65 ans.
        </p>
        <a href="https://www.ameli.fr/assure/sante/themes/cancer-col-uterus/frottis-depistage">
          https://www.ameli.fr/assure/sante/themes/cancer-col-uterus/frottis-depistage
        </a>
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

  return (
    <div className="consultationContainer">
      <h1>1ère consultation préalable/1er contact médical Majeure Anonyme </h1>
      <p>{props.onTexte}</p>
      <br></br>
      
      <br></br>
      <p>
        Pour les femmes majeures, l’avortement anonyme est relatif. En effet,
        seules les IVG réalisées en établissement de santé pratiquant le tiers
        payant peuvent être pratiquées de manière confidentielle. La loi
        relative à l’interruption volontaire de grossesse dispose que : « Seule
        la réalisation d’une IVG dans un établissement de santé qui assure la
        dispense d’avance des frais permet de garantir un véritable anonymat de
        l’intervention ». Lien n°12
      </p>
      <br></br>
      <h2>DDR</h2>
      <label for="DDR">DDR « date des dernières règles » : </label>
      <input
        type="date"
        name="DDR"
        id="DDR"
        defaultValue={recuptDateDDR}
      ></input>
      <br></br>
      <label>
        Date incertaine ?<Button variant="secondary">Oui</Button>
      </label>
      <br></br>
      
      <br></br>
      <h2>Prescription échographie de datation</h2>
      <label>
        Prescription :
        <Button variant="secondary" value="Oui">Oui</Button>
        <Button variant="secondary" value="Non">Non</Button>
      </label>
      
      <input
        onClick={changementCouleurSVGEcho}
        className="Lampe"
        type="image"
        src={logoAfficheEcho}
      />
      <p>{currentInfoEcho}</p>
      <br></br>
      <h2>Personne accompagnante</h2>
      <label>
        Personne accompagnante
        <Button
          variant="secondary"
          value="Oui"
          onClick={(e) => {
            recupAccompagnant(e);
          }}
        >
          Oui
        </Button>
        <Button
          variant="secondary"
          value="Non"
          onClick={(e) => {
            recupAccompagnant(e);
          }}
        >
          Non
        </Button>
      </label>
      <br></br>
      <h2>Mode de découverte de la grossesse </h2>
      <br></br>
      <label>
        Mode de découverte de la grossesse :
        <Button
          value="Test Urinaire"
          variant="secondary"
          onClick={(e) => {
            recupModeDecouverte(e);
          }}
        >
          Test urinaire
        </Button>
        <Button
          value="Test Sanguin"
          variant="secondary"
          onClick={(e) => {
            recupModeDecouverte(e);
          }}
        >
          Test sanguin
        </Button>
        <Button
          value="Échographie"
          variant="secondary"
          onClick={(e) => {
            recupModeDecouverte(e);
          }}
        >
          Échographie
        </Button>
        <Button
          value="Clinique"
          variant="secondary"
          onClick={(e) => {
            recupModeDecouverte(e);
          }}
        >
          Clinique
        </Button>
        {/* <select defaultValue={valueDecouverteGro} id="decouverteGro" onChange={handleChange}>
                                <option value="Test urinaire">Test urinaire</option>
                                <option value="Test sanguin">Test sanguin</option>
                                <option value="Échographie">Échographie</option>
                                <option value="Clinique">Clinique</option>
                            </select> */}
      </label>
      <h2>Contexte biopsychosocial favorable :</h2>
      {/* Bloc a finir  */}
      <br></br>
      <Button variant="secondary"
      value="Oui"
      onClick={(e) => {
        recupContexteBio(e);
      }}>Oui</Button>
      <br></br>
      <Button value="Non" variant="secondary" onClick={(e)=>{afficheConsultation();
      recupContexteBio(e);}}>
        Non
      </Button>
      <br></br>
      <p className={affichageWarningConsultation.className}>  
        {affichageWarningConsultation.texte}
      </p>
      <h2>Recherche IST +/- antibio-prophylaxie</h2>
      <br></br>
      <label>
        Recherche IST +/- antibio-prophylaxie
        <Button value="Oui" variant="secondary"
      onClick={(e) => {
        recupIST(e);
      }}>Oui</Button>
        <Button value="Non" variant="secondary" onClick={(e)=>{recupIST(e);}}>Non</Button>
      </label>
      <br></br>
      <input
        onClick={changementCouleurSVGIST}
        className="Lampe"
        type="image"
        src={logoAfficheIST}
      />
      <div>  {currentInfoIST}</div>
      {/* Bloc a finir */}
      <br></br>
      <h2>
        Prise de sang (Groupe sanguin : 2 déterminations, RAI, -HCG
        quantitatif) 
      </h2>
      <br></br>
      <label>
        préscrir :
        <Button value="Oui" variant="secondary"
      onClick={(e) => {
        recupBilan(e);
      }}>Oui</Button>
        <Button value="Non" variant="secondary" onClick={(e)=>{recupBilan(e);}}>Non</Button>
      </label>
      <br></br>
      <h2>Dossier guide IVG remis :</h2>
      <br></br>
      <label>
        Dossier guide IVG remis :<Button value="Oui" variant="secondary" onClick={(e)=>{recupInfoGuideIVG(e);}}>Oui</Button>
        <Button value="Non" variant="secondary" onClick={(e)=>{recupInfoGuideIVG(e);}}>Non</Button>
      </label>
      <br></br>
      <a href={GuideIVG} target="_blank">
        PDF Guide IVG
      </a>
      <h2>Consultation psychosociale proposée</h2>
      <br></br>
      <label>
      Consultation proposée :
        <Button value="Oui" variant="secondary"
      onClick={(e) => {
        recupConsultationPsy(e);
      }}>Oui</Button>
        <Button value="Non" variant="secondary" onClick={(e)=>{recupConsultationPsy(e);}}>Non</Button>
      </label>
      <p className={affichageWarningConsultation.className}>
        {affichageWarningConsultation.texte}
      </p>
      <br></br>
      <input
        onClick={changementCouleurSVGPsycho}
        className="Lampe"
        type="image"
        src={logoAffichePsycho}
      />
      <br></br>
      <div>{currentInfoPsycho}</div>
      <br></br>
      <h2>Information contraception post-IVG</h2>
      <br></br>
      <label>
       Information contraception post-IVG
        <Button value="Oui" variant="secondary"
      onClick={(e) => {
        recupinfoPostIVG(e);
      }}>Oui</Button>
        <Button value="Non" variant="secondary" onClick={(e)=>{recupinfoPostIVG(e);}}>Non</Button>
      </label>
      <br></br>
      <input
        onClick={changementCouleurSVGPostIVG}
        className="Lampe"
        type="image"
        src={logoAffichePostIVG}
      />
      <br></br>
      <div>{currentInfoPostIVG}</div>
      <br></br>
      <h2>Frottis à jour </h2>
      <br></br>
      <label>
        Frotti à jour :<Button value="Oui" variant="secondary" onClick={(e) => {
        recupFrotti(e);
      }}>Oui</Button>
        <Button value="Non" variant="secondary" onClick={(e) => {
        recupFrotti(e);
      }}>Non</Button>
        <Button value="Non Concernée" variant="secondary" onClick={(e) => {
        recupFrotti(e);
      }}>Non Concernée</Button>
      </label>
      <br></br>
      <label for="dateFrotti">Date : </label>
      <input type="date" name="dateFrotti" id="dateFrotti" onChange={(e)=>{handleChange(e);}}></input>
      <br></br>
      <input
        onClick={changementCouleurSVGFrotti}
        className="Lampe"
        type="image"
        src={logoAfficheFrotti}
      />
      <br></br>
      <div>{currentInfoFrotti}</div>
      <br></br>
      <h2>Tabac :</h2>
      <br></br>
      <label>
        <Button value="Oui" variant="secondary" onClick={(e) => {
        recupTabac(e);
      }}>Oui</Button>
        <Button value="Non" variant="secondary" onClick={(e) => {
        recupTabac(e);
      }}>Non</Button>
      </label>
      <br></br>
      <label for="nbPAquet"> Nombre paquets </label>
      {/* <input type="text" nom="nbPAquet" id="nbPAquet" onChange={(e)=>{recupNombre(e);}}></input> */}
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
      <br></br>
      <br></br>
      <Button
        onClick={afficheStateFin}
        variant={couleurBouttonBase}
      >
        Valider mes choix
      </Button>{" "}
      <Button variant="danger" onClick={props.onSuite}>
        Tarification

      </Button>
    </div>
  );
}

export default PConsultation;
