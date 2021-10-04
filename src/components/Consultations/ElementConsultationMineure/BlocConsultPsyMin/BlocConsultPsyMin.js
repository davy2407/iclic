import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocConsultPsyMin.css";


function BlocConsultPsyMin(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])

  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  };

  const [ currentRep, setCurrentRep] =useState({
    titre : "Consultation psycho-sociale  obligatoirement proposée ",
        value : "",
        reponse : 0
      });


      const recupRadioPsycho = (e) => {
        let reponse = {
          titre : "Consultation psycho-sociale proposée : ",
          value : e.target.value,
          reponse : 1
        };
        setCurrentRep(reponse);

      }



      const returnInfo = () => {
        return (
          <div className="BulleInfo">
            <p>
            Un entretien psycho-social, fait par une personne qualifiée en conseil conjugal, est obligatoire en cas de patiente mineure. Il a lieu entre les deux consultations préalables à l’IVG. Un délai de 48 heures est à respecter entre la consultation psycho-sociale et la deuxième consultation préalable à l’IVG. 
            </p>
            <br></br>
            <p>Elle peut avoir lieu : </p>
            <br></br>
            <ul>
              <li>
              dans un établissement d’information, de consultation ou de conseil familial 
              </li>
              <li>dans un centre de planification ou d’éducation familiale</li>
              <li>dans un service social ou un autre organisme agréé</li>
            </ul>
            <br></br>
          </div>
        );
      };
    
      const [txtPsycho, setTxtPsycho] = useState(() => returnInfo());
    
      const [currentInfoPsycho, setCurrentInfoPsycho] = useState("");
    
      const affichageTxtPsycho = () => {
        let txtAEnlever = currentInfoPsycho;
        let txtAAfficher = txtPsycho;
        setCurrentInfoPsycho(txtAAfficher);
        setTxtPsycho(txtAEnlever);
      };
    
      const [logoAffichePsycho, setLogoAffichePsycho] = useState(LightOff);
    
      const [logoNonAffichePsycho, setLogoNonAffichePsycho] = useState(LightOn);
    
      const changementCouleurSVGPsycho = () => {
        let currentLampe = logoAffichePsycho;
        let currentCache = logoNonAffichePsycho;
        setLogoNonAffichePsycho(currentLampe);
        setLogoAffichePsycho(currentCache);
        affichageTxtPsycho();
      };        



  return (
    <div className="BlocConsultationStyle">
      <h2>Consultation psycho-sociale obligatoire</h2>
      <br></br>
      <Form>
      <div key={`conPsy-radio`} className="mb-3" onChange={(e)=>{recupRadioPsycho(e);changeBtnClass();}}>
      <Form.Check 
        type='radio'
        id={`conPsyOui`}
        label={`Oui`}
        value="Oui"
        name="PsychoSo"
      />

<Form.Check 
        type='radio'
        id={`conPsyNon`}
        label={`Non`}
        value="Non"
        name="PsychoSo"
      />
      </div>
      </Form>

      <br></br>
      <input
        onClick={changementCouleurSVGPsycho}
        className="Lampe"
        type="image"
        src={logoAffichePsycho}
      />
      <br></br>
      <div className="ContainerBulle">{currentInfoPsycho}</div>
      <br></br>
      <Button variant="info" className="BouttonRetour" onClick={()=>{
        props.retour(props.keys);
             
            }}>Retour</Button>
      <Button variant="info" className={currentClassBtt} onClick={()=>{
        props.ajoute(currentRep);
        props.suite(props.keys);
             
            }}>Suivant</Button>


            </div>
    
  );


}

export default BlocConsultPsyMin;