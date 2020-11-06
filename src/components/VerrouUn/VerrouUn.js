import React from "react";
import { Button, Modal, Form } from 'react-bootstrap';
import './VerrouUn.css'


function VerrouUn(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Verrou
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className="modalContainer">
          <p className="Red">
        Dans le cadre de l’interruption volontaire de grossesse, votre réponse va à l’encontre des recommandations établies actuellement en vigueur en France. 

          
        </p>
        <p className="Red">
        Il est nécessaire d’adresser votre patiente vers le centre de référence duquel dépend la patiente (à défaut aux urgences spécialisés le plus proche).
            </p>

            <p className="Red">

            Le degré d’urgence est à établir selon les signes cliniques ou l’âge gestationnel estimé.
            </p>




          </div>
       
 
        
    
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default VerrouUn;