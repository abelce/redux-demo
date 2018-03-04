import ReactDom from 'react-dom';
import React from 'react';
import  {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/App';




const counter = (state = {count: 0}, action) => {
    const {count} = state;
    switch (action.type) {
        case 'increase':
            return {count: count + 1};
        default:
            return state;
    }
}

const store = createStore(counter);

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
);