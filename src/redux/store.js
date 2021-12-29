import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import Reducer from './reducer';
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['post', 'auth']
};

const persistedReducer = persistReducer(persistConfig, Reducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)) );
const persistor = persistStore(store);

export {store, persistor};
