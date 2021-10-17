import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocAttPremier.css";


function BlocAttPremier(props) {
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
  };

  const [ currentVerrou, setCurrentVerrou] = useState("");

  const verrouTxt = () => {
    return (
        <div className="Red Verrou">
            <p>
            Dans le cadre de l’interruption volontaire de grossesse, votre réponse va à l’encontre des recommandations établies actuellement en vigueur en France.
            <br></br>
            <br></br>
            Il est nécessaire, selon vos réponses, un ajustement et une reprise à la consultation précédente.           <br></br>
            Selon le temps estimer de la grossesse, il peut s’agir d’une urgence.<br></br>
            Votre centre de référence peut vous répondre afin d’établir une prise en charge dans les meilleurs conditions pour la patiente.
            </p>
        </div>
    )
};

const [txtVerrou, setTextverrou] = useState(
    () => verrouTxt()
);

const afficheverrou = () => {
  
  let txtAAfficher = txtVerrou;
  setCurrentVerrou(txtAAfficher);
};


  const [ currentRep, setCurrentRep] =useState({
    titre : "Attestation première consultation préalable à l’IVG : ",
        value : "",
        reponse : 0
      });


      const recupRadioPsycho = (e) => {
        let reponse = {
          titre : "Attestation première consultation préalable à l’IVG : ",
          value : e.target.value,
          reponse : 1
        };
        setCurrentRep(reponse);

      }



      const returnInfo = () => {
        return (
          <div className="BulleInfo">
            <p>
            Une première consultation préalable à l’IVG est nécessaire avant d’effectuer le recueil du consentement de la patiente.
            </p>
            
           
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
    <div className={currentClassCard}>
      <h2>Attestation première consultation préalable à l’IVG</h2>
      <br></br>
      <Form>
      <div key={`conPsy-radio`} className="mb-3" onChange={(e)=>{recupRadioPsycho(e);}}>
      <Form.Check 
        type='radio'
        id={`conPsyOui`}
        label={`Oui`}
        value="Oui"
        name="PsychoSo"
        onClick={()=>{setCurrentVerrou("");changeBtnClass();}}

      />

<Form.Check 
        type='radio'
        id={`conPsyNon`}
        label={`Non`}
        value="Non"
        name="PsychoSo"
        onClick={()=>{afficheverrou();setCurrentClassBtt(classBouttonBase);}}

      />
      </div>
      </Form>
      {currentVerrou}

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
        setCurrentClassCard(classActifCard);

        props.ajoute(currentRep);
        setTimeout(() => {
          props.suite(props.keys);

        }, 501);
             
            }}>Suivant</Button>


            </div>
    
  );


}

export default BlocAttPremier;