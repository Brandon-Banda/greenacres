import { Modal, Button } from 'react-bootstrap';
import SignatureCanvas from 'react-signature-canvas';
import '../pages/modal.css';

function ModalComponent(props) {
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
        <SignatureCanvas width={2000} height={500} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handlesignature}>Save</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
