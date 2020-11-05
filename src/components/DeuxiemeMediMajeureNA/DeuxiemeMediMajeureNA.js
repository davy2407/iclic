import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";

import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import ContraceptionHAS from "@assets/pdf/ContraceptionPostIVGHAS.pdf"


import "./DeuxiemeMediMajeureNA.css";


function DeuxiemeMediMajeureNA(props) {

    const afficheStateFin = () => {
        console.log("state de fin va suivre");
        let liste = [];
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





      //////: recup radio 


      const recupRadioMiso = (e) => {
        let reponse = {
          titre: "Délivrance du misoprostol : ",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentMiso(reponse);
      }

      const recupRadioEffet = (e) => {
        let reponse = {
          titre: "Effets secondaires de la mifépristone : ",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentMife(reponse);
      }


      const recupRadioArret = (e) => {
        let reponse = {
          titre: "Arrêt de travail prescrit : ",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentArret(reponse);
      }


      const recupRadioAnti = (e) => {
        let reponse = {
          titre: "Nécessité d’une injection préventive d’Ig anti-D : ",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentAntiG(reponse);
      }

      const recupRadioContraception = (e) => {
        let reponse = {
          titre: "Contraception choisie par la patiente : ",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentContra(reponse);
        
      }

    /// current reponse
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

    console.log("Date injection préventive d’Ig anti-D : " + reponse.value);
    
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
  
  
  
  
    /////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////




    ///// bloc Mife
    const returnInfoMife = () => {
        return (
          <div className="BulleInfo">
              <h4>ES mifépristone :</h4>
            <p>
            nausées/vomissements, diarrhées, crampes abdominales, infection.
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
        let txtAEnlever = currentOui;
        let txtAAfficher = afficheOUi;
        setCurrentOui(txtAAfficher);
        setAfficheOUI(txtAEnlever);

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
      
        console.log("Type contraception : " + reponse.value);
        
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

            
            <div className="ConsultationContainer">
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

            <div className="ConsultationContainer">
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
            <input
        onClick={changementCouleurSVGMiso}
        className="Lampe"
        type="image"
        src={logoAfficheMiso}
      />
      <div className="ContainerBulle">{currentInfoMiso}</div>
            </div>

            <div className="ConsultationContainer">
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
            <div className="ConsultationContainer">
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
        onClick={changementCouleurSVGContra}
        className="Lampe"
        type="image"
        src={logoAfficheContra}
      />
      <div className="ContainerBulle">{currentInfoContra}</div>
            </div>



            <Button variant="danger" onClick={afficheStateFin}>Valider mes choix</Button>
            <div>{currentReponseTarif}</div>


        </div>
    )


}



export default DeuxiemeMediMajeureNA;