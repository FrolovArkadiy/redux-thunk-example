import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { logger } from 'redux-logger'
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
// import configureStore from "./store/configureStore";

const store = createStore(
    rootReducer(),
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
