import React, {useState} from "react";
import {Col, Form, Row} from "react-bootstrap";
import FormGroup from "../reusable/FormGroup";
import {formValidate, onSubmitValidation} from "../../utils/form-validate";
import {useDispatch, useSelector} from "react-redux";
import ReUsableModal from "../reusable/ReUsableModal";
import {hideRegisterModal} from "../../redux/modal/modal-action-creators";
import {register} from "../../redux/authentication/actions/register";

function Register() {
    const dispatch = useDispatch();
    const modalSelector = useSelector((state) => state.modal);
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
    const handleHideRegisterModal = () => dispatch(hideRegisterModal());

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

    function handleRegister(event) {
        event.preventDefault();

        if (onSubmitValidation(user)) {
            setErrors(onSubmitValidation(user));
        }

        dispatch(register(user));
        dispatch(hideRegisterModal());
    }

    function modalBody() {
        return (
            <Form>
                <Row>
                    <Col md={6} xs={6}>
                        <FormGroup label='Ad' type='text' name='firstName' value={user.firstName}
                                   onChange={handleChange}
                                   placeholder='Adınız' error={errors.firstName}/>
                    </Col>
                    <Col md={6} xs={6}>
                        <FormGroup label='Soyad' type='text' name='lastName' value={user.lastName}
                                   onChange={handleChange}
                                   placeholder='Soyadınız' error={errors.lastName}/>
                    </Col>
                </Row>
                <FormGroup label='Email Adresi' type='email' name='username' value={user.username}
                           onChange={handleChange}
                           placeholder='Email Adresiniz' error={errors.username}/>
                <FormGroup label='Parola' type='password' name='password' value={user.password} onChange={handleChange}
                           placeholder='Parolanız' error={errors.password}/>
            </Form>
        );
    }

    return (
        <ReUsableModal show={modalSelector.registerModal} hide={handleHideRegisterModal}
                       handleCancel={handleHideRegisterModal}
                       handleSubmit={handleRegister} btnText='Kayıt Ol' title='Kayıt Ol' body={modalBody()}/>
    )
}

export default Register;