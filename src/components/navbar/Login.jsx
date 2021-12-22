import React, {useState} from "react";
import FormGroup from "../FormGroup";
import {Button, Form, Modal} from "react-bootstrap";
import {formValidate, onSubmitValidation} from "../../utils/form-validate";
import {useDispatch} from "react-redux";
import {login} from "../../redux/authentication/auth-action-creators";

function Login(props) {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
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

    function handleLogin(event) {
        event.preventDefault();
        if (onSubmitValidation(user)) {
            setErrors(onSubmitValidation(user));
        }
        dispatch(login(user));

    }

    return (
        <Modal show={props.show} onHide={props.hide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Giriş Yap</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormGroup label='Email Adresi' type='email' name='username' value={user.username}
                               onChange={handleChange}
                               placeholder='Email Adresiniz' error={errors.username}/>
                    <FormGroup label='Parola' type='password' name='password' value={user.password}
                               onChange={handleChange}
                               placeholder='Parolanız' error={errors.password}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">
                    İptal
                </Button>
                <Button variant="success" onClick={handleLogin}>
                    Giriş Yap
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Login;