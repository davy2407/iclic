import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import InfoPatiente from "@assets/pdf/FicheInfoPatiente.pdf";
import FicheConseilSurveillance from "@assets/pdf/FicheConseilSurveillance.pdf";
import newPdfIcon from "@assets/images/PDFicon.svg";






import "./BlocInfoEffets.css";


function BlocInfoEffets(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])

  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const [ classBaseCard, setClassBaseCArd] =useState("BlocConsultationStyle");

  const [classActifCard,setClassActifCard] =useState("BlocConsultationStyleActiv");
 
  const [currentClassCard, setCurrentClassCard] =useState(classBaseCard);

  const [ classIcon, setClassIcon] = useState("iconPDFNew");

  const [ hoverIcon, setHoverIcon] = useState("iconPDFNewHover");
  
  const [ iconConsen, setIconConsen] = useState(classIcon);


  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  };

  const [ currentRep, setCurrentRep] =useState({
    titre : "Information claires et établies des effets secondaires possibles des traitements : ",
        value : "",
        reponse : 0,
        identifiant : 2

      });


      const recupRadioPsycho = (e) => {
        let reponse = {
          titre : "Information claires et établies des effets secondaires possibles des traitements : ",
          value : e.target.value,
          reponse : 1,
          identifiant : 2

        };
        setCurrentRep(reponse);

      }



      const returnInfo = () => {
        return (
          <div className="BulleInfo">
            <h4>ES mifépristone :</h4>
        <p>
        nausées/vomissements, diarrhées, crampes abdominales, infection.
        </p>
        <br></br>
        <h4>ES misoprostol :</h4>
        <p>
        nausées/vomissements, diarrhées, crampes abdominales, infection, contractions utérines, saignements utérins, malformations fœtales.
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
      <h2>Information claires et établies des effets secondaires possibles des traitements</h2>
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
      <a className="NewDocContainer" rel="noreferrer noopener"  href={InfoPatiente} target="_blank">
      <input
        alt="Image document consentement"
        className={iconConsen}
        onMouseEnter={()=>{
          setIconConsen(hoverIcon);
          
        }}
        onMouseOut={()=>{
          setIconConsen(classIcon);
        }}
        type="image"
        src={newPdfIcon}
      />
        Fiche info patient traitement
      </a>

      <a className="NewDocContainer" rel="noreferrer noopener"  href={FicheConseilSurveillance} target="_blank">
      <input
        alt="Image document consentement"
        className={iconConsen}
        onMouseEnter={()=>{
          setIconConsen(hoverIcon);
          
        }}
        onMouseOut={()=>{
          setIconConsen(classIcon);
        }}
        type="image"
        src={newPdfIcon}
      />
        Fiche information et conseil de surveillance 
      </a> 

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

export default BlocInfoEffets;