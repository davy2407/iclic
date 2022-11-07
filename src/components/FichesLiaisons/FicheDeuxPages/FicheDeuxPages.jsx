import React, { useRef } from 'react';
import Logo from "@assets/images/LOGO_IVG.svg";
import './FicheDeuxPages.css';

class FicheDeuxPages extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataUn : this.props.data.blocUn,
            dataDeux : this.props.data.blocDeux,
            titre : this.props.titre
        }
    }
  render() {
     
    return (
        <div className="containerR" > 
          <div className="Bloc1Resume">
          <div className="Droite">
          <img src={Logo} className="logoT"></img>


          </div>
      <br></br>
      <br></br>
      <h1>
      
      {this.state.titre}
      </h1>
      <br></br>
      <p className="pStart">Médecin – sage-femme – établissement de santé :</p>
     

      <p className="pStart">Nom/prénom et date de naissance :</p>
 
      <p className="pStart">Tel :</p>
      <br></br>
      <p className="pStart">Antécédent(s) :</p>
      <br></br>
      <p className="pStart">Allergie(s) ::</p>
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








      
      
      
      
    <div className="Gauche">{this.state.dataUn.map((objet)=>{
    
        return (
          <div>
            
            <p>{objet.titre}  {objet.value}<br></br>
            {objet.titreBis}  {objet.valueBis}

            </p>

            
          </div>
        )
        
      
    
  })}
   <p>
  Résultat à joindre.
  </p>
  </div>
  <p>
  Il n’existe pas de contre indication médicamenteuse à l’IVG hors établissement de santé. 
  </p>
 
          </div>
          <div className="Bloc2Resume">
          <div className="Droite">
          <img src={Logo} className="logoT"></img>


          </div>
          <div className="Gauche">{this.state.dataDeux.map((objet)=>{
            
        return (
          <div>
            
            <p>{objet.titre}  {objet.value}<br></br>
            {objet.titreBis}  {objet.valueBis}

            </p>

          </div>
        )
        
      
    
  })}
   
  </div>
  <br></br>
      <br></br>
      
      
   
      
      <p>
          Cette fiche de liaison a été établie à partir des recommandations du livret
           d’information à l’attention des médecins et des sages-femmes distribués
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
      

   
     

      </div>
    );
  }
}


export default FicheDeuxPages;