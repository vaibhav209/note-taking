import { Col, Modal } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const InstructionsModal = ({ show, handleClose }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Quick User Tips</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col sm={10} md={12} lg={12}>
                        <ul>
                            <li className="mb-4">
                                Data may not load instantly, and some actions may take a moment.
                                Thank you for your patience!
                            </li>
                            <li className="mb-4">
                                Keep your data safe and enjoy using this app!
                            </li>
                            <li className="mb-4">
                                Thank you for being a valued member of Note-Taking.
                            </li>
                        </ul>
                    </Col>
                </Modal.Body>
                <Modal.Footer className="text-center justify-content-center">
                    Go Enjoy the App!{" "}
                    <ArrowRight size={22} cursor="pointer" onClick={handleClose} />
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default InstructionsModal;
