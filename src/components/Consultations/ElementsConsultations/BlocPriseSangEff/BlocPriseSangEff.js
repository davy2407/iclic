import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocPriseSangEff.css";


function BlocPriseSangEff(props) {
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
    titre : "Bilan Sanguin prescrit (incluant groupe rhésus 2 déterminations+ BHCG quantitatif ) : ",
        value : "",
        reponse : 0,
        identifiant : 1

      });
    
    
    
      const recupRadioBilan = (e) => {
   
        let reponse = {
          titre: "Bilan Sanguin prescrit (incluant groupe rhésus 2 déterminations+ BHCG quantitatif ) : ",
          value: e.target.value,
          reponse : 1,
          identifiant : 1

        };
        setCurrentRep(reponse);

      }
    



      const returnInfoSang = () => {
        return (
          <div className="BulleInfo">
            <p>
            « (Groupe sanguin 2 déterminations, HCG quantitatif) Injection d’Immunoglobulines anti-D nécessaire en cas de rhésus négatif et de rhésus positif ou inconnue chez le partenaire, avant toute IVG ou dans les 72h suivant tout saignement. »
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
    <div className={currentClassCard}>
            <h2>
             Prise de sang effectuée
      </h2>
      <Form>
      <div key={`Bilan-radio`} className="mb-3" onChange={(e)=>{recupRadioBilan(e);}}>
      <Form.Check 
        type='radio'
        id={`BilanOui`}
        label={`Oui`}
        value="Oui"
        name="BilanSang"
        onClick={()=>{setCurrentVerrou("");changeBtnClass();}}

      />

<Form.Check 
        type='radio'
        id={`BilanNon`}
        label={`Non`}
        value="Non"
        name="BilanSang"
        onClick={()=>{afficheverrou();setCurrentClassBtt(classBouttonBase);}}

      />
      </div>
      </Form>

          {currentVerrou}




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
        setCurrentClassCard(classActifCard);

        props.ajoute(currentRep);
        setTimeout(() => {
          props.suite(props.keys);
 
        }, 501);
             
            }}>Suivant</Button>



            </div>
    
  );






  
 
}

export default BlocPriseSangEff;