import React , {useState,useEffect} from "react";

import { Button } from "react-bootstrap";



import "./BlocCovidPostIVG.css";
import CovidPostIvg from "@components/textApp/CovidPostIvg";


function BlocCovidPostIVG(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])

 const [ classBaseCard, setClassBaseCArd] =useState("BlocConsultationStyle");

 const [classActifCard,setClassActifCard] =useState("BlocConsultationStyleActiv");

 const [currentClassCard, setCurrentClassCard] =useState(classBaseCard);

 const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

 const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

 const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);




  const [ currentRep, setCurrentRep] =useState({
    titre : "Téléconsultation : ",
        value : "",
        reponse : 0
      });

      const changeBtnClass = () => {
        setCurrentClassBtt(classBouttonActif);
      }




    const recupConsultCovid = (e) => {
        let reponse = {
          titre : "Consultation faite par téléconsultation : ",
          value: e.target.value,
          reponse : 1
        };
        
        setCurrentRep(reponse);
        
      }


    const [txtCovid, setTxtCovid] = useState(CovidPostIvg);
    const [currentTxt,setCurrentTxt]= useState("");

    const afficheTxt = () => {
        let objetAAjouter = txtCovid;
        setCurrentTxt(objetAAjouter);
    }

 


  return (
    <div className={currentClassCard}>
            <h2>Consultation faite par téléconsultation</h2>
            <Button variant="danger" value="Oui" onClick={(e)=>{
                recupConsultCovid(e)
                afficheTxt();
                changeBtnClass();

            }}>Oui</Button>
            <br></br>
            <Button variant="danger" value="Non" onClick={(e)=>{
                recupConsultCovid(e);
                setCurrentTxt("");
                changeBtnClass();
              
            }}>Non

            </Button>
            <br></br>

            <div>{currentTxt}</div>
            <br></br>
            {/* <Button variant="info" className="BouttonSuivant" onClick={()=>{
               props.animation();
              props.suite(props.keys);
             
            }}>Suivant</Button> */}
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

export default BlocCovidPostIVG;