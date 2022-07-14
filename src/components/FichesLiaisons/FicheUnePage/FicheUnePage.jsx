import React from 'react';
import Logo from "@assets/images/LOGO_IVG.svg";
import './FicheUnePage.css';

class FicheUnePage extends React.Component {
    constructor(props){
     
        super(props);
        this.state = {
            data : this.props.data,
            titre : this.props.titre

        }
    }
    
  render() {
    
    return (
        <div className="containerT" >
                  <div className="Droite">
          <img src={Logo} className="logoT"></img>


          </div>


      <br></br>
      <br></br>
      <h3>
      {this.state.titre}
      </h3>
      <br></br>
      <p className="pStart">Nom/prénom et date de naissance :</p>
      <br></br>
 
      
      <p className="pStart">Antécédent(s) :</p>
      <br></br>
   
      <br></br>
      <p className="pStart">Allergie(s) :</p>
      <br></br>
      
    <div className="Gauche" >{this.state.data.map((objet)=>{
      if(objet.testFin==1){
        return <p>Identification personne accompagnante (à remplir manuellement) : <br></br>
        {objet.titre}  {objet.value} <br></br>
        {objet.titreBis}  {objet.valueBis}
        </p>
                
      }
      else if(objet.testFin==2){
        return <p>Lieux de la consultation psychosociale (à remplir manuellement) : <br></br>
        {objet.titre}  {objet.value} <br></br>
        {objet.titreBis}  {objet.valueBis}
        </p>
                
      }

    return (
      <div>
        
        <p>{objet.titre}  {objet.value} <br></br>
        {objet.titreBis}  {objet.valueBis}</p>
        
      </div>
    )
  })}</div>
    <br></br>
    <br></br>
      <br></br>
      <p className="pStart">Pour information : </p>
      <br></br>
    <br></br>
      <br></br>
      <p>Il est à noter qu’un délai de 48h entre la consultation psychosociale et la 2eme consultation préalable à l’IVG est à respecter (non obligatoire). </p>
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


export default FicheUnePage;