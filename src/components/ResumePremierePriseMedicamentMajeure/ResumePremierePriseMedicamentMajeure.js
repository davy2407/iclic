import React, { useRef } from 'react';
import Logo from "@assets/images/LOGO_IVG.svg";
import './ResumePremierePriseMedicamentMajeure.css';

class ResumePremierePriseMedicamentMajeure extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : this.props.data
        }
    }
  render() {
     
    return (
        <div className="containerR" >
      <img src={Logo} className="logoT"></img>
      <br></br>
      <br></br>
      <h1>
      Fiche de liaison 1ere prise médicamenteuse
      </h1>
      <br></br>
      <p className="pStart">Médecin – sage-femme – établissement de santé :</p>
      <br></br>
      <p className="pStart">Date de la convention :</p>
      <br></br>
      <p className="pStart">Nom/prénom et date de naissance :</p>
      <br></br>
      <p>Tel :</p>
      <br></br>
      <p className="pStart">Antécédent(s) :</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p className="pStart">Grossesse : </p>
      <p className="pStart">FCS :</p>
      <p className="pStart" >IVG préalable :</p>
      <p className="pStart">GEU :</p>
      <p className="pStart">Infections :</p>
      <p className="pStart">Autres :</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>








      
      
      
      
    <div className="Gauche">{this.state.data.map((objet)=>{
    return (
      <div>
        
        <p>{objet.titre}  {objet.value}</p>
        
      </div>
    )
  })}</div>
    <br></br>
    <br></br>
      <br></br>
      
      
   
      
      <p>
          Cette fiche de liaison a été établie à partir des recommandations du livret
           d’information à l’attention des médecins et es sages-femmes distribués
            par l’ARS et validé par le ministère des affaires sociales et de la santé.
    </p>
      <br></br>
      <br></br>
      <p className="Tampon">Date et Tampon</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Ces données ont été recueillies de façon anonyme et gratuite à partir du site IVGclic.com.</p>

      </div>
    );
  }
}


export default ResumePremierePriseMedicamentMajeure;