import  {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';

export default function configureStore(initialState?: any) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    reducer, 
    initialState,
    applyMiddleware(...middlewares)
  );
  
  sagaMiddleware.run(rootSaga);

  return store;
}