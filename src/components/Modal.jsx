import React, {useState, useEffect} from "react";
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css'

// todo list créer objet contenant tout les bouttons existant avec leur texte et ID 
// finir chemin consultation préalable oui
function MyVerticallyCenteredModal(props) {
  let liste = props.listeRadio;

  const [Titre, setTitre] = useState(
    'Proffession'
  )

  const [rollBacklist, setRollBackList] =useState([]);

  const [rollBackTitre, setRollBackTitre] = useState('');

  const [rollBackTestText, setRollBackTestText] = useState('');

  const [newListeRadio,setNewListeRadio] = useState(liste);

  const [boutonSel, setBoutonSel] = useState('');

  const [testText, setTestText] = useState('');


  
  const recupIdBoutton = event => {
    let id = event.target.id;
    console.log(id);
    setBoutonSel(id);
    if (id==1) {
      MedecinGy();
      
    }
    else if (id==4) {
      MedecinGyConventionOUi();
      
    }
    else if (id==5) {
      MedecinGyConventionNon();
    }

    else if (id==8||id==9||id==28||id==29||id==30) {
      MedecinGyConventionOUiPatiente();
    }
    else if (id==6) {
      MedecinGyConventionNonConsultationOUi();
      
    }
    else if (id==7) {
      MedecinGyConventionNonConsultationNon();
      
    }
    else if (id==12 || id==13) {
      MedecinGyConventionNonConsultationOUiMajeure();
      
    }
    else if (id==14 || id ==15) {
      MedecinGyConventionNonConsultationOUiFin();
      
    }
    else if (id==2 || id==3) {
      SageFemmeMedecinGeneraliste();
      
    }
    else if (id==19) {
      SageFemmeMedecinGeneralisteAttestationNon();
      
    }
    else if (id==20) {
      SageFemmeMedecinGeneralisteAttestationNonConsulationOUi();
      
    }
    else if (id==21){
      SageFemmeMedecinGeneralisteAttestationNonConsulationNon();
    }

    else if (id==22||id==23) {
      SageFemmeMedecinGeneralisteAttestationNonConsulationOUiMajeure();
      
    }
    else if (id==24||id==25) {
      SageFemmeMedecinGeneralisteAttestationNonConsulationOUiMajeureAnonyme();
      
    }
    else if (id==10||id==11) {
      MedecinGyConventionOUiPatienteMajeure();
    }
    else if (id==18) {
      SageFemmeMedecinGeneralisteAttestationOui()
      
    }
    else if (id==33) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionOui();
      
    }
    else if (id==35||id==36||id==37||id==38||id==39) {
      SageFemmeMedecinGeneralisteAttestationOuiConsulationOUiMajeure();
      
    }
    else if (id==40||id==41) {
      SageFemmeMedecinGeneralisteAttestationOuiConsulationOUiMajeureAnonyme();
      
    }

    else if (id==34) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionNon();
      
    }

    else if (id==45) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationNon();
      
    }
    else if (id==44) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOui();
      
    }
    else if (id==46||id==47) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOuiMajeure();
      
    }
    else if (id==48||id==49) {
      SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOuiMajeureAnonyme();
      
    }

    
  };


  
 

  

  const RollBack = () => {
    setTitre(rollBackTitre);
    setNewListeRadio(rollBacklist);
    setTestText(rollBackTestText);
  };

  const MedecinGy = () => {
    let nouvelleListeMedecin = [
      {id : 4 , name : "Oui"},
      {id : 5 , name : "Non"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre('Vous avez signé une convention avec un centre de référence : ')
  };

  const MedecinGyConventionOUi = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 8, name : "Première consultation préalable à l'ivg/Premier contact médical"},
      {id : 9, name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"},
      {id : 28, name : "Premier temps de consultation pour prise médicamenteuse"},
      {id : 29, name : "Deuxième temps de consultation pour prise médicamenteuse (facultative)"},
      {id : 30, name : "Troisième temps de consultation: consultation de suivi"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre('Attestation');

  };

  const MedecinGyConventionNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 6 , name : "Oui"},
      {id : 7 , name : "Non"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ")
  };

  const MedecinGyConventionOUiPatiente = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 10 , name : "Patiente anonyme"},
      {id : 11 , name : "Patiente non-anonyme"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation")

  }; 
  
  const MedecinGyConventionOUiPatienteMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 31 , name : "Patiente majeure"},
      {id : 32 , name : "Patiente mineure"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation")

  };    

  const MedecinGyConventionNonConsultationOUi = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 12 , name : "Première consultation préalable à l'ivg/Premier contact médical"},
      {id : 13 , name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalables à l'ivg");

  };

  const MedecinGyConventionNonConsultationOUiMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 14 , name : "Patiente majeure"},
      {id : 15 , name : "Patiente mineure"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalables à l'ivg");

  };

  const MedecinGyConventionNonConsultationOUiFin = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 16 , name : "Patiente anonyme"},
      {id : 17 , name : "Patiente non-anonyme"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalables à l'ivg");

  };

  const MedecinGyConventionNonConsultationNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setRollBackTestText(testText);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre(" Centre rattachement");
    setTestText("Il est obligatoire selon l'article L2212-2 et L2212-9 de justifier etc ....")

  };

  const SageFemmeMedecinGeneraliste = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 18 , name : "Oui"},
      {id : 19 , name : "Non"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Vous êtes en possession d'une attestation justificative de formation à l'IVG : ")

  };

  const SageFemmeMedecinGeneralisteAttestationNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 20 , name : "Oui"},
      {id : 21 , name : "Non"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ")

  };

  const SageFemmeMedecinGeneralisteAttestationNonConsulationOUi = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 22 , name : "Première consultation préalable à l'ivg/Premier contact médical"},
      {id : 23 , name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ")

  };

  const SageFemmeMedecinGeneralisteAttestationNonConsulationNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setRollBackTestText(testText);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Info Formation");
    setTestText("Selon l'article R2212-11 , il est nécessaire d'avoir une attestation de compétence afin de pratiquer etc ....")

  };

  const SageFemmeMedecinGeneralisteAttestationNonConsulationOUiMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 24 , name : "Patiente majeure"},
      {id : 25 , name : "patiente mineure"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ")

  };

  const SageFemmeMedecinGeneralisteAttestationNonConsulationOUiMajeureAnonyme = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 26 , name : "Patiente anonyme"},
      {id : 27 , name : "patiente non-anonyme"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");

  };

  

  const SageFemmeMedecinGeneralisteAttestationOui = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 33 , name : "Oui"},
      {id : 34 , name : "Non"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Vous avez signé une convention avec un centre de référence : ");

  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionOui = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 35, name : "Première consultation préalable à l'ivg/Premier contact médical"},
      {id : 36, name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"},
      {id : 37, name : "Premier temps de consultation pour prise médicamenteuse"},
      {id : 38, name : "Deuxième temps de consultation pour prise médicamenteuse (facultative)"},
      {id : 39, name : "Troisième temps de consultation: consultation de suivi"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation et convention signé");

  };

  const SageFemmeMedecinGeneralisteAttestationOuiConsulationOUiMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 40 , name : "Patiente majeure"},
      {id : 41 , name : "patiente mineure"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation et convention signé")

  };

  const SageFemmeMedecinGeneralisteAttestationOuiConsulationOUiMajeureAnonyme = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 42 , name : "Patiente Anonyme"},
      {id : 43 , name : "Patiente non-anonyme"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Attestation et convention signé")

  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 44 , name : "Oui"},
      {id : 45 , name : "Non"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");

  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationNon = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setRollBackTestText(testText);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Centre de rattachement");
    setTestText("Il est obligatoire selon l'article L2212-2 et L2212-9 de justifier etc ....")


  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOui = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 46 , name : "Première consultation préalable à l'ivg/Premier contact médical"},
      {id : 47 , name : "Deuxième conssultation préalable à l'ivg/Recueil de consentement"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");

  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOuiMajeure = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 48 , name : "Patiente majeure"},
      {id : 49 , name : "Patiente mineure"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");

  };

  const SageFemmeMedecinGeneralisteAttestationOuiConventionNonConsultationOuiMajeureAnonyme = () => {
    setRollBackTitre(Titre);
    let nouvelleListeMedecin = [
      {id : 50 , name : "Patiente anonyme"},
      {id : 51 , name : "Patiente non-anonyme"}
    ];
    setRollBackList(newListeRadio);
    setRollBackTitre(Titre);
    setNewListeRadio(nouvelleListeMedecin);
    setTitre("Consultation préalable à l'IVG : ");

  };
 

 

  useEffect(()=>{
    console.log('mise à jour')
    
    
},[])
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          IVGclic
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        
        
        <Form 
              onClick={(e)=>{
                e.preventDefault()

              }}>
          <h1>{Titre}</h1>
        
  {newListeRadio.map(type => (
    <div >
      <button onClick={recupIdBoutton}  id={type.id} key={type.id}    >{type.name}</button>
      <hr></hr>
      
    
    </div>
    
  ))}
  <p>{testText}</p>
  
</Form>
<button  onClick={RollBack}  >retour</button>


        
        
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default MyVerticallyCenteredModal;