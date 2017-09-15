import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {applyMiddleware, createStore} from "redux";
import reducers from "./ducks/root";
import createSagaMiddleware from 'redux-saga'
import mySaga from "./sagas/index";
import {logger} from "redux-logger";
import {initialRequest} from "./ducks/repos";

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducers, applyMiddleware(logger));

// sagaMiddleware.run(mySaga());

// store.dispatch(initialRequest('java'));

ReactDOM.render(
  <div>Hello</div>,
  document.getElementById('app')
);
