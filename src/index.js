// punto de entrada a la aplicación, archivo principal


import React from 'react';                    // analógo a createElement, para usar JSX SIEMPRE importar react
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';            // analógo a appendChild
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';


// ReactDOM.render (__qué__, __dónde__);
// ReactDOM.render siempre recibe un elemento por eso se usan </>
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
