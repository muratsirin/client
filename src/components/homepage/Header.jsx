import React from "react";
import {Container} from "react-bootstrap";
import SearchBar from "../SearchBar";
import {useSelector} from "react-redux";

function Header(){
    const currentUser = useSelector(state => state.auth);
    return (
        <header className='py-5 bg-light border-bottom mb-4'>
            <Container>
                <div className='text-center my-5'>
                    <h1 className='fw-bolder'>{currentUser.isLoggedIn ? 'Merhaba ' + currentUser.currentUser.firstName : 'Gönderi paylaşmak için kayıt olun veya giriş yapın'}</h1>
                    <SearchBar/>
                </div>
            </Container>
        </header>
    );
}

export default Header;