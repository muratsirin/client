import {REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS} from "../auth-action-types";
import {authService} from "../../../services/auth-service";

function registerRequest() {
    return {
        type: REGISTER_REQUEST,
    };
}

function registerSuccess(user) {
    return {
        type: REGISTER_SUCCESS,
        payload: user,
    };
}

function registerFailure(error) {
    return {
        type: REGISTER_FAILURE,
        payload: error,
    };
}

export function register(user) {
    return function (dispatch) {
        dispatch(registerRequest());
        authService.register(user).then(token => {
            dispatch(registerSuccess(token));
        }).catch(error => {
            dispatch(registerFailure(error));
        });
    };
}