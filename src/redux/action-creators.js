import {authService} from "../services/auth-service";
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from "./action-types";

function registerRequest() {
    return {
        type: REGISTER_REQUEST,
    };
}

function registerSuccess(token) {
    return {
        type: REGISTER_SUCCESS,
        payload: {
            token,
        },
    };
}

function registerFailure(error) {
    return {
        type: REGISTER_FAILURE,
        payload: error,
    };
}

function register(user) {
    return function (dispatch) {
        dispatch(registerRequest());
        authService.register(user).then(token => {
            dispatch(registerSuccess(token));
        }).catch(error => {
            dispatch(registerFailure(error));
        });
    };
}

function loginRequest() {
    return {
        type: LOGIN_REQUEST,
    };
}

function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            token,
        },
    };
}

function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    };
}

function login(user) {
    return function (dispatch) {
        dispatch(loginRequest());
        authService.login(user).then(token => {
            dispatch(loginSuccess(token));
        }).catch(error => {
            dispatch(loginFailure(error));
        });
    };
}

function logoutRequest() {
    return {
        type: LOGOUT_REQUEST,
    };
}

function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS,
    };
}

function logoutFailure() {
    return {
        type: LOGOUT_FAILURE,
    };
}

function logout() {
    return function (dispatch) {
        dispatch(logoutRequest());
        authService.logout();
        if (!localStorage.getItem('USER')) {
            dispatch(logoutSuccess());

        }
        dispatch(logoutFailure());
    };
}

export {register, login, logout};
