import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar bg='dark' collapseOnSelect expand='lg' variant='dark'>
            <Container>
                <Navbar.Brand href='#'>Blog Post</Navbar.Brand>
                <Navbar.Toggle aria-controls='navLinks'/>
                <Navbar.Collapse id='navLinks'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='#'>Kayıt Ol</Nav.Link>
                        <Nav.Link href='#'>Giriş Yap</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;