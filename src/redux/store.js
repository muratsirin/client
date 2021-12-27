import {applyMiddleware, createStore, compose} from "redux";
import {combineReducers} from "redux";
import authenticationReducer from "./authentication/authentication-reducer";
import postReducer from "./post/post-reducer";
import thunk from "redux-thunk";
import modalReducer from "./modal/modal-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({auth: authenticationReducer, post: postReducer, modal: modalReducer});
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
