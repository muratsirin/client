import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from "../auth-action-types";
import {authService} from "../../../services/auth-service";

function loginRequest() {
    return {
        type: LOGIN_REQUEST,
    };
}

function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
    };
}

function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    };
}

export function login(user) {
    return function (dispatch) {
        dispatch(loginRequest());
        authService.login(user).then(user => {
            dispatch(loginSuccess(user));
        }).catch(error => {
            dispatch(loginFailure(error));
        });
    };
}