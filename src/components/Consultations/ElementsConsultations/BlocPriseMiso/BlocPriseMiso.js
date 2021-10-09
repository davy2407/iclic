import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocPriseMiso.css";


function BlocPriseMiso(props) {
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
    titre : "Délivrance du misoprostol : ",
        value : "",
        titreBis : "",
        valueBis : "",
        reponse : 0,
        identifiant : 2

      });

      const [ currentBisRep, setCurrentBisRep] =useState({
        titre : "Délivrance du misoprostol : ",
            value : "",
            titreBis : "",
            valueBis : "",
            reponse : 0,
            identifiant : 2

          });


      const recupRadioAnti = (e) => {
        let reponse = {
          titre: "Délivrance du misoprostol : ",
          value: e.target.value,
          reponse : 1,
          identifiant : 2

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
          titre: "Délivrance du misoprostol : Oui ; Date : ",
          value: e.target.value,
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
            Deuxième médicament pris par la femme 36 à 48h plus tard, à son domicile selon appreciation.           
            </p>
            <p>
            Présentielle au cabinet possible ; « 2eme prise médicamenteuse » comprise dans le forfait IVG hors établissement. HAS recommande la séquence de traitement Per Os
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
 <h2>Délivrance du misoprostol</h2>


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
alt="logo information misoprostol"
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

export default BlocPriseMiso;