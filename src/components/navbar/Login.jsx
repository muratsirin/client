import React, {useState} from "react";
import FormGroup from "../FormGroup";
import {Button, Form, Modal} from "react-bootstrap";
import {formValidate, onSubmitValidation} from "../../utils/form-validate";

function Login(props) {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setErrors((prevValue) => {
            return {
                ...prevValue,
                [name]: formValidate(name, value)
            }
        });

        setUser((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function login(event) {
        if (onSubmitValidation(user)){
            setErrors(onSubmitValidation(user));
        }
        event.preventDefault();
    }

    return (
        <Modal show={props.show} onHide={props.hide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Giriş Yap</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormGroup label='Email Adresi' type='email' name='email' value={user.email} onChange={handleChange}
                               placeholder='Email Adresiniz' error={errors.email}/>
                    <FormGroup label='Parola' type='password' name='password' value={user.password}
                               onChange={handleChange}
                               placeholder='Parolanız' error={errors.password}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">
                    İptal
                </Button>
                <Button variant="success" onClick={login}>
                    Giriş Yap
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Login;