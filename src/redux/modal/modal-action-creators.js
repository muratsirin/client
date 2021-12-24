import {
    SHOW_POST_MODAL,
    HIDE_POST_MODAL,
    SHOW_LOGIN_MODAL,
    HIDE_LOGIN_MODAL,
    SHOW_REGISTER_MODAL,
    HIDE_REGISTER_MODAL
} from "./modal-action-types";

function showPostModal() {
    return {
        type: SHOW_POST_MODAL,
    };
}

function hidePostModal() {
    return {
        type: HIDE_POST_MODAL,
    };
}

function showLoginModal() {
    return {
        type: SHOW_LOGIN_MODAL
    };
}

function hideLoginModal() {
    return {
        type: HIDE_LOGIN_MODAL
    };
}

function showRegisterModal() {
    return {
        type: SHOW_REGISTER_MODAL
    };
}

function hideRegisterModal() {
    return {
        type: HIDE_REGISTER_MODAL
    };
}

export {showPostModal, hidePostModal, showLoginModal, hideLoginModal, showRegisterModal, hideRegisterModal};