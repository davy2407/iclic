import React, {useState} from "react";
import ContraceptionHAS from "@assets/pdf/ContraceptionPostIVGHAS.pdf"

import newPdfIcon from "@assets/images/PDFicon.svg";




import "./TxtDeuxiemePriseMaj.css";


function TxtDeuxiemePriseMaj() {


  const [ classIcon, setClassIcon] = useState("iconPDFNew");

  const [ hoverIcon, setHoverIcon] = useState("iconPDFNewHover");
  
  const [ iconConsen, setIconConsen] = useState(classIcon);


  return (
    <div> 
        
        <p>
            Cette consultation intervient 36 à 48 heures après la 1ère prise médicamenteuse,
             qui a lieu à domicile ou, si la femme le désire, en présence du médecin ou de la sage-femme.

            </p> 
            <p>
            <a className="NewDocContainer" rel="noreferrer noopener"  href={ContraceptionHAS} target="_blank">
      <input
        alt="Image document fiche conseil"
        className={iconConsen}
        onMouseEnter={()=>{
          setIconConsen(hoverIcon);
          
        }}
        onMouseOut={()=>{
          setIconConsen(classIcon);
        }}
        type="image"
        src={newPdfIcon}
      />
Recommandation HAS PDF      </a>
           
           
            </p>


        
 
     
    </div>
  );






  
 
}

export default TxtDeuxiemePriseMaj;