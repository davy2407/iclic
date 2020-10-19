import React, { useState } from "react";


// import iclic components
import Bouton from "@components/Bouton";

import pConsultation from "@components/pConsultation";
import PriseMediMajeure from "@components/PriseMediPatienteMajeure";
import PremierConsultationTroisC from "@components/PremierConsultationTroisC";
import PremierConsultationTroisD from "@components/PremierConsultationTroisD";
import ContreIndication from "@components/PriseMediContreIndication";
import MyVerticallyCenteredModal from "@components/Modal";
import TarificationPremiereConsulte from "@components/TarificationPremierContactMajeureNonAnonyme";
import pConsultationMineure from "@components/PConsultationMineur";
import TarifPremiereMineureANA from "@components/TarifPremiereMineureANA";

//import style
import {Button} from "react-bootstrap";
import "./AppCore.css";

function AppCore() {
  /// State gérant le texte à afficher au démmarage
  const accueil =()=> {
    return (
      <div>
        <div className="BlocInfoApp">
        <p>
          Ce site a été créé à destination de tout professionnel de santé
          prenant en charge l'interruption volontaire de grossesse
          médicamenteuse afin d'apporter une aide dans sa protocolisation en
          médecine ambulatoire.
        </p>

        <p>
          Cet outil met à disposition de fiches d'information à destination des
          patientes et assure un suivi de l'acte selon les recommandations
          actuelles en France. Aucune donnée personnelle n'est enregistrée, un
          résumé imprimable vous est proposé à la fin de la saisie de chaque
          consultation
        </p>

        <p>
          L'IVG médicamenteuse se décompose en cinq consultaions, les deux
          premières ("préalables") pouvant être effectuées par un médecin ou
          sage femme ne pratiquant pas lui même l'acte.
        </p>

        <p>
          Le contenu de ce site ne se substitue pas à la responsabilité de
          décision et de prescription du médecin
        </p>

        <p>
          L'interruption volontaire de grossesse est autorisé en France depuis
          la loi Veil du 17 Janvier 1975 , elle est gratuite et accessible à
          toute femme en France selon les délais légaux de la loi 2001-588 du 4
          Juillet 2001
        </p>
        <h1>Etes vous professionel de santé ?</h1>
      </div>
      </div>
    )
  }
  const [texteDemarrage, setTexteDemarrage] = useState(()=>accueil());

  const test = () => {
    let liste = [...stateGlobalPremiereConsulte];
    
  }

  const [nombreBouton, setNombreBouton] = useState(2);
  const [stateGlobalPremiereConsulte,setStateGlobalPremiereConsulte] = useState([]);
  /// state recuperant les données du composant enfant pConsultation
  const recupPremiereConsulte = (liste)=> {
    
    let newData = [...liste];
    setStateGlobalPremiereConsulte(newData);
    console.log('DANS LAPP CORE')
    for (let i = 0; i < newData.length; i++) {
      console.log(newData[i].titre);
      console.log(newData[i].value);

      
    }
    

  }
  const modifierObjetTarifPremiereConsulte = () =>{
    /// fonction qui affiche la tarification apres premiere consulte majeure non anonyme
    /// et stop laffichage du composant consultation
    setObjetTarrificationAffiche([listeObjetConsulation[8]]);
    setObjetConsultationAffiche([]);
  }

  const modifierObjetTarifPremiereConsulteMineur = () =>{
    /// fonction qui affiche la tarification apres premiere consulte Mineure A/NA
     /// et stop laffichage du composant consultation
    setObjetTarrificationAffiche([listeObjetConsulation[10]]);
    setObjetConsultationAffiche([]);
  }

  /// a faire fonction recuperant les infos ( state de fin ) entrée dans consultation pour les transmettre
  /// au composant resumé consultation

  

  const [listeObjetConsulation, setlisteObjetConsulation] = useState(
    /// state servant à faire les test de recup dinfos pour traiter ou non l'envoie d'une consultation
    [
      {
        name: "Prise de Medicament Contre Indication Medical",
        id: 0,
        objet: ContreIndication,
        fonction : {
          recupInfo : recupPremiereConsulte,
          afficheSuite : modifierObjetTarifPremiereConsulte
        }
      },
      { 
        name: "test1test2222",
         id: 1,
          objet: pConsultation,
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulte
          }
     },
      { name: "test1test333", id: 2, objet: pConsultation,fonction : {
        recupInfo : recupPremiereConsulte,
        afficheSuite : modifierObjetTarifPremiereConsulte
      } },
      {
        name: "Premiere consultation Majeure Non Anonyme",
        id: 3,
        objet: pConsultation,
        fonction : {
          recupInfo : recupPremiereConsulte,
          afficheSuite : modifierObjetTarifPremiereConsulte
        }
      },
      {
        name: "Prise medicamentMajeureNonAnonyme",
        id: 4,
        objet: PriseMediMajeure,
        fonction : {
          recupInfo : recupPremiereConsulte,
          afficheSuite : modifierObjetTarifPremiereConsulte
        }
      },
      {
        name: "premiere consultation patiente majeure anonyme 3c",
        id: 5,
        objet: PremierConsultationTroisC,
        fonction : {
          recupInfo : recupPremiereConsulte,
          afficheSuite : modifierObjetTarifPremiereConsulte
        }
      },
      {
        name: "premiere consultation patiente majeure anonyme 3d",
        id: 6,
        objet: PremierConsultationTroisD,
        fonction : {
          recupInfo : recupPremiereConsulte,
          afficheSuite : modifierObjetTarifPremiereConsulte
        }
      },
      { name: "resume premiere consultation majeure non anonyme", id: 7, objet: PremierConsultationTroisD,
      fonction : {
        recupInfo : recupPremiereConsulte,
        afficheSuite : modifierObjetTarifPremiereConsulte
      } },
      {
        name : "tarif premiere consulte majeure non anonyme" ,
         id :8 , objet : TarificationPremiereConsulte ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulte
          }
      },
      {
        name : "Première consultation mineure A/NA" ,
         id :9 , objet : pConsultationMineure ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      },
      {
        name : "Tarif Première consultation mineure A/NA" ,
         id :10 , objet : TarifPremiereMineureANA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      }
    ]
  );

  const [objetConsultationAffiche, setObjetConsultationAffiche] = useState(
    /// state censé contenir l'objet consultation ou la feuille d'informations à afficher
    []
  );

  const [objetTarrificationAffiche, setObjetTarrificationAffiche] = useState(
    []
  )

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
    console.log("id Consulte :  " + identifiantConsultation);
    console.log("id MAJMIN :  " + idMajeure);
    console.log("id A/NA :  " + idAnonyme);
    


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
    } else if ((
      identifiantConsultation== 1 &&
      idMajeureOuNon == 0 &&
      idAnonymeOuNon == 1 )||
      (
        identifiantConsultation== 6 &&
        idMajeureOuNon == 0 &&
        idAnonymeOuNon == 0
      ) || (
        identifiantConsultation== 1 &&
        idMajeureOuNon == 0 &&
        idAnonymeOuNon == 0

      ) || (
        identifiantConsultation== 6 &&
        idMajeureOuNon == 0 &&
        idAnonymeOuNon == 1
      )

      ) {
        setObjetConsultationAffiche([liste[9]]);
      
    }
    
    else {
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
      <div>{texteDemarrage}</div>
      {/* <p>{texteDemarrage}</p> */}
      {listeBouton.map((btn) => {
        if (btn.id === 2) {
          return (
            <Bouton TextB={btn.txt} value={btn.value} onEffet={Non}></Bouton>
          );
        } else if (btn.id === 1) {
          return (
            <Button
            variant="secondary"
              onClick={() => {
                handleChange();
                Oui();
              }}
            >
              {btn.txt}
            </Button>
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
              onRecup={objet.fonction.recupInfo}
              onData={objet.data}
              onSuite={objet.fonction.afficheSuite}
            ></objet.objet>
          );
        })}
      </div>
      <div className="Newtest">
        {/* partie censé gérer laffichage de la tarification  */}

        {objetTarrificationAffiche.map((objet) => {
          return (
            <objet.objet
              onTexte={objet.name}
              onRecap={texteDemarrage}
              onRecup={objet.fonction.recupInfo}
              onData={stateGlobalPremiereConsulte}
              onSuite={objet.fonction.afficheSuite}
            ></objet.objet>
          );
        })}
      </div>
    </div>
  );
}

export default AppCore;
