import React, { useState } from "react";
/// finir PremiereMediMineureANA , texte a changer etc voir signes ///

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
import DeuxiemeAnonymeC from "@components/DeuxiemeAnonymeC";
import DeuxiemeAnonymeD from "@components/DeuxiemeAnonymeD";
import DeuxiemeConsultationMajeureNA from "@components/DeuxiemeConsultationMajeureNA";
import DeuxiemeMineureANA from "@components/DeuxiemeMineureANA";
import DeuxiemeMediMajeureNA from "@components/DeuxiemeMediMajeureNA";
import DeuxiemePriseMajeureA from "@components/DeuxiemePriseMajeureA";
import DeuxiemeMediMineureANA from "@components/DeuxiemeMediMineureANA";
import PremiereMediMineureANA from "@components/PremiereMediMineureANA";
import PremierePriseMediMajeureA from "@components/PremierePriseMediMajeureA";
import PremierePriseMajeureMineure from "@components/PremierePriseMajeureMineure";
import TarificationPremierePriseMedicamentMajeure from "@components/TarificationPremierePriseMedicamentMajeure";
import TarifDeuxiemePriseMediMajeureNA from "@components/TarifDeuxiemePriseMediMajeureNA";
import TarifDeuxiemePriseMineureANA from "@components/TarifDeuxiemePriseMineureANA";
import PostIVGMajeureNA from "@components/PostIVGMajeureNA";
import TarifDeuxiemeConsulteMajeureNA from "@components/TarifDeuxiemeConsulteMajeureNA";


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
        Ce site à été créé à destination de tout professionnel de santé prenant en charge l’interruption volontaire de grossesse médicamenteuse hors établissement de santé afin d’apporter une aide et un accompagnement dans sa protocolisation.
Il est conçu selon une navigation simple, suivant le principe que toute question doit avoir une réponse.
        </p>

        <p>
        Cet outil met à disposition des fiches d’information à destination des patientes et assure un suivi de l’acte selon les recommandations actuelles en France. 
Aucune donnée personnelle n’est enregistrée, un résumé imprimable vous est proposé à la fin de la saisie de chaque consultation. 
        </p>

        <p>
        L’IVG médicamenteuse se décompose en 5 consultations, les 2 premières (« préalables ») pouvant être effectuées par un médecin ou sage femme ne pratiquant pas lui même l’acte. 
        </p>

        <p>
          Le contenu de ce site ne se substitue pas à la responsabilité de
          décision et de prescription du médecin
        </p>

        <p>
          L'interruption volontaire de grossesse est autorisé en France depuis
          la loi Veil du 17 Janvier 1975 , elle est gratuite et accessible à
          toute femme en France selon les délais légaux de la loi <a target="_blank" href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000222631&categorieLien=id"> 2001-588 du 4
          Juillet 2001</a>,<a
          target="_blank"
          href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000027221802&categorieLien=id"
          >Loi avortement du 25 mars 2013 </a>
         
        </p>
        <br></br>
        <h3>COVID et IVG : </h3>
        
        <p>
        Arret de l’allongement du délai de réalisation d’une IVG médicamenteuse (15 avril 2020-11 Juillet 2020)
Durant la crise sanitaire du covid-19, une IVG médicamenteuse, à domicile,
 pouvait être réalisée jusqu’à la fin de la 7ème semaine de grossesse
  (soit 9 semaines après la date des dernières règles). Ce délai a été rabattu
   à la fin de la 5ème semaine de grossesse (soit 7 semaines après la date des
    dernières règles) depuis le 11 juillet 2020

        </p>
        <p>
        Cependant, la prise en charge des téléconsultations pour la première consultation et la consultation de contrôle par médecin et sage-femme est assuré par l’assurance maladie jusqu’au 31 octobre 2020.  
