import React, { useState } from "react";
import Sponsor from "./Sponsor";
import Un from "../assets/images/Un.svg";
import Deux from "../images/Deux.svg";
import Trois from "../images/Trois.svg";
import Quatre from "../images/Quatre.svg";
import Cinq from "../images/Cinq.svg";
import Six from "../images/Six.svg";
import Sept from "../images/Sept.svg";
import "./Footer.css";

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

