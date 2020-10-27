import React, { useState } from "react";

import { Button } from "react-bootstrap";

import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";


import GuideCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import ProtocolHAS from "@assets/pdf/ProtocoleIVGHASBonUsageMedicament.pdf";
import ContraceptionHAS from "@assets/pdf/ContraceptionPostIVGHAS.pdf";


import Image from "@assets/images/imageClic.png";

function PremierePriseMajeureMineure(props) {

    const [globalStateFin, setGlobalStateFin] = useState(props.onData);
  ///Bloc fonctionnel
  /// Bloc disposition covid
  const covidIVGOui = ()=> {
      return (
          <div>
              <h2>Covid et IVG :</h2>
              <p>
              Cette première consultation peut se faire sous formes de téléconsultation,
               il est nécessaire de se prémunir d’un outils informatique fiable afin
                de se faire parvenir les documents nécessaires à la pratique de l’IVG
                 dans le cadre réglementaire prévu par la loi. 
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
                 <a
          href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000042106233&categorieLien=id"
          target="_blank"
        >
          Legifrance.gouv
        </a>
        .
        <a
          href="https://www.ameli.fr/medecin/actualites/covid-19-fin-des-mesures-derogatoires-pour-livg-medicamenteuse"
          target="_blank"
        >
          ameli.fr
        </a>
        <a
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
              Concernant les médicaments nécessaires à l’IVG hors établissement de santé,
               ceux-ci sont vendus en pharmacie d’officine. Afin de garantir la sécurité
                d’utilisation des médicaments nécessaires à la réalisation des IVG,
                 ces médicaments sont vendus exclusivement aux médecins ou aux sages-femmes
                  ayant passé convention avec un établissement de santé.
              </p>
              <p>
              Pour se procurer ces médicaments, le médecin ou la sage-femme de
               ville passe une commande à usage professionnel auprès de la pharmacie
                d’officine de son choix.
              </p>
              <p>
              La commande comprend les mentions suivantes :
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

  const dateIG = () => {
      return (
          <div>
              <label>
                  Date : 
                  <input
                  type="date">
                  </input>
              </label>
              <Button>Valider Date</Button>
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
      <div>
       
        <p>
        prévention selon les recommandations officielles de l’incompatibilité rhésus
         chez toutes les femmes rhésus négatif par la prescription et l’administration
          d’une dose standards de gammaglobuline anti-D. Injection IM ou IV de 200 ug
           d’Ig anti-D. 
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

  const priseMife = () => {
    return (
      <div>
       
        <p>
        une feuille de suivi de prise médicamenteuse est nécessaire au cabinet afin
         d’assurer une sécurité du médicament efficace.
          Exemple de feuille de suivi en pdf à télécharger. 
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

  const delivranceMiso = () => {
    return (
      <div>
       
        <p>
        Dans le cas d’une IVG médicamenteuse réalisée à domicile, le médecin ou la
         sage-femme peut délivre le deuxième médicament qui sera pris par la femme
          36 à 48h plus tard, à son domicile. Cette délivrance peut aussi intervenir
           en présentielle au cabinet lors de la consultation de 2eme prise
            médicamenteuse comprise dans le forfait IVG hors établissement. 
            
        </p>
        <p>
        La séquence de traitement par voie orale est recommandée par la HAS
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

  const arretTravail = () => {
    return (
      <div>
       
        <p>
        motif : douleurs abdominales. Particulièrement lors de la prise du misoprostol.
         Cet arrêt de travail peut être anticipée si la prise du misoprostol se fait
          au domicile de la patiente. Il peut être remis lors de la 2ème consultation
           de prise médicamenteuse selon le choix du professionnel de santé ou de la
            patiente.  
            
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
  const typeContraception = () => {
    return (
        <div>
            <label>
                Type : 
                <input
                type="text">
                </input>
            </label>
            <Button>Valider</Button>
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
    <div>
     
      <p className="Red">
      la reprise de la fertilité après une IVG est immédiate :
       une contraception efficace est donc indispensable dès la
        réalisation de l’IVG. 
      </p>

      <p>
      Rappel : le préservatif (masculin, féminin) représente la seule
       méthode de contraception efficace contre les IST. Le préservatif
        est remboursé par l’assurance maladie à compter du 10 décembre
         2018 sur prescription par un médecin ou une sage-femme. 
         <a
         target="_blank"
         href="https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/article/premier-preservatif-rembourse-par-l-assurance-maladie"
         >
             lien info</a>
        La pilule peut être commencée au moment de la 1ère prise médicamenteuse
        ou le lendemain.
      </p>
      <p>
      Les DIU peuvent être mise en place lors de la visite de contrôle après une
       IVG médicamenteuse si la vacuité utérine à l’échographie est constatée
        ou si le dosage de -HCG est négatif. En cas de doute, le DIU est posé
         lors des règles suivantes (avec une autre contraception dans l’intervalle).
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
      <div>
       
        <p className="Red">
        la reprise de la fertilité après une IVG est immédiate :
         une contraception efficace est donc indispensable dès la
          réalisation de l’IVG. 
        </p>
  
        <p>
        Ce dosage permettra au terme de la consultation de contrôle,
         de vérifier de la réussite de l’acte en fonction de la bonne
          décroissance du taux. Celui-ci est donc indispensable. 
L’autotest urinaire peut également être utilisé pour juger le succès
 de l’IVG médicamenteuse. Celui-ci peut être réalisé à domicile combiné
  à un suivi téléphonique
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

  const HAS = () => {
      return (
          <div>
              <p>
              La HAS recommande un dépistage opportuniste ciblé à toutes les femmes
               enceintes consultant pour une IVG, sans limite d’âge. 
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

  const Frotti = () => {
    return (
        <div>
            <p>
            Le plan de dépistage national s’applique, pour toute femme immunocompétente
             de 25 à 65 ans.
            </p>
            <p><a target="_blank" href="https://www.ameli.fr/assure/sante/themes/cancer-col-uterus/frottis-depistage">https://www.ameli.fr/assure/sante/themes/cancer-col-uterus/frottis-depistage</a></p>
            
        
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
  const [nouvelleRecherchePaquet, setNouvelleRecherchePaquet] = useState(0)
 

  const handleChangePaquet = event => {
    setNouvelleRecherchePaquet(event.currentTarget.value);
  };
const handleSubmitPaquet = event => {
  event.preventDefault();
  let reponse = {
    titre : "Nombre Paquet : ",
    value : event.currentTarget.value
  };
  let liste = [...globalStateFin];
    liste.push(reponse);
    setGlobalStateFin(liste);
   

    console.log("nb paquet : "+reponse.value);
    
  

  
  
  setNouvelleRecherchePaquet(0);
}; 

  ///////////////////////////////////////////////////////////////////////////////
  return (

    
      <div>
          <h1>Consultation 1ere prise médicamenteuse </h1>
          <label>
        Consultation faite dans le cadre des dispositions du Covid valable
        jusqu’au 31 octobre 2020 : oui/non Si oui :
        <Button variant="secondary" onClick={()=> {affichageOuiCovid()}}>Oui</Button>
        <Button variant="secondary" onClick={()=> {affichageNonCovid()}}>Non</Button>
      </label>
  <div>{currentOui}</div>
      <br></br>

      <h2>Protocole et coordonnées du centre de référence remise à la patiente :</h2>
      <p>à remplir manuellement</p>


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

      <h2>Remise et prise de mifépristone :</h2>
      <Button variant="secondary" value="Oui" >Oui</Button>
        <Button variant="secondary" value="Non" >Non</Button>
        <input
        onClick={changementCouleurSVGPriseMife}
        className="Lampe"
        type="image"
        src={logoAffichePriseMife}
      />
      <div>{currentInfoPriseMife}</div>



      <h2>Délivrance du misoprostol : </h2>
      <Button variant="secondary" value="Oui" >Oui</Button>
        <Button variant="secondary" value="Non" >Non</Button>
        <input
        onClick={changementCouleurSVGDelivranceMiso}
        className="Lampe"
        type="image"
        src={logoAfficheDelivranceMiso}
      />
      <div>{currentInfoDelivranceMiso}</div>

     


      <h2>Arrêt de travail prescrit pour la prise médicamenteuse :</h2>
      <Button variant="secondary" value="Oui" >Oui</Button>
        <Button variant="secondary" value="Non" >Non</Button>
        <input
        onClick={changementCouleurSVGArretTravail}
        className="Lampe"
        type="image"
        src={logoAfficheArretTravail}
      />
      <div>{currentInfoArretTravail}</div>


      <h2>Contraception choisie par la patiente :</h2>
      <Button variant="secondary" value="Oui" onClick={affichageTxtTypeContra} >Oui</Button>
        <Button variant="secondary" value="Non" >Non</Button>
  <div>{currentTxtTypeContra}</div>
  <input
        onClick={changementCouleurSVGContraception}
        className="Lampe"
        type="image"
        src={logoAfficheContraception}
      />
      <div>{currentInfoContraception}</div>

      <h2>Prescription d’un dosage de -HCG à faire pour la consultation de contrôle J15-21 ou d’un autotest urinaire combiné à un suivi téléphonique :</h2>
      <Button variant="secondary" value="Oui" >Oui</Button>
        <Button variant="secondary" value="Non" >Non</Button>
        <input
        onClick={changementCouleurSVGDosage}
        className="Lampe"
        type="image"
        src={logoAfficheDosage}
      />
      <div>{currentInfoDosage}</div>


      <h2>Recherche IST +/- antibio-prophylaxie </h2>
      <Button variant="secondary" value="Oui" >Oui</Button>
        <Button variant="secondary" value="Non" >Non</Button>

        <p>
        De nombreuses sources numériques existent pour l’information aux patient(es)
         des IST ainsi que de ces risques Lien dans l’ordre 24, 23. En cliquant ici,
          ces sites apparaitront sur le résumé de la consultation, à remettre en main
           propre de la patiente. 
        </p>
        <Button variant="secondary" value="Oui" >Oui</Button>

        <input
        onClick={changementCouleurSVGHAS}
        className="Lampe"
        type="image"
        src={logoAfficheHAS}
      />
      <div>{currentInfoHAS}</div>


      <h2>Frottis à jour ou test HPV</h2>
      {/* <label>
      Frottis à jour
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupFrotti(e);}}>Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recupFrotti(e);}}>Non</Button>
        <Button variant="secondary" value="Non Concernée" onClick={(e)=>{recupFrotti(e);}}>Non Concernée</Button>
     </label>
     <label for="dateFrotti">Date : </label>
      <input type="date" name="dateFrotti" id="dateFrotti" onChange={(e)=>{handleChange(e);}}></input>
      <br></br> */}
     <input
        onClick={changementCouleurSVGFrotti}
        className="Lampe"
        type="image"
        src={logoAfficheFrotti}
      />
      <p>{currentTxtFrotti}</p>


      <h2>Tabac</h2>
      <Button variant="secondary" value="Oui" >Oui</Button>
        <Button variant="secondary" value="Non" >Non</Button>

        
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

        <br></br>
        <a target="_blank" href={ProtocolHAS}>protocole IVG HAS</a>
        <a target="_blank" href={GuideCNGOF}>CNGOF info patient</a>
        <a target="_blank" href="#">ex feuille suivi ttt</a>
        <a target="_blank" href={ContraceptionHAS}>HAS contraception</a>

        <p>Ces éléments sont à destination du professionnel de santé.</p>

        <br></br>
        <Button>Valider mes choix</Button>
        <Button variant="danger" onClick={props.onSuite}>Tarification</Button>
      
        


      


        
      </div>
  )


}


export default PremierePriseMajeureMineure;