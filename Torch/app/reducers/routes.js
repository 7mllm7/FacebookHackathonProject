import { createReducer } from 'reduxsauce';
import Types from '../actions/types';
const initialState = {
  scene: {}
};

const focusScene = (state, action) => ({...state, scene: action.scene });

const ACTION_HANDLERS = {
  [Types.ROUTE_FOCUS]: focusScene
}

export default createReducer(initialState, ACTION_HANDLERS)
