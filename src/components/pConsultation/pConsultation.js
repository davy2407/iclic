import React, { useState } from "react";
import Button from "react-bootstrap/Button";

// import assets
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideIVG from "@assets/pdf/GuideIvgPatiente.pdf";

// import css
import "./pConsultation.css";

/// feuille de premiere consultation, patiente majeure non anonyme ne venant pas du 3d
function PConsultation(props) {
  /// Bloc Fonctionnel

  const [couleurBouttonBase, setCouleurBouttonBase] = useState("secondary");

  const [couleurBouttonSel, setCouleurBouttonSel] = useState("danger");

  const changeCouleurBoutton = (e) => {
    e.preventDefault();
    console.log(e.target.variant);

    let couleurAfficher = e.target.variant;
    if (couleurAfficher == "secondary") {
      e.target.variant = "danger";
    } else {
      e.target.variant = "secondary";
    }
  };

  ///

  /// Bloc contenant les state à récupérer à la fin de la consultation

  const [dateDDRFin, setDateDDRFin] = useState({});

  const [personneAccFin, setPersonneAccFin] = useState({});

  const recupAccompagnant = (e) => {
    e.preventDefault();
    let reponse = e.target.value;
    setPersonneAccFin(reponse);
    console.log("accompagnant " + reponse);
    console.log("accompagnant state " + personneAccFin);
  };

  const [modeDecouverteFin, setModeDecouverte] = useState({});

  const recupModeDecouverte = (e) => {
    e.preventDefault();
    let reponse = e.target.value;
    setModeDecouverte(reponse);
    console.log("accompagnant " + reponse);
  };

  const [constexteBioPsyFin, setContexteBioPsyFin] = useState({});

  const [rechercheIstFin, setRechercheIstFin] = useState({});

  const [groupeSanguinFin, setGroupeSanguinFin] = useState({});

  const [guideIVGFin, setGuideIVGFin] = useState({});

  const [consultationPsyFin, setConsultationPsyFin] = useState({});

  const [contraPostIVGFin, setContraPostIVGFin] = useState({});

  const [frottiFin, setFrottiFin] = useState({});

  const [dateFrottiFin, setDateFrottiFin] = useState({});

  const [tabacFin, setTabacFin] = useState({});

  const [nBTabacFin, setNbTabacFin] = useState({});

  ///

  /// texte info IST
  const [txtIST, setTxtIST] = useState(
    "Faire apparaître la mention « échographie de datation à réaliser en urgence pour IVG » sur votre ordonnance afin que le forfait IVG soit appliqué, (Index pour radiologue IPE)."
  );

  const [currentInfoIST, setCurrentInfoIST] = useState("");

  const affichageTxtIST = () => {
    let txtAEnlever = currentInfoIST;
    let txtAAfficher = txtIST;
    setCurrentInfoIST(txtAAfficher);
    setTxtIST(txtAEnlever);
  };

  const [logoAfficheIST, setLogoAfficheIST] = useState(LightOff);

  const [logoNonAfficheIST, setLogoNonAfficheIST] = useState(LightOn);

  const changementCouleurSVGIST = () => {
    let currentLampe = logoAfficheIST;
    let currentCache = logoNonAfficheIST;
    setLogoNonAfficheIST(currentLampe);
    setLogoAfficheIST(currentCache);
    affichageTxtIST();
  };
  ///Bloc prescription echographie
  const [txtEcho, setTxtEcho] = useState(
    "La HAS recommande un dépistage opportuniste ciblé à toutes les femmes enceintes consultant pour une IVG, sans limite d’âge."
  );

  const [currentInfoEcho, setCurrentInfoEcho] = useState("");

  const affichageTxtEcho = () => {
    let txtAEnlever = currentInfoEcho;
    let txtAAfficher = txtEcho;
    setCurrentInfoEcho(txtAAfficher);
    setTxtEcho(txtAEnlever);
  };
  const [logoAfficheEcho, setLogoAfficheEcho] = useState(LightOff);

  const [logoNonAfficheEcho, setLogoNonAfficheEcho] = useState(LightOn);
  const changementCouleurSVGEcho = () => {
    let currentLampe = logoAfficheEcho;
    let currentCache = logoNonAfficheEcho;
    setLogoNonAfficheEcho(currentLampe);
    setLogoAfficheEcho(currentCache);
    affichageTxtEcho();
  };

  const [valueDecouverteGro, setDecouverteGro] = useState(
    /// state bouton select ( ne fonctionne pas comme value de base actuellement )
    { value: "Selectionner" }
  );

  /// Bloc consultation Biopsychosocial
  const [consultationPsychoSo, setConsultationPsychoSo] = useState({
    texte: "consultation psychosociale proposée",
    className: "Red",
  });

  const [
    affichageWarningConsultation,
    setAffichageWarningConsultation,
  ] = useState({ texte: "", className: "" });

  const afficheConsultation = () => {
    setAffichageWarningConsultation(consultationPsychoSo);
  };

  /// Consultation psychosociale
  const returnInfo = () => {
    return (
      <div>
        <p>
          {" "}
           Elle n’est pas obligatoire pour les personnes majeures. Il existe
          l’obligation légale de le proposer. La patiente a un délai de 48h de
          réflexion avant de signer le consentement après cette consultation.
        </p>
        <br></br>
        <p>Elle peut avoir lieu : </p>
        <br></br>
        <ul>
          <li>
            dans un établissement d’information, de consultation ou de conseil
            familial 
          </li>
          <li>dans un centre de planification ou d’éducation familiale</li>
          <li>dans un service social ou un autre organisme agréé</li>
        </ul>
        <br></br>
      </div>
    );
  };

  const [txtPsycho, setTxtPsycho] = useState(() => returnInfo());

  const [currentInfoPsycho, setCurrentInfoPsycho] = useState("");

  const affichageTxtPsycho = () => {
    let txtAEnlever = currentInfoPsycho;
    let txtAAfficher = txtPsycho;
    setCurrentInfoPsycho(txtAAfficher);
    setTxtPsycho(txtAEnlever);
  };

  const [logoAffichePsycho, setLogoAffichePsycho] = useState(LightOff);

  const [logoNonAffichePsycho, setLogoNonAffichePsycho] = useState(LightOn);

  const changementCouleurSVGPsycho = () => {
    let currentLampe = logoAffichePsycho;
    let currentCache = logoNonAffichePsycho;
    setLogoNonAffichePsycho(currentLampe);
    setLogoAffichePsycho(currentCache);
    affichageTxtPsycho();
  };

  ///
  const handleChange = (event) => {
    /// gère le bouton select
    console.log(event.target.value);
    let test = event.target.value;
    setDecouverteGro({ value: test });
  };

  ///BLoc DDR
  let newDate = new Date();
  console.log(newDate);
  const [recuptDateDDR, setRecuptDateDDR] = useState(newDate);

  const changeDate = () => {
    let NDate = new Date();
    setRecuptDateDDR(NDate);
    console.log(NDate);
  };

  const [dateDDR, setDateDDR] = useState({});

  /// Bloc information contraception post IVG

  const returnInfoPostIVG = () => {
    return (
      <div>
        <p>
           Il est nécessaire d’aborder dès cette consultation, les différentes
          modalités contraceptives. Site possible d’information à transmettre à
          la patiente : Lien{" "}
          <a href="https://www.choisirsacontraception.fr/?gclid=EAIaIQobChMI8_jf5raj7AIVD9d3Ch2qZwTZEAAYASAAEgIlxvD_BwE">
            choisirsacontraception.com
          </a>
        </p>
        <br></br>
      </div>
    );
  };

  const [txtPostIVG, setTxtPostIVG] = useState(() => returnInfoPostIVG());

  const [currentInfoPostIVG, setCurrentInfoPostIVG] = useState("");

  const affichageTxtPostIVG = () => {
    let txtAEnlever = currentInfoPostIVG;
    let txtAAfficher = txtPostIVG;
    setCurrentInfoPostIVG(txtAAfficher);
    setTxtPostIVG(txtAEnlever);
  };

  const [logoAffichePostIVG, setLogoAffichePostIVG] = useState(LightOff);

  const [logoNonAffichePostIVG, setLogoNonAffichePostIVG] = useState(LightOn);

  const changementCouleurSVGPostIVG = () => {
    let currentLampe = logoAffichePostIVG;
    let currentCache = logoNonAffichePostIVG;
    setLogoNonAffichePostIVG(currentLampe);
    setLogoAffichePostIVG(currentCache);
    affichageTxtPostIVG();
  };

  /// Bloc frotti

  const returnInfoFrotti = () => {
    return (
      <div>
        <p>
           Le plan de dépistage national s’applique, pour toute femme
          immunocompétente de 25 à 65 ans.
        </p>
        <a href="https://www.ameli.fr/assure/sante/themes/cancer-col-uterus/frottis-depistage">
          https://www.ameli.fr/assure/sante/themes/cancer-col-uterus/frottis-depistage
        </a>
      </div>
    );
  };

  const [txtFrotti, setTxtFrotti] = useState(() => returnInfoFrotti());

  const [currentInfoFrotti, setCurrentInfoFrotti] = useState("");

  const affichageTxtFrotti = () => {
    let txtAEnlever = currentInfoFrotti;
    let txtAAfficher = txtFrotti;
    setCurrentInfoFrotti(txtAAfficher);
    setTxtFrotti(txtAEnlever);
  };

  const [logoAfficheFrotti, setLogoAfficheFrotti] = useState(LightOff);

  const [logoNonAfficheFrotti, setLogoNonAfficheFrotti] = useState(LightOn);

  const changementCouleurSVGFrotti = () => {
    let currentLampe = logoAfficheFrotti;
    let currentCache = logoNonAfficheFrotti;
    setLogoNonAfficheFrotti(currentLampe);
    setLogoAfficheFrotti(currentCache);
    affichageTxtFrotti();
  };

  return (
    <div className="consultationContainer">
      <h1>1ère consultation préalable/1er contact médical Majeure Anonyme </h1>
      <p>{props.onTexte}</p>
      <br></br>
      <p>{props.onRecap}</p>
      <br></br>
      <p>
        Pour les femmes majeures, l’avortement anonyme est relatif. En effet,
        seules les IVG réalisées en établissement de santé pratiquant le tiers
        payant peuvent être pratiquées de manière confidentielle. La loi
        relative à l’interruption volontaire de grossesse dispose que : « Seule
        la réalisation d’une IVG dans un établissement de santé qui assure la
        dispense d’avance des frais permet de garantir un véritable anonymat de
        l’intervention ». Lien n°12
      </p>
      <br></br>
      <h2>DDR</h2>
      <label for="DDR">DDR « date des dernières règles » : </label>
      <input
        type="date"
        name="DDR"
        id="DDR"
        defaultValue={recuptDateDDR}
      ></input>
      <br></br>
      <label>
        Date incertaine ?<Button variant="secondary">Oui</Button>
      </label>
      <br></br>
      <p>
        {/* Je n'ai pas encore fait la fonction qui recup la valeur de 
                            linput date DDR et qui fait la conversion
                            Pareil pour l'ensemble du bloc text qui suit  */}
        Soit … SA + … jours Ex : DDR : 1/08/2019, on est le 8/09/2019, ça fait
        donc 38 jours soit 5 semaines + 3 jours. Donc + 14 jours ou +2
        semaines : 7SA+3 jours.
      </p>
      <p>
        + Si entre 5 et 7 SA : faire apparaître « (en urgence) » entre
        parenthèse et en rouge pour prescription échographie de datation à
        l’étape d’après. + Si 7SA.  Verrou 1 (voir feuille correspondante). +
        Si case « incertaine » cochée : 1/ faire apparaître « (en urgence) »
        entre parenthèse et en rouge pour prescription échographie de datation à
        l’étape d’après 2/Avec ? : Faire apparaitre « La DDR étant incertaine,
        il est nécessaire de s’assurer de la datation exacte rapidement afin de
        ne pas dépasser le terme légal pour une interruption de grossesse par
        voie médicamenteuse. »
      </p>
      <br></br>
      <h2>Prescription échographie de datation</h2>
      <p>
        1/ ?  « En pratique sur une grossesse a priori toute débutante, attendre
        le résultat des ß-HCG (dans la journée ou le lendemain) pour programmer
        l’échographie (œuf visualisé si ß-HCG 1000-1500 UI/L) afin qu’elle ne
        soit pas répétée inutilement. Il existe la possibilité d’attendre la
        2ème consultation préalable à l’IVG afin de programmer l’échographie de
        datation en fonction du résultat sanguin. »
      </p>
      <p>
        Comme vu précédemment : Faire apparaître « (en urgence) » entre
        parenthèse et en rouge pour prescription échographie de datation si
        entre 7 et 9 SA ou si case incertaine.
      </p>
      <input
        onClick={changementCouleurSVGEcho}
        className="Lampe"
        type="image"
        src={logoAfficheEcho}
      />
      <p>{currentInfoEcho}</p>
      <br></br>
      <h2>Personne accompagnante</h2>
      <label>
        Personne accompagnante
        <Button
          variant="secondary"
          value="Oui"
          onClick={(e) => {
            recupAccompagnant(e);
          }}
        >
          Oui
        </Button>
        <Button
          variant="secondary"
          value="Non"
          onClick={(e) => {
            recupAccompagnant(e);
          }}
        >
          Non
        </Button>
      </label>
      <br></br>
      <h2>Mode de découverte de la grossesse </h2>
      <br></br>
      <label>
        Mode de découverte de la grossesse :
        <Button
          value="Test Urinaire"
          variant="secondary"
          onClick={(e) => {
            recupModeDecouverte(e);
          }}
        >
          Test urinaire
        </Button>
        <Button
          value="Test Sanguin"
          variant="secondary"
          onClick={(e) => {
            recupModeDecouverte(e);
          }}
        >
          Test sanguin
        </Button>
        <Button
          value="Échographie"
          variant="secondary"
          onClick={(e) => {
            recupModeDecouverte(e);
          }}
        >
          Échographie
        </Button>
        <Button
          value="Clinique"
          variant="secondary"
          onClick={(e) => {
            recupModeDecouverte(e);
          }}
        >
          Clinique
        </Button>
        {/* <select defaultValue={valueDecouverteGro} id="decouverteGro" onChange={handleChange}>
                                <option value="Test urinaire">Test urinaire</option>
                                <option value="Test sanguin">Test sanguin</option>
                                <option value="Échographie">Échographie</option>
                                <option value="Clinique">Clinique</option>
                            </select> */}
      </label>
      <h2>Contexte biopsychosocial favorable :</h2>
      {/* Bloc a finir  */}
      <br></br>
      <Button variant="secondary">Oui</Button>
      <br></br>
      <Button variant="secondary" onClick={afficheConsultation}>
        Non
      </Button>
      <br></br>
      <p className={affichageWarningConsultation.className}>
        {affichageWarningConsultation.texte}
      </p>
      <h2>Recherche IST +/- antibio-prophylaxie</h2>
      <br></br>
      <label>
        Recherche IST +/- antibio-prophylaxie
        <Button variant="secondary">Oui</Button>
        <Button variant="secondary">Non</Button>
      </label>
      <br></br>
      <input
        onClick={changementCouleurSVGIST}
        className="Lampe"
        type="image"
        src={logoAfficheIST}
      />
      <p>  {currentInfoIST}</p>
      {/* Bloc a finir */}
      <br></br>
      <h2>
        Prise de sang (Groupe sanguin : 2 déterminations, RAI, -HCG
        quantitatif)
      </h2>
      <br></br>
      <p>
        ? : « 2 typages de groupe sanguin sont nécessaires avant toute IVG
        médicamenteuse ou chirurgicale. Les RAI doivent dater de moins de 48h
        avant l’acte si négatif jusqu'alors. A noter qu’une injection
        d’Immunoglobulines anti-D sera nécessaire en cas de RAI négatif avant
        toute IVG ou dans les 72h suivant tout saignement. »
      </p>
      <h2>Dossier guide IVG remis :</h2>
      <br></br>
      <label>
        Dossier guide IVG remis :<Button variant="secondary">Oui</Button>
        <Button variant="secondary">Non</Button>
      </label>
      <br></br>
      <a href={GuideIVG} target="_blank">
        PDF Guide IVG
      </a>
      <h2>Consultation psychosociale proposée</h2>
      <br></br>
      <label>
        Consultation psychosociale proposée :
        <Button variant="secondary">Oui</Button>
        <Button variant="secondary">Non</Button>
      </label>
      <p className={affichageWarningConsultation.className}>
        {affichageWarningConsultation.texte}
      </p>
      <br></br>
      <input
        onClick={changementCouleurSVGPsycho}
        className="Lampe"
        type="image"
        src={logoAffichePsycho}
      />
      <br></br>
      <div>{currentInfoPsycho}</div>
      <br></br>
      <h2>Information contraception post-IVG</h2>
      <br></br>
      <label>
        Information contraception post-IVG
        <Button variant="secondary">Oui</Button>
        <Button variant="secondary">Non</Button>
      </label>
      <br></br>
      <input
        onClick={changementCouleurSVGPostIVG}
        className="Lampe"
        type="image"
        src={logoAffichePostIVG}
      />
      <br></br>
      <div>{currentInfoPostIVG}</div>
      <br></br>
      <h2>Frottis à jour </h2>
      <br></br>
      <label>
        Frotti à jour :<Button variant="secondary">Oui</Button>
        <Button variant="secondary">Non</Button>
        <Button variant="secondary">Non Concernée</Button>
      </label>
      <br></br>
      <label for="dateFrotti">Date : </label>
      <input type="date" name="dateFrotti" id="dateFrotti"></input>
      <br></br>
      <input
        onClick={changementCouleurSVGFrotti}
        className="Lampe"
        type="image"
        src={logoAfficheFrotti}
      />
      <br></br>
      <div>{currentInfoFrotti}</div>
      <br></br>
      <h2>Tabac :</h2>
      <br></br>
      <label>
        <Button variant="secondary">Oui</Button>
        <Button variant="secondary">Non</Button>
      </label>
      <br></br>
      <label for="nbPAquet"> Nombre paquets </label>
      <input type="text" nom="nbPAquet" id="nbPAquet"></input>
      <br></br>
      <br></br>
      <Button
        onClick={(e) => {
          changeCouleurBoutton(e);
        }}
        variant={couleurBouttonBase}
      >
        Valider
      </Button>{" "}
    </div>
  );
}

export default PConsultation;
