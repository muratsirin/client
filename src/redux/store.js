import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import authenticationReducer from "./authentication-reducer";

function createRootReducer(){
    return combineReducers({authenticationReducer});
}

const initState = {
    authentication:{
        currentUser: null,
        token: '',
        error: '',
        loading: false,
        isLoggedIn: false,
    }
};

function store(initialState = initState){
    let composeEnhancers = compose;
    const middlewares = [thunk];

    if (process.env.NODE_ENV === "development") {
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        }
    }

    const reduxStore = createStore(
        createRootReducer(),
        initialState,
        composeEnhancers(applyMiddleware(...middlewares)),
    );

    if (module.hot) {
        module.hot.accept('./authentication-reducer', () => {
            const nextReducer = require('./authentication-reducer').default;
            reduxStore.replaceReducer(nextReducer);
        });
    }

    return reduxStore;
}

export default store;