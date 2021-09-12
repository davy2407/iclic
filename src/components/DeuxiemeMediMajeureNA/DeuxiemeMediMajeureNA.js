import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";

import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import ContraceptionHAS from "@assets/pdf/ContraceptionPostIVGHAS.pdf";
import newPdfIcon from "@assets/images/PDFicon.svg";
import infoPAtiente from "@assets/docx/InfoPatiente.docx";



import "./DeuxiemeMediMajeureNA.css";


function DeuxiemeMediMajeureNA(props) {


  const [backgroundBase, setBackgroundBase] = useState("ConsultationContainer");

const [ backgroundSelect, setBackgroundSelect] = useState("ConsultationContainerSelect");




const [backgroundBaseEffet, setBackgroundBaseEffet] = useState(backgroundBase);


const [backgroundBaseMiso, setBackgroundBaseMiso] = useState(backgroundBase);

const [backgroundBaseAnti, setBackgroundBaseAnti] = useState(backgroundBase);

const [backgroundBaseArret, setBackgroundBaseArret] = useState(backgroundBase);

const [backgroundBaseContra, setBackgroundBaseContra] = useState(backgroundBase);





    const afficheStateFin = () => {
        let liste = [];
        liste.push(currentReco);
        liste.push(currentMife);
        liste.push(currentMiso);
        liste.push(currentAntiG);
        liste.push(currentDateAntiG);
        liste.push(currentArret);
        liste.push(currentContra);
        liste.push(currentTypeContra);
      
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



      //////: recup radio 


      const recupRadioMiso = (e) => {
        let reponse = {
          titre: "Délivrance du misoprostol : ",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentMiso(reponse);
        setBackgroundBaseMiso(backgroundSelect);
      }

      const recupRadioEffet = (e) => {
        let reponse = {
          titre: "Effets secondaires de la mifépristone : ",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentMife(reponse);
        setBackgroundBaseEffet(backgroundSelect);
      }


      const recupRadioArret = (e) => {
        let reponse = {
          titre: "Arrêt de travail prescrit : ",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentArret(reponse);
        setBackgroundBaseArret(backgroundSelect); 
      }


      const recupRadioAnti = (e) => {
        let reponse = {
          titre: "Nécessité d’une injection préventive d’Ig anti-D : ",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentAntiG(reponse);
        if (e.target.value=="Oui") {
          setBackgroundBaseAnti(backgroundBase);
          setCurrentDateAntiG(
            {
              titre : "",
              value : "",
              reponse : 0
            }
          );
      
          
        } else {
          setBackgroundBaseAnti(backgroundSelect);
          setCurrentDateAntiG(
            {
              titre : "",
              value : "",
              reponse : 1
            }
          );
          

        }
      }

      const recupRadioContraception = (e) => {
        let reponse = {
          titre: "Contraception choisie par la patiente : ",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentContra(reponse);
        if (e.target.value=="Oui") {
          setBackgroundBaseContra(backgroundBase);
          setCurrentTypeContra(
            {
              titre : "",
              value : "",
              reponse : 0
            }
          );
          
        } else {
          setBackgroundBaseContra(backgroundSelect);
          setCurrentTypeContra(
            {
              titre : "",
              value : "",
              reponse : 1
            }
          );


        }
        
      }

    /// current reponse
    const [currentReco, setCurrentReco] = useState({
      titre : "",
      value : "",
      reponse : 1
    });

  const [currentMife, setCurrentMife] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });
 
  //////////////////////////////////////////

  const [currentMiso, setCurrentMiso] =useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  

  ///////////////////////////////////////////////////////////



  const [currentAntiG, setCurrentAntiG] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });
 

  const [ currentDateAntiG, setCurrentDateAntiG] =useState({
    titre : "",
    value : "",
    reponse : 1
  });
  const handleChangeAnti = (e) => {
    
    
    
    let reponse = {
      titre: "Date injection préventive d’Ig anti-D : ",
      value: e.target.value,
      reponse : 1
    };
   setCurrentDateAntiG(reponse);
   setBackgroundBaseAnti(backgroundSelect);

    
  };



  //////////////////////////////////////////////////////////////

  const [currentArret, setCurrentArret] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });








  ////////////////////////////////////////////////////////////////

  const [currentContra, setCurrentContra] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

 


  ///////////////////////////////////////////////////////////////////

  const [ currentTypeContra, setCurrentTypeContra] = useState({
    titre : "",
    value : "",
    reponse : 1
  });


  /////////////////////////////////////////////////////////////////

  

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
         Fin de consultation 
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


    /////////////////////////////////////////////////////////////

  const ouiCovid = ()=> {
    return (
      <div> 

        
      <p>
      
      Condition : Outils informatique fiable pour les documents nécessaires à la pratique de l’IVG dans le cadre réglementaire.<br></br>
      </p>
      <p>
      Dans le cadre de l’Etat d’urgence sanitaire, Il existe une consultation afin d’attester de la prise de mifégyne puis d’une deuxième téléconsultation (facultative) pour la prise de mifépristone.
      </p>
      <p>
      Le site est en cours de mise à jour.<br></br>
      Veuillez vous référer à la page dédiée Covid accessible à partir de la page d’accueil pour toutes les informations.
      </p>





      
      </div>
    )
  };

  const [ covidTxt, setCovidTxt] = useState(()=>ouiCovid());


  const [ currentOuiCovid, setCurrentOuiCovid] = useState("");


  const afficheCovid =() => {
    let affiche = covidTxt;
    setCurrentOuiCovid(affiche);
  }



  const recupReco = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Téléconsultation (selon recommandation applicable jusqu'à la fin de l'état d'urgence sanitaire) : ",
      value: e.target.value,
      reponse : 1
  
    };
    setCurrentReco(reponse);
  
  };


 



  




  
 


 
