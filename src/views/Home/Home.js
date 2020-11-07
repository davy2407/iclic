import React, { useState } from "react";

// import iclic components
import Footer from "@components/Footer";
import Header from "@components/Header";
import MidSection from "@components/MidSection";
import APropos from "@components/APropos";
import MentionL from "@components/MentionL";
import Contact from "@components/Contact";
import SourceLien from "@components/SourceLien";
import SourceDocs from "@components/SourceDocs";

function Home() {
  const [listeMid, setListeMid] = useState([MidSection, APropos]);

  const afficheAPropos = () => {
    setCurrentMid(APropos);
  };

  const afficheMention = () => {
    setCurrentMid(MentionL);
  };

  const afficheContact = () => {
    setCurrentMid(Contact);
  };

  const afficheSourceLien = () => {
    setCurrentMid(SourceLien);
  };

  const afficheSourceDocs = () => {
    setCurrentMid(SourceDocs);
  };

  const [currentMid, setCurrentMid] = useState(MidSection);
  return (
    <React.Fragment>
      <Header
        onPropos={afficheAPropos}
        onMention={afficheMention}
        onContact={afficheContact}
        onSource={afficheSourceLien}
        onDocs={afficheSourceDocs}
      />

      <div>{currentMid}</div>

      <Footer className="FooterTest" />
    </React.Fragment>
  );
}

export default Home;
