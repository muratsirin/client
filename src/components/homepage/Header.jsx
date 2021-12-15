import React from "react";
import {Container} from "react-bootstrap";

function Header(){
    return (
        <header className='py-5 bg-light border-bottom mb-4'>
            <Container>
                <div className='text-center my-5'>
                    <h1 className='fw-bolder'>Merhaba</h1>
                </div>
            </Container>
        </header>
    );
}

export default Header;