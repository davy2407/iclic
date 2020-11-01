import React, { useState } from "react";


import { Button, Form } from "react-bootstrap";


import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";

function PriseMediPatienteMajeure(props) {
  ///Bloc fonctionnel

  const [globalStateFin, setGlobalStateFin] = useState([]);

  const afficheStateFin = () => {
    console.log("state de fin va suivre");
    let liste = [];
    liste.push(currentEcho);
    liste.push(currentgest);
    liste.push(currentConssent);
    liste.push(currentAttestation);
    liste.push(currentSang);
    liste.push(currentDosage);
    liste.push(currentGroupe);
    liste.push(currentAcc);
    
    for (let index = 0; index < liste.length; index++) {
      if (liste[index].titre=="Pas de réponses") {
        alert("Vous n'avez pas répondu à toutes les questions")
        
      }
      else  {
        console.log("OK");
      }
      
    }


    props.onRecup(liste);
  };

  //////////////////////////////////////

  //// current state 

  const [currentEcho, setcurrentEcho] = useState({
    titre : "Pas de réponses",
    value : ""
  });

  const [ currentgest, setCurrentGest] = useState({
    titre : "Pas de réponses",
    value : ""
  });

  const [ currentConssent, setCurrentConssent] = useState({
    titre : "Pas de réponses",
    value : ""
  });

  const [ currentAttestation, setCurrentAttestation] = useState({
    titre : "Pas de réponses",
    value : ""
  });

  const [currentSang, setCurrentSang] = useState({
    titre : "Pas de réponses",
    value : ""
  });

  const [currentDosage, setCurrentDosage] = useState({
    titre : "Pas de réponses",
    value : ""
  });

  const [ currentGroupe, setCurrentGroupe] = useState({
    titre : "Pas de réponses",
    value : ""
  });

  const [ currentAcc, setCurrentAcc] = useState({
    titre : "Pas de réponses",
    value : ""
  });




  ////////////////////////////////////////////////////////////////////////////////

  const [
    saisieUtilisateurNbSemaineSA,
    setSaisieUtilisateurNbSemaineSA,
  ] = useState(0);

  const handleChange = (event) => {
    setSaisieUtilisateurNbSemaineSA(event.currentTarget.value);
  };

  /// Bloc nombre de semaines SA

  const recupSaisieUtilisateurNbSemaine = (event) => {
    event.preventDefault();
    let nb = saisieUtilisateurNbSemaineSA;
    if (nb < 7) {
      affichageMoinsDeSept();
    } else if (nb > 7 && nb < 12) {
      affichagePlusDeSeptMoinsDouze();
    } else if (nb > 12) {
      affichagePlusDouze();
    }
    let reponse = {
      titre: "Echographie de datation/Age gestationnel(SA) : ",
      value: nb,
    };
    setCurrentGest(reponse);
   
    console.log("Echographie de datation/Age gestationnel(SA) : " + nb);
 

    setSaisieUtilisateurNbSemaineSA(0);
  };
  const moinsDeSeptSemaines = () => {
    /// retourne le texte mois de 7 semaines si <7
    return (
      <div>
        <p>IVG médicamenteuse et chirurgical possible</p>
      </div>
    );
  };
  const [txtMoinsDeSeptSA, setTxtMoinsDeSeptSA] = useState(
    () => moinsDeSeptSemaines()
    /// state contenant la fonction retournant le texte moins de 7 semaines
  );

  const [currentInfoNbSAmoinsSept, setCurrentInfoNbSAmoinsSept] = useState(
    /// texte vide affichage de base
    ""
  );

  const affichageMoinsDeSept = () => {
    /// gère laffichage du texte - de 7 semaines
    let txtAEnlever = currentInfoNbSAmoinsSept;
    let txtAAfficher = txtMoinsDeSeptSA;
    setCurrentInfoNbSAmoinsSept(txtAAfficher);
    setTxtMoinsDeSeptSA(txtAEnlever);
  };

  ///

  const plusDeSeptMoinsDouzeSemaines = () => {
    /// retourne le texte plus de 7 semaines moins de 12 si >7 <12
    return (
      <div>
        <p>
          IVG médicamenteuse et chirurgical possible mais en centre de référence
          seulement.
        </p>
        <br></br>
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
  const [txtPlusDeSeptSAmoinsDouze, settxtPlusDeSeptSAmoinsDouze] = useState(
    () => plusDeSeptMoinsDouzeSemaines()
    /// state contenant la fonction retournant le texte plus de 7 semaines moins 12
  );

  const [
    currentInfoNbSAplusSeptMoinsDouze,
    setcurrentInfoNbSAplusSeptMoinsDouze,
  ] = useState(
    /// texte vide affichage de base
    ""
  );

  const affichagePlusDeSeptMoinsDouze = () => {
    /// gère laffichage du texte + de 7 semaines -12
    let txtAEnlever = currentInfoNbSAplusSeptMoinsDouze;
    let txtAAfficher = txtPlusDeSeptSAmoinsDouze;
    setcurrentInfoNbSAplusSeptMoinsDouze(txtAAfficher);
    settxtPlusDeSeptSAmoinsDouze(txtAEnlever);
  };

  const plusDeDouzetSemaines = () => {
    /// retourne le texte mois de 7 semaines si >12
    return (
      <div>
        <p>IVG chirurgical seulement en centre de référence</p>
        <br></br>
        <h1 className="Verrou1">VERROU : </h1>
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
  const [txtPlusDeDouzeSA, settxtPlusDeDouzeSA] = useState(
    () => plusDeDouzetSemaines()
    /// state contenant la fonction retournant le texte plus de 12 semaines
  );

  const [currentInfoNbSAplusDouze, setcurrentInfoNbSAplusDouze] = useState(
    /// texte vide affichage de base
    ""
  );

  const affichagePlusDouze = () => {
    /// gère laffichage du texte + 12
    let txtAEnlever = currentInfoNbSAplusDouze;
    let txtAAfficher = txtPlusDeDouzeSA;
    setcurrentInfoNbSAplusDouze(txtAAfficher);
    settxtPlusDeDouzeSA(txtAEnlever);
  };

  /// Bloc verrou2

  const verrouDeux = () => {
    /// retourne le texte verrou 2
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
          Il est nécessaire, selon vos réponses, un ajustement et une reprise à
          la consultation précédente.
        </p>
        <p className="Verrou1">
          Selon le temps estimer de la grossesse, il peut s’agir d’une urgence.
        </p>
        <p className="Verrou1">
          Votre centre de référence peut vous répondre afin d’établir une prise
          en charge dans les meilleurs conditions pour la patiente.
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
  const [txtVerrouDeux, settxtVerrouDeux] = useState(
    () => verrouDeux()
    /// state contenant la fonction retournant le texte plus de 12 semaines
  );

  const [currentInfoVerrouDeux, setcurrentInfoVerrouDeux] = useState(
    /// texte vide affichage de base
    ""
  );

  const affichageVerrouDeux = () => {
    /// gère laffichage du texte + de 7 semaines -12
    let txtAEnlever = currentInfoVerrouDeux;
    let txtAAfficher = txtVerrouDeux;
    setcurrentInfoVerrouDeux(txtAAfficher);
    settxtVerrouDeux(txtAEnlever);
  };

  const clicVerrouDeuxaffichage = (e) => {
    e.preventDefault();
    affichageVerrouDeux();
  };

  /// Attestation consultation psychosocial

  const recupAttestation = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Consultation psychosociale :",
      value: e.target.value,
    };
    
    setCurrentAttestation(reponse);
    
    console.log("Consultation psychosociale :" + reponse.value);
  };
  const [txtPsy, setTxtPsy] = useState(
    "Non obligatoire pour les femmes majeures"
  );

  const [currentInfoPsy, setCurrentInfoPsy] = useState("");

  const affichageTxtPsy = () => {
    let txtAEnlever = currentInfoPsy;
    let txtAAfficher = txtPsy;
    setCurrentInfoPsy(txtAAfficher);
    setTxtPsy(txtAEnlever);
  };

  const [logoAffichePsy, setLogoAffichePsy] = useState(LightOff);

  const [logoNonAffichePsy, setLogoNonAffichePsy] = useState(LightOn);

  const changementCouleurSVGPsy = () => {
    let currentLampe = logoAffichePsy;
    let currentCache = logoNonAffichePsy;
    setLogoNonAffichePsy(currentLampe);
    setLogoAffichePsy(currentCache);
    affichageTxtPsy();
  };

  const siOuiConsultationPsy = () => {
    /// retourne le questionnaire si consultation psycho
    return (
      <div>
        <h4>attestation :</h4>
        <br></br>
        <Button variant="secondary">Oui</Button>
        <Button variant="secondary">Non</Button>
        <br></br>
      </div>
    );
  };
  const [txtConsultationPsyCho, settxtConsultationPsyCho] = useState(
    () => siOuiConsultationPsy()
    /// state contenant la fonction retournant le questionnaire si oui consultation psy
  );

  const [
    currentConsultationAttestation,
    setcurrentConsultationAttestation,
  ] = useState(
    /// texte vide affichage de base
    ""
  );

  const affichageConsultationAttestation = () => {
    /// gère laffichage du questionnaire attestation
    let txtAEnlever = currentConsultationAttestation;
    let txtAAfficher = txtConsultationPsyCho;
    setcurrentConsultationAttestation(txtAAfficher);
    settxtConsultationPsyCho(txtAEnlever);
  };

  const clicOuiConsultation = (e) => {
    e.preventDefault();
    affichageConsultationAttestation();
  };
  //////////////////////////////////////////////////////

  //////// Consentement

  const recupConsentement = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Consentement à l’IVG : ",
      value: e.target.value,
    };
    
    setCurrentConssent(reponse);
    
    console.log("Consentement à l’IVG : " + reponse.value);
  };

  


  //////////////////////////////////////////////////////

  /// Bloc prise de sang

  const recupSang = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Prise de sang effectuée : ",
      value: e.target.value,
    };
    
    setCurrentSang(reponse);
    
    console.log("Prise de sang effectuée : " + reponse.value);
  };

  const priseDeSang = () => {
    return (
      <div>
        <p>(Groupe sanguin 2 déterminations, RAI, HCG quantitatif)</p>
        <p>
          2 typages de groupe sanguin sont nécessaires avant toute IVG
          médicamenteuse ou chirurgicale. Les RAI doivent dater de moins de 48h
          avant l’acte si négatif jusqu'alors. A noter qu’une injection
          d’Immunoglobulines anti-D sera nécessaire en cas de RAI négatif avant
          toute IVG ou dans les 72h suivant tout saignement. 
        </p>
      </div>
    );
  };

  const [txtPriseDeSang, setTxtPriseDeSang] = useState(() => priseDeSang());

  const [currentInfoPriseDesang, setCurrentInfoPriseDesang] = useState("");

  const affichageTxtPriseDeSang = () => {
    let txtAEnlever = currentInfoPriseDesang;
    let txtAAfficher = txtPriseDeSang;
    setCurrentInfoPriseDesang(txtAAfficher);
    setTxtPriseDeSang(txtAEnlever);
  };

  const [logoAffichePriseDeSang, setLogoAffichePriseDeSang] = useState(
    LightOff
  );

  const [logoNonAffichePriseDeSang, setLogoNonAffichePriseDeSang] = useState(
    LightOn
  );

  const changementCouleurSVGPriseDesang = () => {
    let currentLampe = logoAffichePriseDeSang;
    let currentCache = logoNonAffichePriseDeSang;
    setLogoNonAffichePriseDeSang(currentLampe);
    setLogoAffichePriseDeSang(currentCache);
    affichageTxtPriseDeSang();
  };

  ////////////////////////////////////////////////

 

  ///////////// doasge 
  const [nouvelleRechercheßHCG, setNouvelleRechercheßHCG] = useState(0)
 

  const handleChangeßHCG = event => {
    setNouvelleRechercheßHCG(event.currentTarget.value);
  };
