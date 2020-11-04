import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";

import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";


import GuideCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import ProtocolHAS from "@assets/pdf/ProtocoleIVGHASBonUsageMedicament.pdf";
import ContraceptionHAS from "@assets/pdf/ContraceptionPostIVGHAS.pdf";




function PremierePriseMineureConsultePrin(props) {

    const [globalStateFin, setGlobalStateFin] = useState(props.onData);

    const afficheStateFin = () => {
      let liste = [...globalStateFin];
      liste.push(currentDateInjection);
      liste.push(currentDateMife);
      liste.push(currentDateMiso);
      liste.push(currentArret);
      liste.push(currentContra);
      liste.push(currentTypeContra);
      liste.push(currentIst);
      liste.push(currentInfoSupp);
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
  ///Bloc fonctionnel


  //// state 
  const [ currentInjection, setCurrentInjection] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 1

  });

  const [ currentDateInjection, setCurrentDateInjection] = useState({
    titre : "",
    value : "",
    reponse : 1
  });

 

  const [currentPriseMife, setCurrentpriseMife ] = useState({
    titre : "",
    value : "",
    reponse : 1
  });

  const [ currentDateMife, setCurrentDateMife] = useState({
    titre : "",
    value : "",
    reponse : 1
  });

  const [ currentPriseMiso, setCurrentPriseMiso] = useState({
    titre : "",
    value : "",
    reponse : 1
  });

  const [ currentDateMiso, setCurrentDateMiso] = useState({
    titre : "",
    value : "",
    reponse : 1
  });

  const [ currentArret, setCurrentArret]= useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [ currentContra, setCurrentContra] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [ currentTypeContra, setCurrentTypeContra] = useState({
    titre : "",
    value : "",
    reponse : 1
  });

  const [currentDosage, setCurrentDosage] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [ currentIst, setCurrentIst]= useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [ currentInfoSupp, setCurrentInfoSupp] = useState({
    titre : "",
    value : "",
    reponse : 1
  });

  const [ currentHPV, setCurrentHPV] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const [ currentDateHPV, setCurrentDateHPV] = useState({
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






  ///////////////////////////////////////////////////////////////
  /// Bloc disposition covid
  const covidIVGOui = ()=> {
      return (
          <div>
              <h2>Covid et IVG :</h2>
              <p>
              Téléconsultation possible. 
Condition : Outils informatique fiable pour les documents nécessaires à la pratique de l’IVG dans le cadre réglementaire.  
              </p>
              <p>
              Le forfait médicament (FMV) n’est pas à facturer si vous choisissez le circuit qui permet à la patiente d’aller chercher directement les traitements abortifs à la pharmacie. 
Dans cette hypothèse, vous établissez une ordonnance comportant :</p> 
<p> le nom, les dosages, la posologie et la voie d’administration des médicaments. 
L’ordonnance est ensuite transmise à l’officine choisie par la patiente via une
 messagerie sécurisée de santé ou déposée dans le dossier patient dans le cas de
  l’usage d’une solution de téléconsultation intégrant cette fonctionnalité. A défaut,
   vous pouvez transmettre l’ordonnance directement à la patiente par voie postale ou
    messagerie. 
              </p>
              <p>
              La consultation de suivi sera donc établie par téléconsultation.
               Lors de l’envoi à l’officine de l’ordonnance, 
               il peut être ajouté un autotest urinaire BhCG,
                celui-ci est alors prise en charge par le laboratoire par
                 l’intermédiaire d’un accord avec l’ANCIC et le CNGOF
                 <a rel="noreferrer noopener"
          href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000042106233&categorieLien=id"
          target="_blank"
        >
          Legifrance.gouv
        </a>
        .
        <a rel="noreferrer noopener"
          href="https://www.ameli.fr/medecin/actualites/covid-19-fin-des-mesures-derogatoires-pour-livg-medicamenteuse"
          target="_blank"
        >
          ameli.fr
        </a>
        <a rel="noreferrer noopener"
          href="https://syngof.fr/wp-content/uploads/2020/04/covid-19_-_medecins_-_ivg.pdf"
          target="_blank"
        >
          syngof
        </a>
              </p>
          </div>
      )
  }

  const [ouiCovid, setOuiCovid] = useState(()=>covidIVGOui());

  const [currentOui, setCurrentOui] = useState("");

  const affichageOuiCovid = () => {
    let txtAEnlever = currentOui;
    let txtAAfficher = ouiCovid;
    setCurrentOui(txtAAfficher);
    setCurrentNon("");
    
  };

  const NonCovidIvg = ()=> {
      return (
          <div>
              <p>
              Médicaments nécessaires à l’acte vendus en pharmacie d’officine. Exclusivement aux médecins ou aux sages-femmes ayant passé convention avec un établissement de santé. 
              </p>
              <p>
              Commande à usage professionnel auprès de la pharmacie d’officine de son choix. La commande comprend les mentions suivantes :
              </p>
              
              <ul>
                  <li>
                  Le nom, la qualité, le numéro d’inscription à l’Ordre, l’adresse et la 
signature du praticien ainsi que la date
                  </li>
                  <li>
                  Le nom des médicaments et le nombre de boîtes commandées
                  </li>
                  <li>
                  La mention « usage professionnel
                  </li>
                  <li>
                  Le nom de l’établissement de santé avec lequel le praticien a conclu une convention ainsi que la date de cette convention.
                  </li>


              </ul>
          </div>
      )
  }

  const [NonCovid, setNonCovid] = useState(()=>NonCovidIvg());

  const [currentNon, setCurrentNon] = useState("");

  const affichageNonCovid = () => {
    let txtAEnlever = currentNon;
    let txtAAfficher = NonCovid;
    setCurrentOui("");
    setCurrentOui(txtAAfficher);
    
  };




  //////////////////////////////////////////////////////////////////////////



  //// Bloc injection  ig anti d

  const recupIg = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "Test",
      value : e.target.value
    };
    let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
    console.log(liste);
  };
  const handleChangeInj = (e) => {
    /// recup date frotti
    
    
    
    
    let reponse = {
      titre: "Date de l’injection de gammaglobuline antiD si incompatibilité Rhesus negatif : ",
      value: e.target.value,
      reponse : 1
    };
   setCurrentDateInjection(reponse);

    
  };

  const dateIG = () => {
      return (
          <div>
               <input
        type="date"
        name="dateIG"
        id="dateIG"
        onChange={(e) => {
          handleChangeInj(e);
        }}
      ></input>
          </div>
      )
  }

  const [dateIgAntiD, setDateIgAntiD] = useState(()=>dateIG());

  const [currentDateIgAntiD, setCurrentDateIgAntiD] = useState("");

  const affichageDateIg = () => {
    let txtAEnlever = currentNon;
    let txtAAfficher = dateIgAntiD;
    
    setCurrentDateIgAntiD(txtAAfficher);
    
  };

  const injection = () => {
    return (
      <div className="BulleInfo">
       
        <p>
        Prévention selon les recommandations officielles de l’incompatibilité rhésus chez toutes les femmes rhésus négatif si conjoint positif ou inconnue par la prescription et l’administration d’une dose standards de gammaglobuline anti-D. 
Injection IM ou IV de 200 ug d’Ig anti-D. 
        </p>
      </div>
    );
  };

  const [txtInjection, setTxtInjection] = useState(() => injection());

  const [currentInfoInjection, setCurrentInfoInjection] = useState("");

  const affichageTxtInjection = () => {
    let txtAEnlever = currentInfoInjection;
    let txtAAfficher = txtInjection;
    setCurrentInfoInjection(txtAAfficher);
    setTxtInjection(txtAEnlever);
  };

  const [logoAfficheInjection, setLogoAfficheInjection] = useState(
    LightOff
  );

  const [logoNonAfficheInjection, setLogoNonAfficheInjection] = useState(
    LightOn
  );

  const changementCouleurSVGInjection = () => {
    let currentLampe = logoAfficheInjection;
    let currentCache = logoNonAfficheInjection;
    setLogoNonAfficheInjection(currentLampe);
    setLogoAfficheInjection(currentCache);
    affichageTxtInjection();
  };



  //////////////////////////////////////////////////////////////////////



  //// Bloc Remise et prise de mifépristone :

  const handleChangeMife = (e) => {
    /// recup date frotti
    
    
    
    
    let reponse = {
      titre: "Date de prise de la mifépristone : ",
      value: e.target.value,
      reponse : 1
    };
   setCurrentDateMife(reponse);

    console.log("Date de prise de la mifépristone : " + reponse.value);
    
  };

  const priseMife = () => {
    return (
      <div className="BulleInfo">
       
        <p>
        Feuille de suivi de prise médicamenteuse = sécurité du médicament efficace.
        </p>
      </div>
    );
  };

  const [txtPriseMife, setTxtPriseMife] = useState(() => priseMife());

  const [currentInfoPriseMife, setCurrentInfoPriseMife] = useState("");

  const affichageTxtPriseMife = () => {
    let txtAEnlever = currentInfoPriseMife;
    let txtAAfficher = txtPriseMife;
    setCurrentInfoPriseMife(txtAAfficher);
    setTxtPriseMife(txtAEnlever);
  };

  const [logoAffichePriseMife, setLogoAffichePriseMife] = useState(
    LightOff
  );

  const [logoNonAffichePriseMife, setLogoNonAffichePriseMife] = useState(
    LightOn
  );

  const changementCouleurSVGPriseMife = () => {
    let currentLampe = logoAffichePriseMife;
    let currentCache = logoNonAffichePriseMife;
    setLogoNonAffichePriseMife(currentLampe);
    setLogoAffichePriseMife(currentCache);
    affichageTxtPriseMife();
  };





  ///////////////////////////////////////////////////////////////////////////


  ///// Bloc Délivrance du misoprostol : 

  

  const handleChangeMiso = (e) => {
    //
    
    
    
    
    let reponse = {
      titre: "Date de prise du misoprotol :  ",
      value: e.target.value,
      reponse : 1
    };
   setCurrentDateMiso(reponse);

    console.log("Date de prise du misoprotol :  " + reponse.value);
    
  };

  const delivranceMiso = () => {
    return (
      <div className="BulleInfo">
       
        <p>
        Deuxième médicament pris par la femme 36 à 48h plus tard, à son domicile selon appreciation. 
            
        </p>
        <p>
        présentielle au cabinet possible ; « 2eme prise médicamenteuse » comprise dans le forfait IVG hors établissement. 
HAS recommande la séquence de traitement Per Os.
        <a target="_blank" href="https://www.has-sante.fr/upload/docs/application/pdf/2020-04/reponse_rapide_ivg__09_04_2020_coiv8.pdf">lien info</a>
        </p>
        
      </div>
    );
  };

  const [txtDelivranceMiso, setTxtDelivranceMiso] = useState(() => delivranceMiso());

  const [currentInfoDelivranceMiso, setCurrentInfoDelivranceMiso] = useState("");

  const affichageTxtDelivranceMiso = () => {
    let txtAEnlever = currentInfoDelivranceMiso;
    let txtAAfficher = txtDelivranceMiso;
    setCurrentInfoDelivranceMiso(txtAAfficher);
    setTxtDelivranceMiso(txtAEnlever);
  };

  const [logoAfficheDelivranceMiso, setLogoAfficheDelivranceMiso] = useState(
    LightOff
  );

  const [logoNonAfficheDelivranceMiso, setLogoNonAfficheDelivranceMiso] = useState(
    LightOn
  );

  const changementCouleurSVGDelivranceMiso = () => {
    let currentLampe = logoAfficheDelivranceMiso;
    let currentCache = logoNonAfficheDelivranceMiso;
    setLogoNonAfficheDelivranceMiso(currentLampe);
    setLogoAfficheDelivranceMiso(currentCache);
    affichageTxtDelivranceMiso();
  };




  /////////////////////////////////////////////////////////////////////////


  //// Bloc Arrêt de travail prescrit pour la prise médicamenteuse :

  const recupArret = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Arrêt de travail prescrit : ",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentArret(reponse);
    
    console.log("Arrêt de travail prescrit : " + reponse.value);
  };

  const arretTravail = () => {
    return (
      <div className="BulleInfo">
       
        <p>
        motif : douleurs abdominales (Prise du misoprostol +++). 
            
        </p>
        <p>
        Arrêt de travail anticipée si prise du misoprostol au domicile ou 
au cabinet si présentiel souhaité selon le professionnel de santé. 
        </p>
        
        
        
      </div>
    );
  };

  const [txtArretTravail, setTxtArretTravail] = useState(() => arretTravail());

  const [currentInfoArretTravail, setCurrentInfoArretTravail] = useState("");

  const affichageTxtArretTravail = () => {
    let txtAEnlever = currentInfoArretTravail;
    let txtAAfficher = txtArretTravail;
    setCurrentInfoArretTravail(txtAAfficher);
    setTxtArretTravail(txtAEnlever);
  };

  const [logoAfficheArretTravail, setLogoAfficheArretTravail] = useState(
    LightOff
  );

  const [logoNonAfficheArretTravail, setLogoNonAfficheArretTravail] = useState(
    LightOn
  );

  const changementCouleurSVGArretTravail = () => {
    let currentLampe = logoAfficheArretTravail;
    let currentCache = logoNonAfficheArretTravail;
    setLogoNonAfficheArretTravail(currentLampe);
    setLogoAfficheArretTravail(currentCache);
    affichageTxtArretTravail();
  };



  //////////////////////////////////////////////////////////////////////////////

  ////// bloc Contraception choisie par la patiente :


  const recupContra = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Contraception choisie par la patiente : ",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentContra(reponse);
    
    console.log("Contraception choisie par la patiente : " + reponse.value);
  };

  const handleTypeContra = (e) => {
    /// recup date frotti
   
    
    
    let reponse = {
      titre: "Type contraception : ",
      value: e.target.value,
      reponse : 1
    };
   setCurrentTypeContra(reponse);
  
    console.log("Type contraception : " + reponse.value);
    
  };

  const typeContraception = () => {
    return (
        <div>
            <Form.Group>
  <Form.Control as="select" size="lg" onChange={(e) => {
          handleTypeContra(e);
        }}>
    <option value="implant">implant</option>
    <option value="pilule">pilule</option>
    <option value="patch">patch</option>
    <option value="anneau vaginal">anneau vaginal</option>
    <option value="cape cervicale">cape cervicale</option>
    <option value="diaphragme">diaphragme</option>
    <option value="préservatif féminin">préservatif féminin</option>
    <option value="DIU hormonal et DIU au cuivre">DIU hormonal et DIU au cuivre</option>
    <option value="stérilisation">stérilisation</option>
    <option value="spermicides">spermicides</option>
    <option value="contraceptifs injectables">contraceptifs injectables</option>
  </Form.Control>
  </Form.Group>
        </div>
    )
}

