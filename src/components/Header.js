import React,{Component} from 'react';
import './Header.css';
import Logo from '../images/LOGO_IVG.svg';
import Banniere from '../images/LogoBanniere.svg';





function Header(){
   

  
    
    
   

   
        return (
            <div className="Header">
            <div className="Menu"></div>
            {/* <div className="Banderolle">
              <img src={Banniere} className="logoB"></img>
            </div> */}
            <div className="logoContainer">
              <img src={Logo} className="logo"></img>
            </div>
  
          </div>
    )
}


export default Header;