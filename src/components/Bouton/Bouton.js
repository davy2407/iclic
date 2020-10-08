import React from 'react';
import './Bouton.css';



function Bouton(props){
    
    return(
        
        
    <button
        onClick={()=>{
            if (props.onClick) {
                props.onClick();
                
            }
            props.onEffet();
        }}>{props.TextB}</button>
        
    )
}


export default Bouton;