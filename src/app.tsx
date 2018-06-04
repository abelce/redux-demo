import * as ReactDom from 'react-dom';
import * as React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import './assets/style/index.scss'
import configureStore from './store';
import Modals from './components/common/modals';

const store = configureStore();
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