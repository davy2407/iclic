import React , {useState} from "react";
import { Button, Modal } from "react-bootstrap";



import "./Modal.css";


function MyVerticallyCenteredModal(props) {

  const [question, setQuestion] = useState(props.question);

  console.log(props.question);
  // console.log(question);
 

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Body>
        <div onClick={props.changement}>
        {question}

        </div>
      </Modal.Body>

      
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );






  
 
}

export default MyVerticallyCenteredModal;
