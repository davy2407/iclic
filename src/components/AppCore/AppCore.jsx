import React, { useState, useEffect } from "react";
/// finir PremiereMediMineureANA , texte a changer etc voir signes ///

// import iclic components
import Bouton from "@components/Bouton";


//// docs

import ConsentementMineur from "@assets/docx/consentementMineure.docx";
import ContraceptionHAS from "@assets/pdf/ContraceptionPostIVGHAS.pdf"




// import APropos from "@components/APropos";
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
import TarifDeuxiemeConsulteMineureANA from "@components/TarifDeuxiemeConsulteMineureANA";
import PostIVGMineur from "@components/PostIVGMineur";
import TarifPostMajeure from "@components/TarifPostMajeure";
import PostIVGMAJA from "@components/PostIVGMAJA";
import ContreIndicationMineure from "@components/ContreIndicationMineure";
import PremierePriseMineureConsultePrin from "@components/PremierePriseMineureConsultePrin";
import TarifPriseMediMineur from "@components/TarifPriseMediMineur";
import TarifPostMin from "@components/TarifPostMin";
import NonPro from "@components/NonPro";



//import style
import {Button} from "react-bootstrap";
import "./AppCore.css";

function AppCore() {
  useEffect(() => {
    window.scrollTo(0,0);
 }, [])
  /// State gérant le texte à afficher au démmarage
  const accueil =()=> {
    return (
      <div>
        <div className="Taille consultationContainerDebut">
        <p>
        Site créé à destination de tout professionnel de santé prenant en charge l’interruption volontaire de grossesse médicamenteuse hors établissement de santé.
        
        </p>

        <p>
        Cet outil met à disposition des fiches d’information à destination des patientes et assure un suivi de l’acte. Les documents officiels sont disponibles selon les recommandations actuelles en France.
        
        </p>

        <p>
        Aucune donnée personnelle n’est enregistrée, un résumé imprimable vous est proposé à la fin de la saisie de chaque consultation. 
        </p>

        <p>
        L’IVG médicamenteuse : 5 consultations, 2 premières (« préalables ») pouvant être effectuées par un médecin ou sage femme ne pratiquant pas lui même l’acte.
        </p>
        <p>
        Le contenu de ce site ne se substitue pas à la responsabilité de décision et de prescription du praticien.
        </p>


        <p>
          L'interruption volontaire de grossesse est autorisé en France depuis
          la loi Veil du 17 Janvier 1975 , elle est gratuite et accessible à
          toute femme en France selon les délais légaux de la loi <a rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000222631&categorieLien=id"> 2001-588 du 4
          Juillet 2001</a>,<a rel="noreferrer noopener"
          target="_blank"
          href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000027221802&categorieLien=id"
          >Loi avortement du 25 mars 2013 </a>.
         
        </p>

       
        
      </div>
      </div>
    )
  }
  const [texteDemarrage, setTexteDemarrage] = useState(()=>accueil());


  const questionDepart = () => {
    return (
      <div>
        <h1>Êtes vous professionel de santé ?</h1>
      </div>
    )
  }

  const [txtQuestion, setTxtQuestion] = useState(()=>questionDepart());

  const test = () => {
    let liste = [...stateGlobalPremiereConsulte];
    
  }

   const [classQuestion, setClassQuestion] = useState("Question");

  const [nombreBouton, setNombreBouton] = useState(2);
  const [stateGlobalPremiereConsulte,setStateGlobalPremiereConsulte] = useState([]);

  const [stateGlobalContreindication, setStateGlobalContreIndication] = useState([]);
  /// state recuperant les données du composant enfant pConsultation
  const recupPremiereConsulte = (liste)=> {
    
    let newData = [...liste];
    setStateGlobalPremiereConsulte(newData);
    for (let i = 0; i < newData.length; i++) {

      
    }
    

  }

  const recupPremiereContreIndi = (liste)=> {
    
    let newData = [...liste];
    
    
    
    setStateGlobalPremiereConsulte(newData);
    for (let i = 0; i < newData.length; i++) {

      
    }
    

  }

  const blocRecap =(liste) => {
    let recap = liste;
    return (
      <div>
        {recap.map((objet) => {
          return (
            <div>
          <h4>{objet}</h4>
          
          </div>
            
          );
        })}
      </div>
    )
      
  }


  const afficheStates = () => {
  }

  // const afficheAPropos = () => {
  //   setObjetConsultationAffiche([26]);
  //   setObjetConsultationMediAffiche([]);
  //   setObjetContreIndictionAffiche([]);
  //   setObjetTarrificationAffiche([]);

  // }


  const modifierObjetTarifPremiereConsulte = () =>{
    /// fonction qui affiche la tarification apres premiere consulte majeure non anonyme
    /// et stop laffichage du composant consultation
    setObjetTarrificationAffiche([listeObjetConsulation[8]]);
    setObjetConsultationAffiche([]);
    setTexteDemarrage("");
  }

  const modifierObjetTarifDeuxiemeConsulteMineure = () => {
    setObjetTarrificationAffiche([listeObjetConsulation[24]]);
    setObjetConsultationAffiche([]);
    setTexteDemarrage("");

  }

  const modifierObjetTarifPremiereConsulteMineur = () =>{
    /// fonction qui affiche la tarification apres premiere consulte Mineure A/NA
     /// et stop laffichage du composant consultation
    setObjetTarrificationAffiche([listeObjetConsulation[10]]);
    setObjetConsultationAffiche([]);
    setTexteDemarrage("");
  }

  const afficheTArifMediMineur = () => {
    setObjetTarrificationAffiche([listeObjetConsulation[30]]);
    setObjetConsultationMediAffiche([]);
    setTexteDemarrage("");

  }

  const afficheTarifDeuxiemeConsulteMajeureNA = () =>{
    setObjetTarrificationAffiche([listeObjetConsulation[23]]);
    setObjetConsultationAffiche([]);
    setTexteDemarrage("");

  }

  const afficheTarifPremierPriseMediMajeure = () =>{
    setObjetTarrificationAffiche([listeObjetConsulation[19]]);
    setObjetConsultationMediAffiche([]);
    setTexteDemarrage("");

  }

  const afficheFinCOnsulteMineure = () => {
    setObjetTarrificationAffiche([listeObjetConsulation[29]]);
    setObjetConsultationMediAffiche([]);
    setTexteDemarrage("");

  }

  const afficheTarifdeuxiemeMediMajeureNA = () =>{
    setObjetTarrificationAffiche([listeObjetConsulation[20]]);
    setObjetConsultationAffiche([]);
    setTexteDemarrage("");


  }


  const afficheTarifDeuxiemeMineureANA = () => {
    setObjetTarrificationAffiche([listeObjetConsulation[21]]);
    setObjetConsultationAffiche([]);
    setTexteDemarrage("");

  }

  ////////// premiere prise medi

  const afficheContreIndication = () => {
    /// function permettant l'affichage du composant contrre indication medical et stop laffichage consulte 
    setObjetTarrificationAffiche([listeObjetConsulation[0]]);
    setObjetConsultationAffiche([]);
    setTexteDemarrage("");

  }

  const afficheContreIndicationMineure = () => {
    /// function permettant l'affichage du composant contrre indication medical et stop laffichage consulte 
    setObjetTarrificationAffiche([listeObjetConsulation[28]]);
    setObjetConsultationAffiche([]);
    setTexteDemarrage("");

  }

  const afficheConsultationMedi = () => {
    setObjetConsultationMediAffiche([listeObjetConsulation[18]]);
    setObjetTarrificationAffiche([]);
    setTexteDemarrage("");

  }

  const afficheTarifPostMaj = () => {
    setObjetTarrificationAffiche([listeObjetConsulation[26]]);
    setObjetConsultationAffiche([]);
    setTexteDemarrage("");

  }

  const afficheTarifPostMin = () => {
    setObjetTarrificationAffiche([listeObjetConsulation[31]]);
    setObjetConsultationAffiche([]);
    setTexteDemarrage("");

  }

 const affichePConsultation = () => {
    setObjetConsultationAffiche([3]);
    setTexteDemarrage("");

  }

  const recupPremierePriseMedi = (liste)=> {
    
    let newData = [...liste];
    
    setStateGlobalPremiereConsulte(newData);
    for (let i = 0; i < newData.length; i++) {

      
    }
    

  }


  


  ////////////////////////////////////////////////////////////////////////

  //////// state txt 

  const TexteMineure = () => {
    return (
      <div className="BulleInfo">
        <p>
          L’article <a rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000031930097&cidTexte=LEGITEXT000006072665&dateTexte=20160128">L. 2212-7</a>  du Code de la Santé Publique : « Si la femme est mineure non émancipée, le consentement de l’un des titulaires de l’autorité parentale ou, le cas échéant, du représentant légal est recueilli. Ce consentement est joint à la demande qu’elle présente au médecin en dehors de la présence de toute autre personne.
          </p>
          <p>
          Si la femme mineure non émancipée désire garder le secret, le médecin doit s’efforcer, dans l’intérêt de celle-ci, d’obtenir son consentement pour que le ou les titulaires de l’autorité parentale ou, le cas échéant, le représentant légal soient consultés ou doit vérifier que cette démarche a été faite lors de l’entretien mentionné à l’article L 2212-4. Si la mineure ne veut pas effectuer cette démarche, ou si le consentement n’est pas obtenu, l’interruption volontaire de grossesse ainsi que les actes médicaux et les soins qui lui sont liés peuvent être pratiqués à la demande de l’intéressée, présentée dans les conditions prévues au 1er alinéa. Dans ce cas, la mineure se fait accompagner dans sa démarche par la personne majeure de son choix ».
          </p>
          
          
          <p>
          Une jeune fille mineure non émancipée doit donner au médecin son consentement pour avorter sans que ses parents, son tuteur ou toute autre personne ne soient présents afin qu'elle n'agisse pas sous la contrainte.
          </p>
          <p>
          <a className="Bold" href={ConsentementMineur} target="_blank ">Formulaire de consentement pour patiente mineure.</a>
          </p>
      </div>
    )
  }

  const txtPostMin = () => {
    return (
      <div className="BulleInfo">
        <p>
            Cette consultation intervient 14 à 21 jours après la prise médicamenteuse. 

            </p>
            <p>
            Dans le cas particulier de l’IVG, <a rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000031930097&cidTexte=LEGITEXT000006072665&dateTexte=20160128">l’article L. 2212-7</a>  du code de la santé publique dispose : « Si la femme est mineure non émancipée, le consentement de l’un des titulaires de l’autorité parentale ou, le cas échéant, du représentant légal est recueilli. Ce consentement est joint à la demande qu’elle présente au médecin en dehors de la présence de toute autre personne. 
            </p>


            <p>
            Si la femme mineure non émancipée désire garder le secret, le médecin doit s’efforcer, dans l’intérêt de celle-ci, d’obtenir son consentement pour que le ou les titulaires de l’autorité parentale ou, le cas échéant, le représentant légal soient consultés ou doit vérifier que cette démarche a été faite lors de l’entretien mentionné à l’article L 2212-4. Si la mineure ne veut pas effectuer cette démarche, ou si le consentement n’est pas obtenu, l’interruption volontaire de grossesse ainsi que les actes médicaux et les soins qui lui sont liés peuvent être pratiqués à la demande de l’intéressée, présentée dans les conditions prévues au 1er alinéa. Dans ce cas, la mineure se fait accompagner dans sa démarche par la personne majeure de son choix ».
            </p>


            <p>
            Une jeune fille mineure non émancipée doit donner au médecin son consentement pour avorter sans que ses parents, son tuteur ou toute autre personne ne soient présents afin qu'elle n'agisse pas sous la contrainte.
            </p>


















            
      </div>
    )
  }


  const txtDeuxiemeContactMAJ = () => {
    return (
      <div className="BulleInfo">
        <p>
            Cette 2ème consultation peut être effectuée par tout médecin ou sage femme,
             prenant en charge l’IVG ou non. Elle fait partie du tarif forfaitaire à l’IVG. 
             
            </p>

            <p>
            Si vous n’êtes pas le médecin ou la sage femme prenant en charge l’IVG, 
            il convient de ré-adresser
            la patiente au terme de la consultation à un professionnel pouvant effectuer cet acte.
            </p>
      </div>
    )
  }

  const txtPOstMaj = () => {
    return (
      <div className="BulleInfo">
        <p>
            Cette consultation intervient 14 à 21 jours après la prise médicamenteuse. 

  

            </p>
            <p>
            <a className="Bold" target="_blank" href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter">Lien protocole HAS</a>

            </p>
      </div>
    )
  }
  const txtDeuxiemePriseMin = () => {
    return (
      <div className="BulleInfo">
        <p>
            Cette consultation intervient 36 à 48 heures après la 1ère prise médicamenteuse,
             qui a lieu à domicile ou, si la femme le désire, en présence du médecin ou de la sage-femme.

            </p>
            <p> <a className="Bold" target="_blank" href={ContraceptionHAS}>HAS contraception PDF</a>
            </p>
      </div>
    )
  }

  const txtDeuxiemePriseMaj = () => {
    return (
      <div className="BulleInfo">
        <p>
            Cette consultation intervient 36 à 48 heures après la 1ère prise médicamenteuse,
             qui a lieu à domicile ou, si la femme le désire, en présence du médecin ou de la sage-femme.

            </p>
            <p>
            <a className="Bold" rel="noreferrer noopener" target="_blank" href={ContraceptionHAS}>HAS contraception PDF</a>
            </p>
      </div>
    )
  }

  const txtPriseMediMajeure = () => {
    return (
      <div className="BulleInfo">
      <p>
      Médicaments nécessaires à l’acte vendus en pharmacie d’officine. Exclusivement aux médecins ou aux sages-femmes ayant passé convention avec un établissement de santé.
      </p>

      <p>
      Commande à usage professionnel auprès de la pharmacie d’officine de son choix. La commande comprend les mentions suivantes :
      <ul>
        <li>Le nom, la qualité, le numéro d’inscription à l’Ordre, l’adresse et la 
signature du praticien ainsi que la date</li>
        <li>Le nom des médicaments et le nombre de boîtes commandées</li>
        <li>La mention « usage professionnel »</li>
        <li>Le nom de l’établissement de santé avec lequel le praticien a conclu une convention ainsi que la date de cette convention.</li>
      </ul>
      </p>

    </div>
    )
  }


  const txtDeuxiemeContactMineure = () => {
    return (
      <div className="BulleInfo">
        <p>
          Dans le cas particulier de l’IVG, l’article <a rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000031930097&cidTexte=LEGITEXT000006072665&dateTexte=20160128">L. 2212-7</a> Lien n°19 du code de la
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
      </div>
    )
  }

  /////////////////////////////////////////////////////////////////////

 const testtt = () => {
 }

  

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
        },
        txt : ""
      },
      {
        name: "Prise medicamentMajeureNonAnonyme",
        id: 4,
        objet: PriseMediMajeure,
        fonction : {
          recupInfo : recupPremierePriseMedi,
          afficheSuite : afficheContreIndication
        },
        txt : txtPriseMediMajeure()
      },
      {
        name: "premiere consultation patiente majeure anonyme 3c",
        id: 5,
        objet: PremierConsultationTroisC,
        fonction : {
          recupInfo : testtt,
          afficheSuite : affichePConsultation
        }
      },
      {
        name: "premiere consultation patiente majeure anonyme 3d",
        id: 6,
        objet: PremierConsultationTroisD,
        fonction : {
          recupInfo : testtt,
          afficheSuite : affichePConsultation
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
          },
          txt : TexteMineure() 
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
          },
          txt : txtDeuxiemeContactMAJ()
      },
      {
        name : "Deuxieme consultation Mineure A/NA" ,
         id :12 , objet : DeuxiemeMineureANA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifDeuxiemeConsulteMineure
          },
          txt : txtDeuxiemeContactMineure()
      },
      {
        name : "Deuxieme prise médicament Majeure NA" ,
         id :13 , objet : DeuxiemeMediMajeureNA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : afficheTarifdeuxiemeMediMajeureNA
          },
          txt : txtDeuxiemePriseMaj()
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
          },
          txt : txtDeuxiemePriseMin()
      },
      {
        name : "Première prise médicament Mineure A/NA" ,
         id :16 , objet : PremiereMediMineureANA ,
          
          fonction : {
            recupInfo : recupPremierePriseMedi,
            afficheSuite : afficheContreIndicationMineure
          },
          txt : txtPriseMediMajeure()
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
            afficheSuite : afficheTarifPostMaj
          },
          txt : txtPOstMaj()
      },
      {
        name : "Tarification deuxième consultation Majeure NA" ,
         id :23 , objet : TarifDeuxiemeConsulteMajeureNA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      },
      {
        name : "Tarification deuxième consultation Mineure ANA" ,
         id :24 , objet : TarifDeuxiemeConsulteMineureANA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      },
      {
        name : "Consultation Post IVG Mineure" ,
         id :25 , objet : PostIVGMineur ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : afficheTarifPostMin
          },
          txt : txtPostMin()
      },
      {
        name : "Tarification Post IVG Majeure" ,
         id :26 , objet : TarifPostMajeure ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      },
      {
        name : "Post IVG Majeure Anonyme" ,
         id :27 , objet : PostIVGMAJA ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      },
      {
        name : "Contre Indication Médicaments Mineure" ,
         id :28 , objet : ContreIndicationMineure ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : afficheFinCOnsulteMineure
          }
      },
      {
        name : "Consultation (fin) prise médicaments Mineure" ,
         id :29 , objet : PremierePriseMineureConsultePrin ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : afficheTArifMediMineur
          }
      },
      {
        name : "Tarif Prise Médicaments mineure" ,
         id :30 , objet : TarifPriseMediMineur ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      },
      {
        name : "Tarif Post IVG Mineur" ,
         id :31 , objet : TarifPostMin ,
          
          fonction : {
            recupInfo : recupPremiereConsulte,
            afficheSuite : modifierObjetTarifPremiereConsulteMineur
          }
      },
      {
        name : "Non Pro" ,
         id :32 , objet : NonPro ,
          
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
      setCurrentINfoConsulte([liste[4].txt]);
      setClassInfo("NewInfoBloc");

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
      setCurrentINfoConsulte([liste[3].txt]);
      setClassInfo("NewInfoBloc");
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
        setCurrentINfoConsulte([liste[9].txt]);
        setClassInfo("NewInfoBloc");

      
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
        setCurrentINfoConsulte([liste[11].txt]);
        setClassInfo("NewInfoBloc");

      
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
        setCurrentINfoConsulte([liste[12].txt]);
        setClassInfo("NewInfoBloc");

      
    } 
    else if (
      identifiantConsultation== 4 &&
        idMajeureOuNon == 1 &&
        idAnonymeOuNon == 1

    ) {
      setObjetConsultationAffiche([liste[13]]);
      setCurrentINfoConsulte([liste[13].txt]);
      setClassInfo("NewInfoBloc");

      
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
        setCurrentINfoConsulte([liste[15].txt]);
        setClassInfo("NewInfoBloc");

      
    } 
    else if (
      identifiantConsultation== 3 &&
        idMajeureOuNon == 1 &&
        idAnonymeOuNon == 1

    ) {
      setObjetConsultationAffiche([liste[4]]);
      setCurrentINfoConsulte([liste[4].txt]);
      setClassInfo("NewInfoBloc");

      
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
      setCurrentINfoConsulte([liste[16].txt]);
      setClassInfo("NewInfoBloc");

      
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
      setCurrentINfoConsulte([liste[22].txt]);
      setClassInfo("NewInfoBloc");

      
    }
    else if ((
      identifiantConsultation== 5 &&
        idMajeureOuNon == 0 &&
        idAnonymeOuNon == 1

    )||
    (
      identifiantConsultation== 5 &&
      idMajeureOuNon == 0 &&
      idAnonymeOuNon == 0
    )) {
      setObjetConsultationAffiche([liste[25]]);
      setCurrentINfoConsulte([liste[25].txt]);
      setClassInfo("NewInfoBloc");

      
    }
    else if (
      identifiantConsultation== 5 &&
        idMajeureOuNon == 1 &&
        idAnonymeOuNon == 0

    ) {
      setObjetConsultationAffiche([liste[27]]);
      
    }
    
    else {
      setObjetConsultationAffiche([liste[0]]);
    }
  };

  const [currentRecap, setCurrentRecap] = useState("");

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
    let texte = [];
    for (let index = 0; index < liste.length; index++) {
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

  ///////////


 
    setCurrentRecap(()=>blocRecap(texte));
    setListeBouton([]);
    setNombreBouton(0);
    setSelection(liste);
    modifierObjet(idMajMin, idAnonyme, idConsultation);
  };

  const txtNon = ()=> {
    return (
      <div className="consultationContainer">
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
          <a rel="noreferrer noopener" target="_blank" href="https://www.ivg.net/">Liens IVG.net</a>
        </p>
        <p>
          <a rel="noreferrer noopener" target="_blank" href="https://www.ivglesadresses.org/">Liens ivglesadresses.org</a>
        </p>
        <p>
          <a rel="noreferrer noopener" target="_blank" href="https://www.ivginfo.com/">Liens ivginfo.com</a>
        </p>
        <p>
          <a rel="noreferrer noopener" target="_blank" href="http://www.avortementancic.net/IMG/pdf/guide_ivg_2017-2.pdf">Lien dossier guide ivg</a>
        </p>
      </div>
    )
  }

  const Non = () => {
    /// function censé gérer laffichage si lutilisateur nest pas un pro de santé
    
    setTxtQuestion(listeObjetConsulation[32].objet);  
    setListeBouton([]);
    setNombreBouton(0);
  };

  const Oui = () => {
    /// je vais faire un check mais surement inutile
    let texte = "";
    setTexteDemarrage(texte);
    setListeBouton([]);
    setNombreBouton(0);
  };

  const [currentINfoConsulte, setCurrentINfoConsulte] = useState("");

  const [ classINfo, setClassInfo] = useState("noneDisplay");


  const [ classTxtDebut , setClassTextDebut] = useState("txtDebu");

 

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
        backdrop="static"
      ></MyVerticallyCenteredModal>
      
      <div className="Container">
      <div className={classTxtDebut}>{texteDemarrage}</div>
      {/* <p>{texteDemarrage}</p> */}
      <div className={classQuestion}>
  <div className="questionDepartAlign">{txtQuestion}</div>
      {listeBouton.map((btn) => {
        if (btn.id === 2) {
          return (
            <Bouton TextB={btn.txt} value={btn.value} onEffet={Non} onClick={()=>{setTxtQuestion("");}}></Bouton>
          );
        } else if (btn.id === 1) {
          return (
            <Button
            variant="secondary"
              onClick={() => {
                handleChange();
                Oui();
                setTxtQuestion("");
                setClassQuestion("noneDisplay");
                setClassTextDebut("noneDisplay");
              }}
            >
              {btn.txt}
            </Button>
          );
        }
      })}
      </div>
    <div  
     className={classINfo}>
       {currentRecap}{currentINfoConsulte}
       </div>

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
    </div>
  );
}

export default AppCore;
