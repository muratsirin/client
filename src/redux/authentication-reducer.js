import jwt from 'jsonwebtoken';

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

function isValidToken(token) {
    const decodedToken = jwt.decode(token);

    return new Date(decodedToken.exp * 60) > new Date() ? decodedToken : null;
}

const initState = {
    currentUser: localStorage.getItem('USER-TOKEN')
        ? isValidToken(localStorage.getItem('USER-TOKEN')) : null,
    error: '',
    loading: false,
    isLoggedIn: false
};

function authenticationReducer(state = initState, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
            };
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case LOGOUT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                currentUser: null,
                isLoggedIn: false,
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            console.log(action.payload.user)
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                isLoggedIn: true,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                currentUser: null,
                token: '',
            };
        default:
            return {
                ...state
            };
    }
}

export default authenticationReducer;