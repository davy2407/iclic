import React, { useState } from "react";
import { Button, Modal, Form } from 'react-bootstrap';
import './verrouDeux.css'


function verrouDeux(props) {


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="Red">
          Verrou
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className="modalContainer">
          <p className="Red">
          Dans le cadre de l’interruption volontaire de grossesse, votre réponse va à l’encontre des recommandations établies actuellement en vigueur en France. 
          
        </p>
        <p className="Red">
        Il est nécessaire, selon vos réponses, un ajustement et une reprise à la consultation précédente.             </p>

            <p className="Red">

            Selon le temps estimer de la grossesse, il peut s’agir d’une urgence. 
                      
                        </p>

                        <p className="Red">
                        Votre centre de référence peut vous répondre afin d’établir une prise en charge dans les meilleurs conditions pour la patiente.
                        </p>




          </div>
       
 
        
    
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default verrouDeux;