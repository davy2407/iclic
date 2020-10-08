import React, {useState, useEffect} from "react";
import LightOn from "../images/lightOn.svg";
import LightOff from "../images/lightOff.svg";
import './pConsultation.css';




/// feuille de premiere consultation, patiente majeure non anonyme ne venant pas du 3d




function PConsultation(props){

        /// texte info IST 
        const [ txtIST, setTxtIST] = useState(
            "La HAS recommande un dépistage opportuniste ciblé à toutes les femmes enceintes consultant pour une IVG, sans limite d’âge."
        )

        const [currentInfoIST, setCurrentInfoIST] = useState(
            ""
        )

        const affichageTxtIST = () => {
            let txtAEnlever = currentInfoIST;
            let txtAAfficher = txtIST;
            setCurrentInfoIST(txtAAfficher);
            setTxtIST(txtAEnlever);
        }

        const [logoAffiche, setLogoAffiche] = useState(
            LightOff

        )

        const [logoNonAffiche, setLogoNonAffiche] = useState(
            LightOn
        )
        const [ logoLampe,setLogoLampe]= useState(
            {
                on : LightOn,
                off : LightOff
            }
        )

        const changementCouleurSVG = () => {
            let currentLampe = logoAffiche;
            let currentCache = logoNonAffiche;
            setLogoNonAffiche(currentLampe);
            setLogoAffiche(currentCache);
            affichageTxtIST();
            

        }

        const [valueDecouverteGro, setDecouverteGro] = useState(
        /// state bouton select ( ne fonctionne pas comme value de base actuellement )
        {value : "Selectionner"}
        )
        

        /// Bloc consultation psychosocial 
        const [consultationPsychoSo,setConsultationPsychoSo] = useState(
            {
                texte : "consultation psychosociale proposée",
                className : "Red"
            }
        )

        const [affichageWarningConsultation,setAffichageWarningConsultation] = useState(
            {texte : "",
            className: ""}

        )

        const afficheConsultation = () => {
            setAffichageWarningConsultation(consultationPsychoSo)
        }


        const handleChange = (event) => {
        /// gère le bouton select 
        console.log(event.target.value)
        let test = event.target.value
        setDecouverteGro({value: test});
        }

        ///BLoc DDR
        const [recuptDateDDR,setRecuptDateDDR ] = useState(
            {}

        )
        



   

  
    
    
   

   
        return (
            <div className="consultationContainer">
                <h1>1ère consultation préalable/1er contact médical
Majeure Anonyme </h1>
                <p>{props.onTexte}</p>
                <br></br>
                <p>{props.onRecap}</p>
                <br></br>
                <p>Pour les femmes majeures, l’avortement anonyme est relatif. 
                    En effet, seules les IVG réalisées en établissement de santé pratiquant le tiers payant
                     peuvent être pratiquées de manière confidentielle. La loi relative à l’interruption volontaire
                      de grossesse dispose que : « Seule la réalisation d’une IVG dans un établissement de santé qui 
                      assure la dispense
                     d’avance des frais permet de garantir un véritable anonymat de l’intervention ». Lien n°12</p>
                     <br></br>
                     <form
                     onClick={(e)=>{
                        e.preventDefault()
        
                      }}>
                         <h2>DDR</h2>
                        <label for="DDR">DDR « date des dernières règles » : </label>
                        <input
                            type="date"
                            name="DDR"
                            id="DDR">

                        </input>
                        <br></br>
                        <label for="incertaine">Cocher si date incertaine </label>
                        <input
                            type="radio"
                            name="incertaine"
                            id="incertaine"
                            >
                        </input>

                        <p>
                            {/* Je n'ai pas encore fait la fonction qui recup la valeur de 
                            linput date DDR et qui fait la conversion
                            Pareil pour l'ensemble du bloc text qui suit  */}
                            Soit       …     SA + … jours
Ex : DDR : 1/08/2019, on est le 8/09/2019, ça fait donc 38 jours soit 5 semaines + 3 jours.
 Donc + 14 jours ou +2 semaines : 7SA+3 jours.
                        
 
                        </p>
                        <p>+ Si entre 5 et 7 SA : faire apparaître « (en urgence) » entre parenthèse et en rouge pour prescription échographie de datation à l’étape d’après.
                            + Si  7SA.  Verrou 1 (voir feuille correspondante).
                            + Si case « incertaine » cochée :  
	                        1/ faire apparaître « (en urgence) » entre parenthèse et en rouge pour prescription échographie de datation à l’étape d’après 
	                        2/Avec ? : Faire apparaitre « La DDR étant incertaine, il est nécessaire de s’assurer de la datation exacte rapidement afin de ne pas dépasser le terme légal pour une interruption de grossesse par voie médicamenteuse. »
                        </p>
                        <br></br>
                        <h2>Prescription échographie de datation</h2>
                        <p>1/ ?  « En pratique sur une grossesse a priori toute débutante,
                             attendre le résultat des ß-HCG (dans la journée ou le lendemain)
                              pour programmer l’échographie (œuf visualisé si ß-HCG  1000-1500 UI/L)
                               afin qu’elle ne soit pas répétée inutilement.
                                Il existe la possibilité d’attendre la 2ème consultation préalable
                                 à l’IVG afin de programmer l’échographie de datation en fonction du
                                  résultat sanguin. »
                        </p>

                        <p>
                        Comme vu précédemment : Faire apparaître « (en urgence) » entre parenthèse et
                         en rouge pour prescription échographie de datation si entre 7 et 9 SA ou si
                          case incertaine.
                        </p>

                        <p>
                        + ? : « Faire apparaître la mention « échographie de datation à réaliser
                         en urgence pour IVG » sur votre ordonnance afin que le forfait IVG 
                         soit appliqué, (Index pour radiologue IPE). » 
                        </p>
                        <br></br>

                        <h2>Personne accompagnante</h2>
                        <label for="accaompagnanteOui">  OUI  </label>
                        <input
                            type="radio"
                            nom="accaompagnanteOui"
                            id="accaompagnanteOui">
                        </input>
                        <br></br>
                        <label for="accaompagnanteNon">  NON  </label>
                        <input
                            type="radio"
                            nom="accaompagnanteNon"
                            id="accaompagnanteNon">
                        </input>
                        <br></br>
                        <h2>Mode de découverte de la grossesse </h2>
                        <br></br>
                        <label>
                            Mode de découverte de la grossesse :
                            <select defaultValue={valueDecouverteGro} id="decouverteGro" onChange={handleChange}>
                                <option value="Test urinaire">Test urinaire</option>
                                <option value="Test sanguin">Test sanguin</option>
                                <option value="Échographie">Échographie</option>
                                <option value="Clinique">Clinique</option>
                            </select>
                        </label>
                        <h2>Contexte biopsychosocial favorable :</h2>
                        {/* Bloc a finir  */}
                        <br></br>
                       <button>Oui</button>
                        <br></br>
                        
                        <button onClick={afficheConsultation} >Non</button>
                        <br></br>
                        <p className={affichageWarningConsultation.className}>
                           {affichageWarningConsultation.texte} 
                        </p>

                        <h2>Recherche IST +/- antibio-prophylaxie</h2>
                        <br></br>
                        <label for="rchISTOui">  OUI  </label>
                        <input
                            type="radio"
                            nom="rchISTOui"
                            id="rchISTOui">
                        </input>
                        <br></br>
                        <label for="rchISTNon">  NON  </label>
                        <input
                            type="radio"
                            nom="rchISTNon"
                            id="rchISTNon">
                        </input>
                        <br></br>
                        <input onClick={changementCouleurSVG} className="Lampe" type="image" src={logoAffiche} />
                        <p>  {currentInfoIST}
                        </p>
                        {/* Bloc a finir */}
                        

                        <br></br>
                        <h2>Prise de sang (Groupe sanguin : 2 déterminations, RAI, -HCG quantitatif)</h2>
                        <br></br>
                        <p>? : « 2 typages de groupe sanguin sont nécessaires avant toute IVG médicamenteuse
                             ou chirurgicale. Les RAI doivent dater de moins de 48h avant l’acte si négatif
                              jusqu'alors.  A noter qu’une injection d’Immunoglobulines anti-D sera nécessaire
                               en cas de RAI négatif avant toute IVG ou dans les 72h suivant tout saignement. »
                        </p>

                        <h2>Dossier guide IVG remis :</h2>
                        <br></br>
                        <label for="dossierIVGOui">  OUI  </label>
                        <input
                            type="radio"
                            nom="dossierIVGOui"
                            id="dossierIVGOui">
                        </input>
                        <br></br>
                        <label for="dossierIVGNon">  NON  </label>
                        <input
                            type="radio"
                            nom="dossierIVGNon"
                            id="dossierIVGNon">
                        </input>
                        <br></br>


                        <p>Lien dossier guide IVG PDF</p>
                        {/* lien à créer */}


                        <h2>Consultation psychosociale proposée</h2>
                        <br></br>
                        <label for="consultationOui">  OUI  </label>
                        <input
                            type="radio"
                            nom="consultationOui"
                            id="consultationOui">
                        </input>
                        <br></br>
                        <label for="consultationNon">  NON  </label>
                        <input
                            type="radio"
                            nom="consultationNon"
                            id="consultationNon">
                        </input>
                        <br></br>
                        <p>ontexte biopsychosocial favorable : si réponse « non » précédemment 
                             faire apparaître « consultation psychosociale proposée » en rouge.
                             {/* Bloc a finir */}
                        </p>
                        <br></br>
                        <p>? : « Elle n’est pas obligatoire pour les personnes majeures. 
                            Il existe l’obligation légale de le proposer.  La patiente a un délai de
                             48h de réflexion avant de signer le consentement après cette consultation.
                             {/* bulle information a faire  */}
                        </p>
                        <br></br>
                        <p>Elle peut avoir lieu : </p>
                        <br></br>
                        <ul>
                            <li>dans un établissement d’information, de consultation ou de conseil familial </li>
                            <li>dans un centre de planification ou d’éducation familiale</li>
                            <li>dans un service social ou un autre organisme agréé</li>
                        </ul>
                        <br></br>
                        <h2>Information contraception post-IVG</h2>
                        <br></br>
                        <label for="infoContraOui">  OUI  </label>
                        <input
                            type="radio"
                            nom="infoContraOui"
                            id="infoContraOui">
                        </input>
                        <br></br>
                        <label for="infoContraNon">  NON  </label>
                        <input
                            type="radio"
                            nom="infoContraNon"
                            id="infoContraNon">
                        </input>
                        <br></br>
                        <p>? : « Il est nécessaire d’aborder dès cette consultation,
                             les différentes modalités contraceptives. Site possible
                              d’information à transmettre à la patiente : 
                              Lien <a href="https://www.choisirsacontraception.fr/?gclid=EAIaIQobChMI8_jf5raj7AIVD9d3Ch2qZwTZEAAYASAAEgIlxvD_BwE">choisirsacontraception.com</a></p>
                        
                        

                     
                     <br></br>
                     <h2>Frottis à jour </h2>
                     <br></br>
                        <label for="frottiOui">  OUI  </label>
                        <input
                            type="radio"
                            nom="frottiOui"
                            id="frottiOui">
                        </input>
                        <br></br>
                        <label for="frottiNon">  NON  </label>
                        <input
                            type="radio"
                            nom="frottiNon"
                            id="frottiNon">
                        </input>
                        <br></br>
                        <label for="nonConcerNon">  NON CONCERNEE  </label>
                        <input
                            type="radio"
                            nom="nonConcerNon"
                            id="nonConcerNon">
                        </input>
                        <br></br>
                        <label for="dateFrotti">Date : </label>
                        <input
                            type="date"
                            name="dateFrotti"
                            id="dateFrotti">

                        </input>
                        <br></br>
                        <p>? « Le plan de dépistage national s’applique,
                             pour toute femme immunocompétente de 25 à 65 ans.
                        </p>
                        <a href="https://www.ameli.fr/assure/sante/themes/cancer-col-uterus/frottis-depistage">https://www.ameli.fr/assure/sante/themes/cancer-col-uterus/frottis-depistage
                        </a>
                        <br></br>
                        <h2>Tabac :</h2>
                        <br></br>
                        <label for="tabacOui">  OUI  </label>
                        <input
                            type="radio"
                            nom="tabacOui"
                            id="tabacOui">
                        </input>
                        <br></br>
                        <label for="tabacNon">  NON  </label>
                        <input
                            type="radio"
                            nom="tabacNon"
                            id="tabacNon">
                        </input>
                        <br></br>
                        <label for="nbPAquet">  Nombre paquets   </label>
                        <input
                            type="text"
                            nom="nbPAquet"
                            id="nbPAquet">
                        </input>
                        </form>
                        
            
          </div>
    )
}


export default PConsultation;