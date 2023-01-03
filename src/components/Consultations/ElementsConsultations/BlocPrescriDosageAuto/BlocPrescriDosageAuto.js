import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocPrescriDosageAuto.css";


function BlocPrescriDosageAuto(props) {
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
    titre : "",
        value : "",
        reponse : 0,
        identifiant : 2

      });


    const recupRadioEcho = (e) => {
        let reponse = {
          titre: "",
          value: "",
          reponse : 1,
          identifiant : 2

        };
        
        setCurrentRep(reponse);
        
      }



      const echographie = () => {
        return (
          <div className="BulleInfo">
            <p>
            Indispensable pour affirmer la réussite de la méthode.           
             </p>
             <p>
             L’autotest urinaire peut également être utilisé. (A domicile combiné à un suivi téléphonique)
             </p>

             {/* <a class="Bold" rel="noreferrer noopener" target="_blank" href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter">HAS recommandation</a> */}
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
    <div className={currentClassCard}>
        <h2>
        Prescription d’un dosage de ß-HCG à faire pour la consultation de contrôle J15-21 ou d’un autotest urinaire combiné à un suivi téléphonique
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
        alt="Image information  Prescription d’un dosage de ß-HCG"
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
                               setCurrentClassCard(classActifCard);

                               props.ajoute(currentRep);
                               setTimeout(() => {
                                 props.suite(props.keys);
                        
                               }, 501);
             
            }}>Suivant</Button>


            
            </div>
    
  );

 
}

export default BlocPrescriDosageAuto;