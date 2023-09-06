import { Button, NavDropdown } from "react-bootstrap";
import { Person, Sticky } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import { Nav, Navbar, Container } from "react-bootstrap/";
import { NavLink, useLocation } from "react-router-dom";
import routes from "../../routes/routes.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import InstructionsModal from "../InstructionsModal/InstructionsModal";

const Naviagtion = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    const location = useLocation();
    const { logoutHandler } = useContext(AuthContext);

    const handleLogout = () => {
        logoutHandler();
        toast.info("Logout successful. Come back anytime!");
    };

    const isAuthPage =
        location.pathname === routes.LOGIN || location.pathname === routes.SIGNUP;

    const isLocationState = location.state;

    return (
        <>
            <Navbar bg="light" expand="lg" data-bs-theme="light">
                <Container>
                    <Nav.Link as={NavLink} to={routes.HOME}>
                        <Navbar.Brand>
                            <Sticky /> Note-Taking
                        </Navbar.Brand>
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        {!isAuthPage && (
                            <>
                                <Person size={24} />
                                {isLocationState && location.state.email
                                    ? location.state.email
                                    : ""}

                                <NavDropdown
                                    align="end"
                                    style={{ margin: "0px 10px 0px 10px" }}
                                >
                                    <NavDropdown.Item
                                        style={{ fontWeight: 600, color: "red" }}
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Button variant="link" onClick={handleShow}>
                                    Instructions
                                </Button>
                                <InstructionsModal show={show} handleClose={handleClose} />
                            </>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Naviagtion;
