import React from "react";
import "./QuestionStart.css";
import {Button} from "react-bootstrap";




function QuestionStart(props) {

    return (
        
            <div className="QuestionStart">
                <div className="ContainerQuestion">
                <h1>Êtes-vous professionel de santé ? </h1>
                <Button variant="danger" value="Oui" onClick={()=>{
                    props.onFonction.pro();
                    props.onFonction.proTxt();
                }}  className="BouttonQuestionStart">Oui</Button>
                <Button variant="danger" value="Non" onClick={props.onFonction.nonPro} className="BouttonQuestionStart">Non</Button>
                </div>
            </div>
        
    )

}


export default QuestionStart;
