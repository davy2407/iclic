import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import FicheVidalMiso from "@assets/pdf/FicheVidalMisoprostol.pdf";
import FicheVidalMife from "@assets/pdf/FicheVidalMifepristone.pdf";
import InfoPatiente from "@assets/docx/InfoPatiente.docx";

import "./PriseMediContreIndication.css";

function PriseMediContreindication(props) {
  
  const [globalStateContre, setGlobalStateContre] = useState(props.onData);

  const afficheStateFin = () => {
    let echelon = compteur;
    if (echelon<5) {
      afficheNoRep();
      
    }
    else if (echelon>=5) {

      /// reponse ok affiche bouton tarif
      afficheTarif();
      
    }
    props.onRecup(globalStateContre);
  };


  /////////// state 



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
       Consultation
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

  

  /////////////

  const [ compteur, setCompteur] = useState(0);

  const augmenteCount = () => {
    setCompteur(compteur+1)
  }

  ////////////////////////////////////////////////////////
  /// Verrou
  const verrouUn = () => {
    /// retourne le texte verrou 1
    return (
      <div>
        <h1 className="Verrou1">VERROU :</h1>
        <br></br>
        <p className="Verrou1">
          Dans le cadre de l’interruption volontaire de grossesse, votre réponse
          va à l’encontre des recommandations établies actuellement en vigueur
          en France.
        </p>
        <p className="Verrou1">
          Il est nécessaire d’adresser votre patiente vers le centre de
          référence duquel dépend la patiente (à défaut aux urgences spécialisés
          le plus proche). Le degré d’urgence est à établir selon les signes
          cliniques ou l’âge gestationnel estimé.
        </p>

        <br></br>
        <br></br>
        <a href="#">Informations et orientation de la patiente.</a>
        {/* /// liens à finir */}
        <br></br>
        <a href="#">Retour vers la page d’accueil.</a>
        <br></br>
      </div>
    );
  };
  const [txtVerrouUn, settxtVerrouUn] = useState(
    () => verrouUn()
    /// state contenant la fonction retournant le texte plus de 12 semaines
  );

  const [currentInfoVerrouUn, setcurrentInfoVerrouUn] = useState(
    /// texte vide affichage de base
    ""
  );

  const affichageVerrouUn = () => {
    /// gère laffichage du texte verrou
    let txtAEnlever = currentInfoVerrouUn;
    let txtAAfficher = txtVerrouUn;
    setcurrentInfoVerrouUn(txtAAfficher);
    settxtVerrouUn(txtAEnlever);
  };

  const clicVerrouUnAffichage = (e) => {
    e.preventDefault();
    affichageVerrouUn();
  };
  /// Bloc Mifépristone
  const Mifepristone = () => {
    return (
      <div className="BulleInfo">
        <p>
        Insuffisance surrénale chronique, hypersensibilité à la substance active  asthme sévère (non contrôlé par le traitement), porphyrie héréditaire, grossesse non confirmée, grossesse de plus de 63 jours d’aménorrhée, suspicion de grossesse extra-utérine. 
        </p>
      </div>
    );
  };
  const [txtMife, setTextMife] = useState(() => Mifepristone());

  const [currentInfoMife, setCurrentInfoMife] = useState("");

  const affichageTxtMife = () => {
    let txtAEnlever = currentInfoMife;
    let txtAAfficher = txtMife;
    setCurrentInfoMife(txtAAfficher);
    setTextMife(txtAEnlever);
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


  
  /// Bloc Misoprostol

  const Misoprostol = () => {
    return (
      <div className="BulleInfo">
        <p>
        Hypersensibilité au misoprostol,, grossesse non confirmée, suspicion de grossesse extra-utérine. 
        </p>
      </div>
    );
  };
  const [txtMiso, setTextMiso] = useState(() => Misoprostol());

  const [currentInfoMiso, setCurrentInfoMiso] = useState("");

  const affichageTxtMiso = () => {
    let txtAEnlever = currentInfoMiso;
    let txtAAfficher = txtMiso;
    setCurrentInfoMiso(txtAAfficher);
    setTextMiso(txtAEnlever);
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

  /// Bloc prescription anta

  const PrescriptionAnta = () => {
    return (
      <div className="BulleInfo">
        <p>
        HAS : antalgiques palier 1 (ibuprofène ou fénoprofène à dose antalgique) et 2 (paracétamol associé à l’opium ; la codéine ; tramadol seul ou en association avec le paracétamol).
        </p>
        <p>
        En cas de Covid 19, l’ibuprofène, antalgique de référence dans l’IVG médicamenteuse, est remplacé par le paracétamol associé à l’opium ou à la codéine. <a className="Bold" rel="noreferrer noopener"
            href="https://www.has-sante.fr/upload/docs/application/pdf/2020-04/reponse_rapide_ivg__09_04_2020_coiv8.pdf"
            target="_blank"
          > info
          </a>
        </p>
      </div>
    );
  };
  const [txtPresci, setTextPresci] = useState(() => PrescriptionAnta());

  const [currentInfoPresci, setCurrentInfoPresci] = useState("");

  const affichageTxtPresci = () => {
    let txtAEnlever = currentInfoPresci;
    let txtAAfficher = txtPresci;
    setCurrentInfoPresci(txtAAfficher);
    setTextPresci(txtAEnlever);
  };

  const [logoAffichePresci, setLogoAffichePresci] = useState(LightOff);

  const [logoNonAffichePresci, setLogoNonAffichePresci] = useState(LightOn);

  const changementCouleurSVGPresci = () => {
    let currentLampe = logoAffichePresci;
    let currentCache = logoNonAffichePresci;
    setLogoNonAffichePresci(currentLampe);
    setLogoAffichePresci(currentCache);
    affichageTxtPresci();
  };
  /// Bloc info effets secondaires

  const EffetSecondaire = () => {
    return (
      <div className="BulleInfo">
        <h4>ES mifépristone :</h4>
        <p>
        nausées/vomissements, diarrhées, crampes abdominales, infection.
        </p>
        <br></br>
        <h4>ES misoprostol :</h4>
        <p>
        nausées/vomissements, diarrhées, crampes abdominales, infection, contractions utérines, saignements utérins, malformations fœtales.
        </p>
      </div>
    );
  };
  const [txtInfoEffet, setTextInfoEffet] = useState(() => EffetSecondaire());

  const [currentInfoEffet, setCurrentInfoEffet] = useState("");

  const affichageTxtInfoEffet = () => {
    let txtAEnlever = currentInfoEffet;
    let txtAAfficher = txtInfoEffet;
    setCurrentInfoEffet(txtAAfficher);
    setTextInfoEffet(txtAEnlever);
  };

  const [logoAfficheInfoEffet, setLogoAfficheInfoEffet] = useState(LightOff);

  const [logoNonAfficheInfoEffet, setLogoNonAfficheInfoEffet] = useState(
    LightOn
  );

  const changementCouleurSVGInfoEffet = () => {
    let currentLampe = logoAfficheInfoEffet;
    let currentCache = logoNonAfficheInfoEffet;
    setLogoNonAfficheInfoEffet(currentLampe);
    setLogoAfficheInfoEffet(currentCache);
    affichageTxtInfoEffet();
  };

  const recupEffet = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Une information claires et établies des effets secondaires possibles des traitements a été établie durant la consultation : ",
      value: e.target.value,
      reponse : 1 
    };
    let liste = [...globalStateContre];
    liste.push(reponse);
    setGlobalStateContre(liste);
   
    console.log("Une information claires et établies des effets secondaires possibles des traitements a été établie durant la consultation : " + reponse.value);
  };

  return (
    <div className="consultationContainer">
      <h1>Consultation 1ere prise médicamenteuse Contre-indication </h1>
      <br></br>
      <h2>Contre-indication médicamenteuse : </h2>
      <br></br>
      <div className="ConsultationContainer">
      <label>
        <h3>Mifépristone :</h3>
        <Button variant="secondary" onClick={augmenteCount}>Oui</Button>
        <Button variant="secondary" onClick={()=>{
          augmenteCount();
          clicVerrouUnAffichage();}}>
          Non
        </Button>
        <div>{currentInfoVerrouUn}</div>
      </label>
      <input
        onClick={changementCouleurSVGMife}
        className="Lampe"
        type="image"
        src={logoAfficheMife}
      />
      <div>{currentInfoMife}</div>
      <br></br>
      </div>
      <div className="ConsultationContainer">
      <label>
        <h3>Misoprostol :</h3>
        <Button variant="secondary" onClick={augmenteCount}>Oui</Button>
        <Button variant="secondary" onClick={()=>{
          augmenteCount();
          clicVerrouUnAffichage();}}>
          Non
        </Button>
        <div>{currentInfoVerrouUn}</div>
      </label>
      <input
        onClick={changementCouleurSVGMiso}
        className="Lampe"
        type="image"
        src={logoAfficheMiso}
      />
      <div>{currentInfoMiso}</div>
      <br></br>
      </div>

      <div className="ConsultationContainer">
      <label>
        <h3>Prescription d’antalgiques : </h3>
        <Button variant="secondary" onClick={augmenteCount}>Oui</Button>
        <Button variant="secondary" onClick={augmenteCount}>Non</Button>
      </label>
      <input
        onClick={changementCouleurSVGPresci}
        className="Lampe"
        type="image"
        src={logoAffichePresci}
      />
      <div>{currentInfoPresci}</div>
      <br></br>
      </div>
      <div className="ConsultationContainer">
      <label>
        <h3>
          Information claires et établies des effets secondaires possibles des
          traitements :
        </h3>
        <Button variant="secondary" value="Oui" onClick={(e)=>{recupEffet(e);
        augmenteCount();}}>Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recupEffet(e);
        augmenteCount();}}>Non</Button>
      </label>
      <input
        onClick={changementCouleurSVGInfoEffet}
        className="Lampe"
        type="image"
        src={logoAfficheInfoEffet}
      />
      <div>{currentInfoEffet}</div>
      <br></br>
      </div>
      <div className="ConsultationContainer">
      <label>
        <h3>Contexte biopsychosocial favorable à l’IVG hors établissement :</h3>
        <Button variant="secondary" onClick={augmenteCount}>Oui</Button>
        <Button variant="secondary" onClick={()=>{clicVerrouUnAffichage();
        augmenteCount();}}>
          Non
        </Button>
        <div>{currentInfoVerrouUn}</div>
      </label>
      </div>

      <br></br>
      <br></br>
      
      <br></br> 
      <h3>Fiche patient traitement :</h3>
      <a className="Bold" href={InfoPatiente} target="_blank">
        télécharger PDF
      </a>


      <Button onClick={afficheStateFin} variant="danger">
        Valider mes choix
      </Button>{" "}
      <br></br>
      <div>{currentReponseTarif}</div>

    </div>
  );
}

export default PriseMediContreindication;