const [txtTypeContra, setTxtTypeContra] = useState(()=>typeContraception());

const [currentTxtTypeContra, setCurrentTxtTypeContra] = useState("");

const affichageTxtTypeContra = () => {
  
  let txtAAfficher = txtTypeContra;
  
  setCurrentTxtTypeContra(txtAAfficher);
  
};

const infoContra = () => {
  return (
    <div className="BulleInfo">
     
      <p className="Red">
      la reprise de la fertilité après une IVG est immédiate :
       une contraception efficace est donc indispensable dès la
        réalisation de l’IVG. 
      </p>

      <p>
      Rappel : le préservatif (masculin, féminin) : seule méthode efficace contre les IST. 
Remboursé par l’assurance maladie  (10 décembre 2018). 
         <a rel="noreferrer noopener"
         target="_blank"
         href="https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/article/premier-preservatif-rembourse-par-l-assurance-maladie"
         >
             lien info</a>
        
      </p>

      <p>
      La pilule : débuté au moment de la 1ère prise médicamenteuse ou le lendemain. 
L’implant : débuté le jour de la 1ere prise médicamenteuse ou à la consultation post-IVG (contraception dans l’intervalle). 
      </p>


      <p>
      DIU : Visite de contrôle post-IVG médicamenteuse si : vacuité utérine à l’échographie et/ou dosage de β-HCG est négatif. 
En cas de doute, le DIU est posé lors des menstruations suivantes (Contraception dans l’intervalle).
      </p>

      <p>
        <a rel="noreferrer noopener" target="_blank" href="https://www.choisirsacontraception.fr/?gclid=CjwKCAiAnIT9BRAmEiwANaoE1UvpGljdoemjgb7elJSGJCybcyZEeTxIwzROGPcTkSZN0qrpNGkvBBoCkrsQAvD_BwE">lien choisirmacontraception.com</a>
      </p>
    </div>
  );
};

