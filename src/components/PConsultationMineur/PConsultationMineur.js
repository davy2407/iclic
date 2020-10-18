import React, { useState } from "react";
import Button from "react-bootstrap/Button";

// import assets
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideIVG from "@assets/pdf/GuideIvgPatiente.pdf";
import ConsentementMineur from "@assets/docx/consentementMineure.docx";

// import css
import "./pConsultationMineur.css";

function PConsultationMineur(props) {

    const [stateGlobal, setStateGlobal] = useState([]);
    const afficheStateFin = () => {
        /// remonte les données au composant parent
        props.onRecup(stateGlobal);
    
      }

    /// accompagnant
    const recupAccompagnant = (e) => {
        /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
        e.preventDefault();
        let reponse = {
          titre : "Personne accompagnante majeurs ou consentement parental :",
          value : e.target.value
        };
        let liste = [...stateGlobal];
        liste.push(reponse);
        setStateGlobal(liste);
    };
    
    const txtAccompagnant = () => {
        return (
            <div>
                <p>
                Dans le cas d’une jeune fille avec personne majeure accompagnante différente
                 des parents ou du représentant légal, il convient de prévenir de la nécessité
                  d’accompagnement par la même personne de son choix au cours des différentes
                   consultations afin de permettre un soutien moral efficient.
                </p>
            </div>
        )
    };
    const [txtAcc, setTxtAcc] = useState(() => txtAccompagnant());

  const [currentTxtAcc, setCurrentTxtAcc] = useState("");

  const affichageAcc = () => {
    let txtAEnlever = currentTxtAcc;
    let txtAAfficher = txtAcc;
    setCurrentTxtAcc(txtAAfficher);
    setTxtAcc(txtAEnlever);
  };
  const [logoAfficheAcc, setLogoAfficheAcc] = useState(LightOff);

  const [logoNonAfficheAcc, setLogoNonAfficheAcc] = useState(LightOn);
  const changementCouleurSVGAcc = () => {
    let currentLampe = logoAfficheAcc;
    let currentCache = logoNonAfficheAcc;
    setLogoNonAfficheAcc(currentLampe);
    setLogoAfficheAcc(currentCache);
    affichageAcc();
  }
  ///

  ///Mode decouverte grossesse

  const recupDecouverte = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Mode de découverte de la grossesse : ",
      value : e.target.value
    };
    let liste = [...stateGlobal];
    liste.push(reponse);
    setStateGlobal(liste);
};

    ///
    
    /// Contexte biopsychosocial favorable 
    const recupContexte = (e) => {
        /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
        e.preventDefault();
        let reponse = {
          titre : "Contexte biopsychosocial favorable : ",
          value : e.target.value
        };
        let liste = [...stateGlobal];
        liste.push(reponse);
        setStateGlobal(liste);
    };

    /// warning

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


      ///

      /// Bloc IST 
      const recupIST = (e) => {
        /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
        e.preventDefault();
        let reponse = {
          titre : "Recherche IST : ",
          value : e.target.value
        };
        let liste = [...stateGlobal];
        liste.push(reponse);
        setStateGlobal(liste);
    };

    const objetInfo = () => {
        return (
            <div>
                <p>
                Pour des informations supplémentaires,
                 de nombreux site internet peuvent vous renseigner.
                  Pour exemple  info-ist.fr ; ameli.fr/assure/sante/themes/mst-ist.
                </p>
            </div>
        )
    }

    const recupInfoSupp = (e) => {
        e.preventDefault();
        let reponse = {
          titre : "Info supp : ",
          value : objetInfo
        };
        let liste = [...stateGlobal];
        liste.push(reponse);
        setStateGlobal(liste);

    }
    
    const txtIST = () => {
        return (
            <div>
                <p>
                La HAS recommande un dépistage opportuniste ciblé à toutes les femmes enceintes
                 consultant pour une IVG, sans limite d’âge. 
                </p>
            </div>
        )
    };
    const [txtBaseIST, setTxtBaseIST] = useState(() => txtIST());

  const [currentTxtIST, setCurrentTxtIST] = useState("");

  const affichageIST = () => {
    let txtAEnlever = currentTxtIST;
    let txtAAfficher = txtBaseIST;
    setCurrentTxtIST(txtAAfficher);
    setTxtBaseIST(txtAEnlever);
  };
  const [logoAfficheIST, setLogoAfficheIST] = useState(LightOff);

  const [logoNonAfficheIST, setLogoNonAfficheIST] = useState(LightOn);
  const changementCouleurSVGIST = () => {
    let currentLampe = logoAfficheIST;
    let currentCache = logoNonAfficheIST;
    setLogoNonAfficheIST(currentLampe);
    setLogoAfficheIST(currentCache);
    affichageIST();
  }

  
  ///

  /// Prise de sang

  const recuPriseDeSang = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Bilan sanguin prescrit (incluant groupe rhésus 2 déterminations + RAI + BHCG quantitatif ) : ",
      value : e.target.value
    };
    let liste = [...stateGlobal];
    liste.push(reponse);
    setStateGlobal(liste);
};

