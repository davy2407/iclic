import React, { useState } from "react";
import "./Footer.css";

import Sponsor from "@components/Sponsor";

import Un from "@assets/images/Un.svg";
import Deux from "@assets/images/Deux.svg";
import Trois from "@assets/images/Trois.svg";
import Quatre from "@assets/images/Quatre.svg";
import Cinq from "@assets/images/Cinq.svg";
import Six from "@assets/images/Six.svg";
import Sept from "@assets/images/Sept.svg";

function Footer() {
  const [listeSponsor, setListeSponsor] = useState([
    { nom: 1, backgroundImage: Un },
    { nom: 2, backgroundImage: Deux },
    { nom: 3, backgroundImage: Trois },
    { nom: 4, backgroundImage: Quatre },
    { nom: 5, backgroundImage: Cinq },
    { nom: 6, backgroundImage: Six },
    { nom: 7, backgroundImage: Sept },
  ]);

  return (
    <div className="SponsorContainer">
      {listeSponsor.map((sponsor) => {
        return <Sponsor info={sponsor}></Sponsor>;
      })}
    </div>
  );
}

export default Footer;