const [txtContraception, setTxtContraception] = useState(() => infoContra());

const [currentInfoContraception, setCurrentInfoContraception] = useState("");

const affichageTxtContraception = () => {
  let txtAEnlever = currentInfoContraception;
  let txtAAfficher = txtContraception;
  setCurrentInfoContraception(txtAAfficher);
  setTxtContraception(txtAEnlever);
};

const [logoAfficheContraception, setLogoAfficheContraception] = useState(
  LightOff
);

const [logoNonAfficheContraception, setLogoNonAfficheContraception] = useState(
  LightOn
);

const changementCouleurSVGContraception = () => {
  let currentLampe = logoAfficheContraception;
  let currentCache = logoNonAfficheContraception;
  setLogoNonAfficheContraception(currentLampe);
  setLogoAfficheContraception(currentCache);
  affichageTxtContraception();
};


  //////////////////////////////////////////////////////////////////////////////


  //// bloc Prescription d’un dosage de B-HCG à faire pour la consultation de contrôle J15-21 ou d’un autotest urinaire combiné à un suivi téléphonique :

  const infoDosage = () => {
    return (
      <div className="BulleInfo">
       
       
  
        <p>
        Indispensable pour affirmer  réussite de la méthode. 
L’autotest urinaire peut également être utilisé. (A domicile combiné à un suivi téléphonique) 
           <a
           target="_blank"
           href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter"
           >
               HAS recommandation</a>
               <a target="_blank" href="https://ansfl.org/document/cngof-2016-livg-medicamenteuse/"
               >recommandation CNGOF</a>
          
        </p>
       
      </div>
    );
  };
  
  const [txtInfoDosage, setTxtInfoDosage] = useState(() => infoDosage());
  
  const [currentInfoDosage, setCurrentInfoDosage] = useState("");
  
  const affichageTxtDosage = () => {
    let txtAEnlever = currentInfoDosage;
    let txtAAfficher = txtInfoDosage;
    setCurrentInfoDosage(txtAAfficher);
    setTxtInfoDosage(txtAEnlever);
  };
  
  const [logoAfficheDosage, setLogoAfficheDosage] = useState(
    LightOff
  );
  
  const [logoNonAfficheDosage, setLogoNonAfficheDosage] = useState(
    LightOn
  );
  
  const changementCouleurSVGDosage = () => {
    let currentLampe = logoAfficheDosage;
    let currentCache = logoNonAfficheDosage;
    setLogoNonAfficheDosage(currentLampe);
    setLogoAfficheDosage(currentCache);
    affichageTxtDosage();
  };



  //////////////////////////////////////////////////////////////////////////////////////


  //// Bloc IST
  const recupIST = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Recherche IST : ",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentIst(reponse);
    
    console.log("Recherche IST : " + reponse.value);
  };

  const recupInfoSupp = () => {
    
    let reponse = {
      titre : "Si ressource cochée oui : ",
      value : "http://www.info-ist.fr/index.html ; https://www.ameli.fr/assure/sante/",
      reponse : 1
    };
    
    setCurrentInfoSupp(reponse);
    console.log("info supp : " + "http://www.info-ist.fr/index.html ; https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles");
  };


  const HAS = () => {
      return (
          <div className="BulleInfo">
              
              <p>
              « HAS : dépistage recommandé ciblé à toutes les femmes consultant pour une IVG, sans limite d’âge. Systématique chez les femmes de 15 à 25 ans.»      
                      </p>
              
          </div>
      )
  }

  const [txtHAS, setTxtHAS] = useState(() => HAS());
  
  const [currentInfoHAS, setCurrentInfoHAS] = useState("");
  
  const affichageTxtHAS = () => {
    let txtAEnlever = currentInfoHAS;
    let txtAAfficher = txtHAS;
    setCurrentInfoHAS(txtAAfficher);
    setTxtHAS(txtAEnlever);
  };
  
  const [logoAfficheHAS, setLogoAfficheHAS] = useState(
    LightOff
  );
  
  const [logoNonAfficheHAS, setLogoNonAfficheHAS] = useState(
    LightOn
  );
  
  const changementCouleurSVGHAS = () => {
    let currentLampe = logoAfficheHAS;
    let currentCache = logoNonAfficheHAS;
    setLogoNonAfficheHAS(currentLampe);
    setLogoAfficheHAS(currentCache);
    affichageTxtHAS();
  };

  ///////////////////////////////////////////////////////////////////////////////////////

  //// Bloc frotti
  const recupFrotti = (e) => {
    e.preventDefault();
    let reponse = {
      titre : "Frottis à jour (ou test HPV) : ",
      value : e.target.value,
      reponse : 1
    };
    setCurrentHPV(reponse);
    console.log("type frotti " + reponse.value);
  };

  const handleChangeFrotti = (e) => {
    /// recup date frotti
   
    
    
    let reponse = {
      titre: "Date Frotti",
      value: e.target.value,
      reponse : 1
    };
   setCurrentDateHPV(reponse);

    console.log("date frotti (ou Test HPV) : " + reponse.value);
    
  };

  const Frotti = () => {
    return (
        <div className="BulleInfo">
            <h4>
            Le plan de dépistage national s’applique :
            </h4>
            <p>
            entre 25 et 30 ans, le dépistage du cancer du col de l’utérus reste fondé sur la réalisation de deux examens cytologiques à un an d’intervalle, puis 3 ans après si le résultat des deux premiers est normal.
            </p>
            <p>
            le test HPV chez les femmes à partir de 30 ans, sera réalisé 3 ans après le dernier examen cytologique dont le résultat était normal ; le rythme entre deux dépistages par test HPV est de 5 ans, dès lors que le résultat du test est négatif.
            </p>





            <p><a target="_blank" href="https://www.has-sante.fr/upload/docs/application/pdf/2019-07/synthese_hpv.pdf">info</a></p>
            
        
      </div>
        
    )
};
const [txtFrotti, setTxtFrotti] = useState(() => Frotti());

