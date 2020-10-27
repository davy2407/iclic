import React from "react";
import "./Header.css";

import Logo from "@assets/images/LOGO_IVG.svg";
import Banniere from "@assets/images/Banniere.svg";

function Header() {
  return (
    <div className="Header">
      
      {/* <div className="Banderolle">
              <img src={Banniere} className="logoB"></img>
            </div> */}
      
          
        <img src={Banniere} className="Banniere"></img>
        <img src={Logo} className="logoH"></img>
      
    </div>
  );
}

export default Header;

