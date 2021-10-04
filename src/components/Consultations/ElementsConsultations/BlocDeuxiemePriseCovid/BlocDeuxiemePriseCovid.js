import React , {useState,useEffect} from "react";

import { Button } from "react-bootstrap";



import "./BlocDeuxiemePriseCovid.css";
import OuiCovidDeuxiemePriseMedi from "@components/textApp/OuiCovidDeuxiemePriseMedi";


function BlocDeuxiemePriseCovid(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])

  const [ currentRep, setCurrentRep] =useState({
    titre : "Consultation faite par téléconsultation : ",
        value : "Non",
        reponse : 0
      });


    const recupConsultCovid = (e) => {
        let reponse = {
          titre : "Consultation faite par téléconsultation : ",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentRep(reponse);
        
      }


    const [txtCovid, setTxtCovid] = useState(OuiCovidDeuxiemePriseMedi);
    const [currentTxt,setCurrentTxt]= useState("");

    const afficheTxt = () => {
        let objetAAjouter = txtCovid;
        setCurrentTxt(objetAAjouter);
    }

 


  return (
    <div className="BlocConsultationStyle">
            <h2>Consultation faite par téléconsultation :</h2>
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
                  <Button variant="info" className="BouttonSuivantActif" onClick={()=>{
                        props.ajoute(currentRep);
                        props.suite(props.keys);
             
            }}>Suivant</Button>

            </div>
    
  );






  
 
}

export default BlocDeuxiemePriseCovid;