import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocPriseSang.css";


function BlocPriseSang(props) {
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
    titre : "Prise de sang ",
        value : "",
        reponse : 0
      });
    
    
    
      const recupRadioBilan = (e) => {
   
        let reponse = {
          titre: "Bilan Sanguin prescrit (incluant groupe rhésus 2 déterminations+ BHCG quantitatif ) : ",
          value: e.target.value,
          reponse : 1
        };
        setCurrentRep(reponse);

      }
    



      const returnInfoSang = () => {
        return (
          <div className="BulleInfo">
            <p>
            Injection d’Immunoglobulines anti-D nécessaire en cas de rhésus négatif et de rhésus positif ou inconnue chez le partenaire, avant toute IVG ou dans les 72h suivant tout saignement. 
            </p>
            
          </div>
        );
      };
    
      const [txtSang, setTxtSang] = useState(() => returnInfoSang());
    
      const [currentInfoSang, setCurrentInfoSang] = useState("");
    
      const affichageTxtSang = () => {
        let txtAEnlever = currentInfoSang;
        let txtAAfficher = txtSang;
        setCurrentInfoSang(txtAAfficher);
        setTxtSang(txtAEnlever);
      };
    
      const [logoAfficheSang, setLogoAfficheSang] = useState(LightOff);
    
      const [logoNonAfficheSang, setLogoNonAfficheSang] = useState(LightOn);
    
      const changementCouleurSVGSang = () => {
        let currentLampe = logoAfficheSang;
        let currentCache = logoNonAfficheSang;
        setLogoNonAfficheSang(currentLampe);
        setLogoAfficheSang(currentCache);
        affichageTxtSang();
      };
    
    


  return (
    <div className="BlocConsultationStyle">
            <h2>
       Prescription prise de sang (Groupe sanguin : 2 déterminations, ß-HCG
        quantitatif)
      </h2>
      <Form>
      <div key={`Bilan-radio`} className="mb-3" onChange={(e)=>{recupRadioBilan(e);changeBtnClass();}}>
      <Form.Check 
        type='radio'
        id={`BilanOui`}
        label={`Oui`}
        value="Oui"
        name="BilanSang"
      />

<Form.Check 
        type='radio'
        id={`BilanNon`}
        label={`Non`}
        value="Non"
        name="BilanSang"
      />
      </div>
      </Form>



      <br></br>
     
      <input
        onClick={changementCouleurSVGSang}
        className="Lampe"
        type="image"
        src={logoAfficheSang}
      />
      <br></br>
      <div className="ContainerBulle">{currentInfoSang}</div>

      <br></br>
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

export default BlocPriseSang;
