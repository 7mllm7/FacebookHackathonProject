import { combineReducers } from 'redux';
import routes from './routes';
import auth from './auth';
import runs from './runs';

export default combineReducers({
  routes,
  auth,
  runs
});