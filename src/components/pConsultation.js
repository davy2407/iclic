import React from 'react';
import './pConsultation.css';








function pConsultation(props){
   

  
    
    
   

   
        return (
            <div className="consultationContainer">
                <h1>Première consultation</h1>
                <p>{props.onTexte}</p>
                <br></br>
                <p>{props.onRecap}</p>
            
          </div>
    )
}


export default pConsultation;