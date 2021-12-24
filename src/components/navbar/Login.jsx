import React, {useState} from "react";
import FormGroup from "../FormGroup";
import {Form} from "react-bootstrap";
import {formValidate, onSubmitValidation} from "../../utils/form-validate";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/authentication/auth-action-creators";
import ReUsableModal from "../ReUsableModal";
import {hideLoginModal} from "../../redux/modal/modal-action-creators";

function Login() {
    const dispatch = useDispatch();
    const modalSelector = useSelector((state) => state.modal);
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    const handleHideLoginModal = () => dispatch(hideLoginModal());

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
        dispatch(hideLoginModal());
    }


    function modalBody() {
        return (
            <Form>
                <FormGroup label='Email Adresi' type='email' name='username' value={user.username}
                           onChange={handleChange}
                           placeholder='Email Adresiniz' error={errors.username}/>
                <FormGroup label='Parola' type='password' name='password' value={user.password}
                           onChange={handleChange}
                           placeholder='Parolanız' error={errors.password}/>
            </Form>
        );
    }

    return (
        <ReUsableModal show={modalSelector.loginModal} hide={handleHideLoginModal} handleCancel={handleHideLoginModal}
                       handleSubmit={handleLogin} btnText='Giriş Yap' title='Giriş Yap' body={modalBody()}/>
    )
}

export default Login;