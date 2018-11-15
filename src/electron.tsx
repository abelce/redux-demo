import ReactDom from 'react-dom';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import './assets/style/index.scss';
import configureStore from './store';

import Routes from './routes/electron';

window.__CHUNK = 'app';

const store = configureStore();

const render = Component => {
  ReactDom.render(
    <Provider store={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    document.getElementById('app')
  );
};

render(Routes);
