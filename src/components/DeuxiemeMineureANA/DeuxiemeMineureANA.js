import React, { useState } from "react";
import Button from "react-bootstrap/Button";

// import assets
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideIVG from "@assets/pdf/GuideIvgPatiente.pdf";

// import css
import "./DeuxiemeMineureANA.css";

/// service 



/// feuille de deuxieme consultation, patiente majeure non anonyme
function DeuxiemeMineureANA(props) {

    const [ globalStateFin, setGlobalStateFin] =useState([])
    /// state global liste


    /// age gestationel
    const [ageGestationel, setAgeGestationel] = useState(0);
    const handleChangeGesta = event => {
        setAgeGestationel(event.currentTarget.value);
      };

      const handleSubmitGesta = event => {
        event.preventDefault();
        let reponse = {
          titre : "Age gestationnel : ",
          value : event.currentTarget.value
        };
        let liste = [...globalStateFin];
          liste.push(reponse);
          setGlobalStateFin(liste);
         
      
          console.log("Age gestationnel : "+reponse.value);
        setAgeGestationel(0);
      };

      ////////////////////////////////////////////////////////////////////

      /// Dosage -HCG :
      const [dosageHCG, setDosageHCG] = useState(0);
    const handleDosageHCG = event => {
        setDosageHCG(event.currentTarget.value);
      };

      const handleSubmitDosageHCG = event => {
        event.preventDefault();
        let reponse = {
          titre : "Dosage -HCG : ",
          value : event.currentTarget.value
        };
        let liste = [...globalStateFin];
          liste.push(reponse);
          setGlobalStateFin(liste);
         
      
          console.log("Dosage -HCG :  "+reponse.value);
          setDosageHCG(0);
      };

      ///////////////////////////////////////////////////////////////////


      /// Groupe Sanguin 

      const [groupeSanguin, setGroupeSanguin] = useState("");
    const handleGroupeSanguin = event => {
        setGroupeSanguin(event.currentTarget.value);
      };

      const handleSubmitGroupeSanguin = event => {
        event.preventDefault();
        let reponse = {
          titre : "Groupe Sanguin : ",
          value : event.currentTarget.value
        };
        let liste = [...globalStateFin];
          liste.push(reponse);
          setGlobalStateFin(liste);
         
      
          console.log("Groupe Sanguin :  "+reponse.value);
          setGroupeSanguin("");
      };

      ////////////////////////////////////////////////////////////////////


      //// Tabac 

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

      /////////////////////////////////////////////////////////////////////////////


      ////// accompagnant 
      const recupAccompagnant = (e) => {
        e.preventDefault();
        let reponse = {
          titre: "Personne accompagnante majeurs ou consentement parental : ",
          value: e.target.value,
        };
        let liste = [...globalStateFin];
        liste.push(reponse);
        setGlobalStateFin(liste);
        
        console.log("Personne accompagnante majeurs ou consentement parental : " + reponse.value);
      };

      const accompagnant = () => {
        return (
          <div>
            <p>
            Dans le cas d’une jeune fille avec personne majeure accompagnante
             différente des parents ou du représentant légal, il convient
              de prévenir de la nécessité d’accompagnement par la même personne
               de son choix au cours des différentes consultations afin de 
               permettre un soutien moral efficient.          
            </p>
            
          </div>
        )
      }
      const [txtAccompagnant, setTxtAccompagnant] = useState(() => accompagnant());
    
      const [currentInfoAccompagnant, setCurrentInfoAccompagnant] = useState("");
    
      const affichageTxtAccompagnant = () => {
        let txtAEnlever = currentInfoAccompagnant;
        let txtAAfficher = txtAccompagnant;
        setCurrentInfoAccompagnant(txtAAfficher);
        setTxtAccompagnant(txtAEnlever);
      };
      const [logoAfficheAccompagnant, setLogoAfficheAccompagnant] = useState(LightOff);
    
      const [logoNonAfficheAccompagnant, setLogoNonAfficheAccompagnant] = useState(LightOn);
      
      const changementCouleurSVGAccompagnant = () => {
        let currentLampe = logoAfficheAccompagnant;
        let currentCache = logoNonAfficheAccompagnant;
        setLogoNonAfficheAccompagnant(currentLampe);
        setLogoAfficheAccompagnant(currentCache);
        affichageTxtAccompagnant();
      };

      ////////////////////////////////////////////////////////////////////////////////


      ///////////// attesatation psy

      const recupAttestation = (e) => {
        e.preventDefault();
        let reponse = {
          titre: "Attestation 1ere consultation préalable en main de la patiente : ",
          value: e.target.value,
        };
        let liste = [...globalStateFin];
        liste.push(reponse);
        setGlobalStateFin(liste);
        
        console.log("Attestation 1ere consultation préalable en main de la patiente :" + reponse.value);
      };

      const attestation = () => {
        return (
          <div>
            <p>
            L’attestation est obligatoire avec un délai de 48h pour les jeunes
             filles mineurs, anonyme ou non.         
            </p>
            
          </div>
        )
      }
      const [txtAttestation, setTxtAttestation] = useState(() => attestation());
    
      const [currentInfoAttestation, setCurrentInfoAttestation] = useState("");
    
      const affichageTxtAttestation = () => {
        let txtAEnlever = currentInfoAttestation;
        let txtAAfficher = txtAttestation;
        setCurrentInfoAttestation(txtAAfficher);
        setTxtAttestation(txtAEnlever);
      };
      const [logoAfficheAttestation, setLogoAfficheAttestation] = useState(LightOff);
    
      const [logoNonAfficheAttestation, setLogoNonAfficheAttestation] = useState(LightOn);
      
      const changementCouleurSVGAttestation = () => {
        let currentLampe = logoAfficheAttestation;
        let currentCache = logoNonAfficheAttestation;
        setLogoNonAfficheAttestation(currentLampe);
        setLogoAfficheAttestation(currentCache);
        affichageTxtAttestation();
      };
      
      /////////////////////////////////////////////////////////////////////////////


      //////////: age gestationel 

      const [
        saisieUtilisateurNbSemaineSA,
        setSaisieUtilisateurNbSemaineSA,
      ] = useState(0);
    
      const handleChangeSA = (event) => {
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
          titre: "Echographie de datation/Age gestationnel : ",
          value: nb,
        };
        let liste = [...globalStateFin];
        liste.push(reponse);
        setGlobalStateFin(liste);
       
        console.log("Echographie de datation/Age gestationnel : " + nb);
     
    
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
    
      //////////////////////////////////////////////////////////////////////////////
  
    return (
        <div>
            <h1>
            2ème consultation préalable à l’IVG/Recueil de consentement 
            Mineur A/NA :  
            </h1>
            <br></br>
            <p>
            Dans le cas particulier de l’IVG,
             l’article <a target="_blank" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000031930097&cidTexte=LEGITEXT000006072665&dateTexte=20160128"> L. 2212-7</a> du code de la santé publique
             dispose : « Si la femme est mineure non émancipée, le consentement de l’un des titulaires
              de l’autorité parentale ou, le cas échéant, du représentant légal est recueilli.
               Ce consentement est joint à la demande qu’elle présente au médecin en dehors de la
                présence de toute autre personne.  
            </p>

            <p>
            Si la femme mineure non émancipée désire garder le secret, le médecin doit s’efforcer,
             dans l’intérêt de celle-ci, d’obtenir son consentement pour que le ou les titulaires
              de l’autorité parentale ou, le cas échéant, le représentant légal soient consultés
               ou doit vérifier que cette démarche a été faite lors de l’entretien mentionné à
                l’article L 2212-4. Si la mineure ne veut pas effectuer cette démarche,
                 ou si le consentement n’est pas obtenu, l’interruption volontaire de grossesse
                  ainsi que les actes médicaux et les soins qui lui sont liés peuvent être pratiqués
                   à la demande de l’intéressée, présentée dans les conditions prévues au 1er alinéa.
                    Dans ce cas, la mineure se fait accompagner dans sa démarche par la personne majeure
                     de son choix
            </p>

            <p>
            Une jeune fille mineure non émancipée doit donner au médecin son consentement pour
             avorter sans que ses parents, son tuteur ou toute autre personne ne soient présents
              afin qu'elle n'agisse pas sous la contrainte.
            </p>

            <h2>Personne accompagnante majeure ou consentement parental : </h2>
            <Button variant="secondary" value="Oui" onClick={recupAccompagnant}>Oui</Button>
            <Button variant="secondary" value="Non" onClick={recupAccompagnant}>Non</Button>
            <input
        onClick={changementCouleurSVGAccompagnant}
        className="Lampe"
        type="image"
        src={logoAfficheAccompagnant}
      />
      <div>  {currentInfoAccompagnant}</div>


            <h2>Attestation consultation psychosociale :</h2>
            <Button variant="secondary" value="Oui" onClick={recupAttestation}>Oui</Button>
            {/* Attestion a faire */}
            <Button variant="secondary" value="Non" onClick={recupAttestation}>Non</Button>

            <input
        onClick={changementCouleurSVGAttestation}
        className="Lampe"
        type="image"
        src={logoAfficheAttestation}
      />
      <div>  {currentInfoAttestation}</div>

            <h3></h3>

            <h2>Grossesse intra-utérine confirmée :</h2>
            <Button variant="secondary" value="Oui">Oui</Button>
            <Button variant="secondary" value="Non">Non</Button>


            <h2>Age gestationnel : </h2>
            {/* faire input comme nb paquet tabac pConsultation */}
            <input
        type="number"
        name="name"
        value={saisieUtilisateurNbSemaineSA}
        onChange={handleChangeSA}
      />
      <Button variant="danger" onClick={recupSaisieUtilisateurNbSemaine}>
        Valider
      </Button>
      <br></br>
      <div>{currentInfoNbSAmoinsSept}</div>
      <div>{currentInfoNbSAplusSeptMoinsDouze}</div>
      <div>{currentInfoNbSAplusDouze}</div>
      <br></br>



        <h2>Recherche IST +/- antibio-prophylaxie</h2>
        <Button variant="secondary" value="Oui">Oui</Button>
        <Button variant="secondary" value="Non">Non</Button>


        <h2>Prise de sang effectuée :</h2>
        <Button variant="secondary" value="Oui">Oui</Button>
        <Button variant="secondary" value="Non">Non</Button>


        <h2>Dosage -HCG : </h2>
        <form >
            <input
                value={dosageHCG}
                onChange={handleDosageHCG}
                type="text"
                placeholder="dosage -HCG"
            />
            <Button value={dosageHCG} variant="secondary" onClick={(e)=> {
              handleSubmitDosageHCG(e)
            }}>Confirmer</Button>
            
        </form>


        <h2>Groupe sanguin :</h2>
        <form >
            <input
                value={groupeSanguin}
                onChange={handleGroupeSanguin}
                type="text"
                placeholder="groupe sanguin"
            />
            <Button value={groupeSanguin} variant="secondary" onClick={(e)=> {
              handleSubmitGroupeSanguin(e)
            }}>Confirmer</Button>
            
        </form>


        <h2>Information contraception post-IVG</h2>
        <Button variant="secondary" value="Oui">Oui</Button>
        <Button variant="secondary" value="Non">Non</Button>


        <h2>Tabac :</h2>
        <Button variant="secondary" value="Oui">Oui</Button>
        <Button variant="secondary" value="Non">Non</Button>
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




        <Button variant="danger" onClick={()=>{
            console.log(globalStateFin)
        }}>Valider mes choix</Button>


        </div>
    )
}

export default DeuxiemeMineureANA;
