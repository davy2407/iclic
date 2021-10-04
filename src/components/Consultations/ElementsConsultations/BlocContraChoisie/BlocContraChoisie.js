import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import ContraceptionHAS from "@assets/pdf/ContraceptionPostIVGHAS.pdf";
import newPdfIcon from "@assets/images/PDFicon.svg";






import "./BlocContraChoisie.css";


function BlocContraChoisie(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])
  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);
  
  const [ classIcon, setClassIcon] = useState("iconPDFNew");

  const [ hoverIcon, setHoverIcon] = useState("iconPDFNewHover");
  
  const [ iconConsen, setIconConsen] = useState(classIcon);

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
          titre: "Contraception choisie par la patiente : Oui ; Type contraception : ",
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
              <option value="">Choisir..</option>
        <option value="implant">implant</option>
        <option value="pilule">pilule</option>
        <option value="patch">patch</option>
        <option value="anneau vaginal">anneau vaginal</option>
        <option value="cape cervicale">cape cervicale</option>
        <option value="diaphragme">diaphragme</option>
        <option value="préservatif féminin">préservatif féminin</option>
        <option value="DIU hormonal et DIU au cuivre">DIU hormonal et DIU au cuivre</option>
        <option value="stérilisation">stérilisation</option>
        <option value="spermicides">spermicides</option>
        <option value="contraceptifs injectables">contraceptifs injectables</option>
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
              
              <p className="Red">
            la reprise  d’ une contraception efficace est indispensable dès la réalisation de l’IVG.          
             </p>
             <p>
             Rappel : le préservatif : seule méthode efficace contre les IST. 
Remboursé par l’assurance maladie  (10 décembre 2018 - <a className="Bold" target="_blank" rel="noopener noreferrer" href="https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/article/premier-preservatif-rembourse-par-l-assurance-maladie ">lien info remboursement</a>). 
             </p>
             <p>
             La pilule a débuter au moment de la 1ère prise médicamenteuse ou le lendemain. 
L’implant a débuter le jour de la 1ere prise médicamenteuse ou à la consultation post-IVG(contraception dans l’intervalle).
             </p>
             <p>
             DIU placé lors de la visite de contrôle post-IVG médicamenteuse ou ultérieurement.  
             </p>
            
             <p>
                 <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://www.choisirsacontraception.fr/?gclid=Cj0KCQjwufn8BRCwARIsAKzP695ZxM7VW0eQH96CJa4iLGXVGsSe3laQdLa5O41MToiliObY-cgsHTAaAuoxEALw_wcB" >choisirmacontraception.fr</a>
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
    <div className="BlocConsultationStyle">
 <h2>Contraception choisie par la patiente</h2>


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
<p>


            <a className="NewDocContainer"  href={ContraceptionHAS} rel="noopener noreferrer" target="_blank">
      <input
        className={iconConsen}
        onMouseEnter={()=>{
          setIconConsen(hoverIcon);
          
        }}
        onMouseOut={()=>{
          setIconConsen(classIcon);
        }}
        type="image"
        alt = "Image pdf Info Contraception HAS"
        src={newPdfIcon}
      />
       HAS contraception PDF
      </a>
              
             </p>
<input
onClick={changementCouleurSVGAntiD}
className="Lampe"
type="image"
src={logoAfficheAntiD}
/>
<div className="ContainerBulle">{currentInfoAntiD}</div>



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

export default BlocContraChoisie;