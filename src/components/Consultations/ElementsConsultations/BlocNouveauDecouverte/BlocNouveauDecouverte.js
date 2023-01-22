import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocNouveauDecouverte.css";


function BlocNouveauDecouverte(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])
  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const [ classBaseCard, setClassBaseCArd] =useState("BlocConsultationStyle");

  const [classActifCard,setClassActifCard] =useState("BlocConsultationStyleActiv");
 
  const [currentClassCard, setCurrentClassCard] =useState(classBaseCard);


  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  }

  const [ currentRep, setCurrentRep] =useState({
    titre : "Remise et prise de mifépristone : ",
        value : "",
        titreBis : "",
        valueBis : "",
        reponse : 0,
        identifiant : 2

      });

      const [ currentBisRep, setCurrentBisRep] =useState({
        titre : "Remise et prise de mifépristone : ",
            value : "",
            titreBis : "",
            valueBis : "",
            reponse : 0,
            identifiant : 2

          });


      const recupRadioAnti = (e) => {
        let reponse = {
          titre: "Mode de découverte de la grossesse : ",
          value: e.target.value,
          reponse : 1,
          identifiant : 2

        };
        if (e.target.value=="Test Sanguin") {
            setCurrentBisRep(reponse);
            setCurrentClassBtt(classBouttonBase);


        }
        else if (e.target.value=="Échographie") {
            setCurrentBisRep(reponse);
            setCurrentClassBtt(classBouttonBase);
        }
        else {
            setCurrentRep(reponse);
            changeBtnClass();
            
        }
        
        
      }


      const handleChangeAnti = (e) => {
    
    
    
        let reponse = {
          titre: "Mode de décvouverte de la grossesse : Test Sanguin ; dosage ß-HCG : ",
          value: e.target.value,
          reponse : 1,
          identifiant : 2

        };
       setCurrentRep(reponse);
       changeBtnClass();
    
        
      };

      const handleChangeAge = (e) => {
    
    
    
        let reponse = {
          titre: "Mode de décvouverte de la grossesse : Échographie ; Age gestationnel réel ou estimé (en semaine d’aménorrhée) : ",
          value: e.target.value+", jours : ",
          reponse : 1,
          identifiant : 2

        };
       setCurrentRep(reponse);
       changeBtnClass();
    
        
      };


      const ouiAnti = () => {
        return (
            <div>
                <input
        type="text"
        placeholder="dosage ß-HCG"
        name="dateAnti"
        id="dateAnti"
        onChange={(e) => {
            handleChangeAnti(e);
        }}
      ></input>
            </div>
        )
    }

    const ouiAge = () => {
        return (
            <div>
                <input
        type="number"
        min="0"
        placeholder="Age gestationnel réel ou estimé"
        name="Age gestationnel réel ou estimé"
        id="dateAge"
        onChange={(e) => {
          handleChangeAge(e);
        }}
      ></input>
      <br></br>
      Info : Jours à noter à la main sur le résumé de consultation. Section en travaux, veuillez nous excuser.
            </div>
        )
    }

    const [afficheOUi, setAfficheOUI] = useState(()=>ouiAnti());

    const [currentOui, setCurrentOui] = useState("");

    const [afficheCurrentAge, setAfficheCurrentAge] = useState(()=>ouiAge());

    const [currentAge, setCurrentAge] = useState("");

    const afficheCause = () => {
        let txtAAfficher = afficheOUi;
        setCurrentOui(txtAAfficher);

    }

    const afficheAge = () => {
        let txtAAfficher = afficheCurrentAge;
        setCurrentOui(txtAAfficher);

    }


    const returnInfoAntiD = () => {
        return (
          <div className="BulleInfo">
              
            <p>
            Feuille de suivi de prise médicamenteuse = sécurité du médicament efficace.
            </p>
            
          </div>
        );
      };
    
      const [txtAntiD, setTxtAntiD] = useState(() => returnInfoAntiD());
    
      const [currentInfoAntiD, setCurrentInfoAntiD] = useState("");
    
      const affichageTxtAntiD = () => {
        let txtAEnlever = currentInfoAntiD;
        let txtAAfficher = txtAntiD;
        setCurrentInfoAntiD(txtAAfficher);
        setTxtAntiD(txtAEnlever);
      };
    
      const [logoAfficheAntiD, setLogoAfficheAntiD] = useState(LightOff);
    
      const [logoNonAfficheAntiD, setLogoNonAfficheAntiD] = useState(LightOn);
    
      const changementCouleurSVGAntiD = () => {
        let currentLampe = logoAfficheAntiD;
        let currentCache = logoNonAfficheAntiD;
        setLogoNonAfficheAntiD(currentLampe);
        setLogoAfficheAntiD(currentCache);
        affichageTxtAntiD();
      };

    
    



  return (
    <div className={currentClassCard}>
 <h2>Mode de découverte de la grossesse</h2>


<Form>
<div key={`anti-radio`} className="mb-3" onChange={(e)=>{recupRadioAnti(e);}}>
<Form.Check 
type='radio'
id={`antiOui`}
label={`Test Sanguin`}
value="Test Sanguin"
name="antiD"
onClick={()=>{
    setCurrentAge("");
afficheCause();
}}

/>

<Form.Check 
type='radio'
id={`antiNon`}
label={`Test Urinaire`}
value="Test Urinaire"
name="antiD"
onClick={()=>{
setCurrentOui("");
setCurrentAge("");
}}

/>
<Form.Check 
type='radio'
id={`antiEcho`}
label={`Échographie`}
value="Échographie"
name="antiD"
onClick={()=>{
setCurrentOui("");
afficheAge();
}}

/>
<Form.Check 
type='radio'
id={`antiClinique`}
label={`Clinique`}
value="Clinique"
name="antiD"
onClick={()=>{
setCurrentOui("");
setCurrentAge("");
}}

/>

</div>
</Form>





<div>{currentOui}</div>
<div>{currentAge}</div>
{/* <input
onClick={changementCouleurSVGAntiD}
className="Lampe"
type="image"
src={logoAfficheAntiD}
alt="logo information mifépristone"
/>
<div className="ContainerBulle">{currentInfoAntiD}</div> */}



      <Button variant="info" className="BouttonRetour" onClick={()=>{
        props.retour(props.keys);
             
            }}>Retour</Button>

      <Button variant="info" className={currentClassBtt}  onClick={()=>{
                               setCurrentClassCard(classActifCard);

                               props.ajoute(currentRep);
                               setTimeout(() => {
                                 props.suite(props.keys);
                        
                               }, 501);
             
            }}>Suivant</Button>

           
      </div>
    
  );


}

export default BlocNouveauDecouverte;