import React from "react";
import "./Header.css";

import Logo from "@assets/images/LOGOFull.svg";
import Banniere from "@assets/images/LOGOShort.svg";
import {  Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function Header(props) {


  function refreshPage() {
    window.location.reload(false);
  }

  function APropos() {
    props.onPropos();
  }

  function Mention() {
    props.onMention();
  }

  function Contact() {
    props.onContact();
  }

  function SourceLien() {
    props.onSource();
  }

  function sourceDocs(){
    props.onDocs();
  }

  function covidAff(){
    props.onCovid();
  }



  return (
    <div className="Header">
      <div className="HeaderTop">

      <img onClick={refreshPage} src={Banniere} className="Banniere"></img>
        <img src={Logo} className="logoH"></img>


      </div>
      <div className="MargeHoriPetite"></div>

      {/* <div className="Banderolle">
              <img src={Banniere} className="logoB"></img>
            </div> */}
      <div className="HeaderMenu">
      <Navbar  expand="lg" className="NavBar">
  <Navbar.Brand onClick={refreshPage} className="Reload" >IVG Clic</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link onClick={APropos} >À propos</Nav.Link>
      <Nav.Link onClick={Mention}>Mention légale</Nav.Link>
      <Nav.Link onClick={Contact}>Contact</Nav.Link>
      <Nav.Link onClick={covidAff}>Covid</Nav.Link>
 

      
      
      <NavDropdown title="Sources et textes de lois" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={SourceLien} >Liste des liens disponibles durant le parcours des consultations</NavDropdown.Item>
        <NavDropdown.Item onClick={sourceDocs}>Liste des documents disponibles durant le parcours des consultations</NavDropdown.Item>
        
      </NavDropdown>
    
     
    </Nav>
    
  </Navbar.Collapse>
  {/* <Navbar.Collapse className="justify-content-end">
    <Navbar.Text className="majTxt">
      MAJ : 17/02/2021
    </Navbar.Text>
  </Navbar.Collapse> */}
</Navbar>

      </div>
      
          
        
      
    </div>
  );
}

export default Header;

