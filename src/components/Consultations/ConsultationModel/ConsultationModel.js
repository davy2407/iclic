import React , {useState,useEffect} from "react";

import { Button } from "react-bootstrap";



import "./ConsultationModel.css";


function ConsultationModel(props) {

  



 
  

  

 
  const [listeElCon,setListeElCon] = useState(props.onElCons.listeElementsConsulations)
  const [currentBloc, setCurrentBloc] = useState([listeElCon[0]]);

  const [listeReponseConsultation, setListeReponseConsultation] = useState([]);
  
 
  const ajouteReponseCons = (reponse) => {
    let objetAAjouter = reponse;
    let listeRep = [...listeReponseConsultation];
    listeRep.push(objetAAjouter);
    console.log(listeRep);
    setListeReponseConsultation(listeRep);
    props.onFonction.recup(listeRep);
  }

  const afficheSuite = (iden) => {
    let limite = listeElCon.length - 1;
    let id = iden;
    if (id>=limite) {
      props.onElCons.fonctionTarif();
    } else {
      let newId = id + 1;
    setCurrentBloc([listeElCon[newId]]);

    }
    
    
  }


  const retourArriere = (iden) => {
    let listeRep = [...listeReponseConsultation];
    let limite = 0;
    let id = iden;
    
    if (id>limite) {
      

      let newId = id - 1;
      listeRep.splice(newId);
      setListeReponseConsultation(listeRep);
      setCurrentBloc([listeElCon[newId]]);
    }
    console.log(listeRep);
  }



 

  return (
      <div  
            
            className="Consultation">
        <h1>{props.onElCons.titre}</h1>

        <br></br>
        <div className="ContainerInter">
        {currentBloc.map((objet) => {
          return (
            <objet.objet 
            keys = {objet.id}
            suite = {afficheSuite}
            ajoute = {ajouteReponseCons}
            retour = {retourArriere}
              
            ></objet.objet>
          );
        })}

        </div>

          
         

      </div>
    
  );






  
 
}

export default ConsultationModel;
