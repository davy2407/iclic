import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import ArrowD from "@assets/images/downArrow.svg";


import GuideIVG from "@assets/pdf/GuideIvgPatiente.pdf";
import ConventionType from "@assets/pdf/Convention-Réglementaire-medecin_SF_CS-1.pdf";

import "./Modal.css";

// todo list créer objet contenant tout les bouttons existant avec leur texte et ID
// finir chemin consultation préalable oui
function MyVerticallyCenteredModal(props) {






  function refreshPage() {
    window.location.reload(false);
  }
  let liste = props.listeRadio;

  const [Titre, setTitre] = useState(
    /// titre premiere question modal
    "Vous êtes professionnel de santé : "
  );

  const [ arrowScroll, setArrowScroll] = useState("Arrow");

  const [ arrowStopScroll, setArrowStopScroll] = useState("noneArrow");

  const [classArrow, setClassArrow] = useState("noneArrow");

 const [ timeArrow, setTimearrow] = useState(null);

 const [ scrollStatut, setScrollStatut] = useState("");



  const defilement = () => {
    let time = timeArrow;
    let statut = scrollStatut;
    if(time){
      time=null;
      setTimearrow(time);


    }
    time = setTimeout(()=>{
      time = null;
      setScrollStatut("Scroll stoppé");
      setClassArrow(arrowStopScroll);
      setTimearrow(time);


    },1000);
    if (statut!== 'scrolling') {
      
      setClassArrow(arrowScroll);
      setTimearrow(null);

      
    }

  }

  const [rollBacklist, setRollBackList] = useState([]);
  /// mes debut de travail pour tenter de eprmettre un retour en arriere

  const [objetSelection, setObjetSelection] = useState([]);
  /// satte contenant la liste des choix choisis par l'utilisateur

  const [rollBackTitre, setRollBackTitre] = useState("");
  /// censé permettre laffichage du titre modal en cas de retour en arriere

  const [rollBackTestText, setRollBackTestText] = useState("");
  /// censé permettre laffichage du text modal en cas de retour en arriere

  const [newListeRadio, setNewListeRadio] = useState(liste);
  /// state contenant les boutons à afficher

  const [boutonSel, setBoutonSel] = useState("");
  /// je vais check mais surement inutile

  const [testText, setTestText] = useState("");
  /// je vais check mais surement inutile

  const recupIdBoutton = (event) => {
    /// la function censé recup l'id du derniers bouton selectionné et appelé les function permettant
    /// l'affichage des prochains choix et aussi appel la function qui ajoute l'info selectionné par
    /// l'utilisateur dans le state objetSelection[]
    /// chaque bouton a un id qui est recup lors de l'appel de la function
    let id = event.target.id;
    setBoutonSel(id);
    if (id == 1) {
      MedecinGy();
      AjoutSelection({
        id: 1,
        name: "Médecin gynécologue/Chirurgien obstéstrique",
      });
    } else if (id == 4) {
      MedecinGyConventionOUi();
      AjoutSelection({ id: 4, name: "Oui" });
    } else if (id == 5) {
      MedecinGyConventionNon();
      AjoutSelection({ id: 5, name: "Non" });
    } else if (id == 8 || id == 9 || id == 28 || id == 29 || id == 30) {
      MedecinGyConventionOUiPatiente();
      if (id == 8) {
        AjoutTypeConsultation(1);
        AjoutSelection({
          id: 8,
          name:
            "Première consultation préalable à l'ivg/Premier contact médical",
        });
      } else if (id == 9) {
        AjoutTypeConsultation(2);
        AjoutSelection({
          id: 9,
          name:
            "Deuxième consultation préalable à l'ivg/Recueil de consentement",
        });
      } else if (id == 28) {
        AjoutTypeConsultation(3);
        AjoutSelection({
          id: 28,
          name: "Premier temps de consultation pour prise médicamenteuse",
        });
      } else if (id == 29) {
        AjoutTypeConsultation(4);
        AjoutSelection({
          id: 29,
          name:
            "Deuxième temps de consultation pour prise médicamenteuse (facultative)",
        });
      } else if (id == 30) {
        AjoutTypeConsultation(5);
        AjoutSelection({
          id: 30,
          name: "Troisième temps de consultation: consultation de suivi",
        });
      }
    } else if (id == 6) {
      MedecinGyConventionNonConsultationOUi();
      affichageTxtModal();
      AjoutSelection({ id: 6, name: "Oui" });
    } else if (id == 7) {
      MedecinGyConventionNonConsultationNon();
      AjoutSelection({ id: 7, name: "Non" });
    } else if (id == 12 || id == 13) {
      MedecinGyConventionNonConsultationOUiMajeure();
      if (id == 12) {
        AjoutTypeConsultation(6);
        AjoutSelection({
          id: 12,
          name:
            "Première consultation préalable à l'ivg/Premier contact médical",
        });
      } else if (id == 13) {
        AjoutTypeConsultation(7);
        AjoutSelection({
          id: 13,
          name:
            "Deuxième consultation préalable à l'ivg/Recueil de consentement",
        });
      }
    } else if (id == 14 || id == 15) {
      MedecinGyConventionNonConsultationOUiFin();
      if (id == 14) {
        AjoutPatienteMajeure(1);
        AjoutSelection({ id: 14, name: "Patiente majeure" });
      } else if (id == 15) {
        AjoutPatienteMajeure(0);
        AjoutSelection({ id: 15, name: "Patiente mineure" });
      }
    } else if (id == 2 || id == 3) {
      SageFemmeMedecinGeneraliste();
      if (id == 2) {
        AjoutSelection({ id: 2, name: "Médecin généraliste" });
      } else if (id == 3) {
        AjoutSelection({ id: 3, name: "Sage-femme" });
      }
    } else if (id == 19) {
      SageFemmeMedecinGeneralisteAttestationNon();
      AjoutSelection({ id: 19, name: "Non" });
    } else if (id == 20) {
      affichageTxtModal();
      SageFemmeMedecinGeneralisteAttestationNonConsulationOUi();
      AjoutSelection({ id: 20, name: "Oui" });
    } else if (id == 21) {
      SageFemmeMedecinGeneralisteAttestationNonConsulationNon();
      AjoutSelection({ id: 21, name: "Non" });
    } else if (id == 22 || id == 23) {
      SageFemmeMedecinGeneralisteAttestationNonConsulationOUiMajeure();
      if (id == 22) {
        AjoutTypeConsultation(6);
        AjoutSelection({
          id: 22,
          name:
            "Première consultation préalable à l'ivg/Premier contact médical",
        });
      } else if (id == 23) {
        AjoutTypeConsultation(7);
        AjoutSelection({
          id: 23,
          name:
            "Deuxième consultation préalable à l'ivg/Recueil de consentement",
        });
      }
    } else if (id == 24 || id == 25) {
      SageFemmeMedecinGeneralisteAttestationNonConsulationOUiMajeureAnonyme();
      if (id == 24) {
        AjoutPatienteMajeure(1);
        AjoutSelection({ id: 24, name: "Patiente majeure" });
      } else if (id == 25) {
        AjoutPatienteMajeure(0);
        AjoutSelection({ id: 25, name: "patiente mineure" });
      }
    } else if (id == 10 || id == 11) {
      MedecinGyConventionOUiPatienteMajeure();
      if (id == 10) {
        AjoutSelection({ id: 10, name: "Patiente anonyme" });
        AjoutPatienteAnonyme(0);
      } else if (id == 11) {
        AjoutSelection({ id: 11, name: "Patiente non-anonyme" });
        AjoutPatienteAnonyme(1);
      }
    } else if (id == 18) {
      SageFemmeMedecinGeneralisteAttestationOui();
      AjoutSelection({ id: 18, name: "Oui" });
    } else if (id == 33) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionOui();
      AjoutSelection({ id: 33, name: "Oui" });
    } else if (id == 35 || id == 36 || id == 37 || id == 38 || id == 39) {
      SageFemmeMedecinGeneralisteAttestationOuiConsulationOUiMajeure();
      if (id == 35) {
        AjoutTypeConsultation(1);
        AjoutSelection({
          id: 35,
          name:
            "Première consultation préalable à l'ivg/Premier contact médical",
        });
      } else if (id == 36) {
        AjoutTypeConsultation(2);
        AjoutSelection({
          id: 36,
          name:
            "Deuxième consultation préalable à l'ivg/Recueil de consentement",
        });
      } else if (id == 37) {
        AjoutTypeConsultation(3);
        AjoutSelection({
          id: 37,
          name: "Premier temps de consultation pour prise médicamenteuse",
        });
      } else if (id == 38) {
        AjoutTypeConsultation(4);
        AjoutSelection({
          id: 38,
          name:
            "Deuxième temps de consultation pour prise médicamenteuse (facultative)",
        });
      } else if (id == 39) {
        AjoutTypeConsultation(5);
        AjoutSelection({
          id: 39,
          name: "Troisième temps de consultation: consultation de suivi",
        });
      }
    } else if (id == 40 || id == 41) {
      SageFemmeMedecinGeneralisteAttestationOuiConsulationOUiMajeureAnonyme();
      if (id == 40) {
        AjoutPatienteMajeure(1);
        AjoutSelection({ id: 40, name: "Patiente majeure" });
      } else if (id == 41) {
        AjoutPatienteMajeure(0);
        AjoutSelection({ id: 41, name: "patiente mineure" });
      }
    } else if (id == 34) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionNon();
      AjoutSelection({ id: 34, name: "Non" });
    } else if (id == 45) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationNon();
      AjoutSelection({ id: 45, name: "Non" });
    } else if (id == 44) {
      affichageTxtModal();
      SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOui();
      AjoutSelection({ id: 44, name: "Oui" });
    } else if (id == 46 || id == 47) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOuiMajeure();
      if (id == 46) {
        AjoutTypeConsultation(6);
        AjoutSelection({
          id: 46,
          name:
            "Première consultation préalable à l'ivg/Premier contact médical",
        });
      } else if (id == 47) {
        AjoutTypeConsultation(7);
        AjoutSelection({
          id: 47,
          name:
            "Deuxième consultation préalable à l'ivg/Recueil de consentement",
        });
      }
    } else if (id == 48 || id == 49) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOuiMajeureAnonyme();
      if (id == 48) {
        AjoutPatienteMajeure(1);
        AjoutSelection({ id: 48, name: "Patiente majeure" });
      } else if (id == 49) {
        AjoutPatienteMajeure(0);
        AjoutSelection({ id: 49, name: "Patiente mineure" });
      }
    } else if (id == 32) {
      AjoutSelection({ id: 32, name: "Patiente mineure" });
      AjoutPatienteMajeure(0);
      props.onHide();
      props.onFonctionAffichage(
        objetSelection,
        32,
        0,
        patienteAnonyme,
        typeConsultation
      );
    } else if (id == 17) {
      AjoutSelection({ id: 17, name: "Patiente non-anonyme" });
      AjoutPatienteAnonyme(1);
      props.onHide();
      props.onFonctionAffichage(
        objetSelection,
        17,
        patienteMajeure,
        1,
        typeConsultation
      );
    } else if (id == 16) {
      AjoutSelection({ id: 16, name: "Patiente anonyme" });
      AjoutPatienteAnonyme(0);
      props.onHide();
      props.onFonctionAffichage(
        objetSelection,
        16,
        patienteMajeure,
        0,
        typeConsultation
      );
    } else if (id == 31) {
      AjoutSelection({ id: 31, name: "Patiente majeure" });
      AjoutPatienteMajeure(1);
      props.onHide();
      props.onFonctionAffichage(
        objetSelection,
        31,
        1,
        patienteAnonyme,
        typeConsultation
      );
    } else if (id == 42) {
      AjoutSelection({ id: 42, name: "Patiente Anonyme" });
      AjoutPatienteAnonyme(0);
      props.onHide();
      props.onFonctionAffichage(
        objetSelection,
        42,
        patienteMajeure,
        0,
        typeConsultation
      );
    } else if (id == 43) {
      AjoutSelection({ id: 43, name: "Patiente non-anonyme" });
      AjoutPatienteAnonyme(1);
      props.onHide();
      props.onFonctionAffichage(
        objetSelection,
        43,
        patienteMajeure,
        1,
        typeConsultation
      );
    } else if (id == 26) {
      AjoutSelection({ id: 26, name: "Patiente anonyme" });
      AjoutPatienteAnonyme(0);
      props.onHide();
      props.onFonctionAffichage(
        objetSelection,
        26,
        patienteMajeure,
        0,
        typeConsultation
      );
    } else if (id == 27) {
      AjoutSelection({ id: 27, name: "patiente non-anonyme" });
      AjoutPatienteAnonyme(1);
      props.onHide();
      props.onFonctionAffichage(
        objetSelection,
        27,
        patienteMajeure,
        1,
        typeConsultation
      );
    } else if (id == 50) {
      AjoutSelection({ id: 50, name: "Patiente anonyme" });
      AjoutPatienteAnonyme(0);
      props.onHide();
      props.onFonctionAffichage(
        objetSelection,
        50,
        patienteMajeure,
        0,
        typeConsultation
      );
    } else if (id == 51) {
      AjoutSelection({ id: 51, name: "Patiente non-anonyme" });
      AjoutPatienteAnonyme(1);
      props.onHide();
      props.onFonctionAffichage(
        objetSelection,
        51,
        patienteMajeure,
        1,
        typeConsultation
      );
    }
  };

  const AjoutSelection = (objet) => {
    /// function qui prend en parametre lobjet boutons cliqué et ajoute son contenu à la liste des objets choisis
    let liste = objetSelection;
    liste.push(objet);
    setObjetSelection(liste);
  };

  const [patienteMajeure, setPatienteMajeure] = useState(2);
  ///sate 0 = patiente mineure
  /// state 1 = majeure

  const AjoutPatienteMajeure = (objet) => {
    let id = objet;
    setPatienteMajeure(id);
  };

  const [patienteAnonyme, setPatienteAnonyme] = useState(2);
  ///sate 0 = patiente anonyme
  /// state 1 = non anonyme

  const AjoutPatienteAnonyme = (objet) => {
    let id = objet;
    setPatienteAnonyme(id);
  };

  const [typeConsultation, setTypeConsultation] = useState(6);
  /// state 1 Première consultation préalable à l'ivg/Premier contact médical
  /// state 2
  /// state 3
  /// state 4
  /// state 5

  const AjoutTypeConsultation = (objet) => {
    let id = objet;
    setTypeConsultation(id);
  };

  const RollBack = () => {
    /// censé gérer le retour en arrière, jai fait ca un speed et cest full bug
    setTitre(rollBackTitre);
    setNewListeRadio(rollBacklist);
    setTestText(rollBackTestText);
  };


  const txtCovid = () => {
    return (
      <div>
         <p>
         Les mesures dérogatoires relatives à l’IVG médicamenteuse instaurées lors du précédent Etat d’urgence sanitaire sont rétablies face à la deuxième vague par arrêté du 7 novembre 2020. 
         <br></br>
         A savoir :
        </p>
        <ul>
          <li>
          la consultation de prise de médicament par téléconsultation (avec délivrance en pharmacie d’officine des médicaments nécessaires).
          </li>
          <li>
          Prolonger les délais d’IVG médicamenteuse de 7 à 9 semaines d’aménorrhées.
          </li>
          <li>
          Consultation de contrôle (14-21 jours après) par téléconsultation.
          </li>
        </ul>
        <p>
        Le 2ème temps de consultation pour prise médicamenteuse n’est pas mentionné et reste facultatif. Ces consultations sont prises en charge à 100% par l’assurance maladie.
        </p>
        <p>
        Les différents changements sont intégrés et notifiés lors de l’avancement sur le site. Pour en savoir plus, fermer la page et voir la page Covid. 
        </p>








        {/* <p>
        Le 2ème temps de consultation pour prise médicamenteuse n’est pas mentionné et reste facultatif.
Ces consultations sont prises en charge à 100% par l’assurance maladie. 
        </p>


        <p>
        Les différents changements sont intégrés et notifiés lors de l’avancement sur le site. 
Pour en savoir plus :
        </p>
        <ul>
          <li>
            <a rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000042106233&categorieLien=id">
            https://www.legifrance.gouv.fr

            </a>
          </li>
          <li>
            <a rel="noreferrer noopener" traget="_blank" href="https://www.ameli.fr/medecin/actualites/covid-19-fin-des-mesures-derogatoires-pour-livg-medicamenteuse">
            https://www.ameli.fr/medecin/actualites/covid-19
              
            </a>
          </li>
          <li>
            <a rel="noreferrer noopener" target="_blank" href="https://syngof.fr/wp-content/uploads/2020/04/covid-19_-_medecins_-_ivg.pdf">
            https://syngof.fr covid-19_-_medecins_-_ivg.pdf
              
            </a>
          </li>
          <li>
            <a rel="noreferrer noopener" target="_blank" href="https://syngof.fr/documents-utiles/mise-a-disposition-gratuite-de-lautotest-check-top-pour-les-professionnels-de-livg-a-destination-des-femmes-realisant-une-ivg-medicamenteuse/">
            https://syngof.fr/documents-utiles
              
            </a>
          </li>
          <li>
          <a href={GuideIVG} target="_blank">
          Guide IVG hors établissement de santé praticien
          </a>

          </li>
        </ul> */}



      </div>
    )
  }

  const [ eltxtCovid, setElTxtCovid] = useState(()=> txtCovid())

  const [currenttxtcovid, setCurrenttxtCovid] = useState("")

  const txtConventionOK = () => {
    return (
      <div>
        <p>
        J’atteste sur l’honneur être formé pour pratiquer l’interruption volontaire
         de grossesse conformément à la <a
         target="_blank"
         href="https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000006171542&cidTexte=LEGITEXT000006072665.">loi L2212</a> du Code de la Santé Publique
           ainsi que d’avoir signé une convention avec un centre de rattachement. 
        </p>
        
        
       

        
      </div>
    )
  }

  /// fonction contenant le texte pour consultation IVG sans attestion ou convention

  const textSansConvention = ()=>{
    return (
      <div>
        <p>
        Attestation de compétence  (obligatoire) + convention avec un centre agrée accorde
l’IVG médicamenteuse hors établissement de santé. 
        </p>
        <p>
        2 consultations préalables à l’IVG effectués par tous médecin ou sage-femme.
        </p>
        <p>
        Orientation de la patiente vers un(e) confrère qualifié(e) pour la prise du médicament.
        </p>
        <p>
        Tout médecin ou sage femme doit répondre à une demande d’IVG et « il restitue 
        à la femme sa demande pour que celle-ci soit remise au médecin ou à la sage-femme
         choisis par elle et lui délivrent un certificat attestant qu'ils se sont conformés
          aux articles <a rel="noreferrer noopener" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000031930122&cidTexte=LEGITEXT000006072665&dateTexte=20160128" target="_blank">L. 2212-3</a> et<a rel="noreferrer noopener" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000018156675&cidTexte=LEGITEXT000006070633&dateTexte=20080222" target="_blank"> L. 2212-5</a>.
        </p>
        <p>
        D’après l’article 18 du code de déontologie article R4127-18
         « un médecin … ; … est toujours libre de s’y refuser et doit en informer l’intéressée dans
          les conditions et délais prévus par la loi » <a href="https://www.conseil-national.medecin.fr/code-deontologie/devoirs-generaux-medecins-art-2-31/article-18-ivg" target="_blank">voir lien</a>.
        </p>
        <p>
        Ce site n’enregistre aucune information personnelle, l’identité de la patiente et du praticien sont à compléter après impression des différents documents.
        </p>
        
      </div>
    )
  }

  const [consultationSansConvention, setConsultationSansConvention]= useState(() => textSansConvention());

  const [currentInfoModal, setCurrentInfoModal] = useState("");
  const affichageTxtModal = () => {
    
    let txtAAfficher = consultationSansConvention;
    setCurrentInfoModal(txtAAfficher);
    
  };

  /// toutes les fuctions contextuelles appelaient en fonction du derniers boutons cliqué
  const MedecinGy = () => {
    let nouvelleListeMedecin = [
      { id: 4, name: "Oui" },
      { id: 5, name: "Non" },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Vous avez signé une convention avec un centre de référence : ");
  };

  const MedecinGyConventionOUi = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {
        id: 8,
        name: "Première consultation préalable à l'ivg/Premier contact médical",
      },
      {
        id: 9,
        name:
          "Deuxième consultation préalable à l'ivg/Recueil de consentement",
      },
      {
        id: 28,
        name: "Premier temps de consultation pour prise médicamenteuse",
      },
      {
        id: 29,
        name:
          "Deuxième temps de consultation pour prise médicamenteuse (facultative)",
      },
      {
        id: 30,
        name: "Troisième temps de consultation: consultation de suivi",
      },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation et convention signées : ");
    setTestText(txtConventionOK());
    setCurrenttxtCovid(eltxtCovid);
  };

  const MedecinGyConventionNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 6, name: "Oui" },
      { id: 7, name: "Non" },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");
    setCurrentInfoModal(txtConsultation)

  };

  const MedecinGyConventionOUiPatiente = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 10, name: "Patiente anonyme" },
      { id: 11, name: "Patiente non-anonyme" },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation");
    setCurrentInfoModal("");
    setTestText("");
    setCurrenttxtCovid("");
  };

  const MedecinGyConventionOUiPatienteMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 31, name: "Patiente majeure" },
      { id: 32, name: "Patiente mineure" }, ///6556    
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation");
    setCurrentInfoModal("");
    setTestText("");
    setCurrenttxtCovid("");

  };

  const MedecinGyConventionNonConsultationOUi = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {
        id: 12,
        name: "Première consultation préalable à l'ivg/Premier contact médical",
      },
      {
        id: 13,
        name:
          "Deuxième consultation préalable à l'ivg/Recueil de consentement",
      },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalables à l'ivg");
  };

  const MedecinGyConventionNonConsultationOUiMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 14, name: "Patiente majeure" },
      { id: 15, name: "Patiente mineure" },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalables à l'ivg");
    setCurrentInfoModal("");
    setTestText("");
    setCurrenttxtCovid("");

  };

  const MedecinGyConventionNonConsultationOUiFin = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 16, name: "Patiente anonyme" },
      { id: 17, name: "Patiente non-anonyme" },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalables à l'ivg");
    setCurrentInfoModal("");
    setTestText("");
    setCurrenttxtCovid("");

  };

  const MedecinGyConventionNonConsultationNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setRollBackTestText(testText);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre(" Centre rattachement");
    setTestText(
      pasConventionConsulte()
    );
  };
  const pasConventionConsulte = () => {
    return (
      <div>
        <p>
        Il est obligatoire selon <a target="_blank" href="https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000006171542&cidTexte=LEGITEXT000006072665."> l’article L2212-2 et L2212-9</a> de justifier d’une
         convention signée entre le praticien et un établissement de santé
          public ou privée pour la/les consultation(s) IVG de prise des médicaments.
          Cette convention est obligatoire pour prescrire les médicaments nécessaire à la
           réalisation
           d’une interruption volontaire de grossesse selon
           <a
           rel="noreferrer noopener" 
           target="_blank"
           href="https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000006171542&cidTexte=LEGITEXT000006072665">
            l’article R2212-16 </a>. 
        </p>

        <p>
        Les centres de références (CHU, Centre Hospitalier Régional, clinique), le planning familial, le conseil de l’ordre des médecins de votre département peuvent vous renseigner.
        </p>

        <p>
          <a target="_blank" rel="noreferrer noopener"  href={ConventionType}>
            Convention type à télécharger  
          </a>
        </p>
      </div>
    )
  }

  const SageFemmeMedecinGeneraliste = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 18, name: "Oui" },
      { id: 19, name: "Non" },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre(
      "Vous êtes en possession d'une attestation justificative de formation à l'IVG : "
    );
  };

  const SageFemmeMedecinGeneralisteAttestationNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 20, name: "Oui" },
      { id: 21, name: "Non" },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");
    setCurrentInfoModal(txtConsultation)
  };

  const SageFemmeMedecinGeneralisteAttestationNonConsulationOUi = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {
        id: 22,
        name: "Première consultation préalable à l'ivg/Premier contact médical",
      },
      {
        id: 23,
        name:
          "Deuxième consultation préalable à l'ivg/Recueil de consentement",
      },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");
  };

  const SageFemmeMedecinGeneralisteAttestationNonConsulationNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setRollBackTestText(testText);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Info Formation");
    setTestText(
      PasAttestationConvention()
    );
  };

  const PasAttestationConvention = () => {
    return (
      <div>
        
        <p>
        Selon <a rel="noreferrer noopener"
        target="_blank"
        href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000006911489&cidTexte=LEGITEXT000006072665&dateTexte=20030527"
        > l’Article R2212-11</a> , il est nécessaire d’avoir une attestation de compétence afin de pratiquer les interruptions de grossesse par voie médicamenteuse. Cette compétence est acquise par une formation universitaire pour les médecins et les sages-femmes. Elle est reconnue lors des études universitaires en justifiant d’une qualification ou d’une pratique régulière.
         L’attestation de formation est délivrée par le directeur de l’établissement
          hospitalier après avis du chef de service en charge des IVG médicamenteuses. 
        </p>
        <p>
        Des formations continues pour les praticiens libéraux proposent une formation
         qualifiante pour la pratique de l’IVG médicamenteuse hors établissement..
        </p>
        <p>
        Les centres de référence (CHU, Centre Hospitalier Régional, clinique),
         le planning familial, le conseil de l’ordre des médecins de votre département
          peuvent vous renseigner.
        </p>
        <p>
          <a rel="noreferrer noopener" target="_blank" href="http://revho.fr/">Lien site REVHO</a>
        </p>
        <p>
          <a rel="noreferrer noopener" target="_blank" href="https://www.sftg.eu/formations/liste-formations/833-ivg-medicamenteuse.html">Lien SFTG</a>
        </p>
        <p>
          <a rel="noreferrer noopener" target="_blank" href="https://www.ogdpc.fr/organismes">Lien OGPDC</a>
        </p>
      </div>
    )
  }

  const txtConsultation = () => {
    return (

      <div>
      <p>
      Les consultations préalables regroupent 2 type de consultations possible par tous médecins ou sages-femmes.
      </p>
      <p>
      La « première demande d'IVG »  fait partie de ces consultations. Plus d'information par la suite.

      </p>
    </div>

    )
   
  }

  const SageFemmeMedecinGeneralisteAttestationNonConsulationOUiMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 24, name: "Patiente majeure" },
      { id: 25, name: "patiente mineure" },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setCurrentInfoModal("");
    setTestText("");
    setCurrenttxtCovid("");

    setTitre("Consultation préalable à l'IVG : ");
  };

  const SageFemmeMedecinGeneralisteAttestationNonConsulationOUiMajeureAnonyme = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 26, name: "Patiente anonyme" },
      { id: 27, name: "patiente non-anonyme" },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");
    setCurrentInfoModal("");
    setCurrenttxtCovid("");

    setTestText("");
  };

  const SageFemmeMedecinGeneralisteAttestationOui = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 33, name: "Oui" },
      { id: 34, name: "Non" },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Vous avez signé une convention avec un centre de référence : ");
  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionOui = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {
        id: 35,
        name: "Première consultation préalable à l'ivg/Premier contact médical",
      },
      {
        id: 36,
        name:
          "Deuxième consultation préalable à l'ivg/Recueil de consentement",
      },
      {
        id: 37,
        name: "Premier temps de consultation pour prise médicamenteuse",
      },
      {
        id: 38,
        name:
          "Deuxième temps de consultation pour prise médicamenteuse (facultative)",
      },
      {
        id: 39,
        name: "Troisième temps de consultation: consultation de suivi",
      },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation et convention signé");
    setTestText(txtConventionOK());
    setCurrenttxtCovid(eltxtCovid);
  };

  const SageFemmeMedecinGeneralisteAttestationOuiConsulationOUiMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 40, name: "Patiente majeure" },
      { id: 41, name: "patiente mineure" },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation et convention signé");
    setCurrentInfoModal("");
    setCurrenttxtCovid("");

    setTestText("");
  };

  const SageFemmeMedecinGeneralisteAttestationOuiConsulationOUiMajeureAnonyme = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 42, name: "Patiente Anonyme" },
      { id: 43, name: "Patiente non-anonyme" },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation et convention signé");
  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 44, name: "Oui" },
      { id: 45, name: "Non" },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");
  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setRollBackTestText(testText);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Centre de rattachement");
    setTestText(
      pasConventionConsulte()
    );
  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOui = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {
        id: 46,
        name: "Première consultation préalable à l'ivg/Premier contact médical",
      },
      {
        id: 47,
        name:
          "Deuxième consultation préalable à l'ivg/Recueil de consentement",
      },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");
  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOuiMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 48, name: "Patiente majeure" },
      { id: 49, name: "Patiente mineure" },
     
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");
    setCurrentInfoModal("");
    setCurrenttxtCovid("");

    setTestText("");
  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOuiMajeureAnonyme = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      { id: 50, name: "Patiente anonyme" },
      { id: 51, name: "Patiente non-anonyme" },
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");
    setCurrentInfoModal("");
    setCurrenttxtCovid("");

    setTestText("");
  };

  useEffect(() => {
  }, []);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">IVGclic</Modal.Title>
      </Modal.Header>
      <Modal.Body className="sizeModal" onScroll={defilement}>
        <Form
          // onClick={(e) => {
          //   e.preventDefault();
          // }}
        > <div>
          <h1>{Titre}</h1>
        <div>{currentInfoModal}</div>


          </div>
          <div>{testText}</div>


          {newListeRadio.map((type) => (
            <div>
              <Button variant="danger" onClick={recupIdBoutton} id={type.id} key={type.id}>
                {type.name}
              </Button>
              <hr></hr>
            </div>
          ))}
        </Form>
          <div>{currenttxtcovid}</div>
          <input
        alt="Image flêche défilement"
        className={classArrow}
        type="image"
        src={ArrowD}
      />
          
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>{
          props.onHide();
          refreshPage();
          }}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
