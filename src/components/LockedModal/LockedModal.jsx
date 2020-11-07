import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Modal, Button } from "react-bootstrap";

function LockedModal(props) {
  const [show, setShow] = useState(props.show ?? false);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <Modal show={show} onHide={props.onHide} size="lg">
      <Modal.Body color="danger">
        <p className="text-danger font-weight-bold">
          Dans le cadre de l’interruption volontaire de grossesse, votre réponse
          va à l’encontre des recommandations établies actuellement en vigueur
          en France.
        </p>
        <p className="text-danger font-weight-bold">
          {" "}
          Il est nécessaire, selon vos réponses, un ajustement et une reprise à
          la consultation précédente.
        </p>{" "}
        <p className="text-danger font-weight-bold">
          Selon le temps estimer de la grossesse, il peut s’agir d’une urgence.
        </p>
        <p className="text-danger font-weight-bold">
          Votre centre de référence peut vous répondre afin d’établir une prise
          en charge dans les meilleurs conditions pour la patiente.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

LockedModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default LockedModal;
