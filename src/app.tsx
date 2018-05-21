import * as ReactDom from 'react-dom';
import * as React from 'react';
import  {createStore} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import Reducer from './reducer';
import './assets/style/index.scss'

const store = createStore(Reducer);

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

render();