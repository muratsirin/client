import api from '../api/auth-api';
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

function registerSuccess(user) {
    return {
        type: REGISTER_SUCCESS,
        payload: {
            user,
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
        api.register(user, {
            method: 'POST',
            data: user,
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('USER-TOKEN'),
            },
        }).then(response => response).then(res => {
            const data = res.data.user;
            localStorage.setItem('USER-TOKEN', data.token);
            dispatch(registerSuccess(data));
        }).catch((error) => {
            dispatch(registerFailure(error));
        });
    };
}

function loginRequest() {
    return {
        type: LOGIN_REQUEST,
    };
}

function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            user,
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
        api.login(payload,{
            method: 'POST',
            data: user,
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('USER-TOKEN'),
            },
        }).then(response => response).then(res=>{
            console.log(res)
            const data = res.data.user;
            localStorage.setItem('USER-TOKEN', data.token);
            dispatch(loginSuccess(data));
        }).catch((error=>{
            dispatch(loginFailure(error));
        }));
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
        localStorage.clear();
        if (localStorage.getItem('USER-TOKEN')) {
            dispatch(logoutFailure());
        } else {
            dispatch(logoutSuccess());
        }
    };
}

export {register, login, logout};
