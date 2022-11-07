import React, {  useEffect, useState } from "react";
import "./MidSection.css";

// import AppCore from "@components/AppCore";
import QuestionStart from "@components/QuestionStart";
import TxtStart from "@components/textApp/TextAcceuil";
import TextNonPro from "@components/textApp/NonPro";
import TxtPremierConsMin from "@components/textApp/TxtPremierConsMin";
import TxtDeuxiemeConMaj from "@components/textApp/TxtDeuxiemeConMaj";
import TxtDeuxiemeConMin from "@components/textApp/TxtDeuxiemeConMin";
import TxtPremierePriseMaj from "@components/textApp/TxtPremierePriseMaj";
import TxtDeuxiemePriseMaj from "@components/textApp/TxtDeuxiemePriseMaj";
import TxtPostIVG from "@components/textApp/TxtPostIVG";





import QuestionMetier from "@components/Questions/QuestionModal/QuestionMetier";
import QuestionConvention from "@components/Questions/QuestionModal/QuestionConvention";
import QuestionConsultationConv from "@components/Questions/QuestionModal/QuestionConsultationConv";
import QuestionMajeurMineur from "@components/Questions/QuestionModal/QuestionMajeurMineur";
import QuestionAnonyme from "@components/Questions/QuestionModal/QuestionAnonyme";
import QuestionPreaNoConvNoAtt from "@components/Questions/QuestionModal/QuestionPreaNoConvNoAtt";
import QuestionConsulationNoConv from "@components/Questions/QuestionModal/QuestionConsulationNoConv";
import NoConvNoConsultation from "@components/Reponses/NoConvNoConsultation";
import QuestionAttestationFormation from "@components/Questions/QuestionModal/QuestionAttestationFormation";
import NoConsultationNoAttInfo from "@components/Reponses/NoConsultationNoAttInfo";
import ConsultationModel from "@components/Consultations/ConsultationModel";
import PremiereConsultationMajAno from "@components/Consultations/PremiereConsultationMajAno";
import BlocCovid from "@components/Consultations/ElementsConsultations/BlocCovid";
import BlocDDR from "@components/Consultations/ElementsConsultations/BlocDDR";
import BlocEcho from "@components/Consultations/ElementsConsultations/BlocEcho";
import BlocAcc from "@components/Consultations/ElementsConsultations/BlocAcc";
import BlocDecouverte from "@components/Consultations/ElementsConsultations/BlocDecouverte";
import BlocContext from "@components/Consultations/ElementsConsultations/BlocContext";
import BlocViolence from "@components/Consultations/ElementsConsultations/BlocViolence";
import BlocIST from "@components/Consultations/ElementsConsultations/BlocIST";
import BlocPriseSang from "@components/Consultations/ElementsConsultations/BlocPriseSang";
import BlocGuideIVG from "@components/Consultations/ElementsConsultations/BlocGuideIVG";
import BlocConsultationPsy from "@components/Consultations/ElementsConsultations/BlocConsultationPsy";
import BlocInfoContra from "@components/Consultations/ElementsConsultations/BlocInfoContra";
import BlocHPV from "@components/Consultations/ElementsConsultations/BlocHPV";
import BlocTabac from "@components/Consultations/ElementsConsultations/BlocTabac";
import TarificationModel from "@components/Tarification/TarificationModel";
import PremiereTarifMaj from "@components/Tarification/PremiereTarifMaj";
import PremiereTarifMin from "@components/Tarification/PremiereTarifMin";
import BlocAccMin from "@components/Consultations/ElementConsultationMineure/BlocAccMin";
import BlocConsultPsyMin from "@components/Consultations/ElementConsultationMineure/BlocConsultPsyMin";
import BlocDeuxiemeCovid from "@components/Consultations/ElementsConsultations/BlocDeuxiemeCovid";
import BlocRealConsult from "@components/Consultations/ElementsConsultations/BlocRealConsult";
import BlocAttPremier from "@components/Consultations/ElementsConsultations/BlocAttPremier";
import BlocAgeGesta from "@components/Consultations/ElementsConsultations/BlocAgeGesta";
import BlocGrossesseCon from "@components/Consultations/ElementsConsultations/BlocGrossesseCon";
import BlocPriseSangEff from "@components/Consultations/ElementsConsultations/BlocPriseSangEff";
import BlocDosage from "@components/Consultations/ElementsConsultations/BlocDosage";
import BlocGroupeSang from "@components/Consultations/ElementsConsultations/BlocGroupeSang";
import DeuxiemeTarifMaj from "@components/Tarification/DeuxiemeTarifMaj";
import DeuxiemeTarifMin from "@components/Tarification/DeuxiemeTarifMin";
import BlocRealConsultMin from "@components/Consultations/ElementConsultationMineure/BlocRealConsultMin";
import BlocDeuxiemePriseCovid from "@components/Consultations/ElementsConsultations/BlocDeuxiemePriseCovid";
import BlocEffetMife from "@components/Consultations/ElementsConsultations/BlocEffetMife";
import BlocDeliMiso from "@components/Consultations/ElementsConsultations/BlocDeliMiso";
import BlocIngeAnti from "@components/Consultations/ElementsConsultations/BlocIngeAnti";
import BlocArretTravail from "@components/Consultations/ElementsConsultations/BlocArretTravail";
import BlocContraChoisie from "@components/Consultations/ElementsConsultations/BlocContraChoisie";
import DeuxiemePriseTarif from "@components/Tarification/DeuxiemePriseTarif";
import DeuxiemePriseMinTarif from "@components/Tarification/DeuxiemePriseMinTarif";
import PostIvgTarifMaj from "@components/Tarification/PostIvgTarifMaj";
import PostIvgTarifMin from "@components/Tarification/PostIvgTarifMin";
import BlocCovidPostIVG from "@components/Consultations/ElementsConsultations/BlocCovidPostIVG";
import BlocDosageResultat from "@components/Consultations/ElementsConsultations/BlocDosageResultat";
import BlocAdhesionContra from "@components/Consultations/ElementsConsultations/BlocAdhesionContra";
import BlocVecuIVG from "@components/Consultations/ElementsConsultations/BlocVecuIVG";
import BlocControleEchoOuAvis from "@components/Consultations/ElementsConsultations/BlocControleEchoOuAvis";
import BlocCovidPremierePrise from "@components/Consultations/ElementsConsultations/BlocCovidPremierePrise";
import BlocEchoFaite from "@components/Consultations/ElementsConsultations/BlocEchoFaite";
import BlocConsentmentIVG from "@components/Consultations/ElementsConsultations/BlocConsentmentIVG";
import BlocAgeGestaPriseMedi from "@components/Consultations/ElementsConsultations/BlocAgeGestaPriseMedi";
import BlocMife from "@components/Consultations/ElementsConsultations/BlocMife";
import BlocMiso from "@components/Consultations/ElementsConsultations/BlocMiso";
import BlocAntalgique from "@components/Consultations/ElementsConsultations/BlocAntalgique";
import BlocInfoEffets from "@components/Consultations/ElementsConsultations/BlocInfoEffets";
import BlocContextFavo from "@components/Consultations/ElementsConsultations/BlocContextFavo";
import BlocPriseMife from "@components/Consultations/ElementsConsultations/BlocPriseMife";
import BlocPriseMiso from "@components/Consultations/ElementsConsultations/BlocPriseMiso";
import BlocPrescriDosageAuto from "@components/Consultations/ElementsConsultations/BlocPrescriDosageAuto";
import PremierePriseTarifMaj from "@components/Tarification/PremierePriseTarifMaj";
import PremierePriseTarifMin from "@components/Tarification/PremierePriseTarifMin";
import BlocPIllule from "@components/Consultations/ElementsConsultations/BlocPIllule";
import BlocAgeGestaSemaineJour from "@components/Consultations/ElementsConsultations/BlocAgeGestaSemaineJour";
























