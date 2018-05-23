import * as ReactDom from 'react-dom';
import * as React from 'react';
import  {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import Reducer from './reducer';
import './assets/style/index.scss'

import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(Reducer, applyMiddleware(...middlewares));

const render = () => {
  return (
    ReactDom.render(
        <Provider store={store}>
          <BrowserRouter>
            <Routes/>            
          </BrowserRouter>
        </Provider>,
        document.getElementById('app')
    )
  )
}

sagaMiddleware.run(rootSaga);
render();