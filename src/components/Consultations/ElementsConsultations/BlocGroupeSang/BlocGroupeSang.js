import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";





import "./BlocGroupeSang.css";


function BlocGroupeSang(props) {
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

    const [ currentRep, setCurrentRep] =useState({
        titre : "Groupe Sanguin : ",
        value : "",
        reponse : 0,
        identifiant : 1

      });
    


      const handleChangeGroupe = (e) => {
  
       
        
        
        let reponse = {
          titre: "Groupe Sanguin : ",
          value: e.target.value,
          reponse : 1,
          identifiant : 1

        };
       setCurrentRep(reponse);
      
        
      };




  return (
    <div className={currentClassCard}>
         <h2>Groupe sanguin : </h2>
        <Form.Group>
  <Form.Control as="select" size="lg" onChange={(e) => {
          handleChangeGroupe(e);
          changeBtnClass();
        }}>
          <option value="">Choisir..</option>
    <option value="A-">A-</option>
    <option value="A+">A+</option>
    <option value="B-">B-</option>
    <option value="B+">B+</option>
    <option value="AB-">AB-</option>
    <option value="AB+">AB+</option>
    <option value="O-">O-</option>
    <option value="O+">O+</option>
    <option value="Non connu/Non réalisé">Non connu/Non réalisé</option>
  </Form.Control>
  </Form.Group>
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

export default BlocGroupeSang;