Les spécificités sont rappelées lors de chaque étape du site. 
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

  const [stateGlobalContreindication, setStateGlobalContreIndication] = useState([]);
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

  const recupPremiereContreIndi = (liste)=> {
    
    let newData = [...liste];
    
    
    
    setStateGlobalPremiereConsulte(newData);
    console.log('DANS LAPP CORE consultation + Contre Indication')
    for (let i = 0; i < newData.length; i++) {
      console.log(newData[i].titre);
      console.log(newData[i].value);

      
    }
    

  }


  const afficheStates = () => {
    console.log("affichage multiple liste")
    console.log(stateGlobalPremiereConsulte);
    console.log(stateGlobalContreindication);
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

  const afficheTarifDeuxiemeConsulteMajeureNA = () =>{
    setObjetTarrificationAffiche([listeObjetConsulation[23]]);
    setObjetConsultationAffiche([]);

  }

  const afficheTarifPremierPriseMediMajeure = () =>{
    setObjetTarrificationAffiche([listeObjetConsulation[19]]);
    setObjetConsultationMediAffiche([]);

  }

  const afficheTarifdeuxiemeMediMajeureNA = () =>{
    setObjetTarrificationAffiche([listeObjetConsulation[20]]);
    setObjetConsultationAffiche([]);


  }


  const afficheTarifDeuxiemeMineureANA = () => {
    setObjetTarrificationAffiche([listeObjetConsulation[21]]);
    setObjetConsultationAffiche([]);

  }

  ////////// premiere prise medi

  const afficheContreIndication = () => {
    /// function permettant l'affichage du composant contrre indication medical et stop laffichage consulte 
    setObjetTarrificationAffiche([listeObjetConsulation[0]]);
    setObjetConsultationAffiche([]);

  }

  const afficheConsultationMedi = () => {
    setObjetConsultationMediAffiche([listeObjetConsulation[18]]);
    setObjetTarrificationAffiche([]);

  }

  const recupPremierePriseMedi = (liste)=> {
    
    let newData = [...liste];
    
    setStateGlobalPremiereConsulte(newData);
    console.log('DANS LAPP CORE premiere prise medi')
    for (let i = 0; i < newData.length; i++) {
      console.log(newData[i].titre);
      console.log(newData[i].value);

      
    }
    

  }


  


  ////////////////////////////////////////////////////////////////////////



  

  const [listeObjetConsulation, setlisteObjetConsulation] = useState(
    /// state servant à faire les test de recup dinfos pour traiter ou non l'envoie d'une consultation
    [
      {
        name: "Prise de Medicament Contre Indication Medical",
        id: 0,
        objet: ContreIndication,
        fonction : {
          recupInfo : recupPremiereContreIndi,
          afficheSuite : afficheConsultationMedi
        }
        
      },
      { 
        name: "DeuxiemeAnonymeC",
         id: 1,
          objet: DeuxiemeAnonymeC,
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulte
          }
     },
      { name: "DeuxiemeAnonymeD", id: 2, objet: DeuxiemeAnonymeD,fonction : {
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
          recupInfo : recupPremierePriseMedi,
          afficheSuite : afficheContreIndication
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
      },
      {
        name : "Deuxieme consultation Majeure Non Anonyme" ,
         id :11 , objet : DeuxiemeConsultationMajeureNA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : afficheTarifDeuxiemeConsulteMajeureNA
          }
      },
      {
        name : "Deuxieme consultation Mineure A/NA" ,
         id :12 , objet : DeuxiemeMineureANA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      },
      {
        name : "Deuxieme prise médicament Majeure NA" ,
         id :13 , objet : DeuxiemeMediMajeureNA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : afficheTarifdeuxiemeMediMajeureNA
          }
      },
      {
        name : "Deuxieme prise médicament Majeure A" ,
         id :14 , objet : DeuxiemePriseMajeureA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      },
      {
        name : "Deuxieme prise médicament Mineure A/NA" ,
         id :15 , objet : DeuxiemeMediMineureANA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : afficheTarifDeuxiemeMineureANA
          }
      },
      {
        name : "Première prise médicament Mineure A/NA" ,
         id :16 , objet : PremiereMediMineureANA ,
          
          fonction : {
            recupInfo : recupPremierePriseMedi,
            afficheSuite : afficheContreIndication
          }
      },
      {
        name : "Premiere prise médicament Majeure A" ,
         id :17 , objet : PremierePriseMediMajeureA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      },
      {
        name : "Premiere prise médicament Majeure/Mineure >> Consultation" ,
         id :18 , objet : PremierePriseMajeureMineure ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : afficheTarifPremierPriseMediMajeure
          }
      },
      {
        name : "Tarification Premiere Prise medicament Majeure NA" ,
         id :19 , objet : TarificationPremierePriseMedicamentMajeure ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      },
      {
        name : "Tarification Deuxieme Prise medicament Majeure NA" ,
         id :20 , objet : TarifDeuxiemePriseMediMajeureNA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      },
      {
        name : "Tarification Deuxieme Prise medicament Mineure A NA" ,
         id :21 , objet : TarifDeuxiemePriseMineureANA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      },
      {
        name : "Consultation POst IVG Majeure Non Anonyme" ,
         id :22 , objet : PostIVGMajeureNA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      },
      {
        name : "Tarification deuxième consultation Majeure NA" ,
         id :23 , objet : TarifDeuxiemeConsulteMajeureNA ,
          
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
  );

  const [objetConsultationMediAffiche, setObjetConsultationMediAffiche] = useState([]);

  const [objetContreIndicationAffiche, setObjetContreIndictionAffiche] = useState(
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
    else if (
      identifiantConsultation== 7 &&
        idMajeureOuNon == 1 &&
        idAnonymeOuNon == 0

    ) {
      setObjetConsultationAffiche([liste[1]]);
      
    }
    else if (
      identifiantConsultation== 2 &&
        idMajeureOuNon == 1 &&
        idAnonymeOuNon == 0

    ) {
      setObjetConsultationAffiche([liste[2]]);
      
    }
    else if ((
      identifiantConsultation== 2 &&
      idMajeureOuNon == 1 &&
      idAnonymeOuNon == 1 )||
      (
        identifiantConsultation== 7 &&
        idMajeureOuNon == 1 &&
        idAnonymeOuNon == 1
      ) 

      ) {
        setObjetConsultationAffiche([liste[11]]);
      
    } else if ((
      identifiantConsultation== 2 &&
      idMajeureOuNon == 0 &&
      idAnonymeOuNon == 1 )||
      (
        identifiantConsultation== 7 &&
        idMajeureOuNon == 0 &&
        idAnonymeOuNon == 0
      ) || (
        identifiantConsultation== 2 &&
        idMajeureOuNon == 0 &&
        idAnonymeOuNon == 0

      ) || (
        identifiantConsultation== 7 &&
        idMajeureOuNon == 0 &&
        idAnonymeOuNon == 1
      )

      ) {
        setObjetConsultationAffiche([liste[12]]);
      
    } 
    else if (
      identifiantConsultation== 4 &&
        idMajeureOuNon == 1 &&
        idAnonymeOuNon == 1

    ) {
      setObjetConsultationAffiche([liste[13]]);
      
    }
    else if (
      identifiantConsultation== 4 &&
        idMajeureOuNon == 1 &&
        idAnonymeOuNon == 0

    ) {
      setObjetConsultationAffiche([liste[14]]);
      
    }
    else if ((
      identifiantConsultation== 4 &&
      idMajeureOuNon == 0 &&
      idAnonymeOuNon == 1 )||
      (
        identifiantConsultation== 4 &&
        idMajeureOuNon == 0 &&
        idAnonymeOuNon == 0
      ) 

      ) {
        setObjetConsultationAffiche([liste[15]]);
      
    } 
    else if (
      identifiantConsultation== 3 &&
        idMajeureOuNon == 1 &&
        idAnonymeOuNon == 1

    ) {
      setObjetConsultationAffiche([liste[4]]);
      
    }
    else if ((
      identifiantConsultation== 3 &&
        idMajeureOuNon == 0 &&
        idAnonymeOuNon == 1

    )||
    (
      identifiantConsultation== 3 &&
      idMajeureOuNon == 0 &&
      idAnonymeOuNon == 0
    )) {
      setObjetConsultationAffiche([liste[16]]);
      
    }
    else if (
      identifiantConsultation== 3 &&
        idMajeureOuNon == 1 &&
        idAnonymeOuNon == 0

    ) {
      setObjetConsultationAffiche([liste[17]]);
      
    }
    else if (
      identifiantConsultation== 5 &&
        idMajeureOuNon == 1 &&
        idAnonymeOuNon == 1
    ) {
      setObjetConsultationAffiche([liste[22]]);
      
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

  const txtNon = ()=> {
    return (
      <div>
        <h1>Vous n’êtes pas professionnel de santé :</h1>
        <p>
        Ce site est à destination des professionnels de santé uniquement. 
Des liens internet d’information sur les modalités d’accès à l’IVG ainsi que
 les structures médicales pouvant vous accueillir se trouvent sur cette page. 
        </p>
        <p>
        Si vous pensez avoir besoin d’un recours à une interruption volontaire de
         grossesse, un médecin généraliste, sage-femme ou tout autre professionnel de
          santé peut vous guider. Le planning familial le plus proche de chez vous
           peut vous renseigner et vous accompagner dans votre démarche.
        </p>
        <p>
        Un numéro vert gratuit est accessible 7j/7 24h/24 pour toute information au 0800 202 205.
        </p>
        <p>
          <a target="_blank" href="https://www.ivg.net/">Liens IVG.net</a>
        </p>
        <p>
          <a target="_blank" href="https://www.ivglesadresses.org/">Liens ivglesadresses.org</a>
        </p>
        <p>
          <a target="_blank" href="https://www.ivginfo.com/">Liens ivginfo.com</a>
        </p>
        <p>
          <a target="_blank" href="http://www.avortementancic.net/IMG/pdf/guide_ivg_2017-2.pdf">Lien dossier guide ivg</a>
        </p>
      </div>
    )
  }

  const Non = () => {
    /// function censé gérer laffichage si lutilisateur nest pas un pro de santé
    
    setTexteDemarrage(txtNon());
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

      <div className="Contre">
        {/* partie censé gérer laffichage de la contre indication médicale  */}

        {objetContreIndicationAffiche.map((objet) => {
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

      <div className="Consultation MEdi">
        {/* partie censé gérer laffichage de la consultation prise medicament médicale  */}

        {objetConsultationMediAffiche.map((objet) => {
          return (
            <objet.objet
              onTexte={objet.name}
              onRecap={texteDemarrage}
              onRecup={objet.fonction.recupInfo}
              onData={stateGlobalPremiereConsulte}
              onSuite={objet.fonction.afficheSuite}
              onTest={afficheStates}
            ></objet.objet>
          );
        })}
      </div>






      <div className="Tarif">
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
