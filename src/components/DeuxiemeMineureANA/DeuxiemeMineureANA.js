import React, { useState } from "react";
import Button from "react-bootstrap/Button";

// import assets
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideIVG from "@assets/pdf/GuideIvgPatiente.pdf";

// import css
import "./DeuxiemeMineureANA.css";

/// service 



/// feuille de deuxieme consultation, patiente majeure non anonyme
function DeuxiemeConsultationMineureANA(props) {

  const [ globalStateFin, setGlobalStateFin] =useState([])
  /// state global liste

  const afficheStateFin = () => {
    console.log("state de fin va suivre");
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
  };



  //// current state 
  const [currentAttestation, setCurrentAttestation] = useState({
    titre : "Pas de réponses",
    value : ""
  });

  const [currentGrossese, setCurrentGrossese] =useState({
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

  const [currentDosage, setCurrentDosage] = useState({
    titre : "Pas de réponses",
    value : ""
  });

  const [currentGroupe, setCurrentGroupe] = useState({
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



  /////////////////////////////////////////////////////////////////////////////


  ////// Attestation 1ère consultation préalable à l’IVG
  const recupAttestation = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Attestation 1ere consultation préalable en main de la patiente : ",
      value: e.target.value,
    };
    setCurrentAttestation(reponse);
    
    console.log("Attestation 1ere consultation préalable en main de la patiente : " + reponse.value);
  };

  const attestation = () => {
    return (
      <div>
        <p>
        Une première consultation préalable à l’IVG avant d’effectuer le recueil du consentement de la patiente.
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

  const recupAccompagnant = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Personne accompagnante majeurs ou consentement parental : ",
      value: e.target.value,
    };
    setCurrentAcc(reponse)
    
    console.log("Personne accompagnante majeurs ou consentement parental : " + reponse.value);
  };

  ////////////////////////////////////////////////////////////////////////////////////



  ///// consultation psycho

  const recupPsy = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Consultation psychosociale : ",
      value: e.target.value,
    };
    setCurrentConsultation(reponse)
    
    console.log("Consultation psychosociale : " + reponse.value);
  };

  const consultationPsy = () => {
    return (
      <div>
        <p>
        Non obligatoire pour les femmes majeures          
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

  const recupGro = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Grossesse intra-utérine confirmée : ",
      value: e.target.value,
    };
    setCurrentGrossese(reponse)
    
    console.log("Grossesse intra-utérine confirmée : " + reponse.value);
  };




  /////////////////////////////////////////////////////////////////////////////////////


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
    } else if (nb > 7 && nb < 12) {
      affichagePlusDeSeptMoinsDouze();
    } else if (nb > 12) {
      affichagePlusDouze();
    }
    let reponse = {
      titre: "Echographie de datation/Age gestationnel : ",
      value: nb,
    };
    setCurrentEcho(reponse);
   
    console.log("Echographie de datation/Age gestationnel : " + nb);
 

    setSaisieUtilisateurNbSemaineSA(0);
  };
  const moinsDeSeptSemaines = () => {
    /// retourne le texte mois de 7 semaines si <7
    return (
      <div>
        <p>IVG médicamenteuse et chirurgical possible</p>
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
    setTxtMoinsDeSeptSA(txtAEnlever);
  };

  ///

  const plusDeSeptMoinsDouzeSemaines = () => {
    /// retourne le texte plus de 7 semaines moins de 12 si >7 <12
    return (
      <div>
        <p>
          IVG médicamenteuse et chirurgical possible mais en centre de référence
          seulement.
        </p>
        <br></br>
        <h1 className="Verrou1">VERROU :</h1>
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
    settxtPlusDeSeptSAmoinsDouze(txtAEnlever);
  };

  const plusDeDouzetSemaines = () => {
    /// retourne le texte mois de 7 semaines si >12
    return (
      <div>
        <p>IVG chirurgical seulement en centre de référence</p>
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
    settxtPlusDeDouzeSA(txtAEnlever);
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


    ////////////////////////////////////////////////////////////////////


    ///// bloc ist

const recupInfoSupp = (e) => {
  e.preventDefault();
  let reponse = {
    titre : "Si ressource cochée oui : ",
    value : "http://www.info-ist.fr/index.html ; https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles"
  };
  
  setInfoSupp(reponse);
  console.log("info supp : " + "http://www.info-ist.fr/index.html ; https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles");
};
    const recupIST = (e) => {
      e.preventDefault();
      let reponse = {
        titre : "Recherche IST : ",
        value : e.target.value
      };
      setCurrentIST(reponse);
      
      console.log("Recherche IST : " + reponse.value);
    }; 
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
    

const recupBilan = (e) => {
  e.preventDefault();
  let reponse = {
    titre: "Bilan Sanguin prescrit (incluant groupe rhésus 2 déterminations + RAI + BHCG quantitatif ) : ",
    value: e.target.value,
  };
  setCurrentSang(reponse);
  
  console.log("Bilan sanguin prescrit (incluant groupe rhésus 2 déterminations + RAI + BHCG quantitatif ) :" + reponse.value);
};
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
        value : event.currentTarget.value
      };
      setCurrentDosage(reponse);
       
    
        console.log("Dosage ß-HCG :  "+reponse.value);
        setDosageHCG(0);
    };

    ///////////////////////////////////////////////////////////////////


    /// Groupe Sanguin 

    const [groupeSanguin, setGroupeSanguin] = useState("");
  const handleGroupeSanguin = event => {
      setGroupeSanguin(event.currentTarget.value);
    };

    const handleSubmitGroupeSanguin = event => {
      event.preventDefault();
      let reponse = {
        titre : "Groupe Sanguin : ",
        value : event.currentTarget.value
      };
      setCurrentGroupe(reponse);
       
    
        console.log("Groupe Sanguin :  "+reponse.value);
        setGroupeSanguin("");
    };


    /////////////////////////////////////////////////////////////////////////


    ////////////: contraception post IVG
    const recupinfoPostIVG = (e) => {
      e.preventDefault();
      let reponse = {
        titre : "Information contraception postIVG : ",
        value : e.target.value
      };
      setCurrentInfo(reponse);
      
      console.log("info post ivg " + reponse.value);
    };

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

    ////////////////////////////////////////////////////////////////////


    ////////: frotti
    const recupFrotti = (e) => {
      e.preventDefault();
      let reponse = {
        titre : "Frottis à jour (ou test HPV) : ",
        value : e.target.value
      };
      setCurrentHPV(reponse)
      
      console.log("type frotti " + reponse.value);
    };
  
    const [dateFrottiFin, setDateFrottiFin] = useState({});
  
    const handleChange = (e) => {
      /// recup date frotti
      let myDate = new Date(e.target.valueAsDate);
      console.log(myDate);
      
      
      let reponse = {
        titre: "Date frotti ou test HPV : ",
        value: e.target.value,
      };
      setCurrentDateHPV(reponse);
  
      console.log("date frotti : " + reponse.value);
      
    };
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
    ////////////////////////////////////////////////////////////////////////


    //// Tabac 

    const recupTabac = (e) => {
      e.preventDefault();
      let reponse = {
        titre: "Tabac : ",
        value: e.target.value,
      };
      setCurrentTabac(reponse);
      
      console.log("Fumeuse : " + reponse.value);
    };
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
 

  console.log("nb paquet : "+reponse.value);
  




setNouvelleRecherchePaquet(0);
};

    /////////////////////////////////////////////////////////////////////////////

  return (
      <div>
          <h1>
          2ème consultation préalable à l’IVG/Recueil de consentement 
Mineur A/NA : 
          </h1>
          <br></br>
          <p>
          Dans le cas particulier de l’IVG, l’article <a target="_blank" href="19) https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000031930097&cidTexte=LEGITEXT000006072665&dateTexte=20160128">L. 2212-7</a> Lien n°19 du code de la
           santé publique dispose : « Si la femme est mineure non émancipée,
            le consentement de l’un des titulaires de l’autorité parentale ou,
             le cas échéant, du représentant légal est recueilli. Ce consentement
              est joint à la demande qu’elle présente au médecin en dehors de la
               présence de toute autre personne. 
          </p>

          <p>
          Si la femme mineure non émancipée désire garder le secret,
           le médecin doit s’efforcer, dans l’intérêt de celle-ci,
            d’obtenir son consentement pour que le ou les titulaires
             de l’autorité parentale ou, le cas échéant, le représentant
              légal soient consultés ou doit vérifier que cette démarche
               a été faite lors de l’entretien mentionné à l’article
                L 2212-4. Si la mineure ne veut pas effectuer cette démarche,
                 ou si le consentement n’est pas obtenu, l’interruption
                  volontaire de grossesse ainsi que les actes médicaux
                   et les soins qui lui sont liés peuvent être pratiqués
                    à la demande de l’intéressée, présentée dans les conditions prévues au 1er alinéa. Dans ce cas, la mineure se fait accompagner dans sa démarche par la personne majeure de son choix 

          </p>

          <p>
          Une jeune fille mineure non émancipée doit donner au médecin son consentement pour avorter sans que ses parents, son tuteur ou toute autre personne ne soient présents afin qu'elle n'agisse pas sous la contrainte.

          </p>







          <h2>Attestation 1ère consultation préalable à l’IVG : </h2>
          <Button variant="secondary" value="Oui" onClick={recupAttestation}>Oui</Button>
          <Button variant="secondary" value="Non" onClick={recupAttestation}>Non</Button>
          <input
      onClick={changementCouleurSVGAttestation}
      className="Lampe"
      type="image"
      src={logoAfficheAttestation}
    />
    <div>  {currentInfoAttestation}</div>



          <h2>Personne accompagnante majeure ou consentement parental</h2>
          <Button variant="secondary" value="Oui" onClick={recupAccompagnant}>Oui</Button>
          <Button variant="secondary" value="Non" onClick={recupAccompagnant}>Non</Button>


          <h2>Consultation psycho-sociale réalisée :</h2>
          <Button variant="secondary" value="Oui" onClick={recupPsy}>Oui</Button>
          
          <Button variant="secondary" value="Non" onClick={recupPsy}>Non</Button>
          <input
      onClick={changementCouleurSVGConsultationPsy}
      className="Lampe"
      type="image"
      src={logoAfficheConsultationPsy}
    />
    <div>  {currentInfoConsultationPsy}</div>
    <h3>Attestation</h3>
    <Button variant="secondary" value="Oui">Oui</Button>
    <Button variant="secondary" value="Non">Non</Button>
    

          <h2>Grossesse intra-utérine confirmée :</h2>
          <Button variant="secondary" value="Oui" onClick={recupGro}>Oui</Button>
          <Button variant="secondary" value="Non" onClick={recupGro}>Non</Button>


          <h2>Age gestationnel : </h2>
          {/* faire input comme nb paquet tabac pConsultation */}
          <input
      type="number"
      name="name"
      value={saisieUtilisateurNbSemaineSA}
      onChange={handleChangeSA}
    />
    <Button variant="danger" onClick={recupSaisieUtilisateurNbSemaine}>
      Valider
    </Button>
    <br></br>
    <div>{currentInfoNbSAmoinsSept}</div>
    <div>{currentInfoNbSAplusSeptMoinsDouze}</div>
    <div>{currentInfoNbSAplusDouze}</div>
    <br></br>



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


      <h2>Dosage ß-HCG : </h2>
      <form >
          <input
              value={dosageHCG}
              onChange={handleDosageHCG}
              type="text"
              placeholder="dosage ß-HCG"
          />
          <Button value={dosageHCG} variant="secondary" onClick={(e)=> {
            handleSubmitDosageHCG(e)
          }}>Confirmer</Button>
          
      </form>


      <h2>Groupe sanguin :</h2>
      <form >
          <input
              value={groupeSanguin}
              onChange={handleGroupeSanguin}
              type="text"
              placeholder="groupe sanguin"
          />
          <Button value={groupeSanguin} variant="secondary" onClick={(e)=> {
            handleSubmitGroupeSanguin(e)
          }}>Confirmer</Button>
          
      </form>












      <h2>Information contraception post-IVG</h2>
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















    
<h2>Frottis à jour ou test HPV</h2>
    <br></br>
    <label>
    Frottis à jour ou test HPV
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


      <h2>Tabac :</h2>
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




      <Button variant="danger" onClick={afficheStateFin}>Valider mes choix</Button>
      <br></br>
      <Button variant="danger" onClick={props.onSuite}>Tarification</Button>


      </div>
  )
}

export default DeuxiemeConsultationMineureANA;
