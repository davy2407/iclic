import React , {useState,useEffect} from "react";




import "./TarificationModel.css";


function TarificationModel(props) {



  




 
  
 

  return (
      <div  
            
            className="Consultation">
        <h1>titre</h1>
        {props.onElTarif.map((objet) => {
          return (
            <div>
                {objet.titre}{objet.value}
            </div>
          );
        })}


        {/* <ElementAffiche onData={props.onElTarif}></ElementAffiche> */}


          
         

      </div>
    
  );






  
 
}

export default TarificationModel;
