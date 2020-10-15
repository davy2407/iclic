import React, {useState, useEffect} from "react";
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css'

// todo list créer objet contenant tout les bouttons existant avec leur texte et ID 
// finir chemin consultation préalable oui
function MyVerticallyCenteredModal(props) {
  let liste = props.listeRadio;

  const [Titre, setTitre] = useState(
    /// titre premiere question modal
    'Proffession'
  )

  const [rollBacklist, setRollBackList] =useState([]);
  /// mes debut de travail pour tenter de eprmettre un retour en arriere

  const [objetSelection, setObjetSelection] = useState([]);
  /// satte contenant la liste des choix choisis par l'utilisateur

  const [rollBackTitre, setRollBackTitre] = useState('');
  /// censé permettre laffichage du titre modal en cas de retour en arriere

  const [rollBackTestText, setRollBackTestText] = useState('');
  /// censé permettre laffichage du text modal en cas de retour en arriere

  const [newListeRadio,setNewListeRadio] = useState(liste);
  /// state contenant les boutons à afficher

  const [boutonSel, setBoutonSel] = useState('');
  /// je vais check mais surement inutile

  const [testText, setTestText] = useState('');
  /// je vais check mais surement inutile


  
  const recupIdBoutton = event => {
    /// la function censé recup l'id du derniers bouton selectionné et appelé les function permettant 
    /// l'affichage des prochains choix et aussi appel la function qui ajoute l'info selectionné par 
    /// l'utilisateur dans le state objetSelection[] 
    /// chaque bouton a un id qui est recup lors de l'appel de la function
    let id = event.target.id;
    console.log(id);
    setBoutonSel(id);
    if (id==1) {
      MedecinGy();
      AjoutSelection({id: 1, name : "Médecin gynécologue/Chirurgien obstéstrique" })
      
    }
    else if (id==4) {
      MedecinGyConventionOUi();
      AjoutSelection({id : 4 , name : "Oui"})
      
    }
    else if (id==5) {
      MedecinGyConventionNon();
      AjoutSelection({id : 5 , name : "Non"})
    }

    else if (id==8||id==9||id==28||id==29||id==30) {
      MedecinGyConventionOUiPatiente();
      if (id==8) {
        AjoutTypeConsultation(1);
        AjoutSelection({id : 8, name : "Première consultation préalable à l'ivg/Premier contact médical"})
        
      }
      else if (id==9) {
        AjoutTypeConsultation(2);
        AjoutSelection({id : 9, name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"},)
        
      }
      else if (id==28) {
        AjoutTypeConsultation(3);
        AjoutSelection({id : 28, name : "Premier temps de consultation pour prise médicamenteuse"})
        
      }
      else if (id==29) {
        AjoutTypeConsultation(4);
        AjoutSelection({id : 29, name : "Deuxième temps de consultation pour prise médicamenteuse (facultative)"})
        
      }
      else if (id==30) {
        AjoutTypeConsultation(5);
        AjoutSelection({id : 30, name : "Troisième temps de consultation: consultation de suivi"})
        
      }
    }
    else if (id==6) {
      MedecinGyConventionNonConsultationOUi();
      AjoutSelection({id : 6 , name : "Oui"})
      
    }
    else if (id==7) {
      MedecinGyConventionNonConsultationNon();
      AjoutSelection({id : 7 , name : "Non"})
      
    }
    else if (id==12 || id==13) {
      MedecinGyConventionNonConsultationOUiMajeure();
      if (id==12) {
        AjoutTypeConsultation(6);
        AjoutSelection({id : 12 , name : "Première consultation préalable à l'ivg/Premier contact médical"})
        
      }
      else if (id==13) {
        AjoutTypeConsultation(7);
        AjoutSelection({id : 13 , name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"})
        
      }
      
    }
    else if (id==14 || id ==15) {
      MedecinGyConventionNonConsultationOUiFin();
      if (id==14) {
        AjoutPatienteMajeure(1);
        AjoutSelection({id : 14 , name : "Patiente majeure"})
        
      }
      else if (id==15) {
        AjoutPatienteMajeure(0);
        AjoutSelection({id : 15 , name : "Patiente mineure"})
        
      }
      
    }
    else if (id==2 || id==3) {
      SageFemmeMedecinGeneraliste();
      if (id==2) {
        AjoutSelection({id : 2, name : "Médecin généraliste"})
        
      }
      else if (id==3) {
        AjoutSelection({id : 3, name : "Sage-femme"})
        
      }
      
    }
    else if (id==19) {
      SageFemmeMedecinGeneralisteAttestationNon();
      AjoutSelection({id : 19 , name : "Non"})
      
    }
    else if (id==20) {
      SageFemmeMedecinGeneralisteAttestationNonConsulationOUi();
      AjoutSelection({id : 20 , name : "Oui"})
      
    }
    else if (id==21){
      SageFemmeMedecinGeneralisteAttestationNonConsulationNon();
      AjoutSelection({id : 21 , name : "Non"})
    }

    else if (id==22||id==23) {
      SageFemmeMedecinGeneralisteAttestationNonConsulationOUiMajeure();
      if (id==22) {
        AjoutTypeConsultation(6);
        AjoutSelection({id : 22 , name : "Première consultation préalable à l'ivg/Premier contact médical"})
        
      }
      else if (id==23) {
        AjoutTypeConsultation(7);
        AjoutSelection({id : 23 , name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"})
        
      }
      
    }
    else if (id==24||id==25) {
      SageFemmeMedecinGeneralisteAttestationNonConsulationOUiMajeureAnonyme();
      if (id==24) {
        AjoutPatienteMajeure(1);
        AjoutSelection({id : 24 , name : "Patiente majeure"})
        
      }
      else if (id==25) {
        AjoutPatienteMajeure(0);
        AjoutSelection({id : 25 , name : "patiente mineure"})
        
      }
      
    }
    else if (id==10||id==11) {
      MedecinGyConventionOUiPatienteMajeure();
      if (id==10) {
        AjoutSelection({id : 10 , name : "Patiente anonyme"})
        AjoutPatienteAnonyme(0);
        
      }
      else if (id==11) {
        AjoutSelection({id : 11 , name : "Patiente non-anonyme"})
        AjoutPatienteAnonyme(1);
        
      }
    }
    else if (id==18) {
      SageFemmeMedecinGeneralisteAttestationOui()
      AjoutSelection({id : 18 , name : "Oui"})
      
    }
    else if (id==33) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionOui();
      AjoutSelection({id : 33 , name : "Oui"})
      
    }
    else if (id==35||id==36||id==37||id==38||id==39) {
      SageFemmeMedecinGeneralisteAttestationOuiConsulationOUiMajeure();
      if (id==35) {
        AjoutTypeConsultation(1);
        AjoutSelection({id : 35, name : "Première consultation préalable à l'ivg/Premier contact médical"})
        
      }
      else if (id==36) {
        AjoutTypeConsultation(2);
        AjoutSelection({id : 36, name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"})
        
      }
      else if (id==37) {
        AjoutTypeConsultation(3);
        AjoutSelection({id : 37, name : "Premier temps de consultation pour prise médicamenteuse"})
        
      }
      else if (id==38) {
        AjoutTypeConsultation(4);
        AjoutSelection({id : 38, name : "Deuxième temps de consultation pour prise médicamenteuse (facultative)"})
        
      }
      else if (id==39) {
        AjoutTypeConsultation(5);
        AjoutSelection({id : 39, name : "Troisième temps de consultation: consultation de suivi"})
        
      }
      
    }
    else if (id==40||id==41) {
      SageFemmeMedecinGeneralisteAttestationOuiConsulationOUiMajeureAnonyme();
      if (id==40) {
        AjoutPatienteMajeure(1);
        AjoutSelection({id : 40 , name : "Patiente majeure"})
        
      }
      else if (id==41) {
        AjoutPatienteMajeure(0);
        AjoutSelection({id : 41 , name : "patiente mineure"})
        
      }
      
    }

    else if (id==34) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionNon();
      AjoutSelection({id : 34 , name : "Non"})
      
    }

    else if (id==45) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationNon();
      AjoutSelection({id : 45 , name : "Non"})
      
    }
    else if (id==44) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOui();
      AjoutSelection({id : 44 , name : "Oui"})
      
    }
    else if (id==46||id==47) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOuiMajeure();
      if (id==46) {
        AjoutTypeConsultation(6);
        AjoutSelection({id : 46 , name : "Première consultation préalable à l'ivg/Premier contact médical"})
        
      }
      else if (id==47) {
        AjoutTypeConsultation(7);
        AjoutSelection({id : 47 , name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"})
        
      }
      
    }
    else if (id==48||id==49) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOuiMajeureAnonyme();
      if (id==48) {
        AjoutPatienteMajeure(1);
        AjoutSelection({id : 48 , name : "Patiente majeure"})
        
      }
      else if (id==49) {
        AjoutPatienteMajeure(0);
        AjoutSelection({id : 49 , name : "Patiente mineure"})
        
      }
      
    }

    else if (id==32) {
      AjoutSelection({id : 32 , name : "Patiente mineure"});
      AjoutPatienteMajeure(0)
      props.onHide();
      props.onFonctionAffichage(objetSelection,32,0,patienteAnonyme,typeConsultation);
      
    }

    else if (id==17) {
      AjoutSelection({id : 17 , name : "Patiente non-anonyme"});
      AjoutPatienteAnonyme(1);
      props.onHide();
      props.onFonctionAffichage(objetSelection,17,patienteMajeure,1,typeConsultation);
      
    }

    else if (id==16) {
      AjoutSelection({id : 16 , name : "Patiente anonyme"});
      AjoutPatienteAnonyme(0);
      props.onHide();
      props.onFonctionAffichage(objetSelection,16,patienteMajeure,0,typeConsultation);
      
    }

    else if (id==31) {
      AjoutSelection({id : 31 , name : "Patiente majeure"});
      AjoutPatienteMajeure(1)
      props.onHide();
      props.onFonctionAffichage(objetSelection,31,1,patienteAnonyme,typeConsultation);
      
    }

    else if (id==42) {
      AjoutSelection({id : 42 , name : "Patiente Anonyme"});
      AjoutPatienteAnonyme(0);
      props.onHide();
      props.onFonctionAffichage(objetSelection,42,patienteMajeure,0,typeConsultation);
      
    }

    else if (id==43) {
      AjoutSelection({id : 43 , name : "Patiente non-anonyme"});
      AjoutPatienteAnonyme(1);
      props.onHide();
      props.onFonctionAffichage(objetSelection,43,patienteMajeure,1,typeConsultation);
      
    }

    else if (id==26) {
      AjoutSelection({id : 26 , name : "Patiente anonyme"});
      AjoutPatienteAnonyme(0);
      props.onHide();
      props.onFonctionAffichage(objetSelection,26,patienteMajeure,0,typeConsultation);
      
    }

    else if (id==27) {
      AjoutSelection({id : 27 , name : "patiente non-anonyme"});
      AjoutPatienteAnonyme(1);
      props.onHide();
      props.onFonctionAffichage(objetSelection,27,patienteMajeure,1,typeConsultation);
      
    }

    else if (id==50) {
      AjoutSelection({id : 50 , name : "Patiente anonyme"});
      AjoutPatienteAnonyme(0)
      props.onHide();
      props.onFonctionAffichage(objetSelection,50,patienteMajeure,0,typeConsultation);
      
    }

    else if (id==51) {
      AjoutSelection({id : 51 , name : "Patiente non-anonyme"});
      AjoutPatienteAnonyme(1)
      props.onHide();
      props.onFonctionAffichage(objetSelection,51,patienteMajeure,1,typeConsultation);
      
    }

    
    

    
  };


  const AjoutSelection = (objet) => {
    /// function qui prend en parametre lobjet boutons cliqué et ajoute son contenu à la liste des objets choisis
    let liste = objetSelection;
    liste.push(objet);
    setObjetSelection(liste);
    console.log(liste);
    
  }

  const [patienteMajeure, setPatienteMajeure] = useState(2);
  ///sate 0 = patiente mineure
  /// state 1 = majeure

  const AjoutPatienteMajeure = (objet) => {
    let id = objet;
    setPatienteMajeure(id);
    
  }

  const [patienteAnonyme, setPatienteAnonyme] = useState(2);
  ///sate 0 = patiente anonyme
  /// state 1 = non anonyme

  const AjoutPatienteAnonyme= (objet) => {
    let id = objet;
    setPatienteAnonyme(id);
    
  }


  const [typeConsultation, setTypeConsultation] = useState(6);
  /// state 1 Première consultation préalable à l'ivg/Premier contact médical
  /// state 2
  /// state 3
  /// state 4
  /// state 5

  const AjoutTypeConsultation = (objet)=> {
    let id = objet;
    setTypeConsultation(id);
  }
  

 

  

  const RollBack = () => {
    /// censé gérer le retour en arrière, jai fait ca un speed et cest full bug
    setTitre(rollBackTitre);
    setNewListeRadio(rollBacklist);
    setTestText(rollBackTestText);
  };


  /// toutes les fuctions contextuelles appelaient en fonction du derniers boutons cliqué
  const MedecinGy = () => {
    let nouvelleListeMedecin = [
      {id : 4 , name : "Oui"},
      {id : 5 , name : "Non"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre('Vous avez signé une convention avec un centre de référence : ')
  };

  const MedecinGyConventionOUi = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 8, name : "Première consultation préalable à l'ivg/Premier contact médical"},
      {id : 9, name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"},
      {id : 28, name : "Premier temps de consultation pour prise médicamenteuse"},
      {id : 29, name : "Deuxième temps de consultation pour prise médicamenteuse (facultative)"},
      {id : 30, name : "Troisième temps de consultation: consultation de suivi"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre('Attestation');

  };

  const MedecinGyConventionNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 6 , name : "Oui"},
      {id : 7 , name : "Non"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ")
  };

  const MedecinGyConventionOUiPatiente = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 10 , name : "Patiente anonyme"},
      {id : 11 , name : "Patiente non-anonyme"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation")

  }; 
  
  const MedecinGyConventionOUiPatienteMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 31 , name : "Patiente majeure"},
      {id : 32 , name : "Patiente mineure"} ///6556    5444444444444444444444444444444444444444
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation")

  };    

  const MedecinGyConventionNonConsultationOUi = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 12 , name : "Première consultation préalable à l'ivg/Premier contact médical"},
      {id : 13 , name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalables à l'ivg");

  };

  const MedecinGyConventionNonConsultationOUiMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 14 , name : "Patiente majeure"},
      {id : 15 , name : "Patiente mineure"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalables à l'ivg");

  };

  const MedecinGyConventionNonConsultationOUiFin = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 16 , name : "Patiente anonyme"},
      {id : 17 , name : "Patiente non-anonyme"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalables à l'ivg");

  };

  const MedecinGyConventionNonConsultationNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setRollBackTestText(testText);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre(" Centre rattachement");
    setTestText("Il est obligatoire selon l'article L2212-2 et L2212-9 de justifier etc ....")

  };

  const SageFemmeMedecinGeneraliste = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 18 , name : "Oui"},
      {id : 19 , name : "Non"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Vous êtes en possession d'une attestation justificative de formation à l'IVG : ")

  };

  const SageFemmeMedecinGeneralisteAttestationNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 20 , name : "Oui"},
      {id : 21 , name : "Non"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ")

  };

  const SageFemmeMedecinGeneralisteAttestationNonConsulationOUi = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 22 , name : "Première consultation préalable à l'ivg/Premier contact médical"},
      {id : 23 , name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ")

  };

  const SageFemmeMedecinGeneralisteAttestationNonConsulationNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setRollBackTestText(testText);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Info Formation");
    setTestText("Selon l'article R2212-11 , il est nécessaire d'avoir une attestation de compétence afin de pratiquer etc ....")

  };

  const SageFemmeMedecinGeneralisteAttestationNonConsulationOUiMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 24 , name : "Patiente majeure"},
      {id : 25 , name : "patiente mineure"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ")

  };

  const SageFemmeMedecinGeneralisteAttestationNonConsulationOUiMajeureAnonyme = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 26 , name : "Patiente anonyme"},
      {id : 27 , name : "patiente non-anonyme"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");

  };

  

  const SageFemmeMedecinGeneralisteAttestationOui = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 33 , name : "Oui"},
      {id : 34 , name : "Non"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Vous avez signé une convention avec un centre de référence : ");

  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionOui = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 35, name : "Première consultation préalable à l'ivg/Premier contact médical"},
      {id : 36, name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"},
      {id : 37, name : "Premier temps de consultation pour prise médicamenteuse"},
      {id : 38, name : "Deuxième temps de consultation pour prise médicamenteuse (facultative)"},
      {id : 39, name : "Troisième temps de consultation: consultation de suivi"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation et convention signé");

  };

  const SageFemmeMedecinGeneralisteAttestationOuiConsulationOUiMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 40 , name : "Patiente majeure"},
      {id : 41 , name : "patiente mineure"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation et convention signé")

  };

  const SageFemmeMedecinGeneralisteAttestationOuiConsulationOUiMajeureAnonyme = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 42 , name : "Patiente Anonyme"},
      {id : 43 , name : "Patiente non-anonyme"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation et convention signé")

  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 44 , name : "Oui"},
      {id : 45 , name : "Non"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");

  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setRollBackTestText(testText);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Centre de rattachement");
    setTestText("Il est obligatoire selon l'article L2212-2 et L2212-9 de justifier etc ....")


  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOui = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 46 , name : "Première consultation préalable à l'ivg/Premier contact médical"},
      {id : 47 , name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");

  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOuiMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 48 , name : "Patiente majeure"},
      {id : 49 , name : "Patiente mineure"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");

  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOuiMajeureAnonyme = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 50 , name : "Patiente anonyme"},
      {id : 51 , name : "Patiente non-anonyme"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");

  };
 

 

  useEffect(()=>{
    console.log('mise à jour')
    
    
},[])
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          IVGclic
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        
        
        <Form 
              onClick={(e)=>{
                e.preventDefault()

              }}>
          <h1>{Titre}</h1>
        
  {newListeRadio.map(type => (
    <div >
      <button onClick={recupIdBoutton}  id={type.id} key={type.id}    >{type.name}</button>
      <hr></hr>
      
    
    </div>
    
  ))}
  <p>{testText}</p>
  
</Form>
<button  onClick={RollBack}  >retour</button>


        
        
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default MyVerticallyCenteredModal;