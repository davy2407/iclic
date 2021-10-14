import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocAntalgique.css";


function BlocAntalgique(props) {
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

  const [ currentRep, setCurrentRep] =useState({
    titre : "Prescription d’antalgiques : ",
        value : "",
        reponse : 0,
        identifiant : 1

      });


      const recupRadioPsycho = (e) => {
        let reponse = {
          titre : "Prescription d’antalgiques : ",
          value : e.target.value,
          reponse : 1,
          identifiant : 1

        };
        setCurrentRep(reponse);

      }



      const returnInfo = () => {
        return (
          <div className="BulleInfo">
            <p>
            Fiche réponse HAS Covid et IVG : antalgiques palier 1 (ibuprofène ou fénoprofène à dose antalgique) et 2 (paracétamol associé à l’opium ; la codéine ; tramadol seul ou en association avec le paracétamol).    
            </p>
            <p>
            En cas de Covid 19, l’ibuprofène, antalgique de référence dans l’IVG médicamenteuse, est remplacé par le paracétamol associé à l’opium ou à la codéine.
            </p>
            <a className="Bold" rel="noreferrer noopener"
            href="https://www.has-sante.fr/upload/docs/application/pdf/2020-04/reponse_rapide_ivg__09_04_2020_coiv8.pdf"
            target="_blank"
          > info
          </a>
            
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
      <h2>Prescription d’antalgiques</h2>
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
                               setCurrentClassCard(classActifCard);

                               props.ajoute(currentRep);
                               setTimeout(() => {
                                 props.suite(props.keys);
                        
                               }, 501);
             
            }}>Suivant</Button>


            </div>
    
  );


}

export default BlocAntalgique;