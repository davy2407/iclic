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

    /// current reponse
  const [currentMife, setCurrentMife] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });
  const recupMife = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Effets secondaires de la mifépristone : ",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentMife(reponse);
    
    console.log("Effets secondaires de la mifépristone : " + reponse.value);
  };
  //////////////////////////////////////////

  const [currentMiso, setCurrentMiso] =useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const recupMiso = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Délivrance du misoprostol : ",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentMiso(reponse);
    
    console.log("Délivrance du misoprostol : " + reponse.value);
  };

  ///////////////////////////////////////////////////////////



  const [currentAntiG, setCurrentAntiG] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });
  const recupAnti = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Nécessité d’une injection préventive d’Ig anti-D : ",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentAntiG(reponse);
    
    console.log("Nécessité d’une injection préventive d’Ig anti-D : " + reponse.value);
  };

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






  ////////////////////////////////////////////////////////////////

  const [currentContra, setCurrentContra] = useState({
    titre : "Pas de réponses",
    value : "",
    reponse : 0
  });

  const recupContra = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Contraception choisie par la patiente : ",
      value: e.target.value,
      reponse : 1
    };
    
    setCurrentContra(reponse);
    
    console.log("Contraception choisie par la patiente : " + reponse.value);
  };


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
Injection IM ou IV de 200 ug d’Ig anti-D
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
            pour le jour de la prise de misoprostol            
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
Remboursé par l’assurance maladie  (10 décembre 2018 - <a target="_blank" href="https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/article/premier-preservatif-rembourse-par-l-assurance-maladie ">lien info remboursement</a>). 
             </p>
             <p>
             La pilule : débuté au moment de la 1ère prise médicamenteuse ou le lendemain. 
L’implant : débuté le jour de la 1ere prise médicamenteuse ou à la consultation post-IVG(contraception dans l’intervalle).
             </p>
             <p>
             DIU : Visite de contrôle post-IVG médicamenteuse si : vacuité utérine à l’échographie et/ou dosage de β-HCG est négatif. 
             </p>
             <p>
             En cas de doute, le DIU est posé lors des menstruations suivantes (Contraception dans l’intervalle).
             </p>
             <p>
                 <a target="_blank" target="https://www.choisirsacontraception.fr/?gclid=Cj0KCQjwufn8BRCwARIsAKzP695ZxM7VW0eQH96CJa4iLGXVGsSe3laQdLa5O41MToiliObY-cgsHTAaAuoxEALw_wcB" >choisirmacontraception.fr</a>
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

            <h1>Consultation 2ème prise médicamenteuse (facultative) :
Majeure </h1>

            
            <div className="ConsultationContainer">
            <h2>Effets secondaires de la mifépristone :</h2>
            <Button variant="secondary" value="Oui" onClick={(e)=>{recupMife(e);}}>Oui</Button>
            <Button variant="secondary" value="Non" onClick={(e)=>{recupMife(e);}}>Non</Button>
            <input
        onClick={changementCouleurSVGMife}
        className="Lampe"
        type="image"
        src={logoAfficheMife}
      />
      <div>{currentInfoMife}</div>
            </div>

            <div className="ConsultationContainer">
            <h2>Délivrance du misoprostol :</h2>
            <Button variant="secondary" value="Oui" onClick={(e)=>{recupMiso(e)}}>Oui</Button>
            <Button variant="secondary" value="Non" onClick={(e)=>{recupMiso(e)}}>Non</Button>
            <input
        onClick={changementCouleurSVGMiso}
        className="Lampe"
        type="image"
        src={logoAfficheMiso}
      />
      <div>{currentInfoMiso}</div>
            </div>

            <div className="ConsultationContainer">
            <h2>Nécessité d’une injection préventive d’Ig anti-D :</h2>
            <Button variant="secondary" value="Oui" onClick={(e)=>{recupAnti(e);
            afficheCause();}}>Oui</Button>
            <Button variant="secondary" value="Non" onClick={(e)=>{recupAnti(e)}}>Non</Button>
    <div>{currentOui}</div>
            <input
        onClick={changementCouleurSVGAntiD}
        className="Lampe"
        type="image"
        src={logoAfficheAntiD}
      />
      <div>{currentInfoAntiD}</div>

            </div>
            <div className="ConsultationContainer">
            <h2>Arrêt de travail prescrit pour la prise médicamenteuse : </h2>
            <Button variant="secondary" value="Oui" onClick={(e)=>{recupArret(e)}}>Oui</Button>
            <Button variant="secondary" value="Non" onClick={(e)=>{recupArret(e)}}>Non</Button>
            <input
        onClick={changementCouleurSVGArret}
        className="Lampe"
        type="image"
        src={logoAfficheArret}
      />
      <div>{currentInfoArret}</div>
            </div>

            <div className="ConsultationContainer">
            <h2>Contraception choisie par la patiente :</h2>
            <Button variant="secondary" value="Oui" onClick={(e)=>{recupContra(e);
            affichageTxtTypeContra();}}>Oui</Button>
            <Button variant="secondary" value="Non" onClick={(e)=>{recupContra(e)}}>Non</Button>
            <div>{currentTxtTypeContra}</div>
            <input
        onClick={changementCouleurSVGContra}
        className="Lampe"
        type="image"
        src={logoAfficheContra}
      />
      <div>{currentInfoContra}</div>
            </div>

            <a target="_blank" href={ContraceptionHAS}>HAS contraception PDF</a>


            <Button variant="danger" onClick={afficheStateFin}>Valider mes choix</Button>
            <div>{currentReponseTarif}</div>


        </div>
    )


}



export default DeuxiemeMediMajeureNA;