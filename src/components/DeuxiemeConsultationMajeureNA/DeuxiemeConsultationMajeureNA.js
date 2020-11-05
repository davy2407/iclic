import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// import assets
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideIVG from "@assets/pdf/GuideIvgPatiente.pdf";

// import css
import "./DeuxiemeConsultationMajeureNA.css";

/// service 



/// feuille de deuxieme consultation, patiente majeure non anonyme
function DeuxiemeConsultationMajeureNA(props) {

  const submitHandler = (e) => {
    e.preventDefault();
}



  //// function radio

  const recupRadioViolence = (e) => {
    console.log("Violence : "+e.target.value);
  }

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


    ////////////: recup radio

    const recupRadioContra = (e) => {
      let reponse = {
        titre : "Information contraception postIVG : ",
        value : e.target.value,
        reponse : 1
      };
      setCurrentInfo(reponse);
    }

    const recupRadioConsulte = (e) => {
      let reponse = {
        titre: "Consultation psychosociale : ",
        value: e.target.value,
        reponse : 1
      };
      setCurrentConsultation(reponse)
    }

    const recupRadioGro = (e) => {
      let reponse = {
        titre: "Grossesse intra-utérine confirmée : ",
        value: e.target.value,
        reponse : 1
      };
      setCurrentGrossese(reponse)
    }

    const recupRadioTabac = (e) => {
      let reponse = {
        titre: "Tabac : ",
        value: e.target.value,
        reponse : 1
      };
      setCurrentTabac(reponse);
      
    }

    const recupRadioHPV = (e) => {
      let reponse = {
        titre : "Frottis à jour (ou test HPV) : ",
        value : e.target.value,
        reponse : 1
      };
      setCurrentHPV(reponse);
    }

    const recupRadioIST = (e) => {
      let reponse = {
        titre : "Recherche IST : ",
        value : e.target.value,
        reponse : 1
      };
      setCurrentIST(reponse);
    }

    const recupRadioBilan = (e) => {
   
      let reponse = {
        titre: "Bilan Sanguin prescrit (incluant groupe rhésus 2 déterminations+ BHCG quantitatif ) : ",
        value: e.target.value,
        reponse : 1
      };
      setCurrentSang(reponse);
    }

    const recupRadioAcc = (e) => {
      let reponse = {
        titre: "Accompagnant(e) : ",
        value: e.target.value,
        reponse : 1
      };
      setCurrentAcc(reponse);
      
    }

    const recupRadioAtt = (e) => {
     
      let reponse = {
        titre: "Attestation 1ere consultation préalable en main de la patiente : ",
        value: e.target.value,
        reponse : 1
      };
      setCurrentAttestation(reponse);
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
      titre : "Pas de réponses",
      value : "",
      reponse : 0
    });
  
    const [currentGroupe, setCurrentGroupe] = useState({
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
  
    const [ currentHPV, setCurrentHPV] = useState({
      titre : "Pas de réponses",
      value : "",
      reponse : 0
    });
  
    const [currentDateHPV, setCurrentDateHPV]= useState({
      titre : "",
      value : "",
      reponse : 1
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
          Une première consultation préalable à l’IVG est nécessaire  avant d’effectuer le recueil du consentement de la patiente.
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

    

    ////////////////////////////////////////////////////////////////////////////////////



    ///// consultation psycho

    const recupPsy = (e) => {
      e.preventDefault();
      let reponse = {
        titre: "Consultation psychosociale : ",
        value: e.target.value,
        reponse : 1
      };
      setCurrentConsultation(reponse)
      
    };

    const consultationPsy = () => {
      return (
        <div className="BulleInfo">
          <p>
          Non obligatoire pour les femmes majeures          
          </p>
          
        </div>
      )
    }


  const demandeAttestation = ()=> {
    return (
      <div>
          <h4>Attestation</h4>
          <Form>
      <div key={`sousAtt-radio`} className="mb-3">
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
      />
      </div>
      </Form>





      <Button variant="secondary" value="Oui">Oui</Button>
      <Button variant="secondary" value="Non">Non</Button>
      </div>
    )
  }

  const [ attestationObjet, setAttestationObjet] = useState(()=>demandeAttestation());

  const [ currentAfficheAttestation, setCurrentAfficheAttestation] =useState("");

  const afficheAttestation = () => {
    let affiche = attestationObjet;
    setCurrentAfficheAttestation(affiche)
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
        reponse : 1
      };
      setCurrentGrossese(reponse)
      
    };




    /////////////////////////////////////////////////////////////////////////////////////

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
      if (nb <= 7) {
        affichageMoinsDeSept();
      } else if (nb > 7 && nb < 12) {
        affichagePlusDeSeptMoinsDouze();
      } else if (nb > 12) {
        affichagePlusDouze();
      }
      let reponse = {
        titre: "Echographie de datation/Age gestationnel : ",
        value: nb,
        reponse : 1
      };
      setCurrentEcho(reponse);
     
   
  
      setSaisieUtilisateurNbSemaineSA(0);
    };
    const moinsDeSeptSemaines = () => {
      /// retourne le texte mois de 7 semaines si <7
      return (
        <div>
          <p>IVG médicamenteuse </p>
          <p className="Red"> Si SA = 7 alors IVG possible ce jour à votre cabinet, si non habilité, adresser au centre de référence.</p>
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
          IVG médicamenteuse et chirurgical possible en centre de référence seulement. 
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
      value : "http://www.info-ist.fr ; https://www.ameli.fr/assure/sante",
      reponse : 1
    };
    
    setInfoSupp(reponse);
  };
      const recupIST = (e) => {
        e.preventDefault();
        let reponse = {
          titre : "Recherche IST : ",
          value : e.target.value,
          reponse : 1
        };
        setCurrentIST(reponse);
        
      }; 
      const returnInfoIST = () => {
        return (
          <div className="BulleInfo">
            <p>
            HAS :  « dépistage recommandé ciblé à toutes les femmes consultant pour une IVG, sans limite d’âge. Systématique chez les femmes de 15 à 25 ans. »              </p>
            
            
            <p>
              De nombreuses sources numériques existent pour l’information aux
              patiente(s) des IST ainsi que de ces risques
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
              Vous desirez plus d'informations à transmettre à la patiente ?
              <Button
              className={btnOuiViolenceBase}
                variant="secondary"
                value="Oui"
                onClick={(e) => {
                  recupInfoSupp(e);
                  changeCouleurBoutonViolence(e);
                }}
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
      const [dosageHCG, setDosageHCG] = useState();
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
         
      
          setDosageHCG();
      };

      ///////////////////////////////////////////////////////////////////


      /// Groupe Sanguin 

      const [groupeSanguin, setGroupeSanguin] = useState("");
    const handleGroupeSanguin = event => {
        setGroupeSanguin(event.currentTarget.value);
      };

      const handleChangeGroupe = (e) => {
        /// recup date frotti
       
        
        
        let reponse = {
          titre: "Groupe Sanguin : ",
          value: e.target.value,
          reponse : 1
        };
       setCurrentGroupe(reponse);
      
        
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


      ////////: frotti

      const NonFrotti = () => {
        return (
          <div>
            <p className="Red">
            prévoir en postIVG 
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
      
    
      const [dateFrottiFin, setDateFrottiFin] = useState({});
    
      const handleChange = (e) => {
        /// recup date frotti
        let myDate = new Date(e.target.valueAsDate);
        
        
        let reponse = {
          titre: "Date frotti ou test HPV : ",
          value: e.target.value,
          reponse : 1
        };
        setCurrentDateHPV(reponse);
    
        
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
            </p>
            <p>
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
   

    
  

  
  
  setNouvelleRecherchePaquet(0);
};

      /////////////////////////////////////////////////////////////////////////////
  
    return (
        <div className="consultationContainer">
            <h1>
                Deuxième consultation préalable à l’IVG/Recueil de consentement 
                Majeure  
            </h1>
            <br></br>
            

            <div className="ConsultationContainer">
            <h2>Attestation première consultation préalable à l’IVG : </h2>







            <Form>
      <div key={`Att-radio`} className="mb-3" onChange={(e)=>{recupRadioAtt(e);}}>
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
           <div className="ConsultationContainer">
            <h2>Personne accompagnante :</h2>
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


            </div>
           <div className="ConsultationContainer">
            <h2>Consultation psycho-sociale réalisée :</h2>

            <Form>
      <div key={`Consult-radio`} className="mb-3" onChange={(e)=>{recupRadioConsulte(e);}}>
      <Form.Check 
        type='radio'
        id={`ConsultOui`}
        label={`Oui`}
        value="Oui"
        name="consultation"
      />

<Form.Check 
        type='radio'
        id={`ConsultNon`}
        label={`Non`}
        value="Non"
        name="consultation"
        onClick={()=>{
          
          afficheAttestation();
          
        }}
      />
      </div>
      </Form>







            
            <div>{currentAfficheAttestation}</div>
            <input
        onClick={changementCouleurSVGConsultationPsy}
        className="Lampe"
        type="image"
        src={logoAfficheConsultationPsy}
      />
      <div className="ContainerBulle">  {currentInfoConsultationPsy}</div>
            </div>
            <div className="ConsultationContainer">
      <h2>Violences subies en rapport ou non avec l’acte :</h2>
      <div >


      <Form>
      <div key={`vio-radio`} className="mb-3">
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
            <div className="ConsultationContainer">
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
           <div className="ConsultationContainer">
            <h2>Age gestationnel (semaine d'aménorrhée) : </h2>
            {/* faire input comme nb paquet tabac pConsultation */}
            <input
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
      <div>{currentInfoNbSAmoinsSept}</div>
      <div>{currentInfoNbSAplusSeptMoinsDouze}</div>
      <div>{currentInfoNbSAplusDouze}</div>
      <br></br>

            </div>
      <div className="ConsultationContainer">
      <h2>Recherche IST +/- antibio-prophylaxie</h2>
      <br></br>
      <label>
     
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
      </label>
      <br></br>
      <input
        onClick={changementCouleurSVGIST}
        className="Lampe"
        type="image"
        src={logoAfficheIST}
      />
      <div className="ContainerBulle">  {currentInfoIST}</div>
      </div>
      <div className="ConsultationContainer">
      <h2>
        Prise de sang (Groupe sanguin : 2 déterminations, ß-HCG
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

      <input
        onClick={changementCouleurSVGSang}
        className="Lampe"
        type="image"
        src={logoAfficheSang}
      />
      <br></br>
      <div className="ContainerBulle">{currentInfoSang}</div>


      </div>
        <div className="ConsultationContainer">
        <h2>Dosage ß-HCG : </h2>
        <form onSubmit={(e)=>{
        
        submitHandler(e);
      
     }} >
            <input
                value={dosageHCG}
                onChange={handleDosageHCG}
                type="text"
                placeholder="dosage ß-HCG"
            />
            <Button  className={btnOuiViolenceBase} value={dosageHCG} variant="danger" onClick={(e)=> {
              handleSubmitDosageHCG(e);
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
 <div className="ConsultationContainer">
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
        onClick={() => {
           
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
</div>
 <div className="ConsultationContainer">
        <h2>Tabac :</h2>
        <label>
        <Form>
      <div key={`tabac-radio`} className="mb-3" onChange={(e)=>{recupRadioTabac(e);}}>
      <Form.Check 
        type='radio'
        id={`tabacOui`}
        label={`Oui`}
        value="Oui"
        name="Tabac"
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
      </label>
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
        </div>




        <Button variant="danger" onClick={afficheStateFin}>Valider mes choix</Button>
        <br></br>
        <div>{currentReponseTarif}</div>

        </div>
    )
}

export default DeuxiemeConsultationMajeureNA;
