import {
    SHOW_POST_MODAL,
    HIDE_POST_MODAL,
    SHOW_LOGIN_MODAL,
    HIDE_LOGIN_MODAL,
    SHOW_REGISTER_MODAL,
    HIDE_REGISTER_MODAL
} from "./modal-action-types";

const initState = {
    postModal: false,
    loginModal: false,
    registerModal: false
};

function modalReducer(state = initState, action) {
    switch (action.type) {
        case SHOW_POST_MODAL:
            return {
                ...state,
                postModal: true,
            };
        case HIDE_POST_MODAL:
            return {
                ...state,
                postModal: false,
            };
        case SHOW_LOGIN_MODAL:
            return {
                ...state,
                loginModal: true,
            };
        case HIDE_LOGIN_MODAL:
            return {
                ...state,
                loginModal: false,
            };
        case SHOW_REGISTER_MODAL:
            return {
                ...state,
                registerModal: true,
            };
        case HIDE_REGISTER_MODAL:
            return {
                ...state,
                registerModal: false,
            };
        default:
            return {...state};
    }
}

export default modalReducer;