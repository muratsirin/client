import React, {useState} from "react";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import FormGroup from "../FormGroup";
import {formValidate, onSubmitValidation} from "../../utils/form-validate";
import {useDispatch} from "react-redux";
import {register} from "../../redux/authentication/auth-action-creators";

function Register(props) {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });

    function handleChange(event){
        const {name, value} = event.target;

        setErrors((prevValue)=>{
            return{
                ...prevValue,
                [name]: formValidate(name, value)
            }
        });

        setUser((prevValue)=>{
            return {
                ...prevValue,
                [name] : value
            }
        });
    }

    function handleRegister(event){
        event.preventDefault();

        if (onSubmitValidation(user)){
            setErrors(onSubmitValidation(user));
        }

        dispatch(register(user));
    }

    return (
        <Modal show={props.show} onHide={props.hide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Kayıt Ol</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col md={6} xs={6}>
                            <FormGroup label='Ad' type='text' name='firstName' value={user.firstName} onChange={handleChange}
                                       placeholder='Adınız' error={errors.firstName}/>
                        </Col>
                        <Col md={6} xs={6}>
                            <FormGroup label='Soyad' type='text' name='lastName' value={user.lastName} onChange={handleChange}
                                       placeholder='Soyadınız' error={errors.lastName}/>
                        </Col>
                    </Row>
                    <FormGroup label='Email Adresi' type='email' name='username' value={user.username} onChange={handleChange}
                               placeholder='Email Adresiniz' error={errors.username}/>
                    <FormGroup label='Parola' type='password' name='password' value={user.password} onChange={handleChange}
                               placeholder='Parolanız' error={errors.password}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" >
                    İptal
                </Button>
                <Button variant="success" onClick={handleRegister}>
                    Kayıt Ol
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Register;