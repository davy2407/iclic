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
            <Button variant="secondary" value="Oui">Oui</Button>
            <Button variant="secondary" value="Non">Non</Button>


            <h2>Attestation consultation psychosociale :</h2>
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
