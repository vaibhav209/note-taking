import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const UserForm = ({
    title,
    emailValue,
    passwordValue,
    onEmailChange,
    onPasswordChange,
    userLinkText,
    to,
    userLink,
    btnName,
    btnVariant,
    onActionButtonClick
}) => {
    return (
        <>
            <Container className="mt-5">
                <Row className="justify-content-center p-5">
                    <Col md={8} lg={5}>
                        <div className="text-center">
                            <h4>{title}</h4>
                        </div>
                        <hr />
                        <Form>
                            <Form.Group controlId="email" className="mt-4">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="email"
                                    required
                                    value={emailValue}
                                    onChange={onEmailChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="password" className="mt-4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={passwordValue}
                                    onChange={onPasswordChange}
                                />
                            </Form.Group>
                            <div className="mt-4">
                                <Button
                                    style={{ width: "100%" }}
                                    variant={btnVariant}
                                    onClick={onActionButtonClick}
                                >
                                    {btnName}
                                </Button>
                            </div>
                            <div className="mt-3 text-center">
                                <p>
                                    {userLinkText}
                                    <NavLink to={to}> {userLink}</NavLink>
                                </p>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default UserForm;
