import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import createLogger from 'redux-logger';
import { Reducer } from 'react-native-router-flux';

const reducerCreate = params => {
  const defaultReducer = Reducer(params);

  return (state, action) => {
    return defaultReducer(state, action);
  }
};

// create store...
const middlewares = [createLogger({
        collapsed: true,
        duration: true,
        timestamp: true
    })];
const store = compose(
  applyMiddleware(...middlewares)
)(createStore)(reducers);

export default store;