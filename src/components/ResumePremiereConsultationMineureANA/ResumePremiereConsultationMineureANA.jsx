import React, { useRef } from 'react';
import Logo from "@assets/images/LOGO_IVG.svg";
import './ResumePremiereConsultationMineureANA.css';

class ResumePremiereConsultationMineureANA extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : this.props.data
        }
    }
  render() {
     
    return (
        <div className="containerT" >
      <img src={Logo} className="logo"></img>
      <br></br>
      <br></br>
      <h3>
        Résumé de la consultation de 1er contact médical préalable à l’IVG :{" "}
      </h3>
      <br></br>
      <p>Nom/prénom et date de naissance :</p>
      <br></br>
      <br></br>
      
      <p>Antécédent(s) :</p>
      <br></br>
      <br></br>
      
      <p>Personne accompagnante majeurs ou consentement parental :             identitée :        </p>
      
    <div>{this.state.data.map((objet)=>{
    return (
      <div>
        
        <p>{objet.titre}  {objet.value}</p>
        
      </div>
    )
  })}</div>
    <br></br>
    <br></br>
      <br></br>
      <p>Pour information : </p>
      <br></br>
    <br></br>
      <br></br>
      <p>Il est à noter qu’un délai de 48h entre la consultation psychosociale et la 2eme consultation préalable à l’IVG est à respecter. 
          Il est obligatoire d’amener à cette prochaine consultation l’attestation d’entretien. </p>
      <br></br>
      <br></br>
      <p>Date et Tampon</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Ces données ont été recueillies de façon anonyme et gratuite à partir du site IVGclic.com.</p>

      </div>
    );
  }
}


export default ResumePremiereConsultationMineureANA;