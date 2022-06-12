import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";






import "./BlocControleEchoOuAvis.css";


function BlocControleEchoOuAvis(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])
  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);
  
  const [ classIcon, setClassIcon] = useState("iconPDFNew");

  const [ hoverIcon, setHoverIcon] = useState("iconPDFNewHover");
  
  const [ iconConsen, setIconConsen] = useState(classIcon);

  const [ classBaseCard, setClassBaseCArd] =useState("BlocConsultationStyle");

  const [classActifCard,setClassActifCard] =useState("BlocConsultationStyleActiv");
 
  const [currentClassCard, setCurrentClassCard] =useState(classBaseCard);
 


  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  }

  const [ currentRep, setCurrentRep] =useState({
    titre: "Contraception choisie par la patiente : ",
    value: "",
    reponse : 0
  });

      const [ currentBisRep, setCurrentBisRep] =useState({
        titre : "Nécessité d’une injection préventive d’Ig anti-D : ",
            value : "",
            titreBis : "",
            valueBis : "",
            reponse : 0
          });


      const recupRadioAnti = (e) => {
        let reponse = {
            titre: "Contraception choisie par la patiente : ",
            value: e.target.value,
          reponse : 1
        };
        if (e.target.value=="Oui") {
            setCurrentBisRep(reponse);
            setCurrentClassBtt(classBouttonBase);


        }
        else {
            setCurrentRep(reponse);
            changeBtnClass();
            
        }
        
        
      }


      const handleChangeAnti = (e) => {
    
    
    
        let reponse = {
          titre: "Nécessité d’une échographie de contrôle et/ou un avis spécialisé au centre de référence : Oui ; Cause : ",
          value: e.target.value,
          reponse : 1
        };
       setCurrentRep(reponse);
       changeBtnClass();
    
        
      };


      const ouiAnti = () => {
        return (
            <div>
                <Form.Group>
      <Form.Control as="select" size="lg" onChange={(e) => {
              handleChangeAnti(e);
            }}>
        <option value="">Cause</option>
        <option value="Un échec après analyse de la décroissance du taux de B-HCG. ">1. Un échec après analyse de la décroissance du taux de B-HCG. </option>
        <option value="Des saignements abondants (sans signes cliniques d’anémie ou facteurs de risques/comorbidité).">2. Des saignements abondants (sans signes cliniques d’anémie ou facteurs de risques/comorbidité).</option>
        <option value="Une fièvre pouvant être le signe d’une infection post-IVG médicamenteuse.">3. Une fièvre pouvant être le signe d’une infection post-IVG médicamenteuse.</option>
        <option value="Des douleurs ne s’atténuant pas par la prise de médicaments.">4. Des douleurs ne s’atténuant pas par la prise de médicaments.</option>
       
      </Form.Control>
      </Form.Group>
            </div>
        )
    }

    const [afficheOUi, setAfficheOUI] = useState(()=>ouiAnti());

    const [currentOui, setCurrentOui] = useState("");

    const afficheCause = () => {
        let txtAAfficher = afficheOUi;
        setCurrentOui(txtAAfficher);

    }

    const returnInfoAntiD = () => {
        return (
          <div className="BulleInfo">
              
              <p>
                 Une échographie de contrôle ou un avis spécialisé peuvent être demandés devant :
                </p>
                <ul>
                    <li> Un échec après analyse de la décroissance du taux de BHCG. </li>
                    <li> Des saignements abondants (sans signe clinique d’anémie ou facteur de risque/comorbidité).</li>
                    <li>Une fièvre pouvant être le signe d’une infection post-IVG médicamenteuse.</li>
                    <li>Des douleurs ne s’atténuant pas par la prise d'antalgique.</li>
                </ul>
                <p>
                Il est à noter que des patientes présentant des saignements abondants
                 avec signes cliniques d’anémie peuvent être adressées au service
                  d’urgence spécialisée du centre de référence.
                  
                </p>
                <p>
                <a  target="_blank" rel="noreferrer noopener" href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter">
                  HAS recommandation
                  </a>
                </p>
            
          </div>
        );
      };
    
      const [txtAntiD, setTxtAntiD] = useState(() => returnInfoAntiD());
    
      const [currentInfoAntiD, setCurrentInfoAntiD] = useState("");
    
      const affichageTxtAntiD = () => {
        let txtAEnlever = currentInfoAntiD;
        let txtAAfficher = txtAntiD;
        setCurrentInfoAntiD(txtAAfficher);
        setTxtAntiD(txtAEnlever);
      };
    
      const [logoAfficheAntiD, setLogoAfficheAntiD] = useState(LightOff);
    
      const [logoNonAfficheAntiD, setLogoNonAfficheAntiD] = useState(LightOn);
    
      const changementCouleurSVGAntiD = () => {
        let currentLampe = logoAfficheAntiD;
        let currentCache = logoNonAfficheAntiD;
        setLogoNonAfficheAntiD(currentLampe);
        setLogoAfficheAntiD(currentCache);
        affichageTxtAntiD();
      };

    
    



  return (
    <div className={currentClassCard}>
 <h2>Nécessité d’une échographie de contrôle et /ou un avis spécialisé au centre de référence</h2>


<Form>
<div key={`anti-radio`} className="mb-3" onChange={(e)=>{recupRadioAnti(e);}}>
<Form.Check 
type='radio'
id={`antiOui`}
label={`Oui`}
value="Oui"
name="antiD"
onClick={()=>{
afficheCause();}}

/>

<Form.Check 
type='radio'
id={`antiNon`}
label={`Non`}
value="Non"
name="antiD"
onClick={()=>{
setCurrentOui("");
}}

/>

</div>
</Form>





<div>{currentOui}</div>

<input
onClick={changementCouleurSVGAntiD}
className="Lampe"
type="image"
src={logoAfficheAntiD}
/>
<div className="ContainerBulle">{currentInfoAntiD}</div>
<br></br>
<br></br>



<p>
            <a className="Bold" target="_blank" href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter">Lien protocole HAS</a>

            </p>



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

export default BlocControleEchoOuAvis;