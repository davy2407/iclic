import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocIST.css";


function BlocIST(props) {
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
    titre : "Recherche IST +/- antibio-prophylaxie ",
        value : "",
        reponse : 0
      });

      const [infoSupp, setInfoSupp] = useState({
        titre : "",
        value : "",
        reponse : 1
      });
    
    


      const recupRadioIST = (e) => {
        let reponse = {
          titre : "Recherche IST : ",
          value : e.target.value,
          reponse : 1
        };
        setCurrentRep(reponse);

      }

      const recupInfoSupp = (e) => {
        e.preventDefault();
        let reponse = {
          titre : "Si ressource cochée oui : ",
          value : "http://www.info-ist.fr ; https://www.ameli.fr/assure/sante",
          reponse : 1
        };
        
        setInfoSupp(reponse);
        props.ajoute(reponse);
      };
    



      const returnInfoIST = () => {
        return (
          <div className="BulleInfo">
            <p>
             HAS : « dépistage recommandé ciblé à toutes les femmes consultant pour une IVG, sans limite d’âge. Systématique chez les femmes de 15 à 25 ans .»
            </p>
            
            
            <p>
              De nombreuses sources numériques existent pour l’information aux
              patient(es) des IST ainsi que de ces risques
              <a rel="noreferrer noopener"
                href="https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles"
                target="_blank"
              >
                Ameli IST
              </a>
              ,{" "}
              <a href="http://www.info-ist.fr/index.html" target="_blank" rel="noreferrer noopener">
                ISt-info
              </a>
              .
            </p>
            <br></br>
    
            <label>
              Vous desirez plus d'informations à transmettre à la patiente ?
              <Button 
                variant="danger"
                value="Oui"
                onClick={(e) => {
                  recupInfoSupp(e);
                  
                }}
              >
                Oui
              </Button>
            
            </label>
    
     
          </div>
        );
      };
    
      /// texte info IST
      const [txtIST, setTxtIST] = useState(() => returnInfoIST());
    
      const [currentInfoIST, setCurrentInfoIST] = useState("");
    
      const affichageTxtIST = () => {
        let txtAEnlever = currentInfoIST;
        let txtAAfficher = txtIST;
        setCurrentInfoIST(txtAAfficher);
        setTxtIST(txtAEnlever);
      };
    
      const [logoAfficheIST, setLogoAfficheIST] = useState(LightOff);
    
      const [logoNonAfficheIST, setLogoNonAfficheIST] = useState(LightOn);
    
      const changementCouleurSVGIST = () => {
        let currentLampe = logoAfficheIST;
        let currentCache = logoNonAfficheIST;
        setLogoNonAfficheIST(currentLampe);
        setLogoAfficheIST(currentCache);
        affichageTxtIST();
      };
    



  return (
    <div className="BlocConsultationStyle">
        <h2>Recherche IST +/- antibio-prophylaxie</h2>
      <br></br>
      <Form>
      <div key={`Ist-radio`} className="mb-3" onChange={(e)=>{recupRadioIST(e);changeBtnClass();}}>
      <Form.Check 
        type='radio'
        id={`ISToui`}
        label={`Oui`}
        value="Oui"
        name="ISTantibio"
      />

<Form.Check 
        type='radio'
        id={`IstNon`}
        label={`Non`}
        value="Non"
        name="ISTantibio"
      />
      </div>
      </Form>
      <br></br>
      <input
        onClick={changementCouleurSVGIST}
        className="Lampe"
        type="image"
        src={logoAfficheIST}
      />
      <div className="ContainerBulle">  {currentInfoIST}</div>
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

export default BlocIST;
