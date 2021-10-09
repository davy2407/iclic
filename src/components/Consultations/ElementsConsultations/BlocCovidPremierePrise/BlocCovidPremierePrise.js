import React , {useState,useEffect} from "react";

import { Button } from "react-bootstrap";



import "./BlocCovidPremierePrise.css";
import TxtCovidPrise from "@components/textApp/TxtPremierePriseCovid";


function BlocCovidPremierePrise(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])

  const [ currentRep, setCurrentRep] =useState({
    titre : "Consultation faite par téléconsultation : ",
        value : "Non",
        reponse : 0,
        identifiant : 1,
        num : 0
      });


    const recupConsultCovid = (e) => {
        let reponse = {
          titre : "Consultation faite par téléconsultation : ",
          value: e.target.value,
          reponse : 1,
          identifiant : 1,
          num : 0


        };
        
        setCurrentRep(reponse);
        
      }


    const [txtCovid, setTxtCovid] = useState(TxtCovidPrise);
    const [currentTxt,setCurrentTxt]= useState("");

    const afficheTxt = () => {
        let objetAAjouter = txtCovid;
        setCurrentTxt(objetAAjouter);
    }

 


  return (
    <div className="BlocConsultationStyle">
            <h2>Consultation faite par téléconsultation</h2>
            <Button variant="danger" value="Oui" onClick={(e)=>{
                recupConsultCovid(e)
                afficheTxt();
            }}>Oui</Button>
            <br></br>
            <div>{currentTxt}</div>
            <br></br>
            {/* <Button variant="info" className="BouttonSuivant" onClick={()=>{
               props.animation();
              props.suite(props.keys);
              
             
            }}>Suivant</Button> */}




<p>
        Protocole et coordonnées du centre de référence remise à la patiente.<br></br>
 À remplir manuellement sur la fiche de liaison.
        </p>
        <br></br>
        <br></br>

                  <Button variant="info" className="BouttonSuivantActif" onClick={()=>{
                        props.ajoute(currentRep);
                        props.suite(props.keys);
             
            }}>Suivant</Button>

            </div>
    
  );






  
 
}

export default BlocCovidPremierePrise;