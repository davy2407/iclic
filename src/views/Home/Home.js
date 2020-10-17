import React from "react";

// import iclic components
import Footer from "@components/Footer";
import Header from "@components/Header";
import MidSection from "@components/MidSection";

function Home() {
  return (
    <React.Fragment>
      <Header />

      <MidSection />

      <Footer className="FooterTest" />
    </React.Fragment>
  );
}

export default Home;