function MidSection(props) {

  useEffect(() => {
    window.scrollTo(0,0);
 }, [])


 const [toggle, setToggle] = useState(false)


 const handleClick = () => {
  setToggle(!toggle)
}



 ///// liste d'objet contenant les texte de démarrages à afficher


 const [ listeText, setListeText] = useState(
   [
     {
       name : "TextAcceuil",
       objet : TxtStart,
       id : 0,
       toggle : toggle
     },

     {
       name : "Texte Non Pros",
       objet : TextNonPro,
       id : 1,
       toggle : toggle

     },
     {
      name : "Texte Première Consultation Mineure",
      objet : TxtPremierConsMin,
      id : 2,
      toggle : toggle

    },
    {
      name : "Texte Deuxième Consultation Majeure",
      objet : TxtDeuxiemeConMaj,
      id : 3,
      toggle : toggle

    },
    {
      name : "Texte Deuxième Consultation Mineure",
      objet : TxtDeuxiemeConMin,
      id : 4,
      toggle : toggle

    },
    {
      name : "Texte Premiere Prise Médicamenteuse",
      objet : TxtPremierePriseMaj,
      id : 5,
      toggle : toggle

    },
    {
      name : "Texte Deuxième Prise Médicamenteuse",
      objet : TxtDeuxiemePriseMaj,
      id : 6,
      toggle : toggle

    },
    {
      name : "Texte Consultation Post-IVG",
      objet : TxtPostIVG,
      id : 7,
      toggle : toggle

    }

   ]

  )

  ////////////////////////////////////////

  //// liste contenant le texte affiché (1 seul objet)
  const [ currentText, setCurrentText] = useState(
    [listeText[0]]
  )

  ////////////////////////////////////////
   /// fonction gérant l'affichage des textes acceuils et non professionel

   const changeTexteNonPro = () => {
    let objetAAjouter =  listeText[1];


    setCurrentText([objetAAjouter]);
  };


  ///////////////////////////

  ////// affiche texte acceuil
  const changeTexteAcc = () => {
    let objetAAjouter =  listeText[0];


    setCurrentText([objetAAjouter]);
  };

  /////////////////////////
  const changeTextePremiereConsMin = () => {
    let objetAAjouter =  listeText[2];


    setCurrentText([objetAAjouter]);
  };


  const changeTexteDeuxiemeConMAj = () => {
    let objetAAjouter =  listeText[3];


    setCurrentText([objetAAjouter]);
  };

  const changeTexteDeuxiemeConMin = () => {
    let objetAAjouter =  listeText[4];


    setCurrentText([objetAAjouter]);
  };

  const changeTextePremierePriseMaj = () => {
    let objetAAjouter =  listeText[5];


    setCurrentText([objetAAjouter]);
  };

  const changeTexteDeuxiemePriseMaj = () => {
    let objetAAjouter =  listeText[6];


    setCurrentText([objetAAjouter]);
  };


  const changeTextePostIvg = () => {
    let objetAAjouter =  listeText[7];


    setCurrentText([objetAAjouter]);
  };





  ///// fonction gérant l'affichage question métier

  const changeQuestionMetier = () => {
    let objetAAjouter =  listeQuestionPre[1];


    setCurrentQuestionPre([objetAAjouter]);
  };

  //////////////////////////////////

  ///// fonction affiche question convention 
  const changeQuestionConv = () => {
    let objetAAjouter =  listeQuestionPre[2];


    setCurrentQuestionPre([objetAAjouter]);
  };


  //////////////////////////////


  /////// affiche la question consultation quand conventionné (5 consultation)

  const changeQuestionConsultationConv = () => {
    let objetAAjouter =  listeQuestionPre[3];


    setCurrentQuestionPre([objetAAjouter]);
  };

  ////////////////////////////////////////////


  /////////// fonction affiche question majeure ou mineure
  const changeQuestionMajMin = () => {
    let objetAAjouter =  listeQuestionPre[4];


    setCurrentQuestionPre([objetAAjouter]);
  };


  //////////////////////////////////////


  /////// fonction affiche question anonyme
  const changeQuestionAno = () => {
    let objetAAjouter =  listeQuestionPre[5];


    setCurrentQuestionPre([objetAAjouter]);
  };


  /////////////////////////


  /////// affiche question prélable à ivg sans convention ni attestation
  const changeQuestionPreNoConvNoAtt = () => {
    let objetAAjouter =  listeQuestionPre[6];


    setCurrentQuestionPre([objetAAjouter]);
  };

  /////////////////////////////


  /////fonction affiche question consultation sans convention ( 2 consultations proposées)

  const changeQuestionConsulationNoConv = () => {
    let objetAAjouter =  listeQuestionPre[7];


    setCurrentQuestionPre([objetAAjouter]);
  };


  //////////////////

  //// fonction affiche la reponse si pas de convention ni consultation demandée 
  const changeReponseNoConvNoConsult = () => {
    let objetAAjouter =  listeQuestionPre[8];


    setCurrentQuestionPre([objetAAjouter]);
  };
  ///////////////////////


  ////// fonction affichant la question attestation de formation 
  const changeQuestionAttestation = () => {
    let objetAAjouter =  listeQuestionPre[9];


    setCurrentQuestionPre([objetAAjouter]);
  };
  //////////////////////////////////


  ///// fonction qui échange la reponse envoyé si pas de consultation demandée , sans convention ni attestation
  const changeReponseInfo = () => {
    let liste = listeQuestionPre;
    liste[8]= liste[10];
    setListeQuestionPre(liste);
  }
  ///////////////////////////////////



  /////// fonctionaffiche la question start 
  const afficheStart = () => {
    let objetAAjouter =  listeQuestionPre[0];


    setCurrentQuestionPre([objetAAjouter]);

  }
  ///////////////


  ////// fonction recup la consulation demandée + state affilié
  const recupConsult = (event) => {
    let id = event.target.id;
    setConsultationSelect(id);
  }



 const [ consultationSelect, setConsultationSelect] = useState();
 /////////////////////////

 ////////// fonction recup si patiente majeure ou mineure + satte affilié
 const recupMajMin = (event) => {
  let id = event.target.id;
  setMajMinSelect(id);
}

const [ majMinSelect, setMajMinSelect] = useState();

/////////////////////////////

 ////////// fonction recup si patiente anonyme ou non + state affilié
 const recupAno = (event) => {
  let id = event.target.id;
  setAnoSelect(id);
  
}

const [ AnoSelect, setAnoSelect] = useState();

/////////////////////////////

const afficheTarif = () => {
  let objetAAjouter =  listeQuestionPre[13];
  setCurrentQuestionPre([objetAAjouter]);    

}

const affichePremiereTarif = () => {
  let objetAAjouter = listeQuestionPre[14];
  setCurrentQuestionPre([objetAAjouter]);
}

const affichePremiereTarifMin = () => {
  let objetAAjouter = listeQuestionPre[15];
  setCurrentQuestionPre([objetAAjouter]);
}

const afficheDeuxiemeTarifMaj = () => {
  let objetAAjouter = listeQuestionPre[16]
  setCurrentQuestionPre([objetAAjouter]);

}

const afficheDeuxiemeTarifMin = () => {
  let objetAAjouter = listeQuestionPre[17]
  setCurrentQuestionPre([objetAAjouter]);

}

const afficheDeuxiemePriseTarifMaj = () => {
  let objetAAjouter = listeQuestionPre[18]
  setCurrentQuestionPre([objetAAjouter]);
}

const affichePremierePriseTarifMaj = () => {
  let objetAAjouter = listeQuestionPre[22]
  setCurrentQuestionPre([objetAAjouter]);
}
const affichePremierePriseTarifMin = () => {
  let objetAAjouter = listeQuestionPre[23]
  setCurrentQuestionPre([objetAAjouter]);
}

const afficheDeuxiemePriseTarifMin = () => {
  let objetAAjouter = listeQuestionPre[19]
  setCurrentQuestionPre([objetAAjouter]);
}

const afficheTarifPostIVGMaj = () => {
  let objetAAjouter = listeQuestionPre[20]
  setCurrentQuestionPre([objetAAjouter]);
}

const afficheTarifPostIVGMin = () => {
  let objetAAjouter = listeQuestionPre[21]
  setCurrentQuestionPre([objetAAjouter]);
}


////////////////////////////////:



/////////// fonction recup id est selectionne consulation à afficher 

const selectConsultation = (event, idCons, idMaj) => {
  let idConsultation = idCons;
  let idMajMin = idMaj;
  let idAno = event.target.id;
  if (idConsultation=="1"&&idMajMin=="1"&&idAno=="1") {
    /// si patiente majeure non anonyme
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[0].elementsCon;
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);    
  }
  else if (idConsultation=="1"&&idMajMin=="2"&&idAno=="1"||idConsultation=="1"&&idMajMin=="2"&&idAno=="2") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[1].elementsCon;
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
    changeTextePremiereConsMin();
  }
  else if (idConsultation=="1"&&idMajMin=="1"&&idAno=="2"||idConsultation=="2"&&idMajMin=="1"&&idAno=="2"||idConsultation=="3"&&idMajMin=="1"&&idAno=="2"||idConsultation=="4"&&idMajMin=="1"&&idAno=="2"||idConsultation=="5"&&idMajMin=="1"&&idAno=="2") {
    let objetAAjouter =  listeQuestionPre[12];
    setCurrentQuestionPre([objetAAjouter]);
  }
  else if (idConsultation=="2"&&idMajMin=="1"&&idAno=="1") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[2].elementsCon;
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
    changeTexteDeuxiemeConMAj();
  }
  else if (idConsultation=="2"&&idMajMin=="2"&&idAno=="1"||idConsultation=="2"&&idMajMin=="2"&&idAno=="2") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[3].elementsCon;
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
    changeTexteDeuxiemeConMin();
  }
  else if (idConsultation=="3"&&idMajMin=="1"&&idAno=="1") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[4].elementsCon;
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
    changeTextePremierePriseMaj();
  }
  else if (idConsultation=="3"&&idMajMin=="2"&&idAno=="1"||idConsultation=="3"&&idMajMin=="2"&&idAno=="2") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[5].elementsCon;
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
    changeTextePremierePriseMaj();

  }
  else if (idConsultation=="4"&&idMajMin=="1"&&idAno=="1") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[6].elementsCon;
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
    changeTexteDeuxiemePriseMaj();
  }
  else if (idConsultation=="4"&&idMajMin=="2"&&idAno=="1"||idConsultation=="4"&&idMajMin=="2"&&idAno=="2") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[7].elementsCon;
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
    changeTexteDeuxiemePriseMaj();
  }
  else if (idConsultation=="5"&&idMajMin=="1"&&idAno=="1") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[8].elementsCon;
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
    changeTextePostIvg();
  }
  else if (idConsultation=="5"&&idMajMin=="2"&&idAno=="1"||idConsultation=="5"&&idMajMin=="2"&&idAno=="2") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[9].elementsCon;
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
    changeTextePostIvg(); 
  }
  
}
////////////////////





