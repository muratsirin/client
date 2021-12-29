import {combineReducers} from "redux";
import authenticationReducer from "./authentication/authentication-reducer";
import postReducer from "./post/post-reducer";
import modalReducer from "./modal/modal-reducer";

export default combineReducers({
    auth: authenticationReducer,
    post: postReducer,
    modal: modalReducer
});