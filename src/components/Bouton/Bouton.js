import React from 'react';
import {Button} from "react-bootstrap";
import './Bouton.css';




function Bouton(props){
    
    return(
        
        
    <Button variant="secondary"
        onClick={()=>{
            if (props.onClick) {
                props.onClick();
                
            }
            props.onEffet();
        }}>{props.TextB}</Button>
        
    )
}


export default Bouton;