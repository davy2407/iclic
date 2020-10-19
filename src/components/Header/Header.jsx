import React from "react";
import "./Header.css";

import Logo from "@assets/images/LOGO_IVG.svg";

function Header() {
  return (
    <div className="Header">
      
      {/* <div className="Banderolle">
              <img src={Banniere} className="logoB"></img>
            </div> */}
      <div className="logoContainer">
        <img src={Logo} className="logoH"></img>
      </div>
    </div>
  );
}

export default Header;

