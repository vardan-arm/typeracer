import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

let _compose = compose;

if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    _compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const store = createStore(rootReducer, _compose(applyMiddleware(thunkMiddleware)));

export default store;