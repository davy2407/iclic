import React, { useState } from "react";
import Button from "react-bootstrap/Button";

// import assets ß
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideIVG from "@assets/pdf/GuideIvgPatiente.pdf";

// import css
import "./pConsultation.css";

/// service 



/// feuille de premiere consultation, patiente majeure non anonyme ne venant pas du 3d
function PConsultation(props) {
  /// Bloc Fonctionnel




  
  

  ///////////////////////////

  const [couleurBouttonBase, setCouleurBouttonBase] = useState("secondary");

  const [couleurBouttonSel, setCouleurBouttonSel] = useState("danger");

  /// function permettant la liaison avec la function onProps qui remonte les donnees au composant parent.
  /// liste des differents state , manque ddr et echographie
  /// personneAccFin,modeDecouverteFin,constexteBioPsyFin,rechercheIstFin,bilanSanguinFin
  ///,guideIVGFin,consultationPsyFin,contraPostIVGFin,frottiFin,dateFrottiFin,tabacFin,nBTabacFin,infoSupp
  ///ORDRE DES PARAMETRES DONNE CI DESSUS
  const liaison = () => {};

  /// Bloc contenant les state à récupérer à la fin de la consultation
  const [globalStateFin, setGlobalStateFin] = useState([]);

  const afficheStateFin = () => {
    console.log("state de fin va suivre");
    for (let index = 0; index < globalStateFin.length; index++) {
      console.log(globalStateFin[index]);
    }
    props.onRecup(globalStateFin);
  };

  const [personneAccFin, setPersonneAccFin] = useState({});

  const recupAccompagnant = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Accompagnant(e)",
      value: e.target.value,
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
      titre: "Contexte Biopsychosocial favorable : ",
      value: e.target.value,
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
      titre: "Bilan Sanguin prescrit (incluant groupe rhésus 2 déterminations + RAI + BHCG quantitatif ) : ",
      value: e.target.value,
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
      titre : "Consultation psychosociale proposée : ",
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
      titre : "Frottis à jour (ou test HPV) : ",
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
    let myDate = new Date(e.target.valueAsDate);
    console.log(myDate);
    
    
    let reponse = {
      titre: "Date Frotti",
      value: e.target.value,
    };
    let liste = [...globalStateFin];
    for (let i = 0; i < liste.length; i++) {
      if (
        liste[i].titre == reponse.titre
      ) {
        liste.splice(i, 1);
        
      }
      
    }
    liste.push(reponse);
    setGlobalStateFin(liste);

    console.log("date frotti : " + reponse.value);
    setDateFrottiFin(reponse);
  };

  const [tabacFin, setTabacFin] = useState({});
  const recupTabac = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Tabac : ",
      value: e.target.value,
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    
    console.log("Fumeuse : " + reponse.value);
  };

  const [nBTabacFin, setNbTabacFin] = useState({});

  
  
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
  

  
  
  
};

  const [infoSupp, setInfoSupp] = useState({});

  const recupInfoSupp = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "Si ressource cochée oui : ",
      value : "http://www.info-ist.fr/index.html ; https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles"
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    setInfoSupp(reponse);
    console.log("info supp : " + "http://www.info-ist.fr/index.html ; https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles");
  };

  /// info IST
  const returnInfoIST = () => {
    return (
      <div>
        <p>
         La HAS recommande un dépistage opportuniste ciblé à toutes les femmes
         enceintes consultant pour une IVG, sans limite d’âge. Les facteurs de
          risques ciblés sont : multipartenariat (au moins deux partenaires dans l’année),
           changement de partenaire récent, individus ou partenaires diagnostiqués avec
            une autre IST (Neisseria gonorrhoeae, syphilis, VIH, Mycoplasma genitalium),
             antécédents d’IST, personnes en situation de prostitution, après un viol.
        </p>
        <p>
        De plus elle doit être systématique chez les femmes de 15 à 25 ans sexuellement actives. 
        </p>
        
        <p>
          De nombreuses sources numériques existent pour l’information aux
          patient(es) des IST ainsi que de ces risques
          <a
            href="https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles"
            target="_blank"
          >
            Ameli IST
          </a>
          ,{" "}
          <a href="http://www.info-ist.fr/index.html" target="_blank">
            ISt-info
          </a>
          .
        </p>
        <br></br>

        <label>
          Vous desirez plus d'informations à transmettre ?
          <Button
            variant="secondary"
            value="Oui"
            onClick={(e) => {
              recupInfoSupp(e);
            }}
          >
            Oui
          </Button>
          <Button
            variant="secondary"
            value="Non"
            onClick={(e) => {
              recupInfoSupp(e);
            }}
          >
            Non
          </Button>
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
  const recupEcho = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Echographie :",
      value: e.target.value,
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    
    console.log("Echographie :" + reponse.value);
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
  

  // const handleSubmitDDR = (e) => {
  //   /// recup date frotti
    
  //   let myDate = new Date(valueDDR.valueAsDate);
  //   console.log(myDate);
    
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

  //   console.log("date DDR : " + reponse.value);
    
  // };


  /////// bloc prise de sang 
  const returnInfoSang = () => {
    return (
      <div>
        <p>
        2 typages de groupe sanguin sont nécessaires avant toute IVG médicamenteuse ou chirurgicale. Les RAI doivent dater de moins de 48h avant l’acte si négatif jusqu'alors.  A noter qu’une injection d’Immunoglobulines anti-D sera nécessaire en cas de RAI négatif avant toute IVG ou dans les 72h suivant tout saignement.
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
  if (Math.round(semaineSA.weeks)>=5&&Math.round(semaineSA.weeks)<=7) {
    affichageTxtUrgence();
    
  }
  else if (Math.round(semaineSA.weeks)>7) {
    affichageVerrou();
    
  }
  else if (Math.round(semaineSA.weeks)<5) {
    setCurrentTextUrgence("");
    
  }

  
  }

  const transmissionDDR = () => {
    let jour = valueDDRday;
    let semaineSA = valueDDRweek;
    let liste = [...globalStateFin];
    liste.push(semaineSA);
    liste.push(jour);
    console.log(liste);
    setGlobalStateFin(liste);
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
      <div>
        <p>
           Il est nécessaire d’aborder dès cette consultation, les différentes
          modalités contraceptives. Site possible d’information à transmettre à
          la patiente : 
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

  const returnInfoFrotti = () => {
    return (
      <div>
        <p>
         Le plan de dépistage national s’applique : 
        </p>
        <ul>
          <li>
            <p>
            entre 25 et 30 ans, le dépistage du cancer du col de l’utérus reste fondé sur la réalisation de deux examens cytologiques à un an d’intervalle, puis 3 ans après si le résultat des deux premiers est normal.
            </p>
          </li>
          <li>
            <p>
            le test HPV chez les femmes à partir de 30 ans, sera réalisé 3 ans après le dernier examen cytologique dont le résultat était normal ; le rythme entre deux dépistages par test HPV est de 5 ans, dès lors que le résultat du test est négatif.
            <a target="_blank" href="https://www.has-sante.fr/upload/docs/application/pdf/2019-07/synthese_hpv.pdf">
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

  return (
    <div className="consultationContainer">
      <h1>1ère consultation préalable/1er contact médical Majeure Non Anonyme </h1>
      <p>{props.onTexte}</p>
      <br></br>
      
      <br></br>
      
      <br></br>
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
      
      <br></br>
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
      <Button
        variant="secondary"
        value="Oui"
        onClick={(e) => {
          recupContexteBio(e);
        }}
      >
        Oui
      </Button>
      <br></br>
      <Button
        value="Non"
        variant="secondary"
        onClick={(e) => {
          afficheConsultation();
          recupContexteBio(e);
        }}
      >
        Non
      </Button>
      <br></br>
      <p className={affichageWarningConsultation.className}>  
        {affichageWarningConsultation.texte}
      </p>
      <h2>Violences subies en rapport ou non avec l’acte :</h2>
      <Button variant="secondary">Oui</Button>
      <Button variant="secondary">Non</Button>
      {/* ///////////////////// */}
            {/* //////////// a finir bulle info ///////// */}

      {/* ///////////////////// */}

      {/* ///////////////////// */}

      <h2>Recherche IST +/- antibio-prophylaxie</h2>
      <br></br>
      <label>
        Recherche IST +/- antibio-prophylaxie
        <Button
          value="Oui"
          variant="secondary"
          onClick={(e) => {
            recupIST(e);
          }}
        >
          Oui
        </Button>
        <Button
          value="Non"
          variant="secondary"
          onClick={(e) => {
            recupIST(e);
          }}
        >
          Non
        </Button>
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
        
        <Button
          value="Oui"
          variant="secondary"
          onClick={(e) => {
            recupBilan(e);
          }}
        >
          Oui
        </Button>
        <Button
          value="Non"
          variant="secondary"
          onClick={(e) => {
            recupBilan(e);
          }}
        >
          Non
        </Button>
      </label>
      <input
        onClick={changementCouleurSVGSang}
        className="Lampe"
        type="image"
        src={logoAfficheSang}
      />
      <br></br>
      <div>{currentInfoSang}</div>

      <br></br>
      <h2>Dossier guide IVG remis :</h2>
      <br></br>
      <label>
        Dossier guide IVG remis :
        <Button
          value="Oui"
          variant="secondary"
          onClick={(e) => {
            recupInfoGuideIVG(e);
          }}
        >
          Oui
        </Button>
        <Button
          value="Non"
          variant="secondary"
          onClick={(e) => {
            recupInfoGuideIVG(e);
          }}
        >
          Non
        </Button>
      </label>
      <br></br>
      <a href={GuideIVG} target="_blank">
        PDF Guide IVG
      </a>
      <h2>Consultation psychosociale proposée</h2>
      <br></br>
      <label>
        Consultation proposée :
        <Button
          value="Oui"
          variant="secondary"
          onClick={(e) => {
            recupConsultationPsy(e);
          }}
        >
          Oui
        </Button>
        <Button
          value="Non"
          variant="secondary"
          onClick={(e) => {
            recupConsultationPsy(e);
          }}
        >
          Non
        </Button>
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
        <Button
          value="Oui"
          variant="secondary"
          onClick={(e) => {
            recupinfoPostIVG(e);
          }}
        >
          Oui
        </Button>
        <Button
          value="Non"
          variant="secondary"
          onClick={(e) => {
            recupinfoPostIVG(e);
          }}
        >
          Non
        </Button>
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
      <h2>Frottis à jour ou test HPV</h2>
      <br></br>
      <label>
        Frotti à jour :
        <Button
          value="Oui"
          variant="secondary"
          onClick={(e) => {
            recupFrotti(e);
          }}
        >
          Oui
        </Button>
        <Button
          value="Non"
          variant="secondary"
          onClick={(e) => {
            recupFrotti(e);
          }}
        >
          Non
        </Button>
        <Button
          value="Non Concernée"
          variant="secondary"
          onClick={(e) => {
            recupFrotti(e);
          }}
        >
          Non Concernée
        </Button>
      </label>
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
      <div>{currentInfoFrotti}</div>
      <br></br>
      <h2>Tabac :</h2>
      <br></br>
      <label>
        <Button
          value="Oui"
          variant="secondary"
          onClick={(e) => {
            recupTabac(e);
          }}
        >
          Oui
        </Button>
        <Button
          value="Non"
          variant="secondary"
          onClick={(e) => {
            recupTabac(e);
          }}
        >
          Non
        </Button>
      </label>
      <br></br>
      
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
      <Button onClick={afficheStateFin} variant={couleurBouttonBase}>
        Valider mes choix
      </Button>{" "}
      <Button variant="danger" onClick={props.onSuite}>
        Tarification
      </Button>
    </div>
  );
}

export default PConsultation;
