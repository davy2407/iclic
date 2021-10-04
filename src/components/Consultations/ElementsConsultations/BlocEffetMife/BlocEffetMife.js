import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocEffetMife.css";


function BlocEffetMife(props) {
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
    titre : "Effets secondaires de la mifépristone : ",
        value : "",
        reponse : 0
      });


    const recupRadioEcho = (e) => {
        let reponse = {
          titre: "Effets secondaires de la mifépristone : ",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentRep(reponse);
        
      }



      const echographie = () => {
        return (
          <div className="BulleInfo">
            <h4>ES mifépristone :</h4> 
            <p>
            nausées/vomissements, diarrhées, crampes abdominales, infection.
            </p>
            <h4>ES misoprostol : </h4>
            <p>
            nausées/vomissements, diarrhées, crampes abdominales, infection, contractions utérines, saignements utérins, malformations fœtales.
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
        Effets secondaires de la mifépristone
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
        alt="Image information effets secondaires mifépristone"
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

export default BlocEffetMife;