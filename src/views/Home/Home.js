import React, { useState, useEffect, useRef } from "react";

// import iclic components
import Footer from "@components/Footer";
import Header from "@components/Header";
import MidSection from "@components/MidSection";
import APropos from "@components/APropos";
import MentionL from "@components/MentionL";
import Contact from "@components/Contact";
import SourceLien from "@components/SourceLien";
import SourceDocs from "@components/SourceDocs";
import Covid from "@components/Covid";


function Home() {
  useEffect(() => {
    window.scrollTo(0,0);
 }, [])


 














 




 ////// Liste d'objets contenant les élements affichés sur la midSection

 const [listeElmentMid, setListeElementMid] = useState(
   [
    {
      midSection: "MidSection",
      id: 0,
      objet: MidSection,
      
      
    },
    {
      midSection: "Covid",
      id: 1,
      objet: Covid,
      
      
    },
    {
      midSection: "SourceDocs",
      id: 2,
      objet: SourceDocs,
      
      
    },
    {
      midSection: "SourceLien",
      id: 3,
      objet: SourceLien,
      
      
    },
    {
      midSection: "Contact",
      id: 4,
      objet: Contact,
      
      
    },
    {
      midSection: "Mention légales",
      id: 5,
      objet: MentionL,
      
      
    },
    {
      midSection: "A propos",
      id: 6,
      objet: APropos,
      
      
    },
   ]
 )

 const [currentMid, setCurrentMid] = useState([listeElmentMid[0]]);


 ///////////////////////////


  const afficheAPropos = () => {
    let objetAAjouter = listeElmentMid[6];
    setCurrentMid([objetAAjouter]);
  };

  const afficheMention = () => {
    let objetAAjouter = listeElmentMid[5];
    setCurrentMid([objetAAjouter]);
  };

  const afficheContact = () => {
    let objetAAjouter = listeElmentMid[4];
    setCurrentMid([objetAAjouter]);
  };

  const afficheSourceLien = () => {
    let objetAAjouter = listeElmentMid[3];
    setCurrentMid([objetAAjouter]);
  };

  const afficheSourceDocs = () => {
    let objetAAjouter = listeElmentMid[2];
    setCurrentMid([objetAAjouter]);

  };

  const afficheCovid = () => {
    let objetAAjouter = listeElmentMid[1];
    setCurrentMid([objetAAjouter]);
  }

  return (
    <React.Fragment>
      
      <Header
        onPropos={afficheAPropos}
        onMention={afficheMention}
        onContact={afficheContact}
        onSource={afficheSourceLien}
        onDocs={afficheSourceDocs}
        onCovid={afficheCovid}
      />
            <div className="MargeHoriPetite"></div>






{currentMid.map((objet) => {
          return (
            <objet.objet
            key={objet.id}
            ></objet.objet>
          );
        })}









      <div className="MargeHori"></div>
      <span className="Large">Mise à jour : 07/11/2022</span>

      <Footer className="FooterTest" />
    </React.Fragment>
  );
}

export default Home;