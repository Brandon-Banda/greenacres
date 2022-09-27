import { Modal, Button } from 'react-bootstrap';
import SignatureCanvas from 'react-signature-canvas';
import '../pages/modal.css';
import { useRef } from 'react';

function ModalComponent(props) {
  const ref = useRef();
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign below</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignatureCanvas width={2000} height={500} ref={ref} />
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
            props.handlesignature();
          }}
        >
          Save & Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
