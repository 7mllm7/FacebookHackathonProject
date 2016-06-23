import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import createLogger from 'redux-logger';
import { Reducer } from 'react-native-router-flux';
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/'

const reducerCreate = params => {
  const defaultReducer = Reducer(params);

  return (state, action) => {
    return defaultReducer(state, action);
  }
};

// create store...
const sagaMiddleware = createSagaMiddleware();
const middlewares = [createLogger({
        collapsed: true,
        duration: true,
        timestamp: true
    }), sagaMiddleware ];


const store = compose(
  applyMiddleware(...middlewares)
)(createStore)(reducers);

sagaMiddleware.run(sagas);

export default store;