const txtPriseSang = () => {
    return (
        <div>
            <p>
            2 typages de groupe sanguin sont nécessaires avant toute IVG médicamenteuse ou chirurgicale.
             Les RAI doivent dater de moins de 48h avant l’acte si négatif jusqu'alors. 
              A noter qu’une injection d’Immunoglobulines anti-D sera nécessaire en cas de
               RAI négatif avant toute IVG ou dans les 72h suivant tout saignement. 
            </p>
        </div>
    )
};
const [txtSang, setTxtSang] = useState(() => txtPriseSang());

const [currentTxtSang, setCurrentTxtSang] = useState("");

const affichageSang = () => {
let txtAEnlever = currentTxtSang;
let txtAAfficher = txtSang;
setCurrentTxtSang(txtAAfficher);
setTxtSang(txtAEnlever);
};
const [logoAfficheSang, setLogoAfficheSang] = useState(LightOff);

const [logoNonAfficheSang, setLogoNonAfficheSang] = useState(LightOn);
const changementCouleurSVGPriseDeSang = () => {
let currentLampe = logoAfficheSang;
let currentCache = logoNonAfficheSang;
setLogoNonAfficheSang(currentLampe);
setLogoAfficheSang(currentCache);
affichageSang();
}

///


/// Dossier guide IVG remis ou à défaut feuille d’information dédiées :

const recuGuide = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Contexte de l’IVG évoqués : ",
      value : e.target.value
    };
    let liste = [...stateGlobal];
    liste.push(reponse);
    setStateGlobal(liste);
};

///


/// Consultation psychosociale proposée

const recupConsultation = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Lieux de la consultation psychosociale : ",
      value : "        "
    };
    let liste = [...stateGlobal];
    liste.push(reponse);
    setStateGlobal(liste);
};

const txtConsultationF = () => {
    return (
        <div>
            <p>
            Un entretien psycho-social, fait par une personne qualifiée en conseil conjugal, 
            est obligatoire en cas de patiente mineure. Il a lieu entre les deux consultations
             préalables à l’IVG. Un délai de 48 heures est à respecter entre la consultation
              psycho-sociale et la deuxième consultation préalable à l’IVG. 
            </p>
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
        </div>
    )
};
const [txtConsultation, setTxtConsultation] = useState(() => txtConsultationF());

const [currentTxtConsultation, setCurrentTxtConsultation] = useState("");

const affichageConsultation = () => {
let txtAEnlever = currentTxtConsultation;
let txtAAfficher = txtConsultation;
setCurrentTxtConsultation(txtAAfficher);
setTxtConsultation(txtAEnlever);
};
const [logoAfficheConsultation, setLogoAfficheConsultation] = useState(LightOff);

const [logoNonAfficheConsultation, setLogoNonAfficheConsultation] = useState(LightOn);
const changementCouleurSVGConsultation = () => {
let currentLampe = logoAfficheConsultation;
let currentCache = logoNonAfficheConsultation;
setLogoNonAfficheConsultation(currentLampe);
setLogoAfficheConsultation(currentCache);
affichageConsultation();
}


///

/// Information contraception post-IVG

const recupPostIVG = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "nformation contraception postIVG : ",
      value : e.target.value
    };
    let liste = [...stateGlobal];
    liste.push(reponse);
    setStateGlobal(liste);
};

const txtIVG = () => {
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
        
    )
};
const [txtPostIVG, setTxtPostIVG] = useState(() => txtIVG());

const [currentTxtPostIVG, setCurrentTxtPostIVG] = useState("");

const affichagePostIVG = () => {
let txtAEnlever = currentTxtPostIVG;
let txtAAfficher = txtPostIVG;
setCurrentTxtPostIVG(txtAAfficher);
setTxtPostIVG(txtAEnlever);
};
const [logoAffichePostIVG, setLogoAffichePostIVG] = useState(LightOff);

const [logoNonAffichePostIVG, setLogoNonPostIVG] = useState(LightOn);
const changementCouleurSVGPostIVG = () => {
let currentLampe = logoAffichePostIVG;
let currentCache = logoNonAffichePostIVG;
setLogoNonPostIVG(currentLampe);
setLogoAffichePostIVG(currentCache);
affichagePostIVG();
}


