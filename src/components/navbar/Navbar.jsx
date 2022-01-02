import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/authentication/auth-action-creators";
import {showLoginModal, showRegisterModal} from "../../redux/modal/modal-action-creators";
import {Link} from "react-router-dom";
import SearchBar from "../SearchBar";

function NavigationBar() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth);

    function navLinks() {
        if (!currentUser.isLoggedIn) {
            return (
                <Nav className='ms-auto'>
                    <Nav.Link onClick={() => dispatch(showRegisterModal())}>Kayıt Ol</Nav.Link>
                    <Nav.Link onClick={() => dispatch(showLoginModal())}>Giriş Yap</Nav.Link>
                    <Login/>
                    <Register/>
                </Nav>
            );
        }
        return (
            <Nav className='ms-auto'>
                <Nav.Link onClick={() => dispatch(logout())}>Çıkış Yap</Nav.Link>
            </Nav>
        );
    }

    return (
        <Navbar bg='dark' collapseOnSelect expand='lg' variant='dark'>
            <Container>
                <Link to='/'><Navbar.Brand>Blog Post</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls='navLinks'/>
                <Navbar.Collapse id='navLinks'>
                    {navLinks()}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;