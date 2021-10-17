import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocMiso.css";


function BlocMiso(props) {
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
  }

  const [ currentRep, setCurrentRep] =useState({
    titre : "Contre-indication médicamenteuse Misoprostol : ",
        value : "",
        reponse : 0
      });

      const [infoSupp, setInfoSupp] = useState({
        titre : "",
        value : "",
        reponse : 1,
        identifiant : 1

      });
    
    


      const recupRadioIST = (e) => {
        let reponse = {
          titre : "Contre-indication médicamenteuse Misoprostol : ",
          value : e.target.value,
          reponse : 1,
          identifiant : 1

        };
        setCurrentRep(reponse);

      }

      
    



      const returnInfoIST = () => {
        return (
          <div className="BulleInfo">
            <p>
            Hypersensibilité au misoprostol,, grossesse non confirmée, suspicion de grossesse extra-utérine.
            </p>            
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







      const [ currentVerrou, setCurrentVerrou] = useState("");

      const verrouTxt = () => {
        return (
            <div className="Red Verrou">
                <p>
                Dans le cadre de l’interruption volontaire de grossesse, votre réponse va à l’encontre des recommandations établies actuellement en vigueur en France.
                <br></br>
                <br></br>
                Il est nécessaire d’adresser votre patiente vers le centre de référence duquel dépend la patiente (à défaut aux urgences spécialisés le plus proche).
                <br></br>
                Le degré d’urgence est à établir selon les signes cliniques ou l’âge gestationnel estimé.
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
    



  return (
    <div className={currentClassCard}>
        <h2>Contre-indication médicamenteuse Misoprostol</h2>
      <br></br>
      <Form>
      <div key={`Ist-radio`} className="mb-3" onChange={(e)=>{recupRadioIST(e);}}>
      <Form.Check 
        type='radio'
        id={`ISToui`}
        label={`Oui`}
        value="Oui"
        name="ISTantibio"
        onClick={()=>{afficheverrou();setCurrentClassBtt(classBouttonBase);}}
      />

<Form.Check 
        type='radio'
        id={`IstNon`}
        label={`Non`}
        value="Non"
        name="ISTantibio"
        onClick={()=>{setCurrentVerrou("");changeBtnClass();}}
      />
      </div>
      </Form>
      <div>
          {currentVerrou}
      </div>
      <br></br>
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
                               setCurrentClassCard(classActifCard);

                               props.ajoute(currentRep);
                               setTimeout(() => {
                                 props.suite(props.keys);
                        
                               }, 501);
             
            }}>Suivant</Button>


     
            </div>
    
  );






  
 
}

export default BlocMiso;