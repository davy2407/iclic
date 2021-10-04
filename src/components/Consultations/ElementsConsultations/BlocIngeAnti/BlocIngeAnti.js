import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocIngeAnti.css";


function BlocIngeAnti(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])
  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  }

  const [ currentRep, setCurrentRep] =useState({
    titre : "Nécessité d’une injection préventive d’Ig anti-D : ",
        value : "",
        titreBis : "",
        valueBis : "",
        reponse : 0
      });

      const [ currentBisRep, setCurrentBisRep] =useState({
        titre : "Nécessité d’une injection préventive d’Ig anti-D : ",
            value : "",
            titreBis : "",
            valueBis : "",
            reponse : 0
          });


      const recupRadioAnti = (e) => {
        let reponse = {
          titre: "Nécessité d’une injection préventive d’Ig anti-D : ",
          value: e.target.value,
          reponse : 1
        };
        if (e.target.value=="Oui") {
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
          titre: "Nécessité d’une injection préventive d’Ig anti-D : Oui ; Date injection préventive d’Ig anti-D : ",
          value: e.target.value,
          reponse : 1
        };
       setCurrentRep(reponse);
       changeBtnClass();
    
        
      };


      const ouiAnti = () => {
        return (
            <div>
                <input
        type="date"
        name="dateAnti"
        id="dateAnti"
        onChange={(e) => {
          handleChangeAnti(e);
        }}
      ></input>
            </div>
        )
    }

    const [afficheOUi, setAfficheOUI] = useState(()=>ouiAnti());

    const [currentOui, setCurrentOui] = useState("");

    const afficheCause = () => {
        let txtAAfficher = afficheOUi;
        setCurrentOui(txtAAfficher);

    }

    const returnInfoAntiD = () => {
        return (
          <div className="BulleInfo">
              
            <p>
            prévention  de l’incompatibilité rhésus chez les femmes rhésus négatif si conjoint positif ou inconnue par la prescription et l’administration de gammaglobuline anti-D. 
Injection IM ou IV de 200 ug d’Ig anti-D.
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
    <div className="BlocConsultationStyle">
 <h2>Nécessité d’une injection préventive d’Ig anti-D</h2>


<Form>
<div key={`anti-radio`} className="mb-3" onChange={(e)=>{recupRadioAnti(e);}}>
<Form.Check 
type='radio'
id={`antiOui`}
label={`Oui`}
value="Oui"
name="antiD"
onClick={()=>{
afficheCause();}}

/>

<Form.Check 
type='radio'
id={`antiNon`}
label={`Non`}
value="Non"
name="antiD"
onClick={()=>{
setCurrentOui("");
}}

/>

</div>
</Form>





<div>{currentOui}</div>
<input
onClick={changementCouleurSVGAntiD}
className="Lampe"
type="image"
src={logoAfficheAntiD}
/>
<div className="ContainerBulle">{currentInfoAntiD}</div>



      <Button variant="info" className="BouttonRetour" onClick={()=>{
        props.retour(props.keys);
             
            }}>Retour</Button>

      <Button variant="info" className={currentClassBtt}  onClick={()=>{
        props.ajoute(currentRep);
        props.suite(props.keys);
             
            }}>Suivant</Button>

           
      </div>
    
  );


}

export default BlocIngeAnti;