/////////////////////////////////////////////////////////////////////////////

  

  /////////////////////////////////////////////////////////////




    ///// bloc Mife
    const returnInfoMife = () => {
        return (
          <div className="BulleInfo">
              <h4>ES mifépristone :</h4> 
            <p>
            nausées/vomissements, diarrhées, crampes abdominales, infection.
            </p>
            <h4>ES misoprostol : </h4>
            <p>
            nausées/vomissements, diarrhées, crampes abdominales, infection, contractions utérines, saignements utérins, malformations fœtales.
            </p>
            
          </div>
        );
      };
    
      const [txtMife, setTxtMife] = useState(() => returnInfoMife());
    
      const [currentInfoMife, setCurrentInfoMife] = useState("");
    
      const affichageTxtMife = () => {
        let txtAEnlever = currentInfoMife;
        let txtAAfficher = txtMife;
        setCurrentInfoMife(txtAAfficher);
        setTxtMife(txtAEnlever);
      };
    
      const [logoAfficheMife, setLogoAfficheMife] = useState(LightOff);
    
      const [logoNonAfficheMife, setLogoNonAfficheMife] = useState(LightOn);
    
      const changementCouleurSVGMife = () => {
        let currentLampe = logoAfficheMife;
        let currentCache = logoNonAfficheMife;
        setLogoNonAfficheMife(currentLampe);
        setLogoAfficheMife(currentCache);
        affichageTxtMife();
      };

    //////////////////////////////////////////////


    //////// Bloc Miso
    const returnInfoMiso = () => {
        return (
          <div className="BulleInfo">
              <h4>ES misoprostol : </h4>
            <p>
            nausées/vomissements, diarrhées, crampes abdominales, infection, contractions utérines, saignements utérins, malformations fœtales.
            </p>
            
          </div>
        );
      };
    
      const [txtMiso, setTxtMiso] = useState(() => returnInfoMiso());
    
      const [currentInfoMiso, setCurrentInfoMiso] = useState("");
    
      const affichageTxtMiso = () => {
        let txtAEnlever = currentInfoMiso;
        let txtAAfficher = txtMiso;
        setCurrentInfoMiso(txtAAfficher);
        setTxtMiso(txtAEnlever);
      };
    
      const [logoAfficheMiso, setLogoAfficheMiso] = useState(LightOff);
    
      const [logoNonAfficheMiso, setLogoNonAfficheMiso] = useState(LightOn);
    
      const changementCouleurSVGMiso = () => {
        let currentLampe = logoAfficheMiso;
        let currentCache = logoNonAfficheMiso;
        setLogoNonAfficheMiso(currentLampe);
        setLogoAfficheMiso(currentCache);
        affichageTxtMiso();
      };

    //////////////////////////////////////////////////////////////


    /////////////// bloc anti D
    const ouiAnti = () => {
        return (
            <div>
                <input
        type="date"
        name="dateAnti"
        id="dateAnti"
        onChange={(e) => {
          handleChangeAnti(e);
        }}
      ></input>
            </div>
        )
    }

    const [afficheOUi, setAfficheOUI] = useState(()=>ouiAnti());

    const [currentOui, setCurrentOui] = useState("");

    const afficheCause = () => {
        let txtAAfficher = afficheOUi;
        setCurrentOui(txtAAfficher);

    }

    const returnInfoAntiD = () => {
        return (
          <div className="BulleInfo">
              
            <p>
            prévention  de l’incompatibilité rhésus chez les femmes rhésus négatif si conjoint positif ou inconnue par la prescription et l’administration de gammaglobuline anti-D. 
Injection IM ou IV de 200 ug d’Ig anti-D.
            </p>
            
          </div>
        );
      };
    
      const [txtAntiD, setTxtAntiD] = useState(() => returnInfoAntiD());
    
      const [currentInfoAntiD, setCurrentInfoAntiD] = useState("");
    
      const affichageTxtAntiD = () => {
        let txtAEnlever = currentInfoAntiD;
        let txtAAfficher = txtAntiD;
        setCurrentInfoAntiD(txtAAfficher);
        setTxtAntiD(txtAEnlever);
      };
    
      const [logoAfficheAntiD, setLogoAfficheAntiD] = useState(LightOff);
    
      const [logoNonAfficheAntiD, setLogoNonAfficheAntiD] = useState(LightOn);
    
      const changementCouleurSVGAntiD = () => {
        let currentLampe = logoAfficheAntiD;
        let currentCache = logoNonAfficheAntiD;
        setLogoNonAfficheAntiD(currentLampe);
        setLogoAfficheAntiD(currentCache);
        affichageTxtAntiD();
      };


    ////////////////////////////////////////////////////////////////


    ////// bloc arret de travail

    const returnInfoArret = () => {
        return (
          <div className="BulleInfo">
              
            <p>
            Pour le jour de la prise de misoprostol.           
             </p>
            
          </div>
        );
      };
    
      const [txtArret, setTxtArret] = useState(() => returnInfoArret());
    
      const [currentInfoArret, setCurrentInfoArret] = useState("");
    
      const affichageTxtArret = () => {
        let txtAEnlever = currentInfoArret;
        let txtAAfficher = txtArret;
        setCurrentInfoArret(txtAAfficher);
        setTxtArret(txtAEnlever);
      };
    
      const [logoAfficheArret, setLogoAfficheArret] = useState(LightOff);
    
      const [logoNonAfficheArret, setLogoNonAfficheArret] = useState(LightOn);
    
      const changementCouleurSVGArret = () => {
        let currentLampe = logoAfficheArret;
        let currentCache = logoNonAfficheArret;
        setLogoNonAfficheArret(currentLampe);
        setLogoAfficheArret(currentCache);
        affichageTxtArret();
      };

    ///////////////////////////////////////////////////////////////////


    ////////// bloc contraception choisie

   

    const returnInfoContra = () => {
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
    
      const [txtContra, setTxtContra] = useState(() => returnInfoContra());
    
      const [currentInfoContra, setCurrentInfoContra] = useState("");
    
      const affichageTxtContra = () => {
        let txtAEnlever = currentInfoContra;
        let txtAAfficher = txtContra;
        setCurrentInfoContra(txtAAfficher);
        setTxtContra(txtAEnlever);
      };
    
      const [logoAfficheContra, setLogoAfficheContra] = useState(LightOff);
    
      const [logoNonAfficheContra, setLogoNonAfficheContra] = useState(LightOn);
    
      const changementCouleurSVGContra = () => {
        let currentLampe = logoAfficheContra;
        let currentCache = logoNonAfficheContra;
        setLogoNonAfficheContra(currentLampe);
        setLogoAfficheContra(currentCache);
        affichageTxtContra();
      };




      const handleTypeContra = (e) => {
        /// recup date frotti
       
        
        
        let reponse = {
          titre: "Type contraception : ",
          value: e.target.value,
          reponse : 1
        };
       setCurrentTypeContra(reponse);
       setBackgroundBaseContra(backgroundSelect);
      
        
      };
    
      const typeContraception = () => {
        return (
            <div>
                <Form.Group>
      <Form.Control as="select" size="lg" onChange={(e) => {
              handleTypeContra(e);
            }}>
              <option value="">Choisir..</option>
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


    //////////////////////////////////////////////////////////////////////
    
    
    
    return (
        <div className="consultationContainer">

            <h1>Consultation deuxième prise médicamenteuse (facultative) :
Majeure </h1>
<br>
</br>
<div className="ConsultationContainer">
<p>Consultation faite par téléconsultation :</p>
            <Button  className={btnOuiViolenceBase}  variant="danger" onClick={(e)=>{recupReco(e);
            afficheCovid();
            changeCouleurBoutonViolence(e);}} value="Oui">Oui</Button>
            <br></br>
            <div>{currentOuiCovid}</div>
            </div>
            <br></br> 

            
            <div className={backgroundBaseEffet}>
            <h2>Effets secondaires de la mifépristone :</h2>
            <Form>
      <div key={`Effets-radio`} className="mb-3" onChange={(e)=>{recupRadioEffet(e);}}>
      <Form.Check 
        type='radio'
        id={`EffetsOui`}
        label={`Oui`}
        value="Oui"
        name="EffetsMife"
        
        
      />

<Form.Check 
        type='radio'
        id={`EffetsNon`}
        label={`Non`}
        value="Non"
        name="EffetsMife"
        
      />

      </div>
      </Form>











            <input
        onClick={changementCouleurSVGMife}
        className="Lampe"
        type="image"
        src={logoAfficheMife}
      />
      <div className="ContainerBulle">{currentInfoMife}</div>
            </div>

            <div className={backgroundBaseMiso}>
            <h2>Délivrance du misoprostol :</h2>

            <Form>
      <div key={`Miso-radio`} className="mb-3" onChange={(e)=>{recupRadioMiso(e);}}>
      <Form.Check 
        type='radio'
        id={`MisoOui`}
        label={`Oui`}
        value="Oui"
        name="Misopro"
        
        
      />

<Form.Check 
        type='radio'
        id={`MisoNon`}
        label={`Non`}
        value="Non"
        name="Misopro"
        
      />

      </div>
      </Form>
      <p>
      <a className="NewDocContainer"  href={infoPAtiente} target="_blank">
      <input
        className="iconPDFNew"
        type="image"
        src={newPdfIcon}
      />
        Fiche information patiente
      </a>
        
                    </p>

            {/* <input
        onClick={changementCouleurSVGMiso}
        className="Lampe"
        type="image"
        src={logoAfficheMiso}
      />
      <div className="ContainerBulle">{currentInfoMiso}</div> */}
            </div>

            <div className={backgroundBaseAnti}>
            <h2>Nécessité d’une injection préventive d’Ig anti-D :</h2>


            <Form>
      <div key={`anti-radio`} className="mb-3" onChange={(e)=>{recupRadioAnti(e);}}>
      <Form.Check 
        type='radio'
        id={`antiOui`}
        label={`Oui`}
        value="Oui"
        name="antiD"
        onClick={()=>{
          afficheCause();}}
        
      />

<Form.Check 
        type='radio'
        id={`antiNon`}
        label={`Non`}
        value="Non"
        name="antiD"
        onClick={()=>{
          setCurrentOui("");
        }}
        
      />

      </div>
      </Form>





    <div>{currentOui}</div>
            <input
        onClick={changementCouleurSVGAntiD}
        className="Lampe"
        type="image"
        src={logoAfficheAntiD}
      />
      <div className="ContainerBulle">{currentInfoAntiD}</div>

            </div>
            <div className={backgroundBaseArret}>
            <h2>Arrêt de travail prescrit pour la prise médicamenteuse : </h2>

            <Form>
      <div key={`arret-radio`} className="mb-3" onChange={(e)=>{recupRadioArret(e);}}>
      <Form.Check 
        type='radio'
        id={`arretOui`}
        label={`Oui`}
        value="Oui"
        name="arretT"
        
      />

<Form.Check 
        type='radio'
        id={`arretNon`}
        label={`Non`}
        value="Non"
        name="arretT"
        
      />

      </div>
      </Form>

            <input
        onClick={changementCouleurSVGArret}
        className="Lampe"
        type="image"
        src={logoAfficheArret}
      />
      <div className="ContainerBulle">{currentInfoArret}</div>
            </div>

            <div className={backgroundBaseContra}>
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
        onClick={()=>{
          setCurrentTxtTypeContra("");
        }}
        
      />

      </div>
      </Form>
            <div>{currentTxtTypeContra}</div>
            <p>


            <a className="NewDocContainer"  href={ContraceptionHAS} target="_blank">
      <input
        className="iconPDFNew"
        type="image"
        src={newPdfIcon}
      />
       HAS contraception PDF
      </a>
              
             </p>
            <input
        onClick={changementCouleurSVGContra}
        className="Lampe"
        type="image"
        src={logoAfficheContra}
      />
                 

      <div className="ContainerBulle">{currentInfoContra}</div>
      
            </div>
            <br></br>
            <br></br>



            <Button className={btnOuiViolenceBase} onClick={(e)=>{afficheStateFin();
        changeCouleurBoutonViolence(e);}} variant="danger">Valider mes choix</Button>
            <div>{currentReponseTarif}</div>


        </div>
    )


}



export default DeuxiemeMediMajeureNA;