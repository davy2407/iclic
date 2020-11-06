import React  from "react";
import { Button, Modal} from 'react-bootstrap';
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
        <Modal.Title id="contained-modal-title-vcenter" className="Red">
          Verrou
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className="modalContainer">
            
        {props.onData}

          </div>
       
 
        
    
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default VerrouUn;