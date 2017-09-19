import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {applyMiddleware, createStore} from "redux";
import reducers from "./ducks/root";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/index";
import {logger} from "redux-logger";
import { requestStarted } from "./ducks/battle";
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

store.dispatch(requestStarted('bobuk', 'umputun'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
