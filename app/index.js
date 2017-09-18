import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {applyMiddleware, createStore} from "redux";
import reducers from "./ducks/root";
import createSagaMiddleware from 'redux-saga'
import mySaga from "./sagas/index";
import {logger} from "redux-logger";
import {initialRequest} from "./ducks/repos";
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