////////////// state et fonction contenant/recuperant les reponses saisies durant la consulation
const [ elementTArif, setElementTarif] = useState([]);
const [ elementBloc , setElementBloc] = useState({});

const recupElTarif = (liste, blocs={bloc1:[],bloc2:[]}) =>{
  let objetAAjouter = liste;
  setElementTarif(objetAAjouter);
  setElementBloc(blocs);
  console.log(blocs);
}


/////////////////////////////////////


  //// liste contenant les question pré consultation (ou reponses si pas de consultations)
///  la liste contient aussi les élements consulations






  const [ listeQuestionPre, setListeQuestionPre] = useState(
    [
      {
        name : "Question Start",
        id : 0, 
        objet : QuestionStart,
        fonction : {
          nonPro : changeTexteNonPro,
          pro : changeQuestionMetier,
          proTxt : changeTexteAcc
        },
        toggle : toggle

      },
      {
        name : "Question Métier",
        id : 1,
        objet : QuestionMetier,
        toggle : toggle,
        fonction : {
          animation : handleClick,
          convention : changeQuestionConv,
          demandeAttestation : changeQuestionAttestation,
          retour : afficheStart
        }

      },
      {
        name : "Question Convention",
        id : 2,
        objet : QuestionConvention,
        toggle : toggle,
        fonction : {
          consulationOui : changeQuestionConsultationConv,
          conventionNOn : changeQuestionPreNoConvNoAtt,
          retour : changeQuestionMetier
        }

      },
      {
        name : "Question Consultation Conventionné",
        id : 3,
        objet : QuestionConsultationConv,
        toggle : toggle,
        fonction : {
          questionMajMin : changeQuestionMajMin,
          recupId : recupConsult
        }
      },
      {
        name : "Question Majeure Mineure",
        id : 4,
        objet : QuestionMajeurMineur,
        toggle : toggle,
        fonction : {
          questionAno : changeQuestionAno,
          recupId : recupMajMin
        }
      },
      {
        name : "Question Anonyme/Non Anonyme",
        id : 5,
        objet : QuestionAnonyme,
        toggle : toggle,
        fonction : {
          recupId : recupAno,
          selection : selectConsultation
        }
      },
      {
        name : "Question préalable à l'ivg sans attestation ni convention",
        id : 6,
        objet : QuestionPreaNoConvNoAtt,
        toggle : toggle,
        fonction : {
          afficheConsultationNoConv : changeQuestionConsulationNoConv,
          afficheTest : changeReponseNoConvNoConsult

        }
      },
      {
        name : "Question Consultation Non Conventionné",
        id : 7,
        objet : QuestionConsulationNoConv,
        toggle : toggle,
        fonction : {
          questionMajMin : changeQuestionMajMin,
          recupId : recupConsult
        }
      },
      {
        name : "Si pas de convention ni consultation",
        id : 8,
        objet : NoConvNoConsultation,
        toggle : toggle
      },
      {
        name : "Question attestation formation",
        id : 9,
        objet : QuestionAttestationFormation,
        toggle : toggle,
        fonction : {
          convention : changeQuestionConv,
          conventionNOn : changeQuestionPreNoConvNoAtt,
          changeReponseFin : changeReponseInfo


        }
      },
      {
        name : "Si pas d'attestation, convention ni consultation",
        id : 10,
        objet : NoConsultationNoAttInfo,
        toggle : toggle
      },
      {
        name : "Template Consultation",
        id : 11,
        objet : ConsultationModel,
        toggle : toggle,
        fonction : { 
          animation : handleClick,
          afficheTarification : afficheTarif,
          recup : recupElTarif
        }

      },
      {
        name : "Prémiere consultation majeure anonyme",
        id : 12,
        objet : PremiereConsultationMajAno
      },
      {
        name : "Template Tarification",
        id : 13,
        objet : TarificationModel,
        toggle : toggle,
        fonction : { 
          animation : handleClick

        }
        
      },
      {
        name : "Premiere Tarification Majeure",
        name2 : "Première consultation préalable/Premier contact médical Majeure - Résumé",
        id : 14,
        objet : PremiereTarifMaj,
        toggle : toggle
      },
      {
        name : "Premiere Tarification Mineure",
        name2 : "Première consultation préalable/Premier contact médical Mineure - Résumé",

        id : 15,
        objet : PremiereTarifMin,
        toggle : toggle
      },
      {
        name : "Deuxième Tarification Majeure",
        name2 : "Deuxième consultation préalable Majeure - Résumé",

        id : 16,
        objet : DeuxiemeTarifMaj,
        toggle : toggle
      },
      {
        name : "Deuxième Tarification Mineure",
        name2 : "Deuxième consultation préalable Mineure - Résumé",

        id : 17,
        objet : DeuxiemeTarifMin,
        toggle : toggle
      },
      {
        name : "Deuxième Prise Médicamenteuse Tarification Majeure",
        name2 : "Deuxième Prise Médicamenteuse Majeure - Résumé",
        id : 18,
        objet : DeuxiemePriseTarif,
        toggle : toggle
      },
      {
        name : "Deuxième Prise Médicamenteuse Tarification Mineure",
        name2 : "Deuxième Prise Médicamenteuse Mineure - Résumé",

        id : 19,
        objet : DeuxiemePriseMinTarif,
        toggle : toggle
      },
      {
        name : "Tarification consultation Post IVG Majeure",
        name2 : "Consultation Post-IVG Majeure - Résumé",

        id : 20,
        objet : PostIvgTarifMaj,
        toggle : toggle
      },
      {
        name : "Tarification consultation Post IVG Mineure",
        name2 : "Consultation Post-IVG Mineure - Résumé",

        id : 21,
        objet : PostIvgTarifMin,
        toggle : toggle
      },
      {
        name : "Facturation et résumé 1ere prise médicamenteuse Majeure",
        name2 : "Résumé 1ere prise médicamenteuse Majeure",
        id : 22,
        objet : PremierePriseTarifMaj,
        toggle : toggle
      },
      {
        name : "Facturation et résumé 1ere prise médicamenteuse Mineure",
        name2 : "Résumé 1ere prise médicamenteuse Mineure",

        id : 23,
        objet : PremierePriseTarifMin,
        toggle : toggle
      }

    ]
  )


  /////////////////

  

  //// liste contenant les élements affichés dans la consultations et state actif

  const [ currentElCons, setCurrentElCons] = useState();
  const [ listeElConsultation, setListeElConsulation] =useState(
    [
      {
        id : 0,
        elementsCon : {
          name : "Première consultation majeure",
          titre : "Première consultation préalable/Premier contact médical Majeure",
          fonctionTarif : affichePremiereTarif,
          listeElementsConsulations : [
            {
              objet : BlocCovid,
              id : 0
            },
            {
              objet : BlocDDR,
              id : 1
            },
            {
              objet : BlocEcho,
              id : 2
            },
            {
              objet : BlocAcc,
              id : 3
            },
            {
              objet : BlocDecouverte,
              id : 4
            },
            {
              objet : BlocPIllule,
              id : 5

            },
            {
              objet : BlocContext,
              id : 6
            },
            {
              objet : BlocViolence,
              id : 7
            },
            {
              objet : BlocIST,
              id : 8

            },
            {
              objet : BlocPriseSang,
              id : 9
            },
            {
              objet : BlocGuideIVG,
              id : 10
            },
            {
              objet : BlocConsultationPsy,
              id : 11
            },
            {
              objet : BlocInfoContra,
              id : 12
            },
            {
              objet : BlocHPV,
              id : 13

            },
            {
              objet : BlocTabac,
              id : 14
            }
          ]
         
        }
      },
      {
        id : 1,
        elementsCon : {
          name : "Première consultation mineure",
          titre : "Première consultation préalable/Premier contact médical Mineure",
          fonctionTarif : affichePremiereTarifMin,
          listeElementsConsulations : [
            {
              objet : BlocCovid,
              id : 0
            },
            {
              objet : BlocAccMin,
              id : 1
            },
            {
              objet : BlocDDR,
              id : 2
            },
            {
              objet : BlocEcho,
              id : 3
            },
            {
              objet : BlocDecouverte,
              id : 4
            },
            {
              objet : BlocContext,
              id : 5
            },
            {
              objet : BlocIST,
              id : 6
            },
            {
              objet : BlocPriseSang,
              id : 7
            },
            {
              objet : BlocGuideIVG,
              id : 8
            },
            {
              objet : BlocConsultPsyMin,
              id : 9
            },
            {
              objet : BlocViolence,
              id : 10
            },
            {
              objet : BlocInfoContra,
              id : 11
            },
            {
              objet : BlocTabac,
              id : 12
            }
          ]
         
        }
      },
      {
        id : 2,
        elementsCon : {
          name : "Deuxième consultation majeure",
          titre : "Deuxième consultation préalable à l’IVG/Recueil de consentement Majeure",
          fonctionTarif : afficheDeuxiemeTarifMaj,
          listeElementsConsulations : [
            {
              objet : BlocDeuxiemeCovid,
              id : 0
            },
            {
              objet : BlocAttPremier,
              id : 1
            },
            {
              objet : BlocAcc,
              id : 2
            },
            {
              objet : BlocRealConsult,
              id : 3
            },
            {
              objet : BlocViolence,
              id : 4
            },
            {
              objet : BlocGrossesseCon,
              id : 5
            },
            {
              objet : BlocAgeGestaSemaineJour,
              id : 6
            },
            {
              objet : BlocIST,
              id : 7
            },
            {
              objet : BlocPriseSangEff,
              id : 8
            },
            {
              objet : BlocDosage,
              id : 9
            },
            {
              objet : BlocGroupeSang,
              id : 10
            },
            {
              objet : BlocInfoContra,
              id : 11
            },
            {
              objet : BlocHPV,
              id : 12

            },
            {
              objet : BlocTabac,
              id : 13
            }

          ]


          
        }
      },
      {
        id : 3,
        elementsCon : {
          name : "Deuxième consultation mineure",
          titre : "Deuxième consultation préalable à l’IVG/Recueil de consentement Mineure",
          fonctionTarif : afficheDeuxiemeTarifMin,
          listeElementsConsulations : [
            {
              objet : BlocDeuxiemeCovid,
              id : 0
            },
            {
              objet : BlocAttPremier,
              id : 1
            },
            {
              objet : BlocAccMin,
              id : 2
            },
            {
              objet : BlocRealConsultMin,
              id : 3
            },
            {
              objet : BlocViolence,
              id : 4
            },
            {
              objet : BlocGrossesseCon,
              id : 5
            },
            {
              objet : BlocAgeGestaSemaineJour,
              id : 6
            },
            {
              objet : BlocIST,
              id : 7
            },
            {
              objet : BlocPriseSangEff,
              id : 8
            },
            {
              objet : BlocDosage,
              id : 9
            },
            {
              objet : BlocGroupeSang,
              id : 10
            },
            {
              objet : BlocInfoContra,
              id : 11
            },
            {
              objet : BlocTabac,
              id : 12
            }


          ]



          
        }
      },
      {
        id : 4,
        elementsCon : {
          name : "Première prise médicamenteuse majeure", 
          titre : "Consultation première prise médicamenteuse : Majeure",
          fonctionTarif : affichePremierePriseTarifMaj, 
          listeElementsConsulations : [ 
            {
              objet : BlocCovidPremierePrise,
              id : 0
            },
            {
              objet : BlocEchoFaite,
              id : 1
            },
            {
              objet : BlocAgeGestaPriseMedi, 
              id : 2
            },
            {
              objet : BlocConsentmentIVG,
              
              id : 3
            },
            {
              objet : BlocRealConsult,
              id : 4
            },
            {
              objet : BlocPriseSangEff,
              id : 5
            },
            {
              objet : BlocDosage,
              id : 6
            },
            {
              objet : BlocGroupeSang,
              id : 7
            },
            {
              objet : BlocAcc,
              id : 8
            },
            {
              objet : BlocMife,
              id : 9
            },
            {
              objet : BlocMiso,
              id : 10
            },
            {
              objet : BlocAntalgique,
              id : 11
            },
            {
              objet : BlocInfoEffets,
              id : 12
            },
            {
              objet : BlocContextFavo,
              id : 13
            },
            {
              objet : BlocViolence,
              id : 14
            },
            {
              objet : BlocIngeAnti,
              id : 15
            },
            {
              objet : BlocPriseMife,
              id : 16
            },
            {
              objet : BlocPriseMiso,
              id : 17
            },
            {
              objet : BlocArretTravail,
              id : 18
            },
            {
              objet : BlocContraChoisie,
              id : 19
            },
            {
              objet : BlocPrescriDosageAuto,
              id : 20
            },
            {
              objet : BlocIST,
              id : 21
            },
            {
              objet : BlocHPV,
              id : 22
            },
            {
              objet : BlocTabac,
              id : 23
            }
            
          ]

        }
      },
      {
        id : 5,
        elementsCon : {
          name : "Première prise médicamenteuse mineure", /// a faire
          titre : "Consultation première prise médicamenteuse : Mineure",
          fonctionTarif : affichePremierePriseTarifMin, 
          listeElementsConsulations : [
            {
              objet : BlocCovidPremierePrise,
              id : 0
            },
            {
              objet : BlocEchoFaite,
              id : 1
            },
            {
              objet : BlocAgeGestaPriseMedi, 
              id : 2
            },
            {
              objet : BlocConsentmentIVG,
              id : 3
            },
            {
              objet : BlocRealConsultMin,
              id : 4
            },
            {
              objet : BlocPriseSangEff,
              id : 5
            },
            {
              objet : BlocDosage,
              id : 6
            },
            {
              objet : BlocGroupeSang,
              id : 7
            },
            {
              objet : BlocAccMin,
              id : 8
            },
            {
              objet : BlocMife,
              id : 9
            },
            {
              objet : BlocMiso,
              id : 10
            },
            {
              objet : BlocAntalgique,
              id : 11
            },
            {
              objet : BlocInfoEffets,
              id : 12
            },
            {
              objet : BlocContextFavo,
              id : 13
            },
            {
              objet : BlocViolence,
              id : 14
            },
            {
              objet : BlocIngeAnti,
              id : 15
            },
            {
              objet : BlocPriseMife,
              id : 16
            },
            {
              objet : BlocPriseMiso,
              id : 17
            },
            {
              objet : BlocArretTravail,
              id : 18
            },
            {
              objet : BlocContraChoisie,
              id : 19
            },
            {
              objet : BlocPrescriDosageAuto,
              id : 20
            },
            {
              objet : BlocIST,
              id : 21
            },
            {
              objet : BlocTabac,
              id : 22
            }
            
          ]

        }
      },
      {
        id : 6,
        elementsCon : {
          name : "Deuxième prise médicamenteuse majeure",
          titre : "Consultation deuxième prise médicamenteuse (facultative) : Majeure",
          fonctionTarif : afficheDeuxiemePriseTarifMaj, 
          listeElementsConsulations : [
            // {
            //   objet : BlocDeuxiemePriseCovid,
            //   id : 0
            // },
            {
              objet : BlocEffetMife,
              id : 0
            },
            {
              objet : BlocDeliMiso,
              id : 1
            },
            {
              objet : BlocIngeAnti,
              id : 2
            },
            {
              objet : BlocArretTravail,
              id : 3
            },
            {
              objet : BlocContraChoisie,
              id : 4
            }

          ]
          
        }
      },
      {
        id : 7,
        elementsCon : {
          name : "Deuxième prise médicamenteuse mineure",
          titre : "Consultation deuxième prise médicamenteuse (facultative) : Mineure",
          fonctionTarif : afficheDeuxiemePriseTarifMin, 
          listeElementsConsulations : [
            // {
            //   objet : BlocDeuxiemePriseCovid,
            //   id : 0
            // },
            
            {
              objet : BlocEffetMife,
              id : 0
            },
            {
              objet : BlocAccMin,
              id : 1
            },
            {
              objet : BlocDeliMiso,
              id : 2
            },
            {
              objet : BlocIngeAnti,
              id : 3
            },
            {
              objet : BlocArretTravail,
              id : 4
            },
            {
              objet : BlocContraChoisie,
              id : 5
            }

          ]
          
        }
      },
      {
        id : 8,
        elementsCon : {
          name : "Consultation post-IVG Majeure :",
          titre : "Consultation post-IVG Majeure :",
          fonctionTarif : afficheTarifPostIVGMaj,
          listeElementsConsulations : [
            {
              objet : BlocCovidPostIVG,
              id : 0
            },
            {
              objet : BlocDosageResultat,
              id : 1
            },
            {
              objet : BlocContraChoisie,
              id : 2
            },
            {
              objet : BlocAdhesionContra,
              id : 3
            },
            {
              objet : BlocIST,
              id : 4
            },
            {
              objet : BlocHPV,
              id : 5
            },
            {
              objet : BlocTabac,
              id : 6
            },
            {
              objet : BlocVecuIVG,
              id : 7
            },
            {
              objet : BlocControleEchoOuAvis,
              id : 8
            }
            

          ]


          
        }
      },
      {
        id : 9,
        elementsCon : {
          name : "Consultation post-IVG Mineure :",
          titre : "Consultation post-IVG Mineure :",
          fonctionTarif : afficheTarifPostIVGMin, 
          listeElementsConsulations : [
            {
              objet : BlocCovidPostIVG,
              id : 0
            },
            {
              objet : BlocAccMin, /// a faire
              id : 1
            },
            {
              objet : BlocDosageResultat,
              id : 2
            },
            {
              objet : BlocContraChoisie,
              id : 3
            },
            {
              objet : BlocAdhesionContra,
              id : 4
            },
            {
              objet : BlocIST,
              id : 5
            },
            {
              objet : BlocTabac,
              id : 6
            },
            {
              objet : BlocVecuIVG,
              id : 7
            },
            {
              objet : BlocControleEchoOuAvis,
              id : 8
            }
            

          ]
          
        }
      }
    ]
  )
  /////////////

  ////// state contenant la question (active) affichée à l'écran


  const [currentQuestionPre, setCurrentQuestionPre] = useState(
    [listeQuestionPre[0]]
  )

  ////////////////////////




  return (
    <div className="Mid"> 
    
      
      <div className="BorderApp"></div>
            {/* <div className="Marge"></div> */}
            <div className="Core">
              {/* <QuestionStart 
                onNonProfessionel={changeTexteNonPro}
                
              >

              </QuestionStart> */}
              {currentQuestionPre.map((objet) => {
                return (
                  <objet.objet
                  key={objet.id}
                  onFonction={objet.fonction}
                  onIdCons={consultationSelect}
                  onIdMaj={majMinSelect}
                  onElCons={currentElCons}
                  onElTarif={elementTArif}
                  onElDoubleTarif={elementBloc}
                  onTestTitre={objet.name2}
                  >

                  </objet.objet>
                )
              })}


              
              
<br></br>
              <div className="ContainerTextes">
              {currentText.map((objet) => {
          return (
            <objet.objet 
            key = {objet.id}
            toggle = {toggle}
              
            ></objet.objet>
          );
        })}

              </div>
              
            </div>

      
      
      {/* <div className="Marge"></div> */}
      <div className="BorderApp"></div>
      

    </div>
  );
}



export default MidSection;
