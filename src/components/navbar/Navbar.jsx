import React, {useState} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

function NavigationBar() {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showRegisterModal, setShowRegisterModal] = useState(false)

    const handleShowLogin = () => setShowLoginModal(true);
    const handleHideLogin = () => setShowLoginModal(false);

    const handleShowRegister = () => setShowRegisterModal(true);
    const handleHideRegister = () => setShowRegisterModal(false);

    return (
        <Navbar bg='dark' collapseOnSelect expand='lg' variant='dark'>
            <Container>
                <Navbar.Brand href='#'>Blog Post</Navbar.Brand>
                <Navbar.Toggle aria-controls='navLinks'/>
                <Navbar.Collapse id='navLinks'>
                    <Nav className='ms-auto'>
                        <Nav.Link onClick={handleShowRegister}>Kayıt Ol</Nav.Link>
                        <Nav.Link onClick={handleShowLogin}>Giriş Yap</Nav.Link>
                        <Login show={showLoginModal} hide={handleHideLogin}/>
                        <Register show={showRegisterModal} hide={handleHideRegister}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;