import React, { useState, useEffect } from "react";

import { Button, Form } from "react-bootstrap";

import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";


import GuideCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import ProtocolHAS from "@assets/pdf/ProtocoleIVGHASBonUsageMedicament.pdf";
import ContraceptionHAS from "@assets/pdf/ContraceptionPostIVGHAS.pdf";




function PremierePriseMineureConsultePrin(props) {

  useEffect(() => {
    window.scrollTo(0,0);
 }, [])

  const submitHandler = (e) => {
    e.preventDefault();
}

    const [globalStateFin, setGlobalStateFin] = useState(props.onData);

    const afficheStateFin = () => {
      let liste = [...globalStateFin];
      liste.push(currentArret);
      liste.push(currentContra);
      liste.push(currentTypeContra);
      liste.push(currentIst);
      liste.push(currentInfoSupp);
      liste.push(currentTabac);
      liste.push(currentNbTabac);
      liste.push(currentInjection);
      liste.push(currentDateInjection);
      liste.push(currentDateMife);
      liste.push(currentDateMiso);

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


  ///// recup radio 

  const recupRadioTabac = (e) => {
    let reponse = {
      titre: "Tabac : ",
      value: e.target.value,
      reponse : 1
    };
    setCurrentTabac(reponse);
    
  }

  const recupRadioArret = (e) => {
    let reponse = {
      titre: "Arrêt de travail prescrit : ",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentArret(reponse);
  }

  


  const recupRadioIST = (e) => {
    let reponse = {
      titre : "Recherche IST : ",
      value : e.target.value,
      reponse : 1
    };
    setCurrentIst(reponse);
  }

  const recupRadioContraception = (e) => {
    let reponse = {
      titre: "Contraception choisie par la patiente : ",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentContra(reponse);
    
  }

  const recupRadioIG = (e) => {
    let reponse = {
      titre : "Injection préventive d’Ig anti-D : ",
      value : e.target.value,
      reponse : 1
    };
    setCurrentInjection(reponse);
  }





  ///// boutton


  
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



  //// state 
  const [ currentInjection, setCurrentInjection] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0

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
              
              <p>
              Téléconsultation possible. 
Condition : Outils informatique fiable pour les documents nécessaires à la
 pratique de l’IVG dans le cadre réglementaire.  
              </p>
              <p>
              Le forfait médicament (FMV) n’est pas à facturer si vous
               choisissez le circuit qui permet à la patiente d’aller 
               chercher directement les traitements abortifs à la pharmacie. 
              </p>
              <p>
Dans cette hypothèse, ordonnance
 comportant : le nom, les dosages, la posologie et la
  voie d’administration des médicaments. 
</p>
<p>
Transmission à l'officine choisie par la patiente via ; messagerie sécurisée de santé ; dossier patient si téléconsultation intégrant cette fonctionnalité.
  </p>
  <p>La voie postale est possible. Attention aux délais.
              </p>
              <p>
              La consultation de suivi sera donc établie par téléconsultation.
               Lors de l’envoi à l’officine de l’ordonnance, 
               il peut être ajouté un autotest urinaire BhCG,
                celui-ci est alors prise en charge par le laboratoire par
                 l’intermédiaire d’un accord avec l’ANCIC et le CNGOF.


                 <ul>
                   <li>
                   <a className="Bold" rel="noreferrer noopener"
          href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000042106233&categorieLien=id"
          target="_blank"
        >
          Legifrance.gouv
        </a>

                   </li>
                   <li>
                   <a rel="noreferrer noopener"
          href="https://www.ameli.fr/medecin/actualites/covid-19-fin-des-mesures-derogatoires-pour-livg-medicamenteuse"
          target="_blank"
        >
          ameli.fr
        </a>
                     
                   </li>
                   <li>
                   <a rel="noreferrer noopener"
          href="https://syngof.fr/wp-content/uploads/2020/04/covid-19_-_medecins_-_ivg.pdf"
          target="_blank"
        >
          syngof
        </a>
                     
                   </li>
                 </ul>
                
        
        
        
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
      titre : "Injection préventive d’Ig anti-D : ",
      value : e.target.value
    };
    setCurrentInjection(reponse);
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

 

  const arretTravail = () => {
    return (
      <div className="BulleInfo">
       
        <p>
        Motif : douleurs abdominales (Prise du misoprostol +++). 
            <ul>
              <li>Arrêt de travail anticipée si prise du misoprostol</li>
              <li>Possibilité de présentiel au cabinet selon le souhait du professionel de santé.</li>
            </ul>
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
    
  };

  const handleTypeContra = (e) => {
    /// recup date frotti
   
    
    
    let reponse = {
      titre: "Type contraception : ",
      value: e.target.value,
      reponse : 1
    };
   setCurrentTypeContra(reponse);
  
    
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
            la reprise  d’ une contraception efficace est indispensable dès la réalisation de l’IVG.          
             </p>
             <p>
             Rappel : le préservatif : seule méthode efficace contre les IST. 
Remboursé par l’assurance maladie  (10 décembre 2018 - <a className="Bold" target="_blank" href="https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/article/premier-preservatif-rembourse-par-l-assurance-maladie ">lien info remboursement</a>). 
             </p>
             <p>
             La pilule a débuter au moment de la 1ère prise médicamenteuse ou le lendemain. 
L’implant a débuter le jour de la 1ere prise médicamenteuse ou à la consultation post-IVG(contraception dans l’intervalle).
             </p>
             <p>
             DIU placé lors de la visite de contrôle post-IVG médicamenteuse ou ultérieurement.  
             </p>
            
             <p>
                 <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://www.choisirsacontraception.fr/?gclid=Cj0KCQjwufn8BRCwARIsAKzP695ZxM7VW0eQH96CJa4iLGXVGsSe3laQdLa5O41MToiliObY-cgsHTAaAuoxEALw_wcB" >choisirmacontraception.fr</a>
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
        Indispensable pour affirmer la réussite de la méthode. 
        </p>
        <p>
L’autotest urinaire peut également être utilisé. (A domicile combiné à un suivi téléphonique) 
           
              
          
        </p>
        <a className="Bold"
           target="_blank"
           href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter"
           >
               HAS recommandation</a>
       
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
    
  };

  const recupInfoSupp = () => {
    
    let reponse = {
      titre : "Si ressource cochée oui : ",
      value : "http://www.info-ist.fr/index.html ; https://www.ameli.fr/assure/sante/",
      reponse : 1
    };
    
    setCurrentInfoSupp(reponse);
  };


  const HAS = () => {
      return (
          <div className="BulleInfo">
              
              <p>
         HAS : « dépistage recommandé ciblé à toutes les femmes consultant pour une IVG, sans limite d’âge. Systématique chez les femmes de 15 à 25 ans .»
        </p>
        
        
        <p>
          De nombreuses sources numériques existent pour l’information aux
          patient(es) des IST ainsi que de ces risques
          <a rel="noreferrer noopener"
            href="https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles"
            target="_blank"
          >
            Ameli IST
          </a>
          ,{" "}
          <a href="http://www.info-ist.fr/index.html" target="_blank" rel="noreferrer noopener">
            ISt-info
          </a>
          .
        </p>
        <br></br>

        <label>
          Vous desirez plus d'informations à transmettre à la patiente ?
          <Button className={btnOuiViolenceBase}
            variant="danger"
            value="Oui"
            onClick={(e) => {
              recupInfoSupp(e);
              changeCouleurBoutonViolence(e);
            }}
          >
            Oui
          </Button>
        
        </label>
              
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





  

  const Frotti = () => {
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
    
  };

  const handleSubmitPaquet = event => {
    event.preventDefault();
    let reponse = {
      titre : "Nombre Paquet : ",
      value : event.currentTarget.value,
      reponse : 1
    };
   setCurrentNbTabac(reponse);
  
      
    
  
    
    
    
  };
  const [nouvelleRecherchePaquet, setNouvelleRecherchePaquet] = useState()
 

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
          <h1>Consultation première prise médicamenteuse </h1>
          <div className="ConsultationContainer">
          <label>
        Consultation faite dans le cadre des dispositions du Covid valable
        jusqu'à la fin de l'état d'urgence sanitaire : 
        <Button  className={btnOuiViolenceBase}  variant="danger" onClick={(e)=>{
       
        affichageOuiCovid(); 
        changeCouleurBoutonViolence(e);}}
        >Oui</Button>
      </label>
  <div>{currentOui}</div>

  
  <div className="BulleInfo">
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

      <br></br>
          </div>

<div className="ConsultationContainer">

<h3>Protocole et coordonnées du centre de référence remise à la patiente.
           </h3>
           <h4>Actuellement en cours de réalisation : à remplir manuellement sur la fiche de liaison.</h4>
</div>      

<div className="ConsultationContainer">
      <h2>Violences subies en rapport ou non avec l’acte :</h2>
      <Form>
      <div key={`Vio-radio`} className="mb-3" >
      <Form.Check 
        type='radio'
        id={`VioOui`}
        label={`Oui`}
        value="Oui"
        name="violencePrise"
      />

<Form.Check 
        type='radio'
        id={`VioNon`}
        label={`Non`}
        value="Non"
        name="violencePrise"
      />
      </div>
      </Form>


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
      <Form>
      <div key={`NeInjMAj-radio`} className="mb-3" onChange={(e)=>{recupRadioIG(e);}} >
      <Form.Check 
        type='radio'
        id={`NeInjMAjOui`}
        label={`Oui`}
        value="Oui"
        name="NeInjMAj"
        onClick={()=> {
          affichageDateIg();
         
          }}
        
      />

<Form.Check 
        type='radio'
        id={`NeInjMAjNon`}
        label={`Non`}
        value="Non"
        name="NeInjMAj"
        
      />

      </div>
      </Form>

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


      <Form>
      <div key={`DeliMifeMAJ-radio`} className="mb-3" >
      <Form.Check 
        type='radio'
        id={`DeliMifeMAJOui`}
        label={`Oui`}
        value="Oui"
        name="DeliMifeMAJ"
        
      />

<Form.Check 
        type='radio'
        id={`DeliMifeMAJNon`}
        label={`Non`}
        value="Non"
        name="DeliMifeMAJ"
        
      />

      </div>
      </Form>
        
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


      
      <Form>
      <div key={`DeliMisoMAJ-radio`} className="mb-3" >
      <Form.Check 
        type='radio'
        id={`DeliMisoMAJOui`}
        label={`Oui`}
        value="Oui"
        name="DeliMisoMAJ"
        
      />

<Form.Check 
        type='radio'
        id={`DeliMisoMAJNon`}
        label={`Non`}
        value="Non"
        name="DeliMisoMAJ"
        
      />

      </div>
      </Form>

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

      <Form>
      <div key={`ArretMAj-radio`} className="mb-3" onChange={(e)=>{recupRadioArret(e);}}>
      <Form.Check 
        type='radio'
        id={`ArretMAjOui`}
        label={`Oui`}
        value="Oui"
        name="ArretMAj"
        
      />

<Form.Check 
        type='radio'
        id={`ArretMAjNon`}
        label={`Non`}
        value="Non"
        name="ArretMAj"
        
      />

      </div>
      </Form>

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
      <Form>
      <div key={`contracep-radio`} className="mb-3" onChange={(e)=>{recupRadioContraception(e);}}>
      <Form.Check 
        type='radio'
        id={`contracepOui`}
        label={`Oui`}
        value="Oui"
        name="contraception"
        onClick={()=>{
          affichageTxtTypeContra();}}
      />

<Form.Check 
        type='radio'
        id={`contracepNon`}
        label={`Non`}
        value="Non"
        name="contraception"
        
      />

      </div>
      </Form>
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
      <h2>Prescription d’un dosage de ß-HCG à faire pour la consultation de contrôle J15-21 ou d’un autotest urinaire combiné à un suivi téléphonique :</h2>

      <Form>
      <div key={`Prescription-radio`} className="mb-3" >
      <Form.Check 
        type='radio'
        id={`PrescriptionMajoui`}
        label={`Oui`}
        value="Oui"
        name="PrescriptionMaj"
      />

<Form.Check 
        type='radio'
        id={`PrescriptionMajNon`}
        label={`Non`}
        value="Non"
        name="PrescriptionMaj"
      />
      </div>
      </Form>


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

        <input
        onClick={changementCouleurSVGHAS}
        className="Lampe"
        type="image"
        src={logoAfficheHAS}
      />
      <div>{currentInfoHAS}</div>
      </div>


  


      <div className="ConsultationContainer">
      <h2>Tabac</h2>
      <br></br>
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


      <br></br>
      
      {/* <input type="text" nom="nbPAquet" id="nbPAquet" onChange={(e)=>{recupNombre(e);}}></input> */}
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

        <br></br>
        <a target="_blank" href={ProtocolHAS}>protocole IVG HAS</a>
     
        <a target="_blank" href={ContraceptionHAS}>HAS contraception</a>


        <br></br>
        <Button className={btnOuiViolenceBase} onClick={(e)=>{afficheStateFin();
      changeCouleurBoutonViolence(e);}} variant="danger">Valider mes choix</Button>
        <div>{currentReponseTarif}</div>
      
        


      


        
      </div>
  )


}


export default PremierePriseMineureConsultePrin;