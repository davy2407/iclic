import React, { useState } from "react";
import "./Footer.css";

import Sponsor from "@components/Sponsor";

// import Un from "@assets/images/Un.svg";
// import Deux from "@assets/images/Deux.svg";
// import Trois from "@assets/images/Trois.svg";
// import Quatre from "@assets/images/Quatre.svg";
// import Cinq from "@assets/images/Cinq.svg";
// import Six from "@assets/images/Six.svg";
// import Sept from "@assets/images/Sept.svg";
import logoPrenat from "@assets/images/logoPerinaNormandie.png";
import National from "@assets/images/logoNational.jpg";
import LogoKitmedical from "@assets/images/LogoKitmedical.svg";

function Footer() {
  const [listeSponsor, setListeSponsor] = useState([
    // { nom: 1, backgroundImage: Un },
    // { nom: 2, backgroundImage: Deux },
    // { nom: 3, backgroundImage: Trois },
    // { nom: 4, backgroundImage: Quatre },
    // { id: 1, nom: 'UniRouen', backgroundImage: Cinq },
    { id: 2, nom: 'Prenat', backgroundImage: logoPrenat, ref : "https://www.perinatbn.org/" },
    { id: 3, nom: 'Natio', backgroundImage: National, ref : "https://www.conseil-national.medecin.fr/" },
    { id : 4, nom : 'KitMe', backgroundImage : LogoKitmedical, ref : "https://kitmedical.fr/"}
    // { nom: 6, backgroundImage: Six },
    // { nom: 7, backgroundImage: Sept },
  ]);

  return (
    <div className="SponsorContainer">
      {listeSponsor.map((sponsor) => {
        return <a target="_blank" rel="noreferrer noopener" href={sponsor.ref}><Sponsor key={sponsor.id} info={sponsor}></Sponsor></a>;
      })}
    </div>
  );
}

export default Footer;
