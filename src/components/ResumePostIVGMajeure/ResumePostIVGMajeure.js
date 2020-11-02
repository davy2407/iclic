import React from 'react';
import Logo from "@assets/images/LOGO_IVG.svg";
import './ResumePostIVGMajeure.css';

class ResumePostIVGMajeure extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : this.props.data
        }
    }
  render() {
    
    return (
        <div className="containerM" >
      <img src={Logo} className="logo"></img>
      <br></br>
      <br></br>
      <h1>
      Résumé consultation post IVG :  
      </h1>
      <br></br>
      <p>Nom/prénom et date de naissance :</p>
      <br></br>
      <br></br>
      
      <p>Antécédent(s) :</p>
      <br></br>
      <br></br>
      
      
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
      <br></br>
      <p>Date et Tampon : </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Ces données ont été recueillies de façon anonyme et gratuite à partir du site IVGclic.com.</p>

      </div>
    );
  }
}


export default ResumePostIVGMajeure;