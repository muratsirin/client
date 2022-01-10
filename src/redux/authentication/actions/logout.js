import {LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS} from "../auth-action-types";
import {authService} from "../../../services/auth-service";

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

export function logout() {
    return function (dispatch) {
        dispatch(logoutRequest());
        authService.logout();
        if (!localStorage.getItem('USER')) {
            dispatch(logoutSuccess());
        }
        dispatch(logoutFailure());
    };
}