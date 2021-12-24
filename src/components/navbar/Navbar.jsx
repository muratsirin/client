import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/authentication/auth-action-creators";
import {showLoginModal, showRegisterModal} from "../../redux/modal/modal-action-creators";

function NavigationBar() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth);

    const handleShowLoginModal = () => dispatch(showLoginModal());
    const handleShowRegisterModal = () => dispatch(showRegisterModal());


    function navLinks(){
        if (!currentUser.isLoggedIn){
            return (
                <Nav className='ms-auto'>
                    <Nav.Link onClick={handleShowRegisterModal}>Kayıt Ol</Nav.Link>
                    <Nav.Link onClick={handleShowLoginModal}>Giriş Yap</Nav.Link>
                    <Login/>
                    <Register/>
                </Nav>
            );
        }
        return (
            <Nav className='ms-auto'>
                <Nav.Link onClick={handleLogout}>Çıkış Yap</Nav.Link>
            </Nav>
        );
    }

    function handleLogout(event){
        event.preventDefault();
        dispatch(logout());
    }
    return (
        <Navbar bg='dark' collapseOnSelect expand='lg' variant='dark'>
            <Container>
                <Navbar.Brand href='#'>Blog Post</Navbar.Brand>
                <Navbar.Toggle aria-controls='navLinks'/>
                <Navbar.Collapse id='navLinks'>
                    {navLinks()}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;