const handleSubmitßHCG = event => {
  event.preventDefault();
  let reponse = {
    titre : "ß-HCG : ",
    value : event.currentTarget.value
  };
 setCurrentDosage(reponse);

    console.log("ß-HCG : "+reponse.value);
    
  

  
  
  
};
////////////////////////////////////////////////////////

//////////: groupe 

const handleChangeGroupe = (e) => {
  /// recup date frotti
 
  
  
  let reponse = {
    titre: "Groupe Sanguin : ",
    value: e.target.value,
  };
 setCurrentGroupe(reponse);

  console.log("Groupe Sanguin : " + reponse.value);
  
};





  ////////////////////////////////////////


  //////// Personne Acc

  const recupAcc = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Personne accompagnante : ",
      value: e.target.value,
    };
    
    setCurrentAcc(reponse);
    
    console.log("Personne accompagnante : " + reponse.value);
  };

  


  //////////////////////////////////////////////////


  //// echo 
  const recupEcho = (e) => {
    e.preventDefault();
    let reponse = {
      titre: "Echographie de datation/age gestationnel : ",
      value: e.target.value,
    };
    
    setcurrentEcho(reponse);
    
    console.log("Echographie de datation/age gestationnel : " + reponse.value);
  };


  ///////////////////////////////////////

  return (
    <div>
      <h1>Consultation IVG : 1ere prise médicamenteuse. Patiente majeure NA</h1>

      <br></br>
      <label>
        Consultation faite dans le cadre des dispositions du Covid valable
        jusqu’au 31 octobre 2020 : oui/non Si oui :
        <Button variant="secondary">Oui</Button>
        <Button variant="secondary">Non</Button>
      </label>
      <br></br>
      <p>Covid et IVG :</p>
      <br></br>
      <p>
        Cette première consultation peut se faire sous formes de
        téléconsultation, il est nécessaire de se prémunir d’un outils
        informatique fiable afin de se faire parvenir les documents nécessaires
        à la pratique de l’IVG dans le cadre réglementaire.
      </p>
      <br></br>
      <p>
        Pour information, il n’est plus possible de pratiquer une IVG
        médicamenteuse en ville jusqu’à la fin de la 7eme semaine de grossesse
        (9SA), ce délai revenu à la fin de la 5eme semaine de grossesse (7SA)
        depuis le 10 Juillet 2020
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
      <br></br>
      <br></br>
      <h2>La patiente a en sa possession :</h2>
      <br></br>
      <h3>Échographie de datation :</h3>
      <br></br>
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupEcho(e);}}>Oui</Button>
      <Button variant="secondary" value="Non" onClick={(e)=>{recupEcho(e);}}>Non</Button>
      <br></br>
      <h3>Age gestationnel :</h3>
      <br></br>
      <input
        type="number"
        name="name"
        value={saisieUtilisateurNbSemaineSA}
        onChange={handleChange}
      />
      <Button variant="danger" onClick={recupSaisieUtilisateurNbSemaine}>
        Valider
      </Button>
      <br></br>
      <div>{currentInfoNbSAmoinsSept}</div>
      <div>{currentInfoNbSAplusSeptMoinsDouze}</div>
      <div>{currentInfoNbSAplusDouze}</div>
      <br></br>
      <h3>Consentement à l’IVG signé :</h3>
      <br></br>
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupConsentement(e)}}>Oui</Button>
      <Button variant="secondary" value="Non" onClick={(e)=>{
        recupConsentement(e);
        clicVerrouDeuxaffichage();}}>
        Non
      </Button>
      <div>{currentInfoVerrouDeux}</div>
      <br></br>
      <h3>Attestation consultation psychosociale :</h3>
      <br></br>
      <Button variant="secondary" value="Oui" onClick={(e)=>{
        recupAttestation(e);
        clicOuiConsultation(e);}}>
        Oui
      </Button>
      <Button variant="secondary" value="Non" onClick={(e)=>{recupAttestation(e)}}>Non</Button>
      <br></br>
      <div>{currentConsultationAttestation}</div>
      <input
        onClick={changementCouleurSVGPsy}
        className="Lampe"
        type="image"
        src={logoAffichePsy}
      />
      <div>{currentInfoPsy}</div>
      <br></br>
      <br></br>
      <h3>Prise de sang effectuée :</h3>
      <br></br>
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupSang(e)}}>Oui</Button>
      <Button variant="secondary" onClick={(e)=>{
        recupSang(e);
        clicVerrouDeuxaffichage();}}>
        Non
      </Button>
      <br></br>
      <div>{currentInfoVerrouDeux}</div>
      <input
        onClick={changementCouleurSVGPriseDesang}
        className="Lampe"
        type="image"
        src={logoAffichePriseDeSang}
      />
      <div>{currentInfoPriseDesang}</div>
      <br></br>
      
        <h3>Dosage ß-HCG :</h3>
        <form >
            <input
                value={nouvelleRechercheßHCG}
                onChange={handleChangeßHCG}
                type="text"
                placeholder="Paquet/année"
            />
            <Button value={nouvelleRechercheßHCG} variant="secondary" onClick={(e)=> {
              handleSubmitßHCG(e)
            }}>Confirmer</Button>
        </form>
        <h3>Groupe sanguin : </h3>
        <Form.Group>
  <Form.Control as="select" size="lg" onChange={(e) => {
          handleChangeGroupe(e);
        }}>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
  </Form.Control>
  </Form.Group>
      

      <h3>Personne accompagnante :</h3>
      <br></br>
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupAcc(e);}}>Oui</Button>
      <Button variant="secondary" value="Non" onClick={(e)=>{recupAcc(e);}}>Non</Button>

      <br></br>
      <ul>
        <li>
          <a
            href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf"
            target="_blank"
          >
            Lien guide IVG
          </a>
        </li>
        <li>
          <a href={GuideCNGOF} target="_blank">
            Fiche info CNGOF PDF
          </a>
        </li>
      </ul>

      <Button onClick={afficheStateFin} >Valider mes choix</Button>
      <Button variant="danger" onClick={props.onSuite}>Suite</Button>
    </div>
  );
}

export default PriseMediPatienteMajeure;
