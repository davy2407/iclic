import React, {useState, useEffect} from "react";
import './pConsultation.css';




/// feuille de premiere consultation, patiente majeure non anonyme ne venant pas du 3d




function PConsultation(props){

    const [valueDecouverteGro, setDecouverteGro] = useState(
        {value : "Selectionner"}
    )


    const handleChange = (event) => {
        console.log(event.target.value)
        let test = event.target.value
        setDecouverteGro({value: test});
      }
   

  
    
    
   

   
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
                     <form>
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
                        {/* je reprends demain en fin d'aprem, je finis à 16h le taf  */}

                     </form>
            
          </div>
    )
}


export default PConsultation;