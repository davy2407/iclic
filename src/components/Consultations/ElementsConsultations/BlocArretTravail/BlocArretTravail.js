import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocArretTravail.css";


function BlocArretTravail(props) {
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
    titre : "Arrêt de travail prescrit : ",
        value : "",
        reponse : 0
      });


    const recupRadioEcho = (e) => {
        let reponse = {
          titre: "Arrêt de travail prescrit : ",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentRep(reponse);
        
      }



      const echographie = () => {
        return (
          <div className="BulleInfo">
            <p>
            Pour le jour de la prise de misoprostol.           
             </p>
          </div>
        )
      }
      const [txtEcho, setTxtEcho] = useState(() => echographie());
    
      const [currentInfoEcho, setCurrentInfoEcho] = useState("");
    
      const affichageTxtEcho = () => {
        let txtAEnlever = currentInfoEcho;
        let txtAAfficher = txtEcho;
        setCurrentInfoEcho(txtAAfficher);
        setTxtEcho(txtAEnlever);
      };
      const [logoAfficheEcho, setLogoAfficheEcho] = useState(LightOff);
    
      const [logoNonAfficheEcho, setLogoNonAfficheEcho] = useState(LightOn);
      const changementCouleurSVGEcho = () => {
        let currentLampe = logoAfficheEcho;
        let currentCache = logoNonAfficheEcho;
        setLogoNonAfficheEcho(currentLampe);
        setLogoAfficheEcho(currentCache);
        affichageTxtEcho();
      };
    




  return (
    <div className="BlocConsultationStyle">
        <h2>
        Arrêt de travail prescrit pour la prise médicamenteuse
        </h2>
            

        <Form>
      <div key={`echo-radio`} className="mb-3" onChange={(e)=>{recupRadioEcho(e);changeBtnClass();}}>
      <Form.Check 
        type='radio'
        id={`echoOui`}
        label={`Oui`}
        value="Oui"
        name="echographie"
      />

<Form.Check 
        type='radio'
        id={`echoNon`}
        label={`Non`}
        value="Non"
        name="echographie"
      />
      </div>
      </Form>
      
      
    
      
      <input
        alt="Image information effets arret travail"
        onClick={changementCouleurSVGEcho}
        className="Lampe"
        type="image"
        src={logoAfficheEcho}
        
      />
      <div className="ContainerBulle">{currentInfoEcho}</div>
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

export default BlocArretTravail;