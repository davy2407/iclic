import React, { useState } from "react";


// import iclic components
import Bouton from "@components/Bouton";
import pConsultation from "@components/pConsultation";
import PriseMediMajeure from "@components/PriseMediPatienteMajeure";
import PremierConsultationTroisC from "@components/PremierConsultationTroisC";
import PremierConsultationTroisD from "@components/PremierConsultationTroisD";
import ContreIndication from "@components/PriseMediContreIndication";
import MyVerticallyCenteredModal from "@components/Modal";

//import style
import "./AppCore.css";

function AppCore() {
  /// State gérant le texte à afficher au démmarage
  const [texteDemarrage, setTexteDemarrage] = useState(
    "Etes vous professionel de santé ?"
  );

  const [nombreBouton, setNombreBouton] = useState(2);
  const [stateGlobalPremiereConsulte,setStateGlobalPremiereConsulte] = useState([]);
  const recupPremiereConsulte = (liste)=> {
    
    let newData = [...liste];
    setStateGlobalPremiereConsulte(newData);
    console.log('DANS LAPP CORE')
    for (let i = 0; i < newData.length; i++) {
      console.log(newData[i].titre);
      console.log(newData[i].value);

      
    }

  }

  /// a faire fonction recuperant les infos ( state de fin ) entrée dans consultation pour les transmettre
  /// au composant resumé consultation

  const recupDoneePourResume = () => {

  }

  const [listeObjetConsulation, setlisteObjetConsulation] = useState(
    /// state servant à faire les test de recup dinfos pour traiter ou non l'envoie d'une consultation
    [
      {
        name: "Prise de Medicament Contre Indication Medical",
        id: 16,
        objet: ContreIndication,
      },
      { name: "test1test2222", id: 17, objet: pConsultation },
      { name: "test1test333", id: 27, objet: pConsultation },
      {
        name: "Premiere consultation Majeure Non Anonyme",
        id: 26,
        objet: pConsultation,
        fonction : recupPremiereConsulte
      },
      {
        name: "Prise medicamentMajeureNonAnonyme",
        id: 31,
        objet: PriseMediMajeure,
      },
      {
        name: "premiere consultation patiente majeure anonyme 3c",
        id: 32,
        objet: PremierConsultationTroisC,
      },
      {
        name: "premiere consultation patiente majeure anonyme 3d",
        id: 42,
        objet: PremierConsultationTroisD,
      },
      { name: "test1test8888", id: 43, objet: pConsultation },
    ]
  );

  const [objetConsultationAffiche, setObjetConsultationAffiche] = useState(
    /// state censé contenir l'objet consultation ou la feuille d'informations à afficher
    []
  );

  const [listeBouton, setListeBouton] = useState([
    { txt: "Oui", value: true, id: 1 },
    { txt: "Non", value: false, id: 2 },
  ]);

  const [listeBoutonRadio, setListeBoutonRadio] = useState(
    /// state contenant les 3 premiers boutons du modal
    /// ( il pourrait être rassemblé dans un state contenant tout les autres boutons ,
    /// actuellement dans le modal)
    [
      { id: 1, name: "Médecin gynécologue/Chirurgien obstéstrique" },
      { id: 2, name: "Médecin généraliste" },
      { id: 3, name: "Sage-femme" },
    ]
  );

  const [selection, setSelection] = useState(
    /// je vais faire un check mais surement inutile
    []
  );

  const [statut, setStatut] = useState(
    /// je vais faire un check mais surement inutile
    false
  );

  

  const modifierObjet = (idMajeure, idAnonyme, idTypeConsultation) => {
    ///function permettant de savoir d'où provient la demande et quelle consultation a afficher
    /// elle prend 3 parametre qui permette l'identification
    /// si idMajeure = 1 >> patiente majeure ( 0 = patiente mineure)
    /// si idAnonyme = 1 >> patiente non anonyme ( 0 = patiente anonyme)
    ///7 possiblité idConsultation
    /// 1 Première consultation préalable à l'ivg/Premier contact médical
    /// 2 Deuxième conssultation préalable à l'ivg/Recueil de consentement
    /// 3 Premier temps de consultation pour prise médicamenteuse
    /// 4 Deuxième temps de consultation pour prise médicamenteuse (facultative)
    /// 5 Troisième temps de consultation: consultation de suivi
    /// 6 Première consultation préalable à l'ivg/Premier contact médical sans attestation
    /// 7 Deuxième conssultation préalable à l'ivg/Recueil de consentement sans attestation
    console.log("dans modifier objet");
    let identifiantConsultation = idTypeConsultation;
    let idMajeureOuNon = idMajeure;
    let idAnonymeOuNon = idAnonyme;
    let liste = listeObjetConsulation;

    if (
      identifiantConsultation == 3 &&
      idMajeureOuNon == 1 &&
      idAnonymeOuNon == 1
    ) {
      setObjetConsultationAffiche([liste[4]]);
    } else if (
      identifiantConsultation == 6 &&
      idMajeureOuNon == 1 &&
      idAnonymeOuNon == 0
    ) {
      /// afficher composant "adresser patiente"
      setObjetConsultationAffiche([liste[5]]);
    } else if (
      identifiantConsultation == 1 &&
      idMajeureOuNon == 1 &&
      idAnonymeOuNon == 0
    ) {
      /// afficher composant "adresser patiente"
      setObjetConsultationAffiche([liste[6]]);
    } else if (
      (identifiantConsultation == 1 &&
        idMajeureOuNon == 1 &&
        idAnonymeOuNon == 1) ||
      (identifiantConsultation == 6 &&
        idMajeureOuNon == 1 &&
        idAnonymeOuNon == 1)
    ) {
      /// afficher composant "adresser patiente"
      setObjetConsultationAffiche([liste[3]]);
    } else {
      setObjetConsultationAffiche([liste[0]]);
    }
  };

  const AffichageDonnee = (
    listeDonnee,
    id,
    idPatienteMajeureMineure,
    idPatienteAnonyme,
    idTypeConsultation
  ) => {
    /// fonction qui me permettait de faire des test sur les infos récup dans le modal.
    /// elle recup la liste des infos selectionné dans le modal ainsi que l'id du derniers bouton
    /// actuellement elle gères l'affichage du futur objet consultation ou info, ainsi que quelques function annexe ( voir fin de function )
    /// cette function pourrait éventuellement être gardé pour fair un affichage recap des infos deja selectionné
    /// la fonction recupere different parametre :
    /// la liste de donnes global
    /// l'id du dernier bouton cliqué ds le modal
    /// un id patiente majeure ou mineure, si id = 1 > patiente majeure ; si id = 0 > patiente mineure
    /// un id patiente anonyme ou non, si id = 1 > patiente non anonyme ; si id = 0 > patiente anonyme
    /// id type de consultation 5 possible :
    /// 1 Première consultation préalable à l'ivg/Premier contact médical
    /// 2 Deuxième conssultation préalable à l'ivg/Recueil de consentement
    /// 3 Premier temps de consultation pour prise médicamenteuse
    /// 4 Deuxième temps de consultation pour prise médicamenteuse (facultative)
    /// 5 Troisième temps de consultation: consultation de suivi
    let liste = listeDonnee;
    let idMajMin = idPatienteMajeureMineure;
    let idAnonyme = idPatienteAnonyme;
    let idConsultation = idTypeConsultation;
    console.log("id patiente = " + idMajMin);
    console.log("id patiente anonyme = " + idAnonyme);
    console.log("id type consultation = " + idConsultation);
    console.log(liste);
    let texte = [];
    for (let index = 0; index < liste.length; index++) {
      console.log(listeDonnee[index].name);
      if (listeDonnee[index].id == 4 || listeDonnee[index].id == 5) {
        texte.push("convention :  " + liste[index].name + "    ");
      } else if (listeDonnee[index].id == 6 || listeDonnee[index].id == 7) {
        texte.push(
          "Consultation préalable IVG :  " + liste[index].name + "    "
        );
      } else if (listeDonnee[index].id == 18 || listeDonnee[index].id == 19) {
        texte.push(
          "Attestation justificative de formation IVG :  " +
            liste[index].name +
            "    "
        );
      } else if (listeDonnee[index].id == 33 || listeDonnee[index].id == 34) {
        texte.push(
          "Convention centre de référence  :  " + liste[index].name + "    "
        );
      } else if (listeDonnee[index].id == 20 || listeDonnee[index].id == 21) {
        texte.push(
          "Consultation préalable IVG :  " + liste[index].name + "    "
        );
      } else {
        texte.push(liste[index].name + "     ");
      }
    }

    setTexteDemarrage(texte);
    setListeBouton([]);
    setNombreBouton(0);
    setSelection(liste);
    modifierObjet(idMajMin, idAnonyme, idConsultation);
  };

  const Non = () => {
    /// function censé gérer laffichage si lutilisateur nest pas un pro de santé
    let texte =
      "Ce site est à destination des professionnels de santé uniquement à finir";
    setTexteDemarrage(texte);
    setListeBouton([]);
    setNombreBouton(0);
  };

  const Oui = () => {
    /// je vais faire un check mais surement inutile
    let texte = "Info Utilisateur";
    setTexteDemarrage(texte);
    setListeBouton([]);
    setNombreBouton(0);
  };

  const changeStatut = () => {
    /// je vais faire un check mais surement inutile
    setListeBouton([]);
    setNombreBouton(0);
    setStatut(true);
  };

  const [modalShow, setModalShow] = useState(false);
  /// affichage modal

  const handleChange = () => {
    /// affichage modal
    setModalShow(true);
    setListeBouton([]);
    setNombreBouton(0);
  };

  return (
    <div className="AppContainer">
      <MyVerticallyCenteredModal
        /// modal les props son les function permettant laffichage ou non du modal ainsi que la liste
        /// de boutons ( à la base radio ^^) et la fonction affichagedonnée qui sera appelée dans certains cas par la fonction
        /// recupIdbouton du modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        listeRadio={listeBoutonRadio}
        onFonctionAffichage={AffichageDonnee}
      ></MyVerticallyCenteredModal>
      {/* <p>{texteDemarrage}</p> */}
      {listeBouton.map((btn) => {
        if (btn.id === 2) {
          return (
            <Bouton TextB={btn.txt} value={btn.value} onEffet={Non}></Bouton>
          );
        } else if (btn.id === 1) {
          return (
            <button
              onClick={() => {
                handleChange();
                Oui();
              }}
            >
              {btn.txt}
            </button>
          );
        }
      })}

      <div className="Newtest">
        {/* partie censé gérer laffichage de la consultaion ou du bloc info à presenter  */}

        {objetConsultationAffiche.map((objet) => {
          return (
            <objet.objet
              onTexte={objet.name}
              onRecap={texteDemarrage}
              onRecup={objet.recupData}
            ></objet.objet>
          );
        })}
      </div>
    </div>
  );
}

export default AppCore;
