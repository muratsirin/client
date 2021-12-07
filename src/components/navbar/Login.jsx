import React, {useState} from "react";
import FormGroup from "../FormGroup";
import {Button, Form, Modal} from "react-bootstrap";

function Login(props) {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    function handleChange(event){
        const {name, value} = event.target;

        setUser((prevValue)=>{
            return {
                ...prevValue,
                [name] : value
            }
        });
    }

    return (
        <Modal show={props.show} onHide={props.hide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Giriş Yap</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormGroup label='Email Adresi' type='email' name='email' value={user.email} onChange={handleChange}
                               placeholder='Email Adresiniz' error=''/>
                    <FormGroup label='Parola' type='password' name='password' value={user.password} onChange={handleChange}
                               placeholder='Parolanız' error=''/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" >
                    İptal
                </Button>
                <Button variant="success" >
                    Giriş Yap
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Login;