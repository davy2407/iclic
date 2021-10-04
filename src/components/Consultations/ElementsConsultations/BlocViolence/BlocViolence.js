import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";





import "./BlocViolence.css";


function BlocViolence(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])
  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  };

  const [ currentVio, setCurrentVio] =useState({
    titre : " ",
        value : "",
        reponse : 1
      });

  

    const violence = () => {
        return (
          <div className="BulleInfo">
            <p>
            Cette information ne figurera pas sur le résumé.
    Cette violence peut être physique, sexuelle, économique,
     verbale ou psychologique dans un contexte conjugal,
      professionnel ou plus récemment de cyberviolence. 
            </p>
            
            <p>
              <a rel="noreferrer noopener" target="_blank" href="https://www.has-sante.fr/jcms/p_3104867/fr/reperage-des-femmes-victimes-de-violences-au-sein-du-couple">
              https://www.has-sante.fr/reperage-des-femmes-victimes-de-violences-au-sein-du-couple
    
              </a>
            </p>
            <p>
            Pour toutes questions de prise en charge : <a href="http://www.declicviolence.fr/" rel="noreferrer noopener" target="_blank">http://www.declicviolence.fr/</a>
            </p>
          </div>
        )
      }
      const [txtViolence, setTxtViolence] = useState(() => violence());
    
      const [currentInfoViolence, setCurrentInfoViolence] = useState("");
    
      const affichageTxtViolence = () => {
        let txtAEnlever = currentInfoViolence;
        let txtAAfficher = txtViolence;
        setCurrentInfoViolence(txtAAfficher);
        setTxtViolence(txtAEnlever);
      };
      const [logoAfficheViolence, setLogoAfficheViolence] = useState(LightOff);
    

   
    



      const [logoNonAfficheViolence, setLogoNonAfficheViolence] = useState(LightOn);
      const changementCouleurSVGViolence = () => {
        let currentLampe = logoAfficheViolence;
        let currentCache = logoNonAfficheViolence;
        setLogoNonAfficheViolence(currentLampe);
        setLogoAfficheViolence(currentCache);
        affichageTxtViolence();
      };
    




  return (
    <div className="BlocConsultationStyle">
      <h2>Violences subies en rapport ou non avec l’acte :</h2>


        <Form>
      <div key={`Vio-radio`} className="mb-3" onChange={(e)=>{changeBtnClass();}} >
      <Form.Check 
        type='radio'
        id={`VioOui`}
        label={`Oui`}
        value="Oui"
        name="violence"
      />

<Form.Check 
        type='radio'
        id={`VioNon`}
        label={`Non`}
        value="Non"
        name="violence"
      />
      </div>
      </Form>







      
      {/* <Button id={1} variant="danger" className={btnOuiViolenceBase} onClick={(e)=>{changeCouleurBoutonViolence(e);}} >Oui</Button>
      <Button id={2} variant="danger" className={btnOuiViolenceBase} onClick={(e)=>{changeCouleurBoutonViolence(e);}}>Non</Button> */}
      <input
        onClick={changementCouleurSVGViolence}
        className="Lampe"
        type="image"
        src={logoAfficheViolence}
      />
      <div className="ContainerBulle">  {currentInfoViolence}</div>
      <Button variant="info" className="BouttonRetour" onClick={()=>{
        props.retour(props.keys);
             
            }}>Retour</Button>
      <Button variant="info" className={currentClassBtt}  onClick={()=>{
                props.ajoute(currentVio);
                props.suite(props.keys);

             
            }}>Suivant</Button>

      </div>
    
  );






  
 
}

export default BlocViolence;