const [currentTxtFrotti, setCurrentTxtFrotti] = useState("");

const affichageFrotti = () => {
let txtAEnlever = currentTxtFrotti;
let txtAAfficher = txtFrotti;
setCurrentTxtFrotti(txtAAfficher);
setTxtFrotti(txtAEnlever);
};
const [logoAfficheFrotti, setLogoAfficheFrotti] = useState(LightOff);

const [logoNonAfficheFrotti, setLogoNonFrotti] = useState(LightOn);
const changementCouleurSVGFrotti = () => {
let currentLampe = logoAfficheFrotti;
let currentCache = logoNonAfficheFrotti;
setLogoNonFrotti(currentLampe);
setLogoAfficheFrotti(currentCache);
affichageFrotti();
}
  /////////////////////////////////////////////////////////////////////////////////////////


  //////////// Tabac

  const recupTabac = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Tabac : ",
      value: e.target.value,
      reponse : 1
    };
    setCurrentTabac(reponse);
    
    console.log("Fumeuse : " + reponse.value);
  };

  const handleSubmitPaquet = event => {
    event.preventDefault();
    let reponse = {
      titre : "Nombre Paquet : ",
      value : event.currentTarget.value,
      reponse : 1
    };
   setCurrentNbTabac(reponse);
  
      console.log("nb paquet : "+reponse.value);
      
    
  
    
    
    
  };
  const [nouvelleRecherchePaquet, setNouvelleRecherchePaquet] = useState(0)
 

  const handleChangePaquet = event => {
    setNouvelleRecherchePaquet(event.currentTarget.value);
  };


  ///////////////////////////////////////////////////////////////////////////////

  /////////////// Bloc Violence 

  const violence = () => {
    return (
      <div className="BulleInfo">
        <p>
        Cette information ne figurera pas sur le résumé.
Cette violence peut être physique, sexuelle, économique, verbale ou psychologique dans un contexte conjugal, professionnel ou plus récemment de cyberviolence. 
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






  return (

    
      <div className="consultationContainer">
          <h1>Consultation 1ere prise médicamenteuse </h1>
          <div className="ConsultationContainer">
          <label>
        Consultation faite dans le cadre des dispositions du Covid valable
        jusqu’au 31 octobre 2020 : 
        <Button variant="secondary" onClick={()=> {affichageOuiCovid()}}>Oui</Button>
        <Button variant="secondary" onClick={()=> {affichageNonCovid()}}>Non</Button>
      </label>
  <div>{currentOui}</div>
      <br></br>
          </div>

<div className="ConsultationContainer">
<h2>Protocole et coordonnées du centre de référence remise à la patiente à remplir manuellement sur la fiche de liaison</h2>
</div>      

<div className="ConsultationContainer">
      <h2>Violences subies en rapport ou non avec l’acte :</h2>
      <Button variant="secondary">Oui</Button>
      <Button variant="secondary">Non</Button>
      <input
        onClick={changementCouleurSVGViolence}
        className="Lampe"
        type="image"
        src={logoAfficheViolence}
      />
      <div>  {currentInfoViolence}</div>
      </div>
      <div className="ConsultationContainer">
      <h2>Nécessité d’une injection préventive d’Ig anti-D :</h2>
      <Button variant="secondary" value="Oui" onClick={(e)=> {
          affichageDateIg();
          recupIg(e);
          }}>Oui</Button>
        <Button variant="secondary" >Non</Button>
  <div>{currentDateIgAntiD}</div>
  <input
        onClick={changementCouleurSVGInjection}
        className="Lampe"
        type="image"
        src={logoAfficheInjection}
      />
      <div>{currentInfoInjection}</div>
      </div>

      <div className="ConsultationContainer">
      <h2>Remise et prise de mifépristone :</h2>
      <Button variant="secondary" value="Oui" >Oui</Button>
        <Button variant="secondary" value="Non" >Non</Button>
        
      <input
        type="date"
        name="dateMife"
        id="dateMife"
        onChange={(e) => {
          handleChangeMife(e);
        }}
      ></input>
      <input
        onClick={changementCouleurSVGPriseMife}
        className="Lampe"
        type="image"
        src={logoAffichePriseMife}
      />
      <div>{currentInfoPriseMife}</div>
      </div>



      <div className="ConsultationContainer">
      <h2>Délivrance du misoprostol : </h2>
      <Button variant="secondary" value="Oui" >Oui</Button>
        <Button variant="secondary" value="Non" >Non</Button>
        <input
        type="date"
        name="dateMiso"
        id="dateMiso"
        onChange={(e) => {
          handleChangeMiso(e);
        }}
      ></input>
        <input
        onClick={changementCouleurSVGDelivranceMiso}
        className="Lampe"
        type="image"
        src={logoAfficheDelivranceMiso}
      />
      <div>{currentInfoDelivranceMiso}</div>

     
      </div>


      <div className="ConsultationContainer">
      <h2>Arrêt de travail prescrit pour la prise médicamenteuse :</h2>
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupArret(e)}}>Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recupArret(e)}} >Non</Button>
        <input
        onClick={changementCouleurSVGArretTravail}
        className="Lampe"
        type="image"
        src={logoAfficheArretTravail}
      />
      <div>{currentInfoArretTravail}</div>
      </div>


      <div className="ConsultationContainer">
      <h2>Contraception choisie par la patiente :</h2>
      <Button variant="secondary" value="Oui" onClick={(e)=>{
        recupContra(e);
        affichageTxtTypeContra();}} >Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recupContra(e);}} >Non</Button>
  <div>{currentTxtTypeContra}</div>
  <input
        onClick={changementCouleurSVGContraception}
        className="Lampe"
        type="image"
        src={logoAfficheContraception}
      />
      <div>{currentInfoContraception}</div>
      </div>

      <div className="ConsultationContainer">
      <h2>Prescription d’un dosage de B-HCG à faire pour la consultation de contrôle J15-21 ou d’un autotest urinaire combiné à un suivi téléphonique :</h2>
      <Button variant="secondary" value="Oui" >Oui</Button>
        <Button variant="secondary" value="Non" >Non</Button>
        <input
        onClick={changementCouleurSVGDosage}
        className="Lampe"
        type="image"
        src={logoAfficheDosage}
      />
      <div>{currentInfoDosage}</div>
      </div>


      <div className="ConsultationContainer">
      <h2>Recherche IST +/- antibio-prophylaxie </h2>
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupIST(e);}} >Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recupIST(e);}} >Non</Button>

        <p>
        De nombreuses sources numériques existent pour l’information aux patient(es)
         des IST ainsi que de ces risques Lien dans l’ordre 24, 23. En cliquant ici,
          ces sites apparaitront sur le résumé de la consultation, à remettre en main
           propre de la patiente. 
        </p>
        <Button variant="secondary" value="Oui" onClick={recupInfoSupp} >Oui</Button>

        <input
        onClick={changementCouleurSVGHAS}
        className="Lampe"
        type="image"
        src={logoAfficheHAS}
      />
      <div>{currentInfoHAS}</div>
      </div>


      <div className="ConsultationContainer">
      <h2>Frottis à jour ou test HPV</h2>
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
          handleChangeFrotti(e);
        }}
      ></input>
     <input
        onClick={changementCouleurSVGFrotti}
        className="Lampe"
        type="image"
        src={logoAfficheFrotti}
      />
      <p>{currentTxtFrotti}</p>
      </div>


      <div className="ConsultationContainer">
      <h2>Tabac</h2>
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
      </div>

        <br></br>
        <a target="_blank" href={ProtocolHAS}>protocole IVG HAS</a>
        <a target="_blank" href={GuideCNGOF}>CNGOF info patient</a>
     
        <a target="_blank" href={ContraceptionHAS}>HAS contraception</a>

        <p>Ces éléments sont à destination du professionnel de santé.</p>

        <br></br>
        <Button onClick={afficheStateFin}>Valider mes choix</Button>
        <div>{currentReponseTarif}</div>
      
        


      


        
      </div>
  )


}


export default PremierePriseMineureConsultePrin;