import React, { useState } from "react";
import Button from "react-bootstrap/Button";

// import assets
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideIVG from "@assets/pdf/GuideIvgPatiente.pdf";

// import css
import "./DeuxiemeConsultationMajeureNA.css";

/// service 



/// feuille de deuxieme consultation, patiente majeure non anonyme
function DeuxiemeConsultationMajeureNA(props) {

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
  
    return (
        <div>
            <h1>
                2ème consultation préalable à l’IVG/Recueil de consentement 
                Majeur Non Anonyme 
            </h1>
            <br></br>
            <p>
            Cette 2ème consultation peut être effectuée par tout médecin ou sage femme,
             prenant en charge l’IVG ou non. Elle fait partie du tarif forfaitaire à l’IVG. 
            Si vous n’êtes pas le médecin ou la sage femme prenant en charge l’IVG, 
            il convient de ré-adresser
            la patiente au terme de la consultation à un professionnel pouvant effectuer cet acte. 
            </p>

            <h2>Attestation 1ère consultation préalable à l’IVG : </h2>
            <Button variant="secondary" value="Oui">Oui</Button>
            <Button variant="secondary" value="Non">Non</Button>



            <h2>Personne accompagnante :</h2>
            <Button variant="secondary" value="Oui">Oui</Button>
            <Button variant="secondary" value="Non">Non</Button>


            <h2>Consultation psycho-sociale réalisée :</h2>
            <Button variant="secondary" value="Oui">Oui</Button>
            {/* Attestion a faire */}
            <Button variant="secondary" value="Non">Non</Button>

            <h2>Grossesse intra-utérine confirmée :</h2>
            <Button variant="secondary" value="Oui">Oui</Button>
            <Button variant="secondary" value="Non">Non</Button>


            <h2>Age gestationnel : </h2>
            {/* faire input comme nb paquet tabac pConsultation */}
            <form >
            <input
                value={ageGestationel}
                onChange={handleChangeGesta}
                type="text"
                placeholder="age gestationnel"
            />
            <Button value={ageGestationel} variant="secondary" onClick={(e)=> {
              handleSubmitGesta(e)
            }}>Confirmer</Button>
            {/* affichage conditionnel a finir */}
        </form>



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


        <h2>Frottis à jour</h2>
        <Button variant="secondary" value="Oui">Oui</Button>
        <Button variant="secondary" value="Non">Non</Button>
        <Button variant="secondary" value="Non concernée">Non concernée</Button>

        <input type="date" placeholder="Date du frotti"></input>


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

export default DeuxiemeConsultationMajeureNA;
