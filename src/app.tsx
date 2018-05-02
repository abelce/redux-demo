import * as ReactDom from 'react-dom';
import * as React from 'react';
import  {createStore} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import './assets/style/index.scss'


const counter = (state = {count: 0}, action: any) => {
    const {count} = state;
    switch (action.type) {
        case 'increase':
            return {count: count + 1};
        default:
            return state;
    }
}

const store = createStore(counter);




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