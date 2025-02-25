import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../reducers";

export default function configStore() {
    return createStore(rootReducer, applyMiddleware(thunk))
}