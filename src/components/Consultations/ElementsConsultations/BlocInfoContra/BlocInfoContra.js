import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocInfoContra.css";


function BlocInfoContra(props) {
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
    titre : "Information contraception",
        value : "",
        reponse : 0
      });


      const recupRadioContra = (e) => {
        let reponse = {
          titre : "Information contraception postIVG : ",
          value : e.target.value,
          reponse : 1
        };
        setCurrentRep(reponse);

      }



      const returnInfoPostIVG = () => {
        return (
          <div className="BulleInfo">
            <p>
             Aborder la contraception dès cette consultation. Site d’information à transmettre à la patiente : </p>
              
              <p>
              <a target="_blank" rel="noreferrer noopener" href="https://www.choisirsacontraception.fr/?gclid=EAIaIQobChMI8_jf5raj7AIVD9d3Ch2qZwTZEAAYASAAEgIlxvD_BwE">
                choisirsacontraception.com
              </a>
            </p>
            <br></br>
          </div>
        );
      };
    
      const [txtPostIVG, setTxtPostIVG] = useState(() => returnInfoPostIVG());
    
      const [currentInfoPostIVG, setCurrentInfoPostIVG] = useState("");
    
      const affichageTxtPostIVG = () => {
        let txtAEnlever = currentInfoPostIVG;
        let txtAAfficher = txtPostIVG;
        setCurrentInfoPostIVG(txtAAfficher);
        setTxtPostIVG(txtAEnlever);
      };
    
      const [logoAffichePostIVG, setLogoAffichePostIVG] = useState(LightOff);
    
      const [logoNonAffichePostIVG, setLogoNonAffichePostIVG] = useState(LightOn);
    
      const changementCouleurSVGPostIVG = () => {
        let currentLampe = logoAffichePostIVG;
        let currentCache = logoNonAffichePostIVG;
        setLogoNonAffichePostIVG(currentLampe);
        setLogoAffichePostIVG(currentCache);
        affichageTxtPostIVG();
      };
    



  return (
    <div className="BlocConsultationStyle">
<h2>Information contraception post-IVG</h2>
      <br></br>
      <Form>
      <div key={`contra-radio`} className="mb-3" onChange={(e)=>{recupRadioContra(e);changeBtnClass();}}>
      <Form.Check 
        type='radio'
        id={`contraOui`}
        label={`Oui`}
        value="Oui"
        name="contraception"
      />

<Form.Check 
        type='radio'
        id={`contraNon`}
        label={`Non`}
        value="Non"
        name="contraception"
      />
      </div>
      </Form>


      <br></br>
      <input
        onClick={changementCouleurSVGPostIVG}
        className="Lampe"
        type="image"
        src={logoAffichePostIVG}
      />
      <br></br>
      <div className="ContainerBulle">{currentInfoPostIVG}</div>
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

export default BlocInfoContra;
