import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store';
import TestApp from "./TestApp";

const rootElement = document.getElementById('root');

/*
* There are many ways of passing the store to all components,
* the Provider class makes sure the same store gets send through
* to all child components of TestApp.
* The store can then be accessed through props
* */
ReactDOM.render(
    <Provider store={store}>
        <TestApp />
    </Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