/// frotti et date 
const handleChange = (e) => {
    /// recup date frotti
    let reponse = {
      titre : "Date Frotti ou HPV",
      value : e.target.value
    };
    let liste = [...stateGlobal];
    liste.push(reponse);
    setStateGlobal(liste);

    
    
  };

  const recupFrotti = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Frottis à jour ou test HPV :  ",
      value : e.target.value
    };
    let liste = [...stateGlobal];
    liste.push(reponse);
    setStateGlobal(liste);
};

const Frotti = () => {
    return (
        <div>
            
        <p>
         Le plan de dépistage national s’applique :
        </p>
        <ul>
            <li>
                <p>
                entre 25 et 30 ans, le dépistage du cancer du col de l’utérus reste fondé
                 sur la réalisation de deux examens cytologiques à un an d’intervalle,
                 puis 3 ans après si le résultat des deux premiers est normal.
                 </p>
                 </li>
            <li>
                <p>
                le test HPV chez les femmes à partir de 30 ans, sera réalisé 3 ans après le dernier examen 
                cytologique dont le résultat était normal ; le rythme entre deux dépistages
                 par test HPV est de 5 ans, dès lors que le résultat du test est négatif. <a target="_blank" href="https://www.has-sante.fr/upload/docs/application/pdf/2019-07/synthese_hpv.pdf">info</a>
                </p>
            </li>
        </ul>
        <br></br>
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

///

/// Tabac 


const recupTabac = (e) => {
    /// fonction recuperant la valeur du boutton et l'ajoutant a la liste d'objet stateGlobal
    e.preventDefault();
    let reponse = {
      titre : "Tabac : ",
      value : e.target.value
    };
    let liste = [...stateGlobal];
    liste.push(reponse);
    setStateGlobal(liste);
};










    return (
        <div className="consultationContainer">
          <h1>
              1ère consultation préalable/1er contact médical
            Mineur A/NA : 
            </h1>
          <p>
          Dans le cas particulier de l’IVG, l’article <a target="_blank" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000031930097&cidTexte=LEGITEXT000006072665&dateTexte=20160128">L. 2212-7</a>  du code de
           la santé publique dispose : « Si la femme est mineure non émancipée,
            le consentement de l’un des titulaires de l’autorité parentale ou,
             le cas échéant, du représentant légal est recueilli. Ce consentement est joint
              à la demande qu’elle présente au médecin en dehors de la présence de toute autre
               personne.
          </p>
          <p>
          Si la femme mineure non émancipée désire garder le secret, le médecin doit s’efforcer,
           dans l’intérêt de celle-ci, d’obtenir son consentement pour que le ou les titulaires 
           de l’autorité parentale ou, le cas échéant, le représentant légal soient consultés ou 
           doit vérifier que cette démarche a été faite lors de l’entretien mentionné à l’article
            L 2212-4. Si la mineure ne veut pas effectuer cette démarche, ou si le consentement 
            n’est pas obtenu, l’interruption volontaire de grossesse ainsi que les actes médicaux
             et les soins qui lui sont liés peuvent être pratiqués à la demande de l’intéressée,
              présentée dans les conditions prévues au 1er alinéa. Dans ce cas, la mineure se fait
               accompagner dans sa démarche par la personne majeure de son choix
          </p>
          
          
          <p>
          Une jeune fille mineure non émancipée doit donner au médecin son consentement
           pour avorter sans que ses parents, son tuteur ou toute autre personne ne soient
            présents afin qu'elle n'agisse pas sous la contrainte.
          </p>
          <br></br>
          <h2>Personne accompagnante majeurs ou consentement parental</h2>
          <label>
          <Button variant="secondary" value="Oui" onClick={(e) => {
            recupAccompagnant(e);
          }}>Oui</Button>
          <Button variant="secondary" value="Non"  onClick={(e) => {
            recupAccompagnant(e);
          }}>Non</Button>

          </label>
          <input
        onClick={changementCouleurSVGAcc}
        className="Lampe"
        type="image"
        src={logoAfficheAcc}
      />
      <div>{currentTxtAcc}</div>

      <br></br>
      <h2>Mode de découverte de la grossesse :</h2>

      <label>
      Mode de découverte de la grossesse :
      <Button variant="secondary" value="Test sanguin" onClick={(e) => {
            recupDecouverte(e);
          }}>Test sanguin</Button>
          <Button variant="secondary" value="Test urinaire"  onClick={(e) => {
            recupDecouverte(e);
          }}>Test urinaire</Button>
          <Button variant="secondary" value="Echographie" onClick={(e) => {
            recupDecouverte(e);
          }}>Echographie</Button>
          <Button variant="secondary" value="Clinique"  onClick={(e) => {
            recupDecouverte(e);
          }}>Clinique</Button>
      </label> 



      <br></br>
      <h2>Contexte biopsychosocial favorable</h2>
      <label>
      Contexte biopsychosocial favorable :
      <Button variant="secondary" value="Oui" onClick={(e) => {
            recupContexte(e);
          }}>Oui</Button>
          <Button variant="secondary" value="Non"  onClick={(e) => {
              afficheConsultation();
            recupContexte(e);
          }}>Non</Button>
      </label>
      <p className={affichageWarningConsultation.className}>
        {affichageWarningConsultation.texte}
      </p>
      <br></br>



      <h2>Recherche IST +/- antibio-prophylaxie </h2>
      <label>
      Recherche IST +/- antibio-prophylaxie 
      <Button variant="secondary" value="Oui" onClick={(e) => {
            recupIST(e);
          }}>Oui</Button>
          <Button variant="secondary" value="Non"  onClick={(e) => {
            recupIST(e);
          }}>Non</Button>

      </label>
      <p>
          De nombreuses sources numériques existent pour l’information aux patient(es)
           des IST ainsi que de ces risques<a href="https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles" target="_blank">Ameli IST</a>, <a href="http://www.info-ist.fr/index.html" target="_blank">ISt-info</a>.
        </p>
        <br></br>

        <label>
          Vous desirez plus d'informations à transmettre ? 
          <Button variant="secondary" value="Oui" onClick={(e)=>{recupInfoSupp(e);}}>Oui</Button>
          <Button variant="secondary" value="Non" onClick={(e)=>{recupInfoSupp(e);}}>Non</Button>
        </label>
      <input
        onClick={changementCouleurSVGIST}
        className="Lampe"
        type="image"
        src={logoAfficheIST}
      />
      <p>{currentTxtIST}</p>
      <br></br>



      <h2>Prise de sang (Groupe sanguin 2 déterminations, RAI, HCG quantitatif)</h2>

      <label>
          Prise de sang :
          <Button variant="secondary" value="Oui" onClick={(e)=>{recuPriseDeSang(e);}}>Oui</Button>
          <Button variant="secondary" value="Non" onClick={(e)=>{recuPriseDeSang(e);}}>Non</Button>

      </label>
      <input
        onClick={changementCouleurSVGPriseDeSang}
        className="Lampe"
        type="image"
        src={logoAfficheSang}
      />
      <p>{currentTxtSang}</p>
      <br></br>


      <h2>Dossier guide IVG remis ou à défaut feuille d’information dédiées : </h2>
      <label>
      <Button variant="secondary" value="Oui" onClick={(e)=>{recuGuide(e);}}>Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recuGuide(e);}}>Non</Button>

      </label>
      <p><a href={GuideIVG} target="_blank">
        PDF Guide IVG
      </a></p>


      <br></br>
      <h2>Consultation psychosociale proposée</h2>
      <label>
      Consultation psychosociale proposée
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupConsultation(e);}}>Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recupConsultation(e);}}>Non</Button>
      </label>
      <input
        onClick={changementCouleurSVGConsultation}
        className="Lampe"
        type="image"
        src={logoAfficheConsultation}
      />
      <p>{currentTxtConsultation}</p>
      <br></br>




      <h2>Information contraception post-IVG</h2>
      <label>
      Information contraception post-IVG
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupPostIVG(e);}}>Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recupPostIVG(e);}}>Non</Button>
      </label>
      <input
        onClick={changementCouleurSVGPostIVG}
        className="Lampe"
        type="image"
        src={logoAffichePostIVG}
      />
      <p>{currentTxtPostIVG}</p>
      <br></br>


      <h2>Frottis à jour ou test HPV</h2>
      <label>
      Frottis à jour
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupFrotti(e);}}>Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recupFrotti(e);}}>Non</Button>
        <Button variant="secondary" value="Non Concernée" onClick={(e)=>{recupFrotti(e);}}>Non Concernée</Button>
     </label>
     <label for="dateFrotti">Date : </label>
      <input type="date" name="dateFrotti" id="dateFrotti" onChange={(e)=>{handleChange(e);}}></input>
      <br></br>
     <input
        onClick={changementCouleurSVGFrotti}
        className="Lampe"
        type="image"
        src={logoAfficheFrotti}
      />
      <p>{currentTxtFrotti}</p>
      <br></br>


      <h2>Tabac</h2>
      <label>
          Tabac : 
          <Button variant="secondary" value="Oui" onClick={(e)=>{recupTabac(e);}}>Oui</Button>
        <Button variant="secondary" value="Non" onClick={(e)=>{recupTabac(e);}}>Non</Button>

      </label>


      <a href={ConsentementMineur} target="_blank ">consentement Mineure pdf</a>
      <br></br>



      <Button
        onClick={afficheStateFin}
        variant="secondary"
      >
        Valider mes choix
      </Button>{" "}
      <Button variant="danger" onClick={props.onSuite}>
        Tarification

      </Button>









      












          
          
        </div>
      );

}

export default PConsultationMineur;