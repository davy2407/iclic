import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocHPV.css";


function BlocHPV(props) {
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
    titre : "Frottis à jour ou test HPV",
        value : "",
        reponse : 0
      });
    
      const [currentDateHPV, setCurrentDateHPV]= useState({
        titre : "Date frotti/Test HPV",
        value : "",
        reponse : 1
      });

    const recupRadioHPV = (e) => {
        let reponse = {
          titre : "Frottis à jour (ou test HPV) : ",
          value : e.target.value,
          reponse : 1
        };
        setCurrentRep(reponse);
        if (e.target.value == "Oui") {
          setCurrentDateHPV(
            {
              titre : "Date frotti/Test HPV",
              value : "",
              reponse : 0
            }
          );
          
        } else  {
          setCurrentDateHPV(
            {
              titre : "",
              value : "",
              reponse : 1
            }
          );
          
        }
    
      }




      const NonFrotti = () => {
        return (
          <div>
            <p className="Red">
            Prévoir en post-IVG !
            </p>
          </div>
        )
      };
    
      const [ txtNonFrotti, setTxtNonFrotti] = useState(()=>NonFrotti());
    
      const [ currentNonFrotti, setCurrentNonFrotti] = useState("");
    
      const affichageTxtFrottiNon = () => {
        let txtAEnlever = currentNonFrotti;
        let txtAAfficher = txtNonFrotti;
        setCurrentNonFrotti(txtAAfficher);
        
      };
    
      const returnInfoFrotti = () => {
        return (
          <div className="BulleInfo">
            <p>
             Le plan de dépistage national s’applique : 
            </p>
            <ul>
              <li>
                <p>
                entre 25 et 30 ans, 2 examens cytologiques à un an d’intervalle, puis 3 ans après si résultat normal.            </p>
              </li>
              <li>
                <p>
                A partir de 30 ans, 3 ans après le dernier examen cytologique (résultat normal); Test HPV tous les 5 ans.
                <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://www.has-sante.fr/upload/docs/application/pdf/2019-07/synthese_hpv.pdf">
              lien info
            </a>
                </p>
              </li>
            </ul>
           
          </div>
        );
      };
    
      const [txtFrotti, setTxtFrotti] = useState(() => returnInfoFrotti());
    
      const [currentInfoFrotti, setCurrentInfoFrotti] = useState("");
    
      const affichageTxtFrotti = () => {
        let txtAEnlever = currentInfoFrotti;
        let txtAAfficher = txtFrotti;
        setCurrentInfoFrotti(txtAAfficher);
        setTxtFrotti(txtAEnlever);
      };
    
      const [logoAfficheFrotti, setLogoAfficheFrotti] = useState(LightOff);
    
      const [logoNonAfficheFrotti, setLogoNonAfficheFrotti] = useState(LightOn);
    
      const changementCouleurSVGFrotti = () => {
        let currentLampe = logoAfficheFrotti;
        let currentCache = logoNonAfficheFrotti;
        setLogoNonAfficheFrotti(currentLampe);
        setLogoAfficheFrotti(currentCache);
        affichageTxtFrotti();
      };
    
      const handleChange = (e) => {
        /// recup date frotti
        let myDate = new Date(e.target.valueAsDate);
        
        
        let reponse = {
          titre: "Date Frotti",
          value: e.target.value,
          reponse : 1
        };
       setCurrentDateHPV(reponse);

    
      };


      const cocanation = (elment, elementDate) => {
        let reponse = elment;
        let reponse2 = elementDate;
        let newObjet = {
          titre : reponse.titre,
          value : reponse.value,
          reponse : reponse.reponse,
          titreBis : reponse2.titre,
          valueBis : reponse2.value,
          reponseBis : reponse2.reponse
        }
        props.ajoute(newObjet);
      }


     
    
    



  return (
    <div className="BlocConsultationStyle">
<h2>Frottis à jour ou test HPV</h2>
      <br></br>
      <Form>
      <div key={`hpv-radio`} className="mb-3" onChange={(e)=>{recupRadioHPV(e);changeBtnClass();}}>
      <Form.Check 
        type='radio'
        id={`hpvOui`}
        label={`Oui`}
        value="Oui"
        name="HPV"
      />

<Form.Check 
        type='radio'
        id={`hpvNon`}
        label={`Non`}
        value="Non"
        name="HPV"
        onClick={(e) => {
           
          affichageTxtFrottiNon();
         
        }}
      />

      <Form.Check 
        type='radio'
        id={`default-radio`}
        label={`Non Concernée`}
        value="Non Concernée"
        name="HPV"
      />
      </div>
      </Form>
  
        <div className="ContainerBulle">{currentNonFrotti}</div>
      
      <br></br>
      <label for="dateFrotti">Date : </label>
      <input
        type="date"
        name="dateFrotti"
        id="dateFrotti"
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
      <br></br>
      <input
        onClick={changementCouleurSVGFrotti}
        className="Lampe"
        type="image"
        src={logoAfficheFrotti}
      />
      <br></br>
      <div className="ContainerBulle">{currentInfoFrotti}</div>
      <br></br> 
      <Button variant="info" className="BouttonRetour" onClick={()=>{
        props.retour(props.keys);
             
            }}>Retour</Button>  
      <Button variant="info" className={currentClassBtt}  onClick={()=>{
        // props.ajoute(currentRep);
        // props.ajoute(currentDateHPV);
        cocanation(currentRep,currentDateHPV);
        props.suite(props.keys);
             
            }}>Suivant</Button>

        
      </div>
    
  );


}

export default BlocHPV;
