// import { Button, NavDropdown } from "react-bootstrap";
// import { Person, Sticky } from "react-bootstrap-icons";
// import { toast } from "react-toastify";
// import { Nav, Navbar, Container } from "react-bootstrap/";
// import { NavLink, useLocation } from "react-router-dom";
// import routes from "../../routes/routes.json";
// import { useContext, useState } from "react";
// import InstructionsModal from "../InstructionsModal/InstructionsModal";
// import { UserContext } from "../../contexts/UserContext";
// import { auth } from "../../firebase/firebase";
// import { signOut } from "firebase/auth";

import { Button, NavDropdown } from "react-bootstrap";
import { Person, Sticky } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import { Nav, Navbar, Container } from "react-bootstrap/";
import { NavLink, useLocation } from "react-router-dom";
import routes from "../../routes/routes.json";
import { useContext, useState } from "react";
import InstructionsModal from "../InstructionsModal/InstructionsModal";
import { UserContext } from "../../contexts/UserContext";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";

const Naviagtion = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    const location = useLocation();
    const { userIdentity, resetUserIdentity } = useContext(UserContext);

    const handleLogout = () => {
        signOut(auth);
        toast.info("Logout successful. Come back anytime!");
        resetUserIdentity();
    };

    const isAuthPage =
        location.pathname === routes.LOGIN || location.pathname === routes.SIGNUP;

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
                                {userIdentity && userIdentity.email}
                                <NavDropdown
                                    align="end"
                                    style={{ margin: "0px 10px 0px 10px" }}
                                >
                                    <NavDropdown.Item
                                        style={{
                                            fontWeight: 600,
                                            backgroundColor: "#f8f9fa",
                                            color: "red"
                                        }